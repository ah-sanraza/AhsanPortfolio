import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const firebaseConfig = {
  apiKey: "AIzaSyAUFoBkx8GMXxwvKHoyBm1pNQjyfUaH0Jo",
  authDomain: "ahsanrazaportfolio.firebaseapp.com",
  projectId: "ahsanrazaportfolio",
  storageBucket: "ahsanrazaportfolio.firebasestorage.app",
  messagingSenderId: "759178628521",
  appId: "1:759178628521:web:7f70aa1f4af69ce9bd88b8",
  measurementId: "G-KBVW1QMSF8"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Vite preview URL
const BASE_URL = "http://localhost:4173";


// dist folder
const DIST_DIR = path.resolve(__dirname, "../dist");
async function savePage(browser, route) {
  console.log("Rendering:", route);

  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(60000);

  await page.goto(`${BASE_URL}${route}`, {
    waitUntil: "networkidle2",
    timeout: 60000
  });

  // Wait for Firebase + React content
  try {
    await page.waitForFunction(
      () => {
        const bodyText = document.body?.innerText || "";

        return (
          bodyText.length > 100 &&
          !bodyText.toLowerCase().includes("loading...")
        );
      },
      {
        timeout: 30000
      }
    );
  } catch {
    console.log(
      "Content wait timeout, saving current HTML:",
      route
    );
  }

  // IMPORTANT:
  // Give react-helmet-async time to update <head>
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Debug: check what Helmet actually generated
  const metaDebug = await page.evaluate(() => ({
    title: document.title,

    ogImage: document.querySelector(
      'meta[property="og:image"]'
    )?.getAttribute("content"),

    twitterImage: document.querySelector(
      'meta[name="twitter:image"]'
    )?.getAttribute("content"),

    ogTitle: document.querySelector(
      'meta[property="og:title"]'
    )?.getAttribute("content"),

    twitterCard: document.querySelector(
      'meta[name="twitter:card"]'
    )?.getAttribute("content")
  }));

  console.log("META:", route, metaDebug);

  const html = await page.content();

  const folder = path.join(
    DIST_DIR,
    route === "/"
      ? ""
      : route
  );

  fs.mkdirSync(folder, {
    recursive: true
  });

  fs.writeFileSync(
    path.join(folder, "index.html"),
    html
  );

  await page.close();
}

// Fetch routes from Firebase
async function getRoutes(){


  const routes = [
    "/",
    "/analyses",
    "/outcomes"
  ];


  // analyses
  const analysisSnap = await getDocs(
    collection(db,"analyses")
  );


  analysisSnap.forEach(doc=>{

    const data = doc.data();

    if(data.slug){

      routes.push(
        `/analysis/${data.slug}`
      );

    }

  });



  // outcomes
  const outcomeSnap = await getDocs(
    collection(db,"outcome")
  );
  console.log(
  "Total outcomes:",
  outcomeSnap.size
);
  outcomeSnap.forEach(doc=>{
      console.log(
    "Outcome:",
    doc.id,
    doc.data()
  );

    const data = doc.data();

    if(data.slug){

      routes.push(
        `/outcome/${data.slug}`
      );

    }

  });



  return routes;

}



// Main
async function main(){


  console.log(
    "Starting prerender..."
  );


  const routes = await getRoutes();


  console.log(
    "Routes found:",
    routes.length
  );


  const browser = await puppeteer.launch({
  headless: true,
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox"
  ]
});



  for(const route of routes){

    try{

      await savePage(
        browser,
        route
      );

    }catch(error){

      console.error(
        "Failed:",
        route,
        error.message
      );

    }

  }



  await browser.close();


  console.log(
    "Prerender completed"
  );

}


main();