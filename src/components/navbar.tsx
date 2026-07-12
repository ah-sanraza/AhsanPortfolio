import { useState,} from 'react';
import {X,Menu} from 'lucide-react';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return(
  <nav className="fixed top-0 left-0 right-0 z-[60] border-b border-white/[0.03] bg-bg/95 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative">
          {/* <div className="w-6 h-6 border border-accent/40 flex items-center justify-center">
            <div className="w-2 h-2 bg-accent shadow-[0_0_10px_rgba(199,167,106,0.5)]" />
          </div> */}
          
        </div>
          <button
    onClick={() => setOpen(!open)}
    className="md:hidden text-white"
  >
    {open ? <X size={20} /> : <Menu size={20} />}
  </button>
        {/* <div className="hidden md:flex flex-col">
          <span className="font-serif text-lg font-bold tracking-tight text-white leading-none w-50"><img src="src/assets/ARLogo.png" alt="" /></span>
        </div> */}
      </div>
      <div className="hidden md:flex items-center gap-12 text-[9px] uppercase tracking-[0.25em] font-black text-text-s/70">
        <a onClick={(e) => {
    e.preventDefault();
    document.getElementById("analysis")?.scrollIntoView({
      behavior: "smooth",
    });
  }} href="#analysis" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
          Market Research
        </a>
        <a onClick={(e) => {
    e.preventDefault();
    document.getElementById("execution")?.scrollIntoView({
      behavior: "smooth",
    });
  }} href="#execution" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
          Outcomes
        </a>
        <a onClick={(e) => {
    e.preventDefault();
    document.getElementById("insights")?.scrollIntoView({
      behavior: "smooth",
    });
  }} href="#insights" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
          Insights
        </a>
        <a onClick={(e) => {
    e.preventDefault();
    document.getElementById("researchphilosophy")?.scrollIntoView({
      behavior: "smooth",
    });
  }} href="#researchphilosophy" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
         Philosophy 
        </a>
         <a onClick={(e) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  }} href="#about" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
         Profile 
        </a>
      </div>
      {/* Mobile Toggle Button */}

  {open && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-bg border-t border-white/10 flex flex-col items-start px-6 py-6 gap-6 z-50">
    
    {[
      { id: "analysis", label: "Market Research" },
      { id: "execution", label: "Outcomes" },
      { id: "insights", label: "Insights" },
      { id: "researchphilosophy", label: "Philosophy" },
      { id: "about", label: "Profile" },
      { id: "contact", label: "Connect" },
    ].map((item) => (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
          setOpen(false); // close after click
        }}
        className="text-sm uppercase tracking-widest text-white/80 hover:text-accent transition"
      >
        {item.label}
      </a>
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
export default Navbar;