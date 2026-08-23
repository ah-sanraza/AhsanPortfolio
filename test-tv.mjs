const response = await fetch("https://www.tradingview.com/x/3pZTfxP8/", {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36",
  },
});

console.log("STATUS:", response.status);
console.log("TYPE:", response.headers.get("content-type"));

const text = await response.text();

console.log("LENGTH:", text.length);
console.log(text.slice(0, 1000));
