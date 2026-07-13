import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ArrowRight,ArrowUpRight } from "lucide-react";
import {db} from "../firebase";
import { useParams,Link } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function SingleOutcomePage() {
  const { slug } = useParams();

  const [outcome, setOutcome] = useState<any>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function fetchOutcome() {

      if (!slug) return;

      const q = query(
  collection(db, "outcome"),
  where("slug", "==", slug)
);


      const snapshot = await getDocs(q);

snapshot.docs.forEach((doc)=>{
  console.log(doc.id, doc.data().slug);
});

      if (!snapshot.empty) {
        const doc = snapshot.docs[0];

        setOutcome({
          id: doc.id,
          ...doc.data()
        });
      }

      setLoading(false);
    }


    fetchOutcome();

  }, [slug]);


  if (loading) {
    return (
      <div className="text-white p-10">
        Loading...
      </div>
    );
  }


  if (!outcome) {
    return (
      <div className="text-white p-20">
        <h1>Outcome Awaited</h1>
      </div>
    );
  }


 return (
  <>
    <Navbar />

    <section
      id="execution"
      className="py-24 px-6 max-w-7xl mx-auto border-t border-white/25 relative"
    >

      <div className="flex flex-col lg:flex-row items-baseline justify-between mb-24 gap-12">
        <div>
          <h2 className="text-5xl font-serif font-bold italic mb-6 tracking-tight text-white">
            Outcome Validation
          </h2>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-text-s text-[12px] uppercase tracking-[0.1em] text-white">
              Post publication validation of market behavior against the original research.
            </span>
          </div>
        </div>
      </div>


      <motion.div
        whileHover={{ scale: 1.005 }}
        className="terminal-panel p-0 grid grid-cols-1 xl:grid-cols-12 overflow-hidden hover:border-accent/40 transition-all duration-700 shadow-accent/5"
      >

        {/* Images */}
        <div className="xl:col-span-12 grid grid-cols-1 md:grid-cols-2 relative">

          <div className="relative overflow-hidden aspect-video border-2 border-black">

            <div className="absolute top-6 left-6 z-20">
              <span className="px-3 py-1 bg-black/60 border border-white/5 text-[10px] font-mono text-white/80 uppercase tracking-widest">
                Initial Thesis [Market Structure]
              </span>
            </div>

            <a href={outcome.beforeImage} target="_blank">
              <img
                src={outcome.beforeImage}
                alt={`${outcome.pair} initial thesis`}
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </a>

          </div>


          <div className="relative overflow-hidden aspect-video border-2 border-black">


            <div className="absolute top-6 right-6 z-20">
              <div
                className={`px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] border ${
                  outcome.result === "VALIDATED"
                  ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                  : outcome.result === "INVALIDATED"
                  ? "bg-red-500/10 border-red-500/50 text-red-400"
                  : "bg-white/10 border-white/20 text-white"
                }`}
              >
                Result: {outcome.result}
              </div>
            </div>


            <div className="absolute top-6 left-6 z-20">
              <span className="px-3 py-1 bg-black/60 border border-white/5 text-white/80 text-[10px] font-mono uppercase tracking-widest">
                Outcome [Market Response]
              </span>
            </div>


            <a href={outcome.afterImage} target="_blank">
              <img
                src={outcome.afterImage}
                alt={`${outcome.pair} outcome`}
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </a>

          </div>

        </div>



        {/* Content */}
        <div className="xl:col-span-12 p-10 flex flex-col justify-between bg-gradient-to-br from-panel/40 to-transparent">


          <h1 className="text-4xl font-serif font-bold tracking-tight mb-2 text-white">
            {outcome.pair}

            {outcome.tf && (
              <span className="text-[18px] font-mono text-text uppercase ml-3">
                {outcome.tf}
              </span>
            )}

          </h1>


          <div className="flex gap-4 mb-12">
            <span className="text-[12px] font-black text-white">
              {outcome.datepub}
            </span>

            <div className="w-1 h-3 bg-white/20" />

            <span className="text-[12px] text-text-s uppercase">
              {outcome.date}
            </span>
          </div>



            <div className="grid grid-cols-4 gap-10 mb-12">
                  <div className="space-y-3">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-text-s font-black">Initial Thesis</div>
                    <div className="text-1xl text-white leading-[1.2] tracking-tight">{outcome.initialForecast}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-text-s font-black">Observed Delivery</div>
                    <div className="text-1xl text-white leading-[1.2] tracking-tight">{outcome.observedOutcome}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-text-s font-black">Validation Status</div>
                    <div className="text-1xl text-white leading-[1.2] tracking-tight">{outcome.validationStatus}</div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[9px] uppercase tracking-[0.2em] text-text-s font-black">Reaction Magnitude</div>
                    <div className="text-1xl text-white leading-[1.2] tracking-tight">{outcome.reactionMagnitude}</div>
                  </div>
                </div>



          <div className="grid gap-3">

            <div className="w-full h-px bg-accent" />

            <p className="text-white leading-relaxed">
              {outcome.description}
            </p>

          </div>
           <button className="flex items-center justify-between group/link w-full text-left pt-6">
                <div className="flex items-center gap-3">
                   <div className="w-6 h-0.5 bg-accent/20 transition-all duration-500 group-hover/link:w-12 group-hover/link:bg-accent/60" />
                   <Link to={`/analysis/${outcome.analysisSlug}`} className="text-[10px] uppercase tracking-[0.2em] font-black text-text-s group-hover/link:text-accent transition-colors">View Analysis</Link>
                </div>
                <Link to={`/analysis/${outcome.analysisSlug}`} className="text-[10px] uppercase tracking-[0.2em] font-black text-text-s group-hover/link:text-accent transition-colors"><ArrowUpRight size={14} className="text-text-s group-hover/link:text-accent transition-all duration-500" /></Link>
             </button>
        </div>

      </motion.div>


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


    <Footer />
  </>
);
}