'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface FeaturesProps {
  t: any;
}

export default function Features({ t }: FeaturesProps) {
  const container = useRef(null);

  return (
    <section ref={container} id="features" className="py-64 px-10 md:px-20 relative bg-transparent">
      <div className="w-full flex flex-col lg:flex-row gap-24 relative z-10 max-w-[1800px] mx-auto">
        <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
           <div className="flex items-center gap-3 mb-6">
             <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
             <h2 className="text-[10px] text-white/40 tracking-[0.4em] uppercase font-bold">{t.features.label}</h2>
           </div>
          <h3 className="text-7xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] mb-12 drop-shadow-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">{t.features.title}</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 via-white/30 to-white/10 italic font-serif">{t.features.titleSuffix}</span>
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-white to-transparent" />
        </div>

        <div className="lg:w-1/2 space-y-32 lg:pt-64">
          {t.features.items.map((item: any, i: number) => (
             <FeatureCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div 
      ref={ref}
      style={{ x }}
      className="p-16 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-[20px] relative overflow-hidden group transition-colors duration-700 shadow-[0_0_60px_rgba(0,0,0,0.5)]"
    >
      <div className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full bg-gradient-to-b from-white via-white/50 to-transparent transition-all duration-700 ease-in-out" />
      <div className="text-[180px] font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-700 absolute -right-10 -bottom-16 select-none leading-none">
         0{index + 1}
      </div>
      
      <div className="relative z-10">
        <h4 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none drop-shadow-lg">
          {item.title}.
        </h4>
        <p className="text-white/50 text-xl font-medium leading-relaxed max-w-sm">
          {item.desc}
        </p>
        
        <div className="mt-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 group/btn cursor-pointer">
           <span className="group-hover/btn:text-white group-hover/btn:mr-4 transition-all duration-300">Explore Module</span>
           <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-white transition-colors duration-300">
             <ArrowRight className="w-3 h-3 text-white/50 group-hover/btn:text-white" />
           </div>
        </div>
      </div>
    </motion.div>
  );
}
