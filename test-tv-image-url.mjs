const response = await fetch("https://www.tradingview.com/x/3pZTfxP8/", {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36",
  },
});

const html = await response.text();

const matches = html.match(/https?:\/\/[^"'\\\s]+/g) || [];

const imageUrls = matches.filter((url) =>
  /\.(png|jpg|jpeg|webp)(\?|$)/i.test(url)
);

console.log("IMAGE URLS:");
console.log(imageUrls);
const response = await fetch("https://www.tradingview.com/x/3pZTfxP8/", {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36",
  },
});

console.log("STATUS:", response.status);
console.log("TYPE:", response.headers.get("content-type"));

const html = await response.text();

console.log("HTML LENGTH:", html.length);

const matches =
  html.match(/https?:\/\/[^"'\\\s]+/g) || [];

const imageUrls = matches.filter((url) =>
  /\.(png|jpg|jpeg|webp)(\?|$)/i.test(url)
);

console.log("IMAGE URLS:");
console.log(imageUrls);