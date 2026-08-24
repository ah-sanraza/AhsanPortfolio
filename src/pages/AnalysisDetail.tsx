import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import {ArrowDownRight,ArrowUpRight,} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AnalysisPage() {
  const [analyses, setAnalyses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {

  async function fetchAnalyses() {

    const slug = window.location.pathname.split("/").pop();

    const q = query(
  collection(db, "analyses"),
  where("slug", "==", slug)
);

const snapshot = await getDocs(q);

// Get published outcomes
const outcomesSnapshot = await getDocs(
  collection(db, "outcome")
);

const publishedOutcomeSlugs = new Set(
  outcomesSnapshot.docs
    .map((doc) => doc.data().slug)
    .filter(Boolean)
);

const data = snapshot.docs.map((doc) => {
  const analysis: any = {
    id: doc.id,
    ...doc.data(),
  };

  return {
    ...analysis,
    hasPublishedOutcome: publishedOutcomeSlugs.has(analysis.outcomeSlug),
  };
});

setAnalyses(data);
    setLoading(false);
  }


  fetchAnalyses();

}, []);

  return (
    <>
        <Helmet>
  <title>
    Crypto Market Analysis | Ahsan Raza
  </title>

  <meta
    name="description"
    content="Latest crypto market analysis, BTCUSD technical research, trading insights and market structure analysis by Ahsan Raza."
  />

  <meta
    property="og:title"
    content="Crypto Market Analysis | Ahsan Raza"
  />

  <meta
    property="og:description"
    content="Technical crypto analysis and market research archive."
  />

  <link
    rel="canonical"
    href="https://www.ahsanraza.site/analyses"
  />
</Helmet>
    <Navbar/>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 py-24">
      {analyses.map((analysis) => (
        <motion.div 
          key={analysis.id} 
          className="terminal-panel grid grid-cols-1 xl:grid-cols-12 overflow-hidden group transition-all duration-500 hover:border-accent/30">
          <div className="xl:col-span-12 aspect-video xl:aspect-auto relative overflow-hidden bg-muted"><a
  href={analysis.imageurl}
  target="_blank"
  rel="noopener noreferrer"
>
            <img src={analysis.imageurl} alt={analysis.pair} className="object-cover w-full h-full group-hover:grayscale-[0.2] transition-all duration-1000 scale-100 group-hover:scale-98" referrerPolicy="no-referrer" />
            </a>
            {/* Heatmap Overlay effect */}
            <div className="absolute inset-0 from-bg/90 selection:to-transparent pointer-events-none opacity-40 group-hover:opacity-10 transition-opacity" />
            
            <div className="absolute top-3 right-4 flex gap-3">
             <span
  className={`px-4 py-2 text-[10px] font-black uppercase tracking-wide border backdrop-blur-md inline-flex analysiss-center gap-1 ${
    analysis.bias === 'bullish'
      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
      : analysis.bias === 'bearish'
      ? 'bg-red-500/10 border-red-500/40 text-red-400'
      : 'bg-white/10 border-white/30 text-text-s'
  }`}
>
  {analysis.bias === 'bullish' && (
    <ArrowUpRight size={14} className="opacity-80" />
  )}

  {analysis.bias === 'bearish' && (
    <ArrowDownRight size={14} className="opacity-80" />
  )}

  {analysis.bias}
</span>
            </div>
          </div>

          <div className="xl:col-span-12 p-10 flex flex-col gap-8 bg-gradient-to-br from-panel/60 to-transparent">
             <div className="flex justify-between analysiss-start">
               <div>
                 <h3 className="font-serif text-3xl font-bold  text-white">{analysis.pair}
                  {analysis.date && (
          <>
  <span className="text-[18px] font-mono text-text uppercase tracking-widest">
        {analysis.tf}
      </span>
    </>
  )}</h3>
                <div className="flex analysiss-center gap-3">
  <span className="text-[12px] text-accent font-black tracking-widest uppercase">
    {analysis.asset}
  </span>

  {analysis.date && (
    <>
      <div className="w-1 h-1 bg-white/30 rounded-full" />
      <span className="text-[12px] font-mono text-text-s uppercase tracking-widest">
        {analysis.date}
      </span>
    </>
  )}
  
</div>
        </div>
               <div className="flex flex-col analysiss-end">
                  <div className={`w-2 h-2 rounded-full mb-2 ${analysis.status === 'Completed' ? 'bg-data-white/80' : 'bg-data-blue/80 animate-pulse shadow-[0_0_8px_rgba(199,167,106,0.6)]'}`} />
                  <span className="text-[8px] font-mono text-text-s uppercase tracking-widest">{analysis.status}</span>
               </div>
             </div>
             
             <div className="grid grid-cols-2 gap-10 py-1">
              <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-text-s font-black">Market Conditions</div>
                  <div className="font-mono text-1xl font-bold text-white leading-none tracking-tight">{analysis.conditions}</div>
                </div> 
                </div>
              <div className="space-y-2">
                  <div className="text-2xl text-white leading-[1.2] font-bold tracking-tight">{analysis.title}</div>
                </div>
                 <div className="grid grid-cols-1 gap-2">
                  <div className="text-1xl text-white leading-[1.2] tracking-tight">{analysis.description
  ? analysis.description
      .split("\n")
      .map((line: string, i: number) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))
  : null}</div>
  <div className="space-y-2">
                  <div className="text-1xl text-red-400 italic leading-[1.2] font-bold tracking-tight">{analysis.disclaimer}</div>
                </div>
             </div>
{analysis.hasPublishedOutcome && (
  <button className="flex items-center justify-between group/link w-full text-left pt-2">
    <div className="flex items-center gap-3">
      <div className="w-6 h-0.5 bg-accent/20 transition-all duration-500 group-hover/link:w-12 group-hover/link:bg-accent/60" />

      <Link
        to={`/outcome/${analysis.outcomeSlug}`}
        className="text-[10px] uppercase tracking-[0.2em] font-black text-text-s group-hover/link:text-accent transition-colors"
      >
        View Outcome
      </Link>
    </div>

    <Link
      to={`/outcome/${analysis.outcomeSlug}`}
      className="text-[10px] uppercase tracking-[0.2em] font-black text-text-s group-hover/link:text-accent transition-colors"
    >
      <ArrowUpRight
        size={14}
        className="text-text-s group-hover/link:text-accent transition-all duration-500"
      />
    </Link>
  </button>
)}

          </div>
        </motion.div>
          ))}
    </div>
    <Footer/>
    </>
  );
}