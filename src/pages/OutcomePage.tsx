import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Filter, ArrowRight , ArrowUpRight} from "lucide-react";
import { motion } from "motion/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function OutcomePage() {

 const [outcomes, setOutcomes] = useState<any[]>([]);
 const [filter, setFilter] = useState<{
  asset: string | null;
  result: string | null;
}>({
  asset: null,
  result: null
});


  useEffect(()=>{

    async function fetchOutcomes(){

      const snapshot = await getDocs(
        collection(db,"outcome")
      );

      const data = snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }));

      // Latest date first
    const sortedData = data.sort((a:any, b:any) => {
      return new Date(b.datepub).getTime() - new Date(a.datepub).getTime();
    });
      setOutcomes(sortedData);

    }

    fetchOutcomes();

  },[]);



  const filteredOutcomes = useMemo(()=>{

    return outcomes.filter(item=>{

      if(filter.asset && item.asset !== filter.asset)
        return false;


      if(filter.result && item.result !== filter.result)
        return false;


      return true;

    });


  },[outcomes,filter]);



  return (
   <> <Navbar/>
    <section id="execution" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/25 relative">
     

      <div className="flex flex-col lg:flex-row items-baseline justify-between mb-24 gap-12">
        <div>
          <h2 className="text-5xl font-serif font-bold italic mb-6 tracking-tight text-white">Outcome Validation</h2>
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-text-s text-[12px] uppercase tracking-[0.1em] text-white">post publication validation of market behavior against the original research.</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 p-1 bg-white/[0.07] border border-white/[0.2] rounded-sm">
           <div className="flex items-center gap-4 px-6 py-3 border-r border-white/5">
             <Filter size={12} className="text-accent" />
             <select 
               className="bg-transparent text-[10px] uppercase tracking-[0.2em] text-white outline-none cursor-pointer text-text-s hover:text-accent transition-colors"
               onChange={(e) => setFilter(prev => ({ ...prev, asset: e.target.value || null }))}
             >
               <option value="" style={{ color: 'black' }}>Asset: ALL</option>
               <option value="crypto" style={{ color: 'black' }}>Asset: CRYPTO</option>
               <option value="forex" style={{ color: 'black' }}>Asset: FOREX</option>
               <option value="commodities" style={{ color: 'black' }}>Asset: COMMODITIES</option>
               <option value="stocks" style={{ color: 'black' }}>Asset: STOCKS</option>
             </select>
           </div>
           
           <div className="flex items-center gap-4 px-6 py-3">
              <Filter size={12} className="text-accent" />
              <select 
               className="bg-transparent text-[10px] uppercase tracking-[0.2em] text-white outline-none cursor-pointer text-text-s hover:text-accent transition-colors"
               onChange={(e) => setFilter(prev => ({ ...prev, result: e.target.value || null }))}
             >
               <option value="" style={{ color: 'black' }}>Status: ALL</option>
               <option value="VALIDATED" style={{ color: 'black' }}>Status: Validated</option>
               <option value="INVALIDATED" style={{ color: 'black' }}>Status: Invalidated</option>
               <option value="NEUTRAL" style={{ color: 'black' }}>Status: Neutral</option>
             </select>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {filteredOutcomes.map((Analysis) => (
          <motion.div 
            whileHover={{ scale: 1.005 }}
            layout 
            className="terminal-panel p-0 grid grid-cols-1 xl:grid-cols-12 overflow-hidden hover:border-accent/40 transition-all duration-700 shadow-accent/5"
          >
            {/* Split Images Section */}
            <div className="xl:col-span-12 grid grid-cols-1 md:grid-cols-2 relative group-images">
              <div className="relative overflow-hidden aspect-video xl:aspect-auto border-2 border-black">
                <div className="absolute inset-0 bg-accent/[0.03] z-10 pointer-events-none" />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3 py-1 bg-black/60 border border-white/5 text-[10px] font-mono text-white/80 uppercase tracking-widest">Initial Thesis [Market Structure]</span>
                </div>
                <a href={Analysis.beforeImage} target="_blank" rel="noopener noreferrer">
                  <img src={Analysis.beforeImage} alt={`Market Structure`} className="object-cover w-full h-full transition-all duration-1000" referrerPolicy="no-referrer"/>
                </a>
              </div>
              <div className="relative overflow-hidden aspect-video xl:aspect-auto border-2 border-black">
                <div className="absolute top-6 right-6 z-20">
                  <div className={`px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] shadow-2xl border ${
                    Analysis.result === 'VALIDATED' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' : 
                    Analysis.result === 'INVALIDATED' ? 'bg-red-500/10 border-red-500/50 text-red-400' : 'bg-white/10 border-white/20 text-white'
                  }`}>
                    Result: {Analysis.result}
                  </div>
                </div>
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3 py-1 bg-black/60 border border-white/5 text-[10px] font-mono text-white/80 uppercase tracking-widest">Outcome  [market response]</span>
                </div>
                <a href={Analysis.afterImage} target="_blank" rel="noopener noreferrer">
                <img src={Analysis.afterImage} alt={`Market Response`} className="object-cover w-full h-full transition-all duration-1000" referrerPolicy="no-referrer" />
              </a>
              </div>
            </div>
            <div className="xl:col-span-12 p-10 flex flex-col justify-between border-t xl:border-t-0 xl:border-l border-white/[0.05] bg-gradient-to-br from-panel/40 to-transparent">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    {/* <div className="text-[7px] font-mono text-white/30 uppercase tracking-[.4em] mb-1">{Analysis.id}</div> */}
                    <h3 className="text-4xl font-serif font-bold tracking-tight mb-2 text-white">{Analysis.pair}{Analysis.date && (
          <>
  <span className="text-[18px] font-mono text-text uppercase tracking-widest">
        {Analysis.tf}
      </span>
    </>
  )}</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-[12px] font-black">
                       {Analysis.datepub}
                      </span>
                      <div className="w-1 h-3 bg-white/5" />
                      <span className="text-[12px] text-text-s uppercase font-bold leading-none">{Analysis.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-10 mb-12">
                  <div className="space-y-3">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-text-s font-black">Initial Thesis</div>
                    <div className="text-1xl text-white leading-[1.2] tracking-tight">{Analysis.initialForecast}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-text-s font-black">Observed Delivery</div>
                    <div className="text-1xl text-white leading-[1.2] tracking-tight">{Analysis.observedOutcome}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-text-s font-black">Validation Status</div>
                    <div className="text-1xl text-white leading-[1.2] tracking-tight">{Analysis.validationStatus}</div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-text-s font-black">Reaction Magnitude</div>
                    <div className="text-1xl text-white leading-[1.2] tracking-tight">{Analysis.reactionMagnitude}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="w-full h-px bg-accent" />
                  <div className="text-1xl text-white leading-[1.2] tracking-tight">{Analysis.description}</div>
                 
             </div>
              <button className="flex items-center justify-between group/link w-full text-left pt-6">
                <div className="flex items-center gap-3">
                   <div className="w-6 h-0.5 bg-accent/20 transition-all duration-500 group-hover/link:w-12 group-hover/link:bg-accent/60" />
                   <Link to={`/analysis/${Analysis.analysisSlug}`} className="text-[10px] uppercase tracking-[0.2em] font-black text-text-s group-hover/link:text-accent transition-colors">View Analysis</Link>
                </div>
                <Link to={`/analysis/${Analysis.analysisSlug}`} className="text-[10px] uppercase tracking-[0.2em] font-black text-text-s group-hover/link:text-accent transition-colors"><ArrowUpRight size={14} className="text-text-s group-hover/link:text-accent transition-all duration-500" /></Link>
             </button>
            </div>
          </motion.div>
        ))}
      </div>
       <p className="text-xs uppercase tracking-[0.2em] text-white/80 pt-10">
          Historical Research Archive
        </p>
        <div className="flex flex-col sm:flex-row gap-10 pt-3">
        <a 
          href="https://x.com/ah_sanraza" 
          className="group relative px-8 py-4 bg-panel border border-white/10 hover:border-accent/60 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
          <div className="flex items-center gap-2 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">View Full Archive</span>
            <ArrowRight size={14} className="text-accent group-hover:translate-x-2 transition-transform duration-500" />
          </div>
        </a>
      </div>
    </section>
 <Footer/>
 </>
);
}