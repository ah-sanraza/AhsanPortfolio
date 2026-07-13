import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../firebase";
import {
  TrendingDown,
  TrendingUp,
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  Filter,
  Info,
  Mail,
  Twitter,
  Instagram,
  ChevronDown,
  Activity,
  BarChart3,
  Globe,
  Lock,
  Cpu,
  History,
  Zap,
  Terminal as TerminalIcon,
  ShieldCheck,
  Menu,
  X,
  Binary } from 'lucide-react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { INSIGHTS } from './data';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return(
  <nav className="fixed top-0 left-0 right-0 z-[60] border-b border-white/[0.03] bg-bg/95 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
       {/* Mobile Toggle Button */}
    <div className="flex items-center gap-4">

  <div className="relative">
  </div>

  <button
    onClick={() => setOpen(!open)}
    className="md:hidden text-white"
  >
    {open ? <X size={20} /> : <Menu size={20} />}
  </button>

</div>
      <div className="flex items-center gap-4">
        <div className="relative">
        </div>
      </div>
      <div className="hidden md:flex items-center gap-12 text-[9px] uppercase tracking-[0.25em] font-black text-text-s/70">
         <Link to="/" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
          Overview
        </Link>
        <Link to="/analyses" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
          Market Research
        </Link>
        <Link to="/outcomes" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
          Outcomes
        </Link>
        <HashLink smooth to="/#insights" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
          Insights
        </HashLink>
        <HashLink smooth to="/#researchphilosophy" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
         Philosophy 
        </HashLink>
         <HashLink smooth to="/#about" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
         Profile 
        </HashLink>
      </div>
  {open && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-bg border-t border-white/10 flex flex-col items-start px-6 py-6 gap-6 z-50">
    
{[
  { path: "/", label: "Overview", type: "page" },
  { path: "/analyses", label: "Market Research", type: "page" },
  { path: "/outcomes", label: "Outcomes", type: "page" },
  { path: "/#insights", label: "Insights", type: "hash" },
  { path: "/#researchphilosophy", label: "Philosophy", type: "hash" },
  { path: "/#about", label: "Profile", type: "hash" },
].map((item)=>(
  
  item.type === "page" ? (
    <Link
      key={item.path}
      to={item.path}
      onClick={()=>setOpen(false)}
      className="text-sm uppercase tracking-widest text-white/80 hover:text-accent transition"
    >
      {item.label}
    </Link>
  ) : (
    <HashLink
      key={item.path}
      smooth
      to={item.path}
      onClick={()=>setOpen(false)}
      className="text-sm uppercase tracking-widest text-white/80 hover:text-accent transition"
    >
      {item.label}
    </HashLink>
  )

))}
  </div>
)}
      <a onClick={(e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
        href="#contact" 
        className="text-[9px] uppercase tracking-[0.3em] font-black text-accent bg-accent/5 border border-accent/30 px-6 py-2.5 hover:bg-accent hover:text-bg transition-all duration-500 relative group overflow-hidden"
      >
        <span className="relative z-10">Connect</span>
        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </a>
    </div>
  </nav>
)};

const Hero = () => (
  <section className="relative pt-48 pb-24 px-6 overflow-hidden min-h-[95vh] flex flex-col items-center justify-center">
    {/* Institutional Layers */}
    <div className="absolute inset-0 grid-bg opacity-40 -z-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-accent/[0.03] rounded-full blur-[150px] -z-20 pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-bg to-transparent pointer-events-none -z-10" />
    
    {/* Subtle Wave Animation */}
    <div className="absolute bottom-40 left-0 right-0 h-1 hidden lg:block opacity-20 -z-10">
      <div className="w-full h-full flex items-center justify-around">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: [8, 44, 8] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
            className="w-0.5 bg-data-white"
          />
        ))}
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-5xl mx-auto text-center relative"
    >
      
      
      <h1 className="text-7xl md:text-[10rem] font-serif font-bold mb-4 tracking-[-0.04em] text-white leading-none selection:text-bg selection:bg-accent group">
        <span className="inline-block hover:translate-x-2 transition-transform duration-700">Ahsan Raza</span>
      </h1>
      <div className="mb-10 flex flex-col items-center gap-4">
        <span className="text-accent text-[16px] font-serif font-bold uppercase tracking-[0.6em] ml-1">
         Independent Technical Analyst
        </span>
      </div>
      <div className="mt-8 mb-16 space-y-4">
       <p className="text-2xl md:text-4xl text-text-s/80 font-serif italic tracking-tight flex items-center justify-center gap-3">
          <span>Liquidity</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent/70 shadow-[0_0_10px_rgba(0,0,0,0.3)]" />
          <span>Structure</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent/70 shadow-[0_0_10px_rgba(199,167,106,0.3)]" />
          <span>Flow</span>
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
      </div>
    </motion.div>

    <div className="absolute bottom-10 right-1/2 translate-x-1/2 flex flex-col items-center gap-4 text-text-s/30 transform group cursor-pointer hover:text-accent transition-colors">
       <div className="w-px h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-100, 100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-accent w-full"
          />
       </div>
       <span className="text-[14px] text-text-s/90 font-bold uppercase">Publishing structured market research with post analysis validation</span>
    </div>
  </section>
);

