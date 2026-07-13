import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState,} from 'react';
import {X,Menu} from 'lucide-react';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return(
  <nav className="fixed top-0 left-0 right-0 z-[60] border-b border-white/[0.03] bg-bg/95 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
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
        <div className="relative">
        </div>
      </div>
      <div className="hidden md:flex items-center gap-12 text-[9px] uppercase tracking-[0.25em] font-black text-text-s/70">
        <Link to="/" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
          Overview
        </Link>
        <Link to="/analysis" className="hover:text-accent transition-all duration-300 flex items-center gap-2 group">
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
  { path: "/analysis", label: "Market Research", type: "page" },
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
export default Navbar;