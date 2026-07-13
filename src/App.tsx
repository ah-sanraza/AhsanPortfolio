import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnalysisPage from "./pages/AnalysisPage";
import AnalysisDetailPage from "./pages/AnalysisDetail";
import SingleOutcomePage from "./pages/SingleOutcomePage";
import OutcomePage from "./pages/OutcomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/analyses" element={<AnalysisPage />} />
      <Route path="/analysis/:slug" element={<AnalysisDetailPage />} />
      <Route path="/outcomes" element={<OutcomePage />} />
      <Route path="/outcome/:slug" element={<SingleOutcomePage />} />
    </Routes>
  );
}