import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Startseite" },
  { to: "/therapie", label: "Unsere Therapie" },
  { to: "/geschichte", label: "Unsere Geschichte" },
  { to: "/termine", label: "Terminkalender" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

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
              Adventistische Psychotherapie
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
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

        <Link
          to="/termine"
          className={`hidden lg:inline-block px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500 border ${
            scrolled
              ? "border-[#1f2420] text-[#1f2420] hover:bg-[#1f2420] hover:text-[#f8f5ef]"
              : "border-white text-white hover:bg-white hover:text-[#1f2420]"
          }`}
        >
          Termin buchen
        </Link>

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
              className={({ isActive }) =>
                `block text-sm tracking-[0.2em] uppercase py-2 ${
                  isActive ? "text-[#c9a96a]" : "text-[#1f2420]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
