import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import Marquee from "../components/Marquee";
import { useReveal } from "../hooks/useReveal";

const slides = [
  {
    img: "https://images.pexels.com/photos/6255624/pexels-photo-6255624.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Adventistische Seelsorge seit 1998",
    title: (
      <>
        Wo die Seele <em className="gold-shine not-italic">zur Ruhe</em> kommt.
      </>
    ),
    subtitle:
      "Eine geschützte Praxis für moderne Psychotherapie, getragen von adventistischer Spiritualität und wissenschaftlicher Tiefe.",
  },
  {
    img: "https://images.pexels.com/photos/5700138/pexels-photo-5700138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Paartherapie · Einzelbegleitung · Familie",
    title: (
      <>
        Begleitung, die <em className="gold-shine not-italic">bleibt</em>.
      </>
    ),
    subtitle:
      "Vertraulich, individuell, achtsam. Wir hören zu — mit der Zeit, die ein Mensch wirklich braucht.",
  },
  {
    img: "https://images.pexels.com/photos/5275849/pexels-photo-5275849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Kinder- und Jugendpsychotherapie",
    title: (
      <>
        Kindheit <em className="gold-shine not-italic">darf leicht</em> sein.
      </>
    ),
    subtitle:
      "Spielerisch, einfühlsam und sicher — ein Raum, in dem Kinder wieder lachen lernen.",
  },
  {
    img: "https://images.pexels.com/photos/5082960/pexels-photo-5082960.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Familientherapie & Systemische Beratung",
    title: (
      <>
        Familie — <em className="gold-shine not-italic">neu verbunden</em>.
      </>
    ),
    subtitle:
      "Konflikte lösen, Nähe wiederfinden, Hoffnung schenken. Für Familien, die sich einander zuwenden möchten.",
  },
];

