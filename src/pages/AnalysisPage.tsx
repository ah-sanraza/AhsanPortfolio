import { useEffect, useState, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import {ArrowDownRight,ArrowUpRight,Filter} from 'lucide-react';
import { motion} from 'motion/react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function AnalysisPage() {
  const [analyses, setAnalyses] = useState<any[]>([]);

  const [filter, setFilter] = useState<{
    asset: string | null;
    bias: string | null;
  }>({
    asset: null,
    bias: null,
  });

  useEffect(() => {
    async function fetchAnalyses() {
      const snapshot = await getDocs(collection(db, "analyses"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Latest date first
    const sortedData = data.sort((a:any, b:any) => {
      return new Date(b.datepub).getTime() - new Date(a.datepub).getTime();
    });
      setAnalyses(sortedData);
    }

    fetchAnalyses();
  }, []);


  const filteredAnalysis = useMemo(() => {
    return analyses.filter((t) => {
      if (filter.asset && t.asset !== filter.asset) return false;
      if (filter.bias && t.bias !== filter.bias) return false;
        return true;
    });
  }, [analyses, filter]);

 return (
  <><Navbar/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-10 py-24">
           <h2 className="text-5xl font-serif font-bold italic tracking-tight text-white mt-10">Market Research</h2>
           
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-text-s text-[12px] uppercase tracking-[0.1em] text-white">Structured Observation. Defined Bias. Measured Outcome</span>
          </div>
  <div className="flex flex-wrap gap-1 p-1 bg-white/[0.07] border border-white/[0.2] rounded-sm w-fit">
  <div className="flex items-center gap-4 px-6 py-3 border-r border-white/5">
    <Filter size={12} className="text-accent" />
    <select
      className="w-25 bg-transparent text-[10px] uppercase tracking-[0.2em] text-white outline-none cursor-pointer text-text-s hover:text-accent transition-colors"
      onChange={(e) =>
        setFilter((prev) => ({
          ...prev,
          asset: e.target.value || null,
        }))
      }
    >
      <option value="" style={{ color: "black" }}>
        Asset: ALL
      </option>
      <option value="crypto" style={{ color: "black" }}>
        Asset: CRYPTO
      </option>
      <option value="forex" style={{ color: "black" }}>
        Asset: FOREX
      </option>
      <option value="stocks" style={{ color: "black" }}>
        Asset: STOCKS
      </option>
      <option value="commodities" style={{ color: "black" }}>
        Asset: COMMODITIES
      </option>
    </select>
  </div>


  <div className="flex items-center gap-4 px-6 py-3">
    <Filter size={12} className="text-accent" />
    <select
      className="w-25 bg-transparent text-[10px] uppercase tracking-[0.2em] text-white outline-none cursor-pointer text-text-s hover:text-accent transition-colors"
      onChange={(e) =>
        setFilter((prev) => ({
          ...prev,
          bias: e.target.value || null,
        }))
      }
    >
      <option value="" style={{ color: "black" }}>
        Bias: ALL
      </option>

      <option value="bullish" style={{ color: "black" }}>
        Bullish
      </option>

      <option value="bearish" style={{ color: "black" }}>
        Bearish
      </option>

      <option value="neutral" style={{ color: "black" }}>
        Neutral
      </option>
    </select>
  </div>

</div>
      {filteredAnalysis.map((analysis) => (
        <motion.div 
          key={analysis.id} 
          className="terminal-panel grid grid-cols-1 xl:grid-cols-12 overflow-hidden group transition-all duration-500 hover:border-accent/30">
          <div className="xl:col-span-12 aspect-video xl:aspect-auto relative overflow-hidden bg-muted"><Link
  to={`/analysis/${analysis.slug}`}
  target="_blank"
  rel="noopener noreferrer"
>
            <img src={analysis.imageurl} alt={analysis.pair}  loading="lazy" className="object-cover w-full h-full blur-[5px] hover:blur-10 group-hover:grayscale-[0.2] transition-all duration-1000 scale-100 group-hover:scale-98" referrerPolicy="no-referrer" />
            </Link>
            {/* Heatmap Overlay effect */}
            <div className="absolute inset-0 from-bg/90 selection:to-transparent pointer-events-none opacity-40 group-hover:opacity-10 transition-opacity" />
            
            <div className="absolute top-3 right-4 flex gap-3">
             <span
  className={`px-4 py-2 text-[10px] font-black uppercase tracking-wide border backdrop-blur-md inline-flex items-center gap-1 ${
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
             <div className="flex justify-between items-start">
               <div>
                 <h3 className="font-serif text-3xl font-bold  text-white">{analysis.pair}
                  {analysis.date && (
          <>
  <span className="text-[18px] font-mono text-text uppercase tracking-widest">
        {analysis.tf}
      </span>
    </>
  )}</h3>
                <div className="flex items-center gap-3">
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
               <div className="flex flex-col items-end">
                  <div className={`w-2 h-2 rounded-full mb-2 ${analysis.status === 'Completed' ? 'bg-data-white/80' : 'bg-data-blue/80 animate-pulse shadow-[0_0_8px_rgba(199,167,106,0.6)]'}`} />
                  <span className="text-[8px] font-mono text-text-s uppercase tracking-widest">{analysis.status}</span>
               </div>
             </div>
                 <div className="grid grid-cols-1 gap-2">                 
  <div className="space-y-2">
                  <div className="text-1xl text-red-400 italic leading-[1.2] font-bold tracking-tight">{analysis.disclaimer}</div>
                </div>
             </div>
          </div>
        </motion.div>
          ))}
    </div>
    <Footer/>
    </>
  );
}