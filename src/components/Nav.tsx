import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Lang } from "../i18n/translations";

const LANGS: Lang[] = ['de', 'en', 'fr'];

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const tr = t.nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const links = [
    { to: "/", label: tr.home },
    { to: "/therapie", label: tr.therapy },
    { to: "/geschichte", label: tr.history },
    { to: "/termine", label: tr.appointments },
    { to: "/kontakt", label: tr.contact },
  ];

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    onS();
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#f8f5ef]/90 backdrop-blur-xl border-b border-[#c9a96a]/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#c9a96a] flex items-center justify-center transition-transform duration-700 group-hover:rotate-180">
            <span className="font-serif text-[#c9a96a] text-lg">S</span>
          </div>
          <div className="leading-tight">
            <div
              className={`font-serif text-xl md:text-2xl tracking-wide ${
                scrolled ? "text-[#1f2420]" : "text-white"
              }`}
            >
              Sanctus Anima
            </div>
            <div
              className={`text-[10px] tracking-[0.3em] uppercase ${
                scrolled ? "text-[#8a9a82]" : "text-white/70"
              }`}
            >
              {tr.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `link-ul text-sm tracking-[0.15em] uppercase transition-colors ${
                  scrolled
                    ? isActive
                      ? "text-[#c9a96a]"
                      : "text-[#1f2420] hover:text-[#c9a96a]"
                    : isActive
                    ? "text-[#c9a96a]"
                    : "text-white hover:text-[#c9a96a]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-1">
            {LANGS.map((l, idx) => (
              <span key={l} className="flex items-center gap-1">
                {idx > 0 && (
                  <span className={`text-[10px] ${scrolled ? 'text-[#1f2420]/25' : 'text-white/30'}`}>|</span>
                )}
                <button
                  onClick={() => setLang(l)}
                  className={`text-[10px] tracking-[0.25em] uppercase transition-colors px-0.5 ${
                    lang === l
                      ? 'text-[#c9a96a]'
                      : scrolled
                      ? 'text-[#1f2420]/50 hover:text-[#c9a96a]'
                      : 'text-white/50 hover:text-[#c9a96a]'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          <Link
            to="/termine"
            className={`px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500 border ${
              scrolled
                ? "border-[#1f2420] text-[#1f2420] hover:bg-[#1f2420] hover:text-[#f8f5ef]"
                : "border-white text-white hover:bg-white hover:text-[#1f2420]"
            }`}
          >
            {tr.book}
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-[#1f2420]" : "text-white"}`}
          aria-label="Menu"
        >
          <div className="w-7 h-[1px] bg-current mb-2" />
          <div className="w-7 h-[1px] bg-current mb-2" />
          <div className="w-5 h-[1px] bg-current ml-auto" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#f8f5ef] border-t border-[#c9a96a]/20 px-6 py-6 space-y-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `block text-sm tracking-[0.2em] uppercase py-2 ${
                  isActive ? "text-[#c9a96a]" : "text-[#1f2420]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          {/* Mobile language switcher */}
          <div className="flex gap-4 pt-2 border-t border-[#c9a96a]/20">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] tracking-[0.3em] uppercase transition-colors ${
                  lang === l ? 'text-[#c9a96a]' : 'text-[#1f2420]/50'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
