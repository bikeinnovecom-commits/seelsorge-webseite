import HeroCarousel from "../components/HeroCarousel";
import { useReveal } from "../hooks/useReveal";

const slides = [
  {
    img: "https://images.pexels.com/photos/8806073/pexels-photo-8806073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Seit 1998",
    title: (
      <>
        Eine Praxis, geboren aus <em className="gold-shine not-italic">Hoffnung</em>.
      </>
    ),
    subtitle:
      "Was als kleines Zimmer in Frankfurt begann, ist heute ein Ort der Zuwendung für über zweitausend Menschen geworden.",
  },
  {
    img: "https://images.pexels.com/photos/5082959/pexels-photo-5082959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Vier Generationen · Eine Vision",
    title: (
      <>
        Familie, Glaube und <em className="gold-shine not-italic">Fürsorge</em>.
      </>
    ),
    subtitle:
      "Von Großmutter Elise bis heute: ein stiller Faden adventistischer Nächstenliebe zieht sich durch unsere Geschichte.",
  },
];

const timeline = [
  { y: "1998", t: "Die ersten Schritte", d: "Dr. Hannah Reichert eröffnet ihre erste Praxis in einem umgebauten Pfarrzimmer in Frankfurt-Sachsenhausen." },
  { y: "2003", t: "Erweiterung des Teams", d: "Zwei Kolleginnen schließen sich an — die Praxis beginnt, Paartherapie und Kinderangebote zu formalisieren." },
  { y: "2010", t: "Umzug in die Lindenallee", d: "Ein stilles Altbauensemble wird zur neuen Heimat: hohe Räume, Lichtfluten, Garten." },
  { y: "2016", t: "EMDR und Trauma-Zentrum", d: "Spezialisierung auf Traumatherapie — in Zusammenarbeit mit der Universitätsklinik." },
  { y: "2021", t: "Sabbat-Retreats", d: "Erste Wochenend-Rückzüge auf einem adventistischen Landgut in der Rhön." },
  { y: "2026", t: "Heute", d: "Fünf Therapeutinnen, drei Kinderräume, ein ruhiges Zuhause für den Menschen." },
];

export default function Geschichte() {
  useReveal();

  return (
    <main className="page-enter">
      <HeroCarousel slides={slides} />

      {/* OPENING LETTER */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
            — Ein Brief
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-10 reveal-zoom">
            „Wir wurden <em className="italic text-[#8a9a82]">nicht gegründet</em> — <br />
            wir sind <span className="gold-shine">gewachsen</span>.”
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-[#1f2420]/75 reveal">
            Unsere Geschichte beginnt nicht mit einem Businessplan, sondern mit einer Frage:
            Was braucht ein Mensch, um wieder atmen zu können? Vor über fünfundzwanzig Jahren
            haben wir angefangen, auf diese Frage zu hören. Wir hören immer noch zu.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 bg-[#efe9df]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-5xl md:text-6xl reveal-zoom">
              Unsere <em className="italic text-[#8a9a82]">Chronik</em>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#c9a96a]/40" />
            <div className="space-y-16">
              {timeline.map((e, i) => (
                <div
                  key={e.y}
                  className={`relative grid md:grid-cols-2 gap-10 items-center ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"} reveal-left pl-16 md:pl-0`}>
                    <div className="font-serif text-6xl md:text-7xl text-[#c9a96a]">{e.y}</div>
                  </div>
                  <div className={`${i % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"} reveal-right pl-16 md:pl-10`}>
                    <h3 className="font-serif text-2xl md:text-3xl mb-3">{e.t}</h3>
                    <p className="text-[#1f2420]/70 font-light leading-relaxed">{e.d}</p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c9a96a] border-4 border-[#efe9df]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES WITH IMAGE */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="overflow-hidden h-[600px]">
              <img
                src="https://images.pexels.com/photos/15648189/pexels-photo-15648189.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800"
                alt="Kind im Garten"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
              />
            </div>
          </div>
          <div className="reveal-right">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6">— Unsere Werte</div>
            <h2 className="font-serif text-5xl md:text-6xl mb-10 leading-tight">
              Was uns <em className="italic text-[#8a9a82]">trägt</em>.
            </h2>

            {[
              {
                t: "Sabbatruhe",
                d: "Ein Rhythmus von Arbeit und Innehalten — der Körper darf, was die Seele braucht.",
              },
              {
                t: "Ganzheitlichkeit",
                d: "Wir sehen Körper, Geist und Seele als eine untrennbare Einheit.",
              },
              {
                t: "Hoffnung",
                d: "Nicht als Phrase, sondern als Praxis. Es gibt immer einen nächsten Schritt.",
              },
              {
                t: "Vertraulichkeit",
                d: "Alles, was in unseren Räumen geteilt wird, bleibt dort.",
              },
            ].map((v, i) => (
              <div
                key={v.t}
                className="border-t border-[#c9a96a]/30 py-6 reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-serif text-2xl mb-2">{v.t}</h3>
                <p className="text-[#1f2420]/70 font-light">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-32 bg-[#3a4a3f] text-[#f8f5ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="font-serif text-6xl text-[#c9a96a] mb-6">“</div>
          <blockquote className="font-serif text-3xl md:text-5xl italic leading-tight reveal-zoom">
            Jeder Mensch, der durch unsere Tür geht, bringt eine Geschichte mit.
            <span className="gold-shine not-italic"> Unser Werk ist, zuzuhören.</span>
          </blockquote>
          <div className="text-sm tracking-[0.3em] uppercase mt-10 text-white/60">
            — Dr. Hannah Reichert
          </div>
        </div>
      </section>
    </main>
  );
}
