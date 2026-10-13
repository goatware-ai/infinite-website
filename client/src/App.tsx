import { Navigate, Route, Routes } from "react-router-dom";
import CompanyIntro from "./pages/CompanyIntro";
import Contact from "./pages/Contact";
import { PrivacyPolicy, TermsOfService } from "./pages/Legal";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CompanyIntro />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
