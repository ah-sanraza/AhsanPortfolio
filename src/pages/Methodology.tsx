import { motion } from "motion/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  ArrowRight,
  BarChart3,
  Activity,
  ShieldCheck,
  History,
  Layers3,
  Waves,
  Target,
  GitBranch,
  CandlestickChart,
  Clock3,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

const analysisProcess = [
  {
    title: "Market Context",
    text: "The broader market environment is established to understand the conditions surrounding the research.",
    icon: Activity,
  },
  {
    title: "Reaction Zone",
    text: "An area of interest is defined where the proposed market reaction is expected to develop.",
    icon: Target,
  },
  {
    title: "Market Thesis",
    text: "A directional thesis is formed from the conditions present at the time of research and documented before the outcome.",
    icon: BarChart3,
  },
  {
    title: "Expected Reaction",
    text: "The expected response from the identified reaction zone is defined within the original research.",
    icon: ArrowRight,
  },
  {
    title: "Market Outcome",
    text: "Following publication, actual price behaviour is recorded against the original research and its predefined conditions.",
    icon: History,
  },
  {
    title: "Invalidation",
    text: "A predefined market condition establishes when the original thesis is no longer considered valid.",
    icon: ShieldCheck,
  },
  {
    title: "Validation",
    text: "The outcome is classified against the original thesis, expected reaction, and predefined invalidation condition.",
    icon: ShieldCheck,
  },
];

function GlobeIcon(props: any) {
  return <Database {...props} />;
}

const validationFramework = [
  {
    status: "VALIDATED",
    color: "emerald",
    text: "The expected reaction develops from the defined reaction zone before the invalidation condition occurs.",
  },
  {
    status: "NEUTRAL",
    color: "white",
    text: "Price does not provide sufficient interaction with the defined reaction condition to establish a clear validation or invalidation.",
  },
  {
    status: "INVALIDATED",
    color: "red",
    text: "The predefined invalidation condition occurs before the expected reaction is established.",
  },
];

const analyticalFramework = [
  {
    code: "MS",
    title: "Market Structure",
    text: "Price structure provides the broader directional context, including continuation, transition, and structural change.",
    icon: GitBranch,
  },
  {
    code: "LQ",
    title: "Liquidity",
    text: "Liquidity is considered around areas where concentrated interest may influence the next phase of price movement.",
    icon: Waves,
  },
  {
    code: "S/D",
    title: "Supply & Demand",
    text: "Supply and demand are assessed through the relationship between price, imbalance, and areas of potential reaction.",
    icon: Layers3,
  },
  {
    code: "PA",
    title: "Price Behaviour",
    text: "Price behaviour is examined directly through reactions, formations, and the way price develops around key areas.",
    icon: CandlestickChart,
  },
  {
    code: "PSY",
    title: "Market Psychology",
    text: "Participant behaviour is considered through recurring patterns of reaction, positioning, hesitation, and expansion.",
    icon: Activity,
  },
  {
    code: "EV",
    title: "Market Events",
    text: "Relevant macro and market-specific events are considered where they may affect the context surrounding a research thesis.",
    icon: BarChart3,
  },
  {
    code: "CORR",
    title: "Market Relationships",
    text: "Related markets and instruments are observed where their behaviour can provide additional context to the primary research.",
    icon: GitBranch,
  },
  {
    code: "MTF",
    title: "Multi-Timeframe Analysis",
    text: "Different timeframes may be used to resolve price structure, refine context, and confirm the significance of identified areas.",
    icon: Clock3,
  },
];
const researchRecord = [
  "Original Publication",
  "Market Development",
  "Outcome Assessment",
  "Final Classification",
];

const experience = [
  "Crypto",
  "Forex",
  "Commodities",
  "Equities",
];

