export default async function handler(req: any, res: any) {
  try {
    const imageUrl = req.query.url;

    if (!imageUrl || typeof imageUrl !== "string") {
      return res.status(400).json({
        error: "Missing image URL",
      });
    }

    const match = imageUrl.match(/\/x\/([^/?#]+)\/?/);

    if (!match) {
      return res.status(400).json({
        error: "Invalid TradingView URL",
      });
    }

    const snapshotId = match[1];

    const firstChar = snapshotId.charAt(0);

    const actualImageUrl =
      `https://s3.tradingview.com/snapshots/${firstChar}/${snapshotId}.png`;

    const response = await fetch(actualImageUrl);

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Unable to fetch TradingView image",
      });
    }

    const imageBuffer = Buffer.from(await response.arrayBuffer());

    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Cache-Control",
      "public, max-age=86400, s-maxage=86400"
    );

    return res.status(200).send(imageBuffer);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "OG image proxy failed",
    });
  }
}
