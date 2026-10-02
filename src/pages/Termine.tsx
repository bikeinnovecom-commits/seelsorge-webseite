import HeroCarousel from "../components/HeroCarousel";
import { useReveal } from "../hooks/useReveal";
import { useMemo, useState } from "react";

const slides = [
  {
    img: "https://images.pexels.com/photos/4098290/pexels-photo-4098290.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Terminkalender",
    title: (
      <>
        Ihr erster <em className="gold-shine not-italic">ruhiger</em> Schritt.
      </>
    ),
    subtitle:
      "Buchen Sie online, telefonisch oder per Mail — wir melden uns innerhalb von 24 Stunden mit einer persönlichen Bestätigung.",
  },
  {
    img: "https://images.pexels.com/photos/6255607/pexels-photo-6255607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000",
    eyebrow: "Mo–Fr · 8–19 Uhr · Sabbat geschlossen",
    title: (
      <>
        Zeit, die <em className="gold-shine not-italic">Ihnen</em> gehört.
      </>
    ),
    subtitle:
      "Erstgespräche kostenfrei, 15 Minuten Telefon oder Video. Keine Verpflichtung, nur Begegnung.",
  },
];

const months = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];
const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const slotTimes = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];

export default function Termine() {
  useReveal();
  const now = new Date();
  const [cursor, setCursor] = useState(new Date(now.getFullYear(), now.getMonth(), 1));
  const [picked, setPicked] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [type, setType] = useState<string>("Erstgespräch");
  const [confirmed, setConfirmed] = useState(false);

  const days = useMemo(() => {
    const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    const last = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0);
    const start = (first.getDay() + 6) % 7; // Monday = 0
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

  const isSabbath = (d: Date) => d.getDay() === 6; // Saturday closed

  return (
    <main className="page-enter">
      <HeroCarousel slides={slides} />

      {/* INTRO */}
      <section className="py-28 bg-[#f8f5ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
            — Terminvereinbarung
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-10 reveal-zoom">
            Wählen Sie Ihren <em className="italic text-[#8a9a82]">Moment</em>.
          </h2>
          <p className="text-lg md:text-xl font-light text-[#1f2420]/75 reveal">
            Unser Kalender ist bewusst einfach gehalten. Wählen Sie Datum und Uhrzeit —
            den Rest besprechen wir im persönlichen Erstkontakt.
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
                aria-label="Vorheriger Monat"
              >
                ←
              </button>
              <h3 className="font-serif text-3xl md:text-4xl">
                {months[cursor.getMonth()]} <span className="text-[#c9a96a]">{cursor.getFullYear()}</span>
              </h3>
              <button
                onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
                className="w-12 h-12 border border-[#c9a96a]/50 text-[#3a4a3f] hover:bg-[#c9a96a] hover:text-white transition-all duration-500"
                aria-label="Nächster Monat"
              >
                →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-3">
              {weekdays.map((w) => (
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
                      <span className="text-[9px] tracking-widest uppercase mt-0.5">Sabbat</span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex gap-4 mt-8 text-[11px] tracking-widest uppercase text-[#1f2420]/60">
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#3a4a3f]"></span> Ausgewählt</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#f8f5ef] border border-[#c9a96a]/40"></span> Verfügbar</span>
              <span className="flex items-center gap-2"><span className="w-3 h-3 bg-transparent border border-[#1f2420]/20"></span> Sabbat / Vergangen</span>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2 reveal-right">
            <h3 className="font-serif text-3xl mb-8">
              {picked
                ? `${picked.getDate()}. ${months[picked.getMonth()]} ${picked.getFullYear()}`
                : "Datum wählen"}
            </h3>

            <div className="mb-8">
              <label className="text-xs tracking-[0.3em] uppercase text-[#1f2420]/60 block mb-4">
                Art des Gesprächs
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Erstgespräch", "Einzeltherapie", "Paartherapie", "Kindertherapie"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`py-3 text-xs tracking-[0.15em] uppercase border transition-all duration-500 ${
                      type === t
                        ? "bg-[#c9a96a] text-[#1f2420] border-[#c9a96a]"
                        : "border-[#1f2420]/20 text-[#1f2420]/70 hover:border-[#c9a96a]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="text-xs tracking-[0.3em] uppercase text-[#1f2420]/60 block mb-4">
                Verfügbare Uhrzeiten
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
              Termin bestätigen
            </button>

            {confirmed && picked && slot && (
              <div
                className="mt-8 p-6 bg-[#efe9df] border-l-2 border-[#c9a96a]"
                style={{ animation: "fadeUp 0.8s ease-out" }}
              >
                <div className="text-xs tracking-[0.3em] uppercase text-[#c9a96a] mb-2">✓ Angefragt</div>
                <p className="font-serif text-xl leading-snug">
                  {type} am {picked.getDate()}. {months[picked.getMonth()]} um {slot} Uhr.
                </p>
                <p className="text-sm font-light text-[#1f2420]/70 mt-3">
                  Wir melden uns innerhalb von 24 Stunden mit einer persönlichen Bestätigung.
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
            Honorare & <em className="italic text-[#8a9a82]">Rahmen</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Erstgespräch", p: "0 €", d: "15 Minuten telefonisch — unverbindlich." },
              { t: "Einzelsitzung", p: "140 €", d: "50 Minuten, einfühlsam und strukturiert." },
              { t: "Paartherapie", p: "180 €", d: "80 Minuten, mit Pause und Reflexionsraum." },
            ].map((f, i) => (
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