export default function Home() {
  useReveal();

  return (
    <main className="page-enter">
      {/* 1. HERO CAROUSEL — full screen */}
      <HeroCarousel slides={slides} />

      {/* 2. MARQUEE BAND */}
      <Marquee
        items={[
          "Vertrauen",
          "Mitgefühl",
          "Hoffnung",
          "Heilung",
          "Glaube",
          "Weisheit",
          "Stille",
        ]}
      />

      {/* 3. INTRODUCTION — split with image */}
      <section className="py-32 bg-[#f8f5ef] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 reveal-left">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4101202/pexels-photo-4101202.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
                alt="Dr. Hannah Reichert"
                className="w-full h-[640px] object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#c9a96a] text-[#1f2420] p-8 w-56">
                <div className="font-serif text-5xl leading-none">24</div>
                <div className="text-[10px] tracking-[0.3em] uppercase mt-2">
                  Jahre Praxis & Begleitung
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
              — Ihre Therapeutin
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 reveal-zoom">
              Dr. med. <em className="italic text-[#8a9a82]">Hannah</em> Reichert
            </h2>
            <p className="text-lg md:text-xl text-[#1f2420]/75 font-light leading-relaxed mb-6 reveal">
              Fachärztin für Psychotherapie, Mitglied der Deutschen Gesellschaft für
              Psychiatrie, und seit über zwei Jahrzehnten überzeugte Adventistin.
              Ihre Arbeit verbindet tiefenpsychologische Methodik mit einer leisen,
              geduldigen Spiritualität.
            </p>
            <p className="text-lg md:text-xl text-[#1f2420]/75 font-light leading-relaxed mb-10 reveal">
              „Jeder Mensch trägt in sich einen Garten, der auf Pflege wartet. Meine
              Aufgabe ist nicht zu säen — sondern Licht hereinzulassen.”
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-[#c9a96a]/30 pt-10">
              {[
                { n: "2 400+", l: "Begleitete Menschen" },
                { n: "15", l: "Therapieformate" },
                { n: "98 %", l: "Weiterempfehlungen" },
              ].map((s, i) => (
                <div key={i} className="reveal-expand" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="font-serif text-4xl md:text-5xl text-[#3a4a3f] count-pop">
                    {s.n}
                  </div>
                  <div className="text-xs tracking-[0.2em] uppercase text-[#1f2420]/60 mt-2">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PILLARS / APPROACH */}
      <section className="py-32 bg-[#efe9df] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
              — Unser Weg
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl mx-auto reveal-zoom">
              Drei Säulen, auf denen jede <em className="italic text-[#8a9a82]">Begegnung</em> ruht.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                k: "01",
                t: "Wissenschaft",
                d: "Evidenzbasierte Verfahren — Verhaltenstherapie, Tiefenpsychologie, EMDR und systemische Ansätze.",
              },
              {
                k: "02",
                t: "Spiritualität",
                d: "Adventistische Werte als leiser Hintergrund: Hoffnung, Sabbatruhe, Ganzheitlichkeit.",
              },
              {
                k: "03",
                t: "Menschlichkeit",
                d: "Ein Raum ohne Urteil, ohne Eile. Hier sind Sie zuerst Mensch — nie nur Diagnose.",
              },
            ].map((p, i) => (
              <div
                key={p.k}
                className="group bg-[#f8f5ef] p-10 border border-transparent hover:border-[#c9a96a]/40 transition-all duration-700 hover:-translate-y-2 reveal"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="font-serif text-7xl text-[#c9a96a]/40 group-hover:text-[#c9a96a] transition-colors duration-700">
                  {p.k}
                </div>
                <h3 className="font-serif text-3xl mt-6 mb-5 text-[#1f2420]">{p.t}</h3>
                <p className="text-[#1f2420]/70 font-light leading-relaxed">{p.d}</p>
                <div className="mt-8 w-10 h-[1px] bg-[#c9a96a] group-hover:w-20 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMAGE GRID — gallery */}
      <section className="py-32 bg-[#f8f5ef] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal-left">
                — Momente aus der Praxis
              </div>
              <h2 className="font-serif text-5xl md:text-6xl max-w-xl reveal-zoom">
                Dort, wo <em className="italic text-[#8a9a82]">Vertrauen</em> wächst.
              </h2>
            </div>
            <Link
              to="/geschichte"
              className="link-ul text-xs tracking-[0.3em] uppercase text-[#1f2420]"
            >
              Unsere Geschichte ansehen →
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 reveal-expand">
              <div className="overflow-hidden h-[500px]">
                <img
                  src="https://images.pexels.com/photos/6255607/pexels-photo-6255607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400"
                  alt="Begleitung auf dem Sofa"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 grid gap-6">
              <div className="overflow-hidden h-[240px] reveal-right">
                <img
                  src="https://images.pexels.com/photos/16057247/pexels-photo-16057247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                  alt="Kind lacht"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
                />
              </div>
              <div className="overflow-hidden h-[240px] reveal-right" style={{ animationDelay: ".2s" }}>
                <img
                  src="https://images.pexels.com/photos/8806073/pexels-photo-8806073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                  alt="Älteres Paar"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUOTE / CTA */}
      <section className="py-32 bg-[#3a4a3f] text-[#f8f5ef] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/10601644/pexels-photo-10601644.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600)",
            backgroundSize: "cover",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="font-serif text-7xl text-[#c9a96a] mb-8">“</div>
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight italic reveal-zoom">
            Kommt her zu mir alle, die ihr mühselig und beladen seid;
            <span className="gold-shine not-italic"> ich will euch erquicken.</span>
          </blockquote>
          <div className="text-sm tracking-[0.3em] uppercase mt-10 text-white/60 reveal">
            — Matthäus 11,28
          </div>

          <Link
            to="/termine"
            className="inline-block mt-14 px-10 py-5 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500"
          >
            Ihren ersten Termin finden
          </Link>
        </div>
      </section>
    </main>
  );
}
