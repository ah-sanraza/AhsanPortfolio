export default async function handler(req: any, res: any) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).send("Missing TradingView ID");
    }

    const imageUrl = `https://s3.tradingview.com/snapshots/3/${id}.png`;

    const response = await fetch(imageUrl);

    if (!response.ok) {
      return res.status(response.status).send("Chart image not found");
    }

    const image = Buffer.from(await response.arrayBuffer());

    res.setHeader("Content-Type", "image/png");

    res.setHeader(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );

    return res.status(200).send(image);
  } catch (error) {
    console.error(error);

    return res.status(500).send("Failed to fetch chart");
  }
}