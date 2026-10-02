import HeroCarousel from "../components/HeroCarousel";
import { useReveal } from "../hooks/useReveal";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const SLIDE_IMGS = [
  "https://images.pexels.com/photos/5699449/pexels-photo-5699449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  "https://images.pexels.com/photos/8806081/pexels-photo-8806081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
];

export default function Kontakt() {
  useReveal();
  const { t } = useLanguage();
  const tr = t.kontakt;
  const hero = t.hero;
  const [sent, setSent] = useState(false);

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

  const infoItems = [
    {
      h: tr.addrH,
      l: <>{tr.addrL1}<br />{tr.addrL2}</>,
    },
    {
      h: tr.phoneH,
      l: <a href="tel:+496912345678" className="link-ul">+49 69 1234 5678</a>,
    },
    {
      h: tr.emailH,
      l: <a href="mailto:praxis@sanctus-anima.de" className="link-ul">praxis@sanctus-anima.de</a>,
    },
    {
      h: tr.hoursH,
      l: (
        <>
          {tr.hoursL1}<br />
          {tr.hoursL2}<br />
          {tr.hoursL3}<br />
          {tr.hoursL4}
        </>
      ),
    },
  ];

  return (
    <main className="page-enter">
      <HeroCarousel
        slides={slides}
        ctaBook={hero.ctaBook}
        ctaLearn={hero.ctaLearn}
        scrollHint={hero.scroll}
      />

      {/* INFO + FORM */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-16">
          {/* INFO LEFT */}
          <div className="lg:col-span-2 reveal-left">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6">{tr.infoEyebrow}</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-12">
              {tr.infoPre}<em className="italic text-[#8a9a82]">{tr.infoEm}</em>{tr.infoPost}
            </h2>

            <div className="space-y-10">
              {infoItems.map((item, i) => (
                <div
                  key={item.h}
                  className="border-t border-[#c9a96a]/30 pt-6 reveal"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96a] mb-3">
                    {item.h}
                  </div>
                  <div className="font-serif text-xl md:text-2xl text-[#1f2420] leading-relaxed">
                    {item.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM RIGHT */}
          <div className="lg:col-span-3 bg-[#efe9df] p-10 md:p-14 reveal-right">
            <h3 className="font-serif text-4xl mb-3">{tr.formTitle}</h3>
            <p className="text-[#1f2420]/60 font-light mb-10">{tr.formSub}</p>

            {sent ? (
              <div
                className="py-20 text-center"
                style={{ animation: "zoomIn 1s ease-out" }}
              >
                <div className="font-serif text-5xl text-[#c9a96a] mb-6">✓</div>
                <h4 className="font-serif text-3xl mb-4">{tr.successTitle}</h4>
                <p className="text-[#1f2420]/70 font-light max-w-md mx-auto">
                  {tr.successText}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-7"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label={tr.firstName} />
                  <Input label={tr.lastName} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label={tr.emailF} type="email" />
                  <Input label={tr.phoneF} type="tel" required={false} />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#1f2420]/60 block mb-3">
                    {tr.subjectL}
                  </label>
                  <select className="w-full bg-transparent border-b border-[#1f2420]/30 py-3 font-serif text-xl focus:outline-none focus:border-[#c9a96a]">
                    {tr.subjects.map((subj) => (
                      <option key={subj}>{subj}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#1f2420]/60 block mb-3">
                    {tr.messageL}
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-[#1f2420]/30 py-3 font-serif text-xl focus:outline-none focus:border-[#c9a96a] resize-none"
                    placeholder={tr.messagePH}
                  />
                </div>
                <label className="flex items-start gap-3 text-sm font-light text-[#1f2420]/70">
                  <input type="checkbox" required className="mt-1 accent-[#c9a96a]" />
                  {tr.consent}
                </label>
                <button
                  type="submit"
                  className="w-full py-5 bg-[#1f2420] text-[#f8f5ef] text-xs tracking-[0.3em] uppercase hover:bg-[#c9a96a] hover:text-[#1f2420] transition-all duration-500"
                >
                  {tr.submitBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP + VISIT */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center ken-burns"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/10601644/pexels-photo-10601644.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=2000)",
          }}
        />
        <div className="absolute inset-0 bg-[#1f2420]/70" />
        <div className="relative h-full flex items-center justify-center text-center text-[#f8f5ef] px-6">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
              {tr.mapEyebrow}
            </div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8 reveal-zoom">
              {tr.mapPre}<em className="italic">{tr.mapEm}</em>{tr.mapPost}
            </h2>
            <p className="font-light text-white/80 max-w-lg mx-auto reveal">
              {tr.mapText}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({ label, type = "text", required = true }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.4em] uppercase text-[#1f2420]/60 block mb-3">
        {label}
      </label>
      <input
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-[#1f2420]/30 py-3 font-serif text-xl focus:outline-none focus:border-[#c9a96a] transition-colors"
      />
    </div>
  );
}
