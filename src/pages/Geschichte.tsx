import HeroCarousel from "../components/HeroCarousel";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";

const SLIDE_IMGS = [
  "https://images.pexels.com/photos/8806073/pexels-photo-8806073.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  "https://images.pexels.com/photos/5082959/pexels-photo-5082959.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
];

export default function Geschichte() {
  useReveal();
  const { t } = useLanguage();
  const tr = t.geschichte;
  const hero = t.hero;

  const slides = tr.slides.map((s, i) => ({
    img: SLIDE_IMGS[i],
    eyebrow: s.eyebrow,
    title: (
      <>
        {s.pre}<em className="gold-shine not-italic">{s.em}</em>{s.post}
      </>
    ),
    subtitle: s.subtitle,
  }));

  return (
    <main className="page-enter">
      <HeroCarousel
        slides={slides}
        ctaBook={hero.ctaBook}
        ctaLearn={hero.ctaLearn}
        scrollHint={hero.scroll}
      />

      {/* OPENING LETTER */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-10 reveal">
            {tr.letterEyebrow}
          </div>
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#1f2420] mb-8 reveal-zoom">
            {tr.letterP1}
          </p>
          <p className="font-serif text-xl md:text-2xl font-light leading-relaxed text-[#1f2420]/75 reveal">
            {tr.letterP2}
          </p>
        </div>
      </section>

      {/* BIOGRAPHIE */}
      <section className="py-32 bg-[#efe9df]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="relative h-[600px] bg-[#f8f5ef] border-2 border-dashed border-[#c9a96a]/40 flex flex-col items-center justify-center gap-4 group hover:border-[#c9a96a] transition-colors duration-500">
              {/* Portrait silhouette */}
              <svg
                viewBox="0 0 80 80"
                className="w-20 h-20 text-[#c9a96a]/40 group-hover:text-[#c9a96a] transition-colors duration-500"
                fill="currentColor"
              >
                <circle cx="40" cy="28" r="16" />
                <path d="M8 72c0-17.7 14.3-32 32-32s32 14.3 32 32" />
              </svg>
              <div className="text-[10px] tracking-[0.5em] uppercase text-[#c9a96a]/60 group-hover:text-[#c9a96a] transition-colors duration-500">
                {tr.bioPhotoLabel}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 reveal-right">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6">{tr.bioEyebrow}</div>
            <div className="space-y-6">
              {tr.bioParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-serif font-light text-xl md:text-2xl leading-relaxed text-[#1f2420]"
                >
                  {p}
                </p>
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
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6">{tr.valuesEyebrow}</div>
            <h2 className="font-serif text-5xl md:text-6xl mb-10 leading-tight">
              {tr.valuesPre}<em className="italic text-[#8a9a82]">{tr.valuesEm}</em>{tr.valuesPost}
            </h2>

            {tr.values.map((v, i) => (
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
          <div className="font-serif text-6xl text-[#c9a96a] mb-6">"</div>
          <blockquote className="font-serif text-3xl md:text-5xl italic leading-tight reveal-zoom">
            {tr.quotePre}
            <span className="gold-shine not-italic">{tr.quoteEm}</span>
          </blockquote>
          <div className="text-sm tracking-[0.3em] uppercase mt-10 text-white/60">
            {tr.quoteSource}
          </div>
        </div>
      </section>
    </main>
  );
}
