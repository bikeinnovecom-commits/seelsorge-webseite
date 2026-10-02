import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Therapie from "./pages/Therapie";
import Geschichte from "./pages/Geschichte";
import Termine from "./pages/Termine";
import Kontakt from "./pages/Kontakt";
import { LanguageProvider } from "./context/LanguageContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/therapie" element={<Therapie />} />
        <Route path="/geschichte" element={<Geschichte />} />
        <Route path="/termine" element={<Termine />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  );
}
