import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const {
    image,
    title = "Ahsan Raza",
    description = "",
    type = "research",
    url = "https://ahsanraza.site/",
  } = req.query;

  if (!image) {
    return res.status(400).send("Missing image");
  }

  const imageUrl = String(image);
  const postTitle = String(title);
  const postDescription = String(description);
  const postType = String(type);
  const postUrl = String(url);

  const html = `
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">

<title>${postTitle}</title>

<meta name="description" content="${postDescription}">

<meta property="og:type" content="article">
<meta property="og:title" content="${postType.toUpperCase()} — ${postTitle}">
<meta property="og:description" content="${postDescription}">
<meta property="og:image" content="${imageUrl}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="${postUrl}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${postType.toUpperCase()} — ${postTitle}">
<meta name="twitter:description" content="${postDescription}">
<meta name="twitter:image" content="${imageUrl}">

<meta http-equiv="refresh" content="0;url=${postUrl}">

</head>

<body>

<p>Redirecting...</p>

</body>
</html>
`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  return res.status(200).send(html);
}