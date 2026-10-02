import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const tr = t.footer;
  const nav = t.nav;

  return (
    <footer className="bg-[#1f2420] text-[#efe9df] pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: "radial-gradient(#c9a96a 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid md:grid-cols-4 gap-14 pb-16 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              {tr.tagline1}<span className="gold-shine italic">{tr.taglineEm}</span>{tr.tagline2}
            </div>
            <p className="text-white/60 max-w-md font-light leading-relaxed">
              {tr.about}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#c9a96a] mb-5">{tr.colPractice}</h4>
            <ul className="space-y-3 text-white/70 font-light">
              <li><Link to="/" className="link-ul">{nav.home}</Link></li>
              <li><Link to="/therapie" className="link-ul">{nav.therapy}</Link></li>
              <li><Link to="/geschichte" className="link-ul">{nav.history}</Link></li>
              <li><Link to="/termine" className="link-ul">{nav.appointments}</Link></li>
              <li><Link to="/kontakt" className="link-ul">{nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#c9a96a] mb-5">{tr.colVisit}</h4>
            <address className="not-italic text-white/70 font-light leading-loose">
              Lindenallee 42<br />
              60313 Frankfurt am Main<br />
              Deutschland<br /><br />
              <a href="tel:+496912345678" className="link-ul">+49 69 1234 5678</a><br />
              <a href="mailto:praxis@sanctus-anima.de" className="link-ul">praxis@sanctus-anima.de</a>
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs tracking-widest uppercase text-white/40">
          <div>{tr.rights}</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="link-ul">{tr.imprint}</a>
            <a href="#" className="link-ul">{tr.privacy}</a>
            <a href="#" className="link-ul">{tr.confidentiality}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
