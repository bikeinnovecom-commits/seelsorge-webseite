import HeroCarousel from "../components/HeroCarousel";
import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";

const slides = [
  {
    img: "https://images.pexels.com/photos/5699449/pexels-photo-5699449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Unsere Therapie",
    title: (
      <>
        Methoden, die den <em className="gold-shine not-italic">ganzen Menschen</em> sehen.
      </>
    ),
    subtitle:
      "Zehn Formate — eine Haltung. Ob Einzelgespräch, Paartherapie oder Familienbegleitung: Jede Sitzung ist ein stiller Akt der Zuwendung.",
  },
  {
    img: "https://images.pexels.com/photos/6255624/pexels-photo-6255624.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Verhaltenstherapie · Tiefenpsychologie · EMDR",
    title: (
      <>
        Wissenschaft trifft <em className="gold-shine not-italic">Mitgefühl</em>.
      </>
    ),
    subtitle:
      "Fundierte Verfahren mit über vier Jahrzehnten klinischer Evidenz, in einem Rahmen von Ruhe und Vertrauen.",
  },
  {
    img: "https://images.pexels.com/photos/15648189/pexels-photo-15648189.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Kinder- und Jugendpsychotherapie",
    title: (
      <>
        Für die <em className="gold-shine not-italic">Kleinen</em>, die Großes fühlen.
      </>
    ),
    subtitle:
      "Spiel-, Mal- und Gesprächstherapie — eingebettet in eine ruhige, kindgerechte Praxisumgebung.",
  },
];

const therapies = [
  {
    k: "01",
    t: "Verhaltenstherapie",
    d: "Konkrete Werkzeuge, um festgefahrene Muster zu lösen und neue Lebenswege zu etablieren.",
    img: "https://images.pexels.com/photos/4098181/pexels-photo-4098181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    k: "02",
    t: "Tiefenpsychologie",
    d: "Spurensuche in der eigenen Biografie — behutsam, respektvoll, über mehrere Monate.",
    img: "https://images.pexels.com/photos/6255607/pexels-photo-6255607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    k: "03",
    t: "EMDR Traumatherapie",
    d: "Augenbewegungsmethode zur Verarbeitung von Belastungen, Schock und Verlust.",
    img: "https://images.pexels.com/photos/5700138/pexels-photo-5700138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    k: "04",
    t: "Paartherapie",
    d: "Zwischen zwei Menschen entsteht wieder ein Dritter: der Dialog.",
    img: "https://images.pexels.com/photos/8806081/pexels-photo-8806081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    k: "05",
    t: "Familientherapie",
    d: "Systemische Begleitung — Konflikte verstehen, Nähe neu kalibrieren.",
    img: "https://images.pexels.com/photos/5082960/pexels-photo-5082960.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    k: "06",
    t: "Spielerische Kindertherapie",
    d: "Für Kinder von 4 bis 14. Hier spricht man mit Händen, Puppen und Farben.",
    img: "https://images.pexels.com/photos/5275849/pexels-photo-5275849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
];

export default function Therapie() {
  useReveal();

  return (
    <main className="page-enter">
      <HeroCarousel slides={slides} />

      {/* INTRO */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
            — Unsere Haltung
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-10 reveal-zoom">
            Nicht reparieren. <em className="italic text-[#8a9a82]">Begleiten.</em>
          </h2>
          <p className="text-xl md:text-2xl text-[#1f2420]/75 font-light leading-relaxed reveal">
            Wir glauben: Heilung ist kein Projekt, sondern ein Prozess. Jede Methode ist nur
            ein Werkzeug — das Wesentliche ist die Beziehung, die zwischen Ihnen und Ihrer
            Therapeutin entsteht. Behutsam. Vertraulich. In Ihrem eigenen Rhythmus.
          </p>
        </div>
      </section>

      {/* THERAPY GRID */}
      <section className="py-32 bg-[#efe9df]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <h2 className="font-serif text-5xl md:text-6xl reveal-left">
              Unsere <em className="italic text-[#8a9a82]">Methoden</em>
            </h2>
            <div className="text-xs tracking-[0.3em] uppercase text-[#1f2420]/60 reveal-right">
              Sechs von vielen Wegen
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapies.map((th, i) => (
              <article
                key={th.k}
                className="group reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="overflow-hidden h-80 mb-6">
                  <img
                    src={th.img}
                    alt={th.t}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1800ms]"
                  />
                </div>
                <div className="flex items-start gap-5">
                  <div className="font-serif text-3xl text-[#c9a96a]">{th.k}</div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2 text-[#1f2420]">{th.t}</h3>
                    <p className="text-[#1f2420]/70 font-light leading-relaxed">{th.d}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — horizontal timeline */}
      <section className="py-32 bg-[#f8f5ef] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
              — Ihr Weg bei uns
            </div>
            <h2 className="font-serif text-5xl md:text-6xl reveal-zoom">
              Vier <em className="italic text-[#8a9a82]">Schritte</em> zur ersten Sitzung
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-14 left-0 right-0 h-[1px] bg-[#c9a96a]/30 hidden md:block" />
            <div className="grid md:grid-cols-4 gap-10 relative">
              {[
                { n: "I", t: "Kennenlernen", d: "15-minütiges kostenfreies Telefonat zum ersten Austausch." },
                { n: "II", t: "Erstgespräch", d: "60 Minuten Zeit, um Ihr Anliegen gemeinsam zu verstehen." },
                { n: "III", t: "Methodenwahl", d: "Wir empfehlen das Verfahren, das wirklich zu Ihnen passt." },
                { n: "IV", t: "Begleitung", d: "Regelmäßige Sitzungen in Ihrem Rhythmus — mit Pausen, wenn nötig." },
              ].map((s, i) => (
                <div
                  key={s.n}
                  className="text-center reveal-expand bg-[#f8f5ef] px-4"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-28 h-28 mx-auto rounded-full border border-[#c9a96a] bg-[#f8f5ef] flex items-center justify-center font-serif text-3xl text-[#3a4a3f] mb-6">
                    {s.n}
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{s.t}</h3>
                  <p className="text-sm font-light text-[#1f2420]/70 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-[#3a4a3f] text-[#f8f5ef] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
            — Stimmen aus der Praxis
          </div>
          <h2 className="font-serif text-5xl md:text-6xl mb-16 max-w-3xl reveal-zoom">
            Was unsere Patienten <em className="italic">erzählen</em>.
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                q: "Zum ersten Mal seit Jahren konnte ich still sitzen, ohne mich zu entschuldigen. Das war der Anfang von allem.",
                n: "Marlene, 42",
              },
              {
                q: "Die adventistische Grundhaltung hat mich berührt — ohne mich je zu etwas zu drängen. Nur Raum, nur Zeit.",
                n: "Jonas, 35",
              },
              {
                q: "Unsere Tochter hat hier wieder Freude am Zeichnen gefunden. Für uns als Familie ein Geschenk.",
                n: "Familie Weiß",
              },
            ].map((t, i) => (
              <blockquote
                key={i}
                className="border-l-2 border-[#c9a96a] pl-6 reveal"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
                  „{t.q}”
                </p>
                <div className="text-xs tracking-[0.3em] uppercase text-[#c9a96a]">— {t.n}</div>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/termine"
              className="inline-block px-10 py-5 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500"
            >
              Jetzt Termin buchen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