const SpecializationBar = () => {
    const [stats, setStats] = useState({
    publishedAnalysis:0,
    validated: 0,
    invalidated: 0,
    neutral: 0,
    pending: 0,
    validationAccuracy: "0%",
    averageReactionRange: "0",
  });

  useEffect(() => {
  async function fetchStats() {
    const analysisSnapshot = await getDocs(collection(db, "analyses"));
    const outcomeSnapshot = await getDocs(collection(db, "outcome"));

    const analyses = analysisSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const outcomes = outcomeSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    const validated = outcomes.filter(
      (item: any) => item.validationStatus === "VALIDATED"
    ).length;

    const invalidated = outcomes.filter(
      (item: any) => item.validationStatus === "INVALIDATED"
    ).length;

    const neutral = outcomes.filter(
      (item: any) => item.validationStatus === "NEUTRAL"
    ).length;

    const pending = analyses.length - outcomes.length;

    const validationAccuracy =
      outcomes.length > 0
        ? ((validated / outcomes.length) * 100).toFixed(1) + "%"
        : "0%";

    let totalReaction = 0;
    let reactionCount = 0;

    outcomes.forEach((item: any) => {
      const match = item.reactionMagnitude?.match(/(\d+(\.\d+)?)/);

      if (match) {
        totalReaction += Number(match[1]);
        reactionCount++;
      }
    });

    const averageReactionRange =
      reactionCount > 0
        ? (totalReaction / reactionCount).toFixed(1)
        : "0";

    setStats({
      publishedAnalysis: analyses.length,
      validated,
      invalidated,
      neutral,
      pending,
      validationAccuracy,
      averageReactionRange,
    });
  }

  fetchStats();
}, []);

  return (
  <section className="px-6 -mt-20 relative z-20 pt-30 p-30">
    <div className="max-w-5xl mx-auto">
  <div className="terminal-panel p-10 md:p-14 w-full bg-panel/60 backdrop-blur-xl border border-accent/20 relative overflow-hidden">
    
    {/* subtle glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] to-transparent pointer-events-none" />

    {/* header */}
    <div className="flex items-center justify-between mb-10 relative z-10">
      <span className="text-[11px] md:text-[12px] uppercase font-semibold tracking-[0.5em] text-white">
        Analytical Performance
      </span>
    </div>

    {/* main stats */}
    <div className="grid md:grid-cols-2 gap-10 relative z-10">

      {/* big primary stat */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-white/80">
          Published Research
        </p>
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          {stats.publishedAnalysis}
        </h2>
        
      </div>

      {/* secondary stats */}
      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-xl">
          <p className="text-[11px] uppercase tracking-widest text-white/80 mb-2">
            Validated
          </p>
          <p className="text-2xl font-semibold text-emerald-400">
            {stats.validated}
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-xl">
          <p className="text-[11px] uppercase tracking-widest text-white/80 mb-2">
            Invalidated
          </p>
          <p className="text-2xl font-semibold text-red-400">
            {stats.invalidated}
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-xl">
          <p className="text-[11px] uppercase tracking-widest text-white/80 mb-2">
            Neutral
          </p>
          <p className="text-2xl font-semibold text-white-400">
            {stats.neutral}
          </p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-xl">
          <p className="text-[11px] uppercase tracking-widest text-white/80 mb-2">
            Pending
          </p>
          <p className="text-2xl font-semibold text-yellow-400">
            {stats.pending}
          </p>
        </div>

        <div className="col-span-2 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.05] p-6 rounded-xl flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-widest text-white/80">
            Validation Rate
          </p>
          <p className="text-1xl font-bold text-white">
            {stats.validationAccuracy}
          </p>
        </div>
        <div className="col-span-2 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.05] p-6 rounded-xl flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-widest text-white/80">
            Average Reaction Range
          </p>
          <p className="text-3xl font-bold text-white">
            {stats.averageReactionRange}%
          </p>
        </div>

      </div>
    </div>
 <p className="text-xs uppercase tracking-[0.2em] text-white/80 pt-13">
          Historical Performance Archive
        </p>
       <p className="text-text-s/60 italic pt-2">
  complete analytical history, validated outcomes, and archived market frameworks.
</p>
         <div className="flex flex-col sm:flex-row gap-6 pt-3">

  <a 
    href="/outcomes"
    className="group relative px-8 py-4 bg-panel border border-white/10 hover:border-accent/60 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />

    <div className="flex items-center gap-2 relative z-10">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
        View Outcome Archive
      </span>

      <ArrowRight 
        size={14} 
        className="text-accent group-hover:translate-x-2 transition-transform duration-500" 
      />
    </div>
  </a>


  <a 
    href="https://x.com/ah_sanraza"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative px-8 py-4 bg-panel border border-white/10 hover:border-accent/60 transition-all duration-500 overflow-hidden"
  >
    <div className="flex items-center gap-2 relative z-10">
        <Twitter 
      size={18}
      className="text-white group-hover:text-accent transition-colors duration-500"
    />
    </div>
  </a>


  <a 
    href="https://instagram.com/ah-sanraza"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative px-8 py-4 bg-panel border border-white/10 hover:border-accent/60 transition-all duration-500 overflow-hidden"
  >
    <div className="flex items-center gap-2 relative z-10">
       <Instagram 
      size={18}
      className="text-white group-hover:text-accent transition-colors duration-500"
    />
    </div>
  </a>

</div>

    </div>
    </div>
    
    
  </section>
  );
};

const MarketGrid = () => {

const [marketAnalysis,setMarketAnalysis] = useState<any[]>([]);


useEffect(()=>{

 async function fetchMarket(){

   const q = query(
     collection(db,"analyses"),
     orderBy("date","desc")
   );


   const snapshot = await getDocs(q);


   const data = snapshot.docs.map(doc=>({
      id:doc.id,
      ...doc.data()
   }));


   setMarketAnalysis(data);

 }


 fetchMarket();


},[]);


return (
  <section id="analysis" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/25 relative">
    <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-10">
      <div>
        <h2 className="text-5xl font-serif font-bold italic mb-6 tracking-tight text-white">Market Research</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-text-s text-[12px] uppercase tracking-[0.1em] text-white">Structured Observation. Defined Bias. Measured Outcome</span>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-10">
      {marketAnalysis.slice(0,2).map((item)=>(
        <motion.div 
          whileHover={{ y: -8 }}
          key={item.id} 
          className="terminal-panel grid grid-cols-1 xl:grid-cols-12 overflow-hidden group transition-all duration-500 hover:border-accent/30">
          <div className="xl:col-span-12 aspect-video xl:aspect-auto relative overflow-hidden bg-muted"><a
  href={item.imageurl}
  target="_blank"
  rel="noopener noreferrer"
>
            <img src={item.imageurl} alt={item.pair} className="object-cover w-full h-full group-hover:grayscale-[0.2] transition-all duration-1000 scale-100 group-hover:scale-98" referrerPolicy="no-referrer" />
            </a>
            {/* Heatmap Overlay effect */}
            <div className="absolute inset-0 from-bg/90 selection:to-transparent pointer-events-none opacity-40 group-hover:opacity-10 transition-opacity" />
            
            <div className="absolute top-3 right-4 flex gap-3">
             <span
  className={`px-4 py-2 text-[10px] font-black uppercase tracking-wide border backdrop-blur-md inline-flex items-center gap-1 ${
    item.bias === 'bullish'
      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
      : item.bias === 'bearish'
      ? 'bg-red-500/10 border-red-500/40 text-red-400'
      : 'bg-white/10 border-white/30 text-text-s'
  }`}
>
  {item.bias === 'bullish' && (
    <ArrowUpRight size={14} className="opacity-80" />
  )}

  {item.bias === 'bearish' && (
    <ArrowDownRight size={14} className="opacity-80" />
  )}

  {item.bias}
</span>
            </div>
          </div>

          <div className="xl:col-span-12 p-10 flex flex-col gap-8 bg-gradient-to-br from-panel/60 to-transparent">
             <div className="flex justify-between items-start">
               <div>
                 <h3 className="font-serif text-3xl font-bold  text-white">{item.pair}
                  {item.date && (
          <>
  <span className="text-[18px] font-mono text-text uppercase tracking-widest">
        {item.tf}
      </span>
    </>
  )}</h3>
                <div className="flex items-center gap-3">
  <span className="text-[12px] text-accent font-black tracking-widest uppercase">
    {item.asset}
  </span>

  {item.date && (
    <>
      <div className="w-1 h-1 bg-white/30 rounded-full" />
      <span className="text-[12px] font-mono text-text-s uppercase tracking-widest">
        {item.date}
      </span>
    </>
  )}
  
</div>
        </div>
               <div className="flex flex-col items-end">
                  <div className={`w-2 h-2 rounded-full mb-2 ${item.status === 'Completed' ? 'bg-data-white/80' : 'bg-data-blue/80 animate-pulse shadow-[0_0_8px_rgba(199,167,106,0.6)]'}`} />
                  <span className="text-[8px] font-mono text-text-s uppercase tracking-widest">{item.status}</span>
               </div>
             </div>
             
             <div className="grid grid-cols-2 gap-10 py-1">
              <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-text-s font-black">Market Conditions</div>
                  <div className="font-mono text-1xl font-bold text-white leading-none tracking-tight">{item.conditions}</div>
                </div> 
                </div>
              <div className="space-y-2">
                  <div className="text-2xl text-white leading-[1.2] font-bold tracking-tight">{item.title}</div>
                </div>
                 <div className="grid grid-cols-1 gap-2">
                  <div className="text-1xl text-white leading-[1.2] tracking-tight">{item.description
  ? item.description.split('\n').map((line: string, i: number) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ))
  : null}</div>
  <div className="space-y-2">
                  <div className="text-1xl text-red-400 italic leading-[1.2] font-bold tracking-tight">{item.disclaimer}</div>
                </div>
             </div>

             <button className="flex items-center justify-between group/link w-full text-left pt-2">
                <div className="flex items-center gap-3">
                   <div className="w-6 h-0.5 bg-accent/20 transition-all duration-500 group-hover/link:w-12 group-hover/link:bg-accent/60" />
                   {/* <a href='' className="text-[10px] uppercase tracking-[0.2em] font-black text-text-s group-hover/link:text-accent transition-colors">View Full Thesis</a> */}
                </div>
                <ArrowUpRight size={14} className="text-text-s group-hover/link:text-accent transition-all duration-500" />
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
          href="/analysis" 
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
)};

const ExecutionLog = () => {


const [outcomes,setOutcomes] = useState<any[]>([]);


const [filter,setFilter] = useState<{
  asset: string | null;
  result: string | null;
}>({
  asset: null,
  result: null
});


useEffect(()=>{


 async function fetchOutcomes(){


 const q = query(
    collection(db,"outcome"),
    orderBy("datepub","desc")
 );


 const snapshot = await getDocs(q);


 const data = snapshot.docs.map(doc=>({
    id:doc.id,
    ...doc.data()
 }));


 setOutcomes(data);


 }


 fetchOutcomes();


},[]);
  
  const filteredAnalysis = useMemo(()=>{


return outcomes.filter(item=>{


if(filter.asset && item.asset !== filter.asset)
 return false;


if(filter.result && item.result !== filter.result)
 return false;


return true;


});


},[outcomes,filter]);

  return (
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
        {filteredAnalysis.slice(0,2).map((Analysis)=>(
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
            </div>
          </motion.div>
        ))}
      </div>
       <p className="text-xs uppercase tracking-[0.2em] text-white/80 pt-10">
          Historical Outcome Archive
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
  );
};

const InsightsSection = () => (
  <section id="insights" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/25 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-data-blue/[0.01] pointer-events-none" />
    <div className="mb-22">
      <h2 className="text-5xl font-serif font-bold italic mb-4 tracking-tight text-white">Analytical Principles</h2>
     
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent" />
           <span className="text-text-s text-[12px] uppercase tracking-[0.1em] text-white">core principles behind analytical consistency</span>
        </div>
        <div className="h-px w-10 bg-accent/20" />
  </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {INSIGHTS.map((insight, i) => (
        <div key={i} className="terminal-panel p-12 hover:border-accent/40 transition-all duration-500 flex flex-col justify-between h-full group bg-gradient-to-b from-panel/30 to-bg/10">
          <div>
            <div className="flex justify-between items-center mb-10">
              <div className="px-3 py-1 border border-white/10 text-[8px] font-mono text-accent uppercase tracking-widest bg-white/[0.02]">
                Principles_0{i + 1}
              </div>
              
            </div>
            <h3 className="text-3xl font-serif font-bold mb-8 italic text-white group-hover:text-accent transition-colors duration-500 leading-snug">{insight.title}</h3>
            <p className="text-text-s text-base leading-relaxed font-serif tracking-wide">{insight.text}</p>
          </div>
          <div className="mt-12 pt-6 border-t border-white/[0.04] flex items-center justify-between">
             {/* <span className="text-[7px] font-mono text-white/20 uppercase tracking-[.3em]">Integrity: High</span>
             <History size={12} className="text-white/10 group-hover:text-accent/40 transition-colors" /> */}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ResearchPhilosophy = () => (
  <section id="researchphilosophy" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/25 relative">
    <div className="grid lg:grid-cols-12 gap-24 items-end">
      <div className="lg:col-span-12">
        <div className="flex items-center gap-4 mb-8">
            <h2 className="text-5xl font-serif font-bold italic mb-3 tracking-tight text-white">Research Philosophy</h2>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-1xl md:text-2xl text-white tracking-[-0.03em]">
            "A consistent process and structured observation keep emotional bias out of the equation"
          </h3>
          
          <div className="w-45 h-px bg-accent" />
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-serif font-bold italic tracking-wide text-white">Methodology</h2>
        </div>
          <p className="text-text-s text-lg md:text-xl font-sans font-medium max-w-none leading-relaxed tracking-[-0.03em]">
            “The approach is centered on tracking how liquidity is positioned and how price interacts with it. Analysis is built around structure, displacement and inefficiencies where the market moves away from balance. No reliance is placed on indicators. The process is based on reading price behavior and confirming shifts in underlying flow.”
          </p>
        </div>
      </div>
    </div>
  </section>
);

const About= () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/25 relative">
    <div className="grid lg:grid-cols-12 gap-24 items-end">
      <div className="lg:col-span-8">
        <div className="flex items-center gap-4 mb-3">
            <h2 className="text-5xl font-serif font-bold mb-6 tracking-tight text-white">Ahsan Raza</h2>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-1xl md:text-2xl text-white tracking-[-0.03em]">
            "Independent Technical Analyst"
          </h3>
          
          <div className="w-full h-px bg-accent" />
          
          <p className="text-text-s text-lg md:text-l font-sans font-medium max-w-3xl leading-relaxed tracking-[-0.02em]">
            I analyze markets through supply and demand dynamics with emphasis on structural price behavior at key areas of interest.
Market structure is used to define directional context and identify potential transitions in trend conditions.
Price action and candlestick behavior are interpreted to assess real-time market intent, with chart patterns serving as structural confirmation.
Time is treated as a continuous variable across intraday and multi-day phases, reflecting shifts in liquidity and volatility conditions.
The methodology prioritizes raw price behavior and structural context over lagging technical indicators to maintain a context-driven analytical framework.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-5 ">
             {[
               { label: "Edge", value: "Context-driven analysis without indicator dependency" },
               { label: "Approach", value: "Liquidity driven technical framework" },
               { label: "Focus", value: "Structure and Price behavior" },
              //  { label: "Dependency", value: "Zero Indicator " }
             ].map((node, i) => (
               <div key={i} className="group">
                 <div className="text-[11px] uppercase font-black tracking-[0.3em] text-accent mb-4 group-hover:text-accent transition-colors">{node.label}</div>
                 <div className="font-serif text-lg text-white border-l border-white pl-4 group-hover:border-accent transition-all duration-500">{node.value}</div>
               </div>
             ))}
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-4 self-stretch flex items-center justify-center">
          <div className="terminal-panel p-12 w-full bg-panel/60 backdrop-blur-xl border-accent/20 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent pointer-events-none" />
             
             <div className="flex items-center gap-4 mb-12 relative z-10">
               
               <span className="text-[14px] uppercase font-black tracking-[0.4em] text-white/90">Specializations</span>
             </div>
             
             <div className="space-y-5 relative z-10">
               {[
                 { value: " Technical Analysis", color: "text-accent" },
                 {  value: "Market Flow Analysis", color: "text-accent" },
                 {  value: "Liquidity Mapping", color: "text-accent" }
               ].map((metric, i) => (
                 <div key={i} className="flex justify-between items-end border-b border-white/[0.05] pb-6 group/item">
                    
                    <span className={` text-3xl font-bold tracking-tighter ${metric.color}`}>{metric.value}</span>
                 </div>
               ))}
             </div>
             
          </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/25 relative from-transparent to-bg">
    <div className="absolute inset-0 grid-bg opacity-10 -z-10" />
    
    <div className="flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tight mb-24 text-white">Connect</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        <a 
          href="mailto:connect.ahsanraza@gmail.com" 
          className="flex-1 flex flex-col gap-8 p-12 terminal-panel hover:bg-white/[0.02] border-white/[0.05] hover:border-accent/40 transition-all duration-700 group relative"
        >
          {/* <div className="absolute top-4 right-4 text-[7px] font-mono opacity-20 group-hover:opacity-50 transition-opacity">CHNL_0x01</div> */}
          <div className="w-16 h-16 bg-panel/80 flex items-center justify-center border border-white/5 group-hover:border-accent/30 transition-all duration-700 shadow-xl">
            <Mail size={28} className="text-accent group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-left">
            <div className="text-[10px] uppercase font-black tracking-[0.2em] text-text-s mb-3 group-hover:text-accent transition-colors">Research Communications</div>
            <div className="font-serif text-1xl font-bold text-white tracking-tight">connect.ahsanraza@gmail.com</div>
          </div>
        </a>
        <a 
          href="https://x.com/ah_sanraza" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 flex flex-col gap-8 p-12 terminal-panel hover:bg-white/[0.02] border-white/[0.05] hover:border-accent/40 transition-all duration-700 group relative"
        >
          {/* <div className="absolute top-4 right-4 text-[7px] font-mono opacity-20 group-hover:opacity-50 transition-opacity">CHNL_0x02</div> */}
          <div className="w-16 h-16 bg-panel/80 flex items-center justify-center border border-white/5 group-hover:border-accent/30 transition-all duration-700 shadow-xl">
            <Twitter size={28} className="text-accent group-hover:scale-110 transition-transform" />
          </div>
          <div className="text-left">
            <div className="text-[10px] uppercase font-black tracking-[0.2em] text-text-s mb-3 group-hover:text-accent transition-colors">Historical Feed & Market Updates</div>
            <div className="font-serif text-1xl font-bold text-white tracking-tight">@ah_sanraza</div>
          </div>
        </a>
      </div>

      <div className="mt-20 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
        </div>
        
        <div className="w-px h-34 bg-gradient-to-b from-accent to-white" />
        
        <div className="text-[32px] uppercase text-white tracking-[0.3em] text-center font-bold">
          Ahsan Raza <span className="text-black font-bold text-[20px] ml-2 font-normal"></span>
          <br />
          <span className="text-[18px] text-white/40 font-bold mt-2 block pt-7"> © 2026</span>
          <span className="text-[12px] text-white/35 font-bold mt-2 block pt-7"> Independent market research. Not investment advice</span>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SpecializationBar />
        <MarketGrid />
        <ExecutionLog />
        <InsightsSection />       
        <ResearchPhilosophy />
        <About />
        <Contact />
      </main>
    </div>
  );
}