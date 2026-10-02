export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden py-10 border-y border-[#c9a96a]/20 bg-[#efe9df]">
      <div className="marquee-track flex whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-10">
            <span className="font-serif text-3xl md:text-5xl italic text-[#3a4a3f]">{t}</span>
            <span className="text-[#c9a96a] text-3xl">✧</span>
          </div>
        ))}
      </div>
    </div>
  );
}