export default function Methodology() {
  return (
    
    <div className="min-h-screen bg-bg text-white overflow-x-hidden selection:bg-accent/30 selection:text-white">

      {/* Background
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-accent/[0.025] blur-[160px]" />
      </div> */}
      <Navbar />
      {/* Page Header */}
      <section className="relative pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-accent" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-black text-accent">
              THE RESEARCH PROCESS
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-7xl md:text-8xl font-serif font-bold italic tracking-[-0.04em] leading-[0.92] sm:leading-[0.9] break-words"
              >
                How Research Is 
                <br />
                <span className="text-accent">Developed</span>
              </motion.h1>
            </div>

            {/* <div className="lg:col-span-4">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-text-s text-base sm:text-lg leading-relaxed"
              >
                
              </motion.p>
            </div> */}

          </div>

          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/40 leading-relaxed">
              A documented process for studying price behaviour, defining a market thesis, and evaluating what followed.
            </span>
            <div className="h-px w-12 sm:w-16 bg-accent/50" />
          </div>

        </div>
      </section>

      {/* 01 Research Approach */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          title="Research Approach"
          subtitle="Document the thesis before the outcome"
        />

        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-4">
            <div className="terminal-panel p-6 sm:p-8 md:p-10 h-full border-accent/20 bg-panel/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] to-transparent pointer-events-none" />

              <Activity
                size={28}
                className="text-accent mb-10"
              />

              <div className="text-[9px] uppercase tracking-[0.3em] text-accent font-black mb-4">
                Research Principle
              </div>

              <div className="text-3xl font-serif font-bold italic leading-tight">
                <span className="block mt-6 sm:mt-10 md:mt-12">Observe.</span>
                <span className="block mt-6 sm:mt-10 md:mt-12">Document.</span>
                <span className="block mt-6 sm:mt-10 md:mt-12">Evaluate.</span>
                </div>
            </div>
          </div>

          <div className="lg:col-span-8 terminal-panel p-8 sm:p-12 border-white/[0.08] bg-panel/30">
            <div className="space-y-7">
              <p className="text-text-s text-lg sm:text-xl leading-relaxed">
                Each publication captures a market view at a specific point in time.
              </p>

              <p className="text-text-s text-lg sm:text-xl leading-relaxed">
                The research considers market structure, liquidity, supply and demand, price behaviour, relevant market conditions, and areas where a reaction may develop.
              </p>

              <p className="text-text-s text-lg sm:text-xl leading-relaxed">
                From these observations, a directional thesis is defined together with the expected reaction and the conditions that would invalidate it.
              </p>

              <div className="pt-7 border-t border-white/[0.06]">
                <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
                  The purpose is simple: document the market view first, then let subsequent price behaviour speak for itself.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02 How Analysis Works */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <SectionHeading
          number="02"
          title="How an Analysis Works"
          subtitle="From initial context to final classification"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {analysisProcess.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="terminal-panel p-6 sm:p-8 md:p-10 border-white/[0.08] hover:border-accent/50 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[9px] font-mono tracking-[0.3em] text-accent">
                    STEP_{String(index + 1).padStart(2, "0")}
                  </span>

                  <Icon
                    size={18}
                    className="text-white/30 group-hover:text-accent transition-colors"
                  />
                </div>

                <h3 className="text-2xl font-serif font-bold italic mb-5">
                  {item.title}
                </h3>

                <p className="text-text-s leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* 03 Validation */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <SectionHeading
          number="03"
          title="Validation Framework"
          subtitle="Predefined conditions determine classification"
        />

        <div className="grid lg:grid-cols-3 gap-6">

          {validationFramework.map((item, index) => {

            const color =
              item.color === "emerald"
                ? "text-emerald-400 border-emerald-500/30"
                : item.color === "red"
                ? "text-red-400 border-red-500/30"
                : "text-white border-white/20";

            return (
              <motion.div
                key={item.status}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="terminal-panel p-6 sm:p-8 md:p-10 bg-panel/40 border-white/[0.08] hover:border-accent/40 transition-all duration-500"
              >

                <div className="flex items-center justify-between mb-10">
                  <span
                    className={`px-3 py-1 border text-[9px] font-black tracking-[0.2em] ${color}`}
                  >
                    {item.status}
                  </span>

                  <ShieldCheck
                    size={18}
                    className="text-white/20"
                  />
                </div>

                <p className="text-text-s leading-relaxed">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>

        <div className="mt-8 terminal-panel p-6 sm:p-8 md:p-10 border-accent/30 bg-accent/[0.025]">
          <div className="text-[9px] uppercase tracking-[0.3em] text-accent font-black mb-4">
            Classification Principle
          </div>

          <p className="text-white text-lg leading-relaxed max-w-5xl">
            The outcome is judged against the research as it was originally published. Subsequent price movement does not change the original thesis or its predefined conditions.
          </p>
        </div>
      </section>

      {/* 04 Research Record */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <SectionHeading
          number="04"
          title="Research Record"
          subtitle="From publication to classification"
        />

        <div className="terminal-panel p-6 sm:p-10 border-white/[0.08] bg-panel/30">

          <div className="grid grid-cols-1 md:grid-cols-4">

            {researchRecord.map((item, index) => (
              <div
                key={item}
                className={`relative p-5 sm:p-8 ${
                  index !== researchRecord.length - 1
                    ? "border-b md:border-b-0 md:border-r border-white/[0.08]"
                    : ""
                }`}
              >

                <div className="flex items-center gap-3 mb-8">
                  <span className="w-7 h-7 flex items-center justify-center border border-accent/40 text-[9px] text-accent font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {index < researchRecord.length - 1 && (
                    <ArrowRight
                      size={13}
                      className="hidden md:block text-white/20"
                    />
                  )}
                </div>

                <h3 className="text-xl font-serif font-bold italic">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

        <div className="mt-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-black">
            Original Research → Market Development → Outcome → Validation
          </span>
        </div>
      </section>

      {/* 05 Measuring Market Response */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <SectionHeading
          number="05"
          title="Measuring Market Response"
          subtitle="Reaction magnitude as observational context"
        />

        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-4 terminal-panel p-7 sm:p-10 bg-panel/40 border-accent/20">
            <BarChart3
              size={30}
              className="text-accent mb-10"
            />

            <div className="text-[9px] uppercase tracking-[0.3em] text-accent font-black mb-4">
              Measurement
            </div>

            <h3 className="text-3xl font-serif font-bold italic leading-tight">
              Reaction
              <br />
              Magnitude
            </h3>
          </div>

          <div className="lg:col-span-8 space-y-6 sm:space-y-7">
            <p className="text-text-s text-lg sm:text-xl leading-relaxed">
              Reaction magnitude records the extent of the subsequent market move.
            </p>

            <p className="text-text-s text-lg sm:text-xl leading-relaxed">
              Market behaviour differs across asset classes, instruments, and timeframes. Percentage movement is therefore read within the context of the instrument and the original research rather than treated as a universal measure.
            </p>

            <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
              The validation classification is determined by whether the
              predefined reaction condition was fulfilled. Reaction magnitude
              provides additional context regarding the extent of the observed
              market response.
            </p>
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
  <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-black">
    Classification measures the thesis outcome.
  </p>
  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
    Reaction magnitude measures the observed market response.
  </p>
</div>
          </div>

        </div>
      </section>

      {/* 06 Analytical Framework */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <SectionHeading
          number="06"
          title="Analytical Framework"
          subtitle="Key market dimensions considered throughout research"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {analyticalFramework.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="terminal-panel p-7 sm:p-8 border-white/[0.08] hover:border-accent/50 transition-all duration-500 group"
              >

                <div className="flex items-center justify-between mb-9">
                  <span className="text-[9px] font-mono text-accent border border-accent/20 px-2 py-1">
                    {item.code}
                  </span>

                  <Icon
                    size={17}
                    className="text-white/25 group-hover:text-accent transition-colors"
                  />
                </div>

                <h3 className="text-xl font-serif font-bold italic mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-text-s leading-relaxed">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* 07 Philosophy */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
        <SectionHeading
          number="07"
          title="Research Philosophy"
          subtitle="Consistency between observation, documentation and evaluation"
        />

        <div className="relative terminal-panel p-10 sm:p-16 md:p-20 border-accent/30 bg-gradient-to-br from-accent/[0.05] to-transparent overflow-hidden">

          <div className="absolute top-0 right-0 text-[120px] sm:text-[180px] font-serif text-accent/[0.025] leading-none pointer-events-none">
            “
          </div>

          <div className="relative max-w-5xl">

            <div className="w-10 h-1 bg-accent mb-10" />

            <blockquote className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold italic leading-[1.1] tracking-tight">
              “A consistent process and structured observation keep emotional
              bias out of the equation.”
            </blockquote>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-[9px] uppercase tracking-[0.35em] text-text-s">
                Research Philosophy
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 08 Market Coverage */}
<section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">

  <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">

    {/* Left: Heading + Description */}
    <div className="lg:col-span-7">

      <SectionHeading
        number="08"
        title="Market Coverage"
        subtitle="Markets studied across the research archive"
      />

      <div className="space-y-7 text-text-s text-lg sm:text-xl leading-relaxed">

        <p>
          My research covers the study of price behaviour across multiple financial markets, with emphasis on structure, liquidity, supply and demand, and market behaviour.
        </p>

        <p>
          The archive includes research across Crypto, Forex, Commodities, and selected Equities, with analysis conducted on the timeframe relevant to each market observation.
        </p>

      </div>

    </div>

    {/* Right: Market Coverage Box */}
    <div className="lg:col-span-5">

      <div className="terminal-panel p-6 sm:p-8 md:p-10 border-accent/20 bg-panel/50">

        <div className="flex items-center justify-between mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white">
            Market Coverage
          </span>

          <Activity size={17} className="text-accent" />
        </div>

        <div className="space-y-0">

          {experience.map((item, index) => (
            <div
              key={item}
              className="flex items-center justify-between py-5 border-b border-white/[0.06] group"
            >
              <span className="text-xl font-serif font-bold italic group-hover:text-accent transition-colors">
                {item}
              </span>

              <span className="text-[8px] font-mono text-white/20">
                0{index + 1}
              </span>
            </div>
          ))}

        </div>

        <div className="mt-8 pt-6 border-t border-accent/20">
          <span className="text-[9px] uppercase tracking-[0.25em] text-accent font-black">
            Independent Market Research
          </span>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* Archive CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">

        <div className="terminal-panel p-10 sm:p-14 border-accent/30 bg-gradient-to-r from-accent/[0.04] to-transparent">

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 sm:gap-10">

            <div>
              <div className="text-[9px] uppercase tracking-[0.35em] text-accent font-black mb-5">
                Research Archive
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold italic mb-4">
                See the process through the record.
              </h2>

              <p className="text-text-s max-w-2xl leading-relaxed">
                Published research and subsequent outcome assessments form the public research archive.
              </p>
            </div>

            <Link
              to="/analyses"
              className="group shrink-0 flex items-center justify-center gap-4 px-6 sm:px-8 py-4 bg-panel border border-white/10 hover:border-accent/60 transition-all duration-500"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                View Research Archive
              </span>

              <ArrowRight
                size={15}
                className="text-accent group-hover:translate-x-2 transition-transform duration-500"
              />
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

/* ------------------------------------------------ */
/* Shared Section Heading                           */
/* ------------------------------------------------ */

function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-10 sm:mb-12 md:mb-14">

      <div className="flex items-center gap-4 mb-5">
        <span className="text-[10px] font-mono text-accent tracking-[0.25em]">
          {number}
        </span>

        <div className="w-8 h-px bg-accent/60" />

        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
          Research Module
        </span>
      </div>

      <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold italic tracking-tight mb-4 break-words">
        {title}
      </h2>

      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-accent" />

        <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.18em] text-text-s leading-relaxed">
          {subtitle}
        </p>
      </div>

    </div>
  );
}
