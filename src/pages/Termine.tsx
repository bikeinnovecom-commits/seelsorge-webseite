import HeroCarousel from "../components/HeroCarousel";
import { useReveal } from "../hooks/useReveal";
import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const SLIDE_IMGS = [
  "https://images.pexels.com/photos/4098290/pexels-photo-4098290.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
  "https://images.pexels.com/photos/6255607/pexels-photo-6255607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
];

const slotTimes = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

export default function Termine() {
  useReveal();
  const { t } = useLanguage();
  const tr = t.termine;
  const hero = t.hero;

  const now = new Date();
  const [cursor, setCursor] = useState(new Date(now.getFullYear(), now.getMonth(), 1));
  const [picked, setPicked] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [typeIdx, setTypeIdx] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

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

  const days = useMemo(() => {
    const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    const last = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);
    const start = (first.getDay() + 6) % 7;
    const total = last.getDate();
    const arr: (Date | null)[] = [];
    for (let i = 0; i < start; i++) arr.push(null);
    for (let d = 1; d <= total; d++) arr.push(new Date(cursor.getFullYear(), cursor.getMonth(), d));
    while (arr.length % 7 !== 0) arr.push(null);
    return arr;
  }, [cursor]);

  const sameDay = (a: Date | null, b: Date | null) =>
    !!a && !!b && a.toDateString() === b.toDateString();

  const isPast = (d: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d < today;
  };

  const isSabbath = (d: Date) => d.getDay() === 6;

  const displayDate = picked
    ? `${picked.getDate()}. ${tr.months[picked.getMonth()]} ${picked.getFullYear()}`
    : tr.chooseDate;

  return (
    <main className="page-enter">
      <HeroCarousel
        slides={slides}
        ctaBook={hero.ctaBook}
        ctaLearn={hero.ctaLearn}
        scrollHint={hero.scroll}
      />

      {/* INTRO */}
      <section className="py-28 bg-[#f8f5ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
            {tr.introEyebrow}
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-10 reveal-zoom">
            {tr.introPre}<em className="italic text-[#8a9a82]">{tr.introEm}</em>{tr.introPost}
          </h2>
          <p className="text-lg md:text-xl font-light text-[#1f2420]/75 reveal">
            {tr.introText}
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <section className="pb-32 bg-[#f8f5ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          {/* CALENDAR */}
          <div className="lg:col-span-3 bg-[#efe9df] p-8 md:p-12 reveal-expand">
            <div className="flex items-center justify-between mb-10">
              <button
                onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
                className="w-12 h-12 border border-[#c9a96a]/50 text-[#3a4a3f] hover:bg-[#c9a96a] hover:text-white transition-all duration-500"
                aria-label={tr.prevMonth}
              >
                ←
              </button>
              <h3 className="font-serif text-3xl md:text-4xl">
                {tr.months[cursor.getMonth()]} <span className="text-[#c9a96a]">{cursor.getFullYear()}</span>
              </h3>
              <button
                onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
                className="w-12 h-12 border border-[#c9a96a]/50 text-[#3a4a3f] hover:bg-[#c9a96a] hover:text-white transition-all duration-500"
                aria-label={tr.nextMonth}
              >
                →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-3">
              {tr.weekdays.map((w) => (
                <div key={w} className="text-center text-[10px] tracking-[0.3em] uppercase text-[#1f2420]/50 py-2">
                  {w}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((d, i) => {
                if (!d) return <div key={i} />;
                const past = isPast(d);
                const sabbath = isSabbath(d);
                const disabled = past || sabbath;
                const picked_ = sameDay(d, picked);
                return (
                  <button
                    key={i}
                    disabled={disabled}
                    onClick={() => {
                      setPicked(d);
                      setSlot(null);
                      setConfirmed(false);
                    }}
                    className={`aspect-square flex flex-col items-center justify-center text-sm transition-all duration-500 ${
                      disabled
                        ? "text-[#1f2420]/20 cursor-not-allowed line-through"
                        : picked_
                        ? "bg-[#3a4a3f] text-[#f8f5ef] shadow-lg scale-105"
                        : "bg-[#f8f5ef] hover:bg-[#c9a96a] hover:text-white"
                    }`}
                  >
                    <span className="font-serif text-xl">{d.getDate()}</span>
                    {sabbath && (
                      <span className="text-[9px] tracking-widest uppercase mt-0.5">{tr.sabbath}</span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex gap-4 mt-8 text-[11px] tracking-widest uppercase text-[#1f2420]/60">
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#3a4a3f]"></span> {tr.legendSelected}</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#f8f5ef] border border-[#c9a96a]/40"></span> {tr.legendAvailable}</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-transparent border border-[#1f2420]/20"></span> {tr.legendSabbath}</span>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2 reveal-right">
            <h3 className="font-serif text-3xl mb-8">{displayDate}</h3>

            <div className="mb-8">
              <label className="text-xs tracking-[0.3em] uppercase text-[#1f2420]/60 block mb-4">
                {tr.typeLabel}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {tr.types.map((typeName, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTypeIdx(idx)}
                    className={`py-3 text-xs tracking-[0.15em] uppercase border transition-all duration-500 ${
                      typeIdx === idx
                        ? "bg-[#c9a96a] text-[#1f2420] border-[#c9a96a]"
                        : "border-[#1f2420]/20 text-[#1f2420]/70 hover:border-[#c9a96a]"
                    }`}
                  >
                    {typeName}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="text-xs tracking-[0.3em] uppercase text-[#1f2420]/60 block mb-4">
                {tr.timesLabel}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {slotTimes.map((s) => (
                  <button
                    key={s}
                    disabled={!picked}
                    onClick={() => setSlot(s)}
                    className={`py-3 font-serif text-lg border transition-all duration-500 ${
                      !picked
                        ? "border-[#1f2420]/10 text-[#1f2420]/20 cursor-not-allowed"
                        : slot === s
                        ? "bg-[#3a4a3f] text-[#f8f5ef] border-[#3a4a3f]"
                        : "border-[#1f2420]/20 hover:border-[#c9a96a]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={!picked || !slot}
              onClick={() => setConfirmed(true)}
              className="w-full py-5 bg-[#1f2420] text-[#f8f5ef] text-xs tracking-[0.3em] uppercase hover:bg-[#c9a96a] hover:text-[#1f2420] disabled:bg-[#1f2420]/20 disabled:cursor-not-allowed transition-all duration-500"
            >
              {tr.confirmBtn}
            </button>

            {confirmed && picked && slot && (
              <div
                className="mt-8 p-6 bg-[#efe9df] border-l-2 border-[#c9a96a]"
                style={{ animation: "fadeUp 0.8s ease-out" }}
              >
                <div className="text-xs tracking-[0.3em] uppercase text-[#c9a96a] mb-2">{tr.confirmedBadge}</div>
                <p className="font-serif text-xl leading-snug">
                  {tr.confirmFmt(
                    tr.types[typeIdx],
                    picked.getDate(),
                    tr.months[picked.getMonth()],
                    picked.getFullYear(),
                    slot
                  )}
                </p>
                <p className="text-sm font-light text-[#1f2420]/70 mt-3">
                  {tr.confirmNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEE / INFO */}
      <section className="py-32 bg-[#efe9df]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <h2 className="font-serif text-5xl md:text-6xl mb-16 text-center reveal-zoom">
            {tr.feesPre}<em className="italic text-[#8a9a82]">{tr.feesEm}</em>{tr.feesPost}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {tr.fees.map((f, i) => (
              <div
                key={f.t}
                className="bg-[#f8f5ef] p-10 text-center hover:-translate-y-2 transition-transform duration-700 reveal"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="text-xs tracking-[0.3em] uppercase text-[#1f2420]/60 mb-4">{f.t}</div>
                <div className="font-serif text-6xl text-[#c9a96a] mb-4">{f.p}</div>
                <p className="text-[#1f2420]/70 font-light">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
