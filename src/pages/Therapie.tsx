import HeroCarousel from "../components/HeroCarousel";
import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const METHOD_IMGS = [
  "https://images.pexels.com/photos/4098181/pexels-photo-4098181.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  "https://images.pexels.com/photos/6255607/pexels-photo-6255607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  "https://images.pexels.com/photos/5700138/pexels-photo-5700138.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  "https://images.pexels.com/photos/8806081/pexels-photo-8806081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  "https://images.pexels.com/photos/5082960/pexels-photo-5082960.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  "https://images.pexels.com/photos/5275849/pexels-photo-5275849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
];

const SLIDE_IMGS = [
  "https://images.pexels.com/photos/5699449/pexels-photo-5699449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  "https://images.pexels.com/photos/6255624/pexels-photo-6255624.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  "https://images.pexels.com/photos/15648189/pexels-photo-15648189.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
];

export default function Therapie() {
  useReveal();
  const { t } = useLanguage();
  const tr = t.therapie;
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

      {/* INTRO */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
            {tr.introEyebrow}
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-10 reveal-zoom">
            {tr.introPre}<em className="italic text-[#8a9a82]">{tr.introEm}</em>{tr.introPost}
          </h2>
          <p className="text-xl md:text-2xl text-[#1f2420]/75 font-light leading-relaxed reveal">
            {tr.introText}
          </p>
        </div>
      </section>

      {/* THERAPY GRID */}
      <section className="py-32 bg-[#efe9df]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <h2 className="font-serif text-5xl md:text-6xl reveal-left">
              {tr.methodsPre}<em className="italic text-[#8a9a82]">{tr.methodsEm}</em>{tr.methodsPost}
            </h2>
            <div className="text-xs tracking-[0.3em] uppercase text-[#1f2420]/60 reveal-right">
              {tr.methodsSub}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tr.methods.map((th, i) => (
              <article
                key={th.k}
                className="group reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="overflow-hidden h-80 mb-6">
                  <img
                    src={METHOD_IMGS[i]}
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

      {/* PROCESS */}
      <section className="py-32 bg-[#f8f5ef] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
              {tr.processEyebrow}
            </div>
            <h2 className="font-serif text-5xl md:text-6xl reveal-zoom">
              {tr.processPre}<em className="italic text-[#8a9a82]">{tr.processEm}</em>{tr.processPost}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-14 left-0 right-0 h-[1px] bg-[#c9a96a]/30 hidden md:block" />
            <div className="grid md:grid-cols-4 gap-10 relative">
              {tr.steps.map((s, i) => (
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
            {tr.testimonialsEyebrow}
          </div>
          <h2 className="font-serif text-5xl md:text-6xl mb-16 max-w-3xl reveal-zoom">
            {tr.testimonialsPre}<em className="italic">{tr.testimonialsEm}</em>{tr.testimonialsPost}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {tr.testimonials.map((item, i) => (
              <blockquote
                key={i}
                className="border-l-2 border-[#c9a96a] pl-6 reveal"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
                  „{item.q}"
                </p>
                <div className="text-xs tracking-[0.3em] uppercase text-[#c9a96a]">— {item.n}</div>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              to="/termine"
              className="inline-block px-10 py-5 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500"
            >
              {tr.testimonialsCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
