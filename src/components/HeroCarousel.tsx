import { useEffect, useState } from "react";

type Slide = {
  img: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
};

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            key={`${idx}-${i === idx ? "a" : "b"}`}
            className={`absolute inset-0 bg-cover bg-center ${i === idx ? "ken-burns" : ""}`}
            style={{ backgroundImage: `url(${s.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl text-white">
            {slides.map((s, idx) => (
              <div
                key={idx}
                className={`transition-all duration-1000 ${
                  i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 absolute pointer-events-none"
                }`}
              >
                {i === idx && (
                  <>
                    <div
                      className="text-[11px] md:text-xs tracking-[0.5em] uppercase text-[#c9a96a] mb-6"
                      style={{ animation: "slideInLeft 1.1s ease-out both" }}
                    >
                      — {s.eyebrow}
                    </div>
                    <h1
                      className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8"
                      style={{ animation: "zoomIn 1.4s cubic-bezier(.2,.7,.2,1) both" }}
                    >
                      {s.title}
                    </h1>
                    <p
                      className="text-lg md:text-xl font-light text-white/85 max-w-xl leading-relaxed"
                      style={{ animation: "slideInRight 1.3s ease-out .3s both" }}
                    >
                      {s.subtitle}
                    </p>
                  </>
                )}
              </div>
            ))}

            <div className="mt-12 flex items-center gap-5" style={{ animation: "fadeUp 1.4s ease-out .6s both" }}>
              <a
                href="/termine"
                className="px-8 py-4 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500"
              >
                Termin vereinbaren
              </a>
              <a
                href="/therapie"
                className="px-8 py-4 border border-white/60 text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-[#1f2420] transition-all duration-500"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-[2px] transition-all duration-700 ${
              i === idx ? "w-16 bg-[#c9a96a]" : "w-8 bg-white/40"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Side counter */}
      <div className="absolute bottom-10 right-6 lg:right-10 z-10 text-white font-serif tracking-widest text-sm">
        <span className="text-[#c9a96a] text-2xl">0{i + 1}</span>
        <span className="text-white/40 mx-2">/</span>
        <span className="text-white/60">0{slides.length}</span>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-6 lg:left-10 z-10 text-white/70 text-[10px] tracking-[0.5em] uppercase hidden md:block">
        <div style={{ animation: "floaty 3s ease-in-out infinite" }}>Scrollen ↓</div>
      </div>
    </section>
  );
}
