'use client';

interface StatsProps {
  t: any;
}

export default function Stats({ t }: StatsProps) {
  return (
    <section className="py-40 px-10 md:px-20 border-y border-white/5 relative overflow-hidden bg-transparent backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 relative z-10">
        {t.stats.map((s: any, i: number) => (
          <div 
            key={i}
            className="text-left flex flex-col items-start border-l-2 border-white/10 pl-10 hover:border-white transition-colors duration-500"
          >
            <h4 className="text-6xl md:text-[6rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 drop-shadow-2xl leading-none mb-6">
              {s.value}
            </h4>
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
