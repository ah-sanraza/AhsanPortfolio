import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const SITE_URL = "https://www.ahsanraza.site";

function getDB() {
  if (getApps().length === 0) {
    const serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
    );

    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return getFirestore();
}

export default async function handler(req: any, res: any) {
  try {
    const db = getDB();

    // Get both collections
    const [analysesSnapshot, outcomesSnapshot] = await Promise.all([
      db.collection("analyses").get(),
      db.collection("outcomes").get(),
    ]);

    const urls: string[] = [
      `
      <url>
        <loc>${SITE_URL}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      `,
      `
      <url>
        <loc>${SITE_URL}/analyses</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
      `,
      `
      <url>
        <loc>${SITE_URL}/outcomes</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
      `,
    ];

    // =========================
    // ANALYSIS URLs
    // =========================

    analysesSnapshot.forEach((doc) => {
      const data = doc.data();

      if (!data.slug) return;

      const slug = encodeURIComponent(data.slug);

      urls.push(`
        <url>
          <loc>${SITE_URL}/analysis/${slug}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `);
    });

    // =========================
    // OUTCOME URLs
    // =========================

    outcomesSnapshot.forEach((doc) => {
      const data = doc.data();

      if (!data.slug) return;

      const slug = encodeURIComponent(data.slug);

      urls.push(`
        <url>
          <loc>${SITE_URL}/outcome/${slug}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `);
    });

    // =========================
    // FINAL SITEMAP
    // =========================

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

    res.setHeader("Content-Type", "application/xml");

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    return res.status(200).send(sitemap);

  } catch (error) {
    console.error("Sitemap error:", error);

    return res.status(500).send("Sitemap generation failed");
  }
}
