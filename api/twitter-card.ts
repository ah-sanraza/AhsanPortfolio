import type { VercelRequest, VercelResponse } from "@vercel/node";

const PROJECT_ID = "ahsanrazaportfolio";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTradingViewImage(imageurl: string): string {
  if (!imageurl) return "";

  // Already an S3 TradingView image
  if (imageurl.includes("s3.tradingview.com/snapshots/")) {
    return imageurl;
  }

  // Example:
  // https://www.tradingview.com/x/cDJvBDLZ/
  //
  // becomes:
  // https://s3.tradingview.com/snapshots/c/cDJvBDLZ.png

  const match = imageurl.match(/\/x\/([^/?#]+)/);

  if (match?.[1]) {
    const snapshotId = match[1];

    return `https://s3.tradingview.com/snapshots/${snapshotId.charAt(
      0
    )}/${snapshotId}.png`;
  }

  return imageurl;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const slug = String(req.query.slug || "").trim();

    if (!slug) {
      return res.status(400).send("Missing slug");
    }

    /*
     * Firestore REST API
     *
     * Your Firestore rules allow public reads,
     * so no Firebase Admin SDK is required here.
     */
    const firestoreUrl =
      `https://firestore.googleapis.com/v1/projects/` +
      `${PROJECT_ID}/databases/(default)/documents:runQuery`;

    const response = await fetch(firestoreUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        structuredQuery: {
          from: [
            {
              collectionId: "analyses",
            },
          ],
          where: {
            fieldFilter: {
              field: {
                fieldPath: "slug",
              },
              op: "EQUAL",
              value: {
                stringValue: slug,
              },
            },
          },
          limit: 1,
        },
      }),
    });

    if (!response.ok) {
      console.error(
        "Firestore error:",
        await response.text()
      );

      return res.status(500).send("Firestore request failed");
    }

    const results = await response.json();

    const document = results?.find(
      (item: any) => item.document
    )?.document;

    if (!document) {
      return res.status(404).send("Analysis not found");
    }

    /*
     * Firestore REST represents fields like:
     *
     * fields.title.stringValue
     * fields.imageurl.stringValue
     * fields.slug.stringValue
     */
    const fields = document.fields || {};

    const title =
      fields.title?.stringValue ||
      fields.pair?.stringValue ||
      "Ahsan Raza";

    const imageurl =
      fields.imageurl?.stringValue || "";

    const imageUrl = getTradingViewImage(imageurl);

    if (!imageUrl) {
      return res.status(404).send("Analysis image not found");
    }

    const finalUrl =
      `https://ahsanraza.site/analysis/${encodeURIComponent(slug)}`;

    const safeTitle = escapeHtml(title);
    const safeImage = escapeHtml(imageUrl);
    const safeUrl = escapeHtml(finalUrl);

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <title>${safeTitle} | Ahsan Raza</title>

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:image" content="${safeImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="${safeUrl}">

  <!-- X / Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:image" content="${safeImage}">

  <!-- Redirect normal visitors -->
  <meta
    http-equiv="refresh"
    content="0;url=${safeUrl}"
  >

  <script>
    window.location.replace(${JSON.stringify(finalUrl)});
  </script>
</head>

<body>
  <p>Redirecting...</p>
</body>
</html>`;

    res.setHeader(
      "Content-Type",
      "text/html; charset=utf-8"
    );

    res.setHeader(
      "Cache-Control",
      "public, max-age=60, s-maxage=60"
    );

    return res.status(200).send(html);
  } catch (error) {
    console.error("Twitter card error:", error);

    return res
      .status(500)
      .send("Unable to generate social preview");
  }
}