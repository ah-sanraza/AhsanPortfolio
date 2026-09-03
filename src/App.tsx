import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
const Methodology = lazy(() => import("./pages/Methodology"));
const AnalysisPage = lazy(() => import("./pages/AnalysisPage"));
const AnalysisDetailPage = lazy(() => import("./pages/AnalysisDetail"));
const SingleOutcomePage = lazy(() => import("./pages/SingleOutcomePage"));
const OutcomePage = lazy(() => import("./pages/OutcomePage"));
import CursorTrail from "./components/cursor-trail";

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
   <Suspense fallback={<div className="min-h-screen bg-bg" />}>
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
    </Suspense>
  </>
  );
}