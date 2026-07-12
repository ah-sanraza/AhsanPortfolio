import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnalysisPage from "./pages/AnalysisPage";
import AnalysisDetailPage from "./pages/AnalysisDetail";
import OutcomePage from "./pages/OutcomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/analysis" element={<AnalysisPage />} />
      <Route path="/analysis/:slug" element={<AnalysisDetailPage />} />
      <Route path="/outcomes" element={<OutcomePage />} />
    </Routes>
  );
}