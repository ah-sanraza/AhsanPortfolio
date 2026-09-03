import {useEffect} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnalysisPage from "./pages/AnalysisPage";
import AnalysisDetailPage from "./pages/AnalysisDetail";
import SingleOutcomePage from "./pages/SingleOutcomePage";
import OutcomePage from "./pages/OutcomePage";
import CursorTrail from "./components/cursor-trail";
import Methodology from "./pages/Methodology";
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
   <>
    <ScrollToTop />
    <CursorTrail />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/methodology" element={<Methodology />} />
      <Route path="/analyses" element={<AnalysisPage />} />
      <Route path="/analysis/:slug" element={<AnalysisDetailPage />} />
      <Route path="/outcomes" element={<OutcomePage />} />
      <Route path="/outcome/:slug" element={<SingleOutcomePage />} />
    </Routes>
  </>
  );
}