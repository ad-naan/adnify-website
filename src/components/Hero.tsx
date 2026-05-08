'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Play } from 'lucide-react';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yData = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[900px] flex items-center overflow-hidden pt-20">
      
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between">
        
        <motion.div 
          style={{ y: yContent, opacity }} 
          className="w-full lg:w-3/5 flex flex-col items-start text-left"
        >
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="mb-10"
          >
            <div className="px-6 py-2 border border-white/10 backdrop-blur-md rounded-full flex items-center gap-3">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50 shadow-sm">
                 {t.hero.badge}
               </span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] font-black uppercase tracking-tighter mb-6"
            initial={{ opacity: 0, filter: 'blur(30px)', x: -40 }}
            animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-[#E0E0E0] to-[#555555] drop-shadow-2xl">
              {t.hero.title}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/70 via-white/40 to-white/20 italic font-serif tracking-normal mt-2 lg:mt-4">
              {t.hero.titleSuffix}
            </span>
          </motion.h1>

          <motion.p 
            className="text-base md:text-xl text-white/60 max-w-xl font-medium leading-relaxed mb-12 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="https://github.com/ad-naan/adnify/releases" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group h-16 px-12 bg-white text-black font-black text-[11px] uppercase tracking-[0.25em] transition-all flex items-center justify-center">
              <span className="relative z-10 flex items-center gap-3">
                {t.hero.cta}
              </span>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-black/10 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
            
            <a href="https://github.com/ad-naan/adnify" target="_blank" rel="noopener noreferrer" className="group h-16 flex items-center gap-6 px-4 bg-white/[0.02] border border-white/10 hover:border-white/30 backdrop-blur-md transition-colors duration-500 pr-10">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center ml-2 border border-white group-hover:scale-110 transition-transform duration-500">
                 <Play className="w-3 h-3 fill-black ml-0.5" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/60 group-hover:text-white transition-colors">
                {t.hero.watch}
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: yData, opacity }} 
          className="hidden lg:flex lg:w-2/5 flex-col items-end gap-10 mt-20"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-end gap-2 border-r-2 border-white/20 pr-6">
             <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-white/30 block mb-2">SYSTEM TELEMETRY</span>
             
             <div className="flex items-center gap-6 text-right">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono tracking-widest text-white/40">NEURAL ENGINE</span>
                  <span className="font-mono text-2xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">ONLINE</span>
                </div>
                <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center relative backdrop-blur-sm bg-black/20">
                   <div className="absolute inset-1 border border-white/40 border-t-transparent rounded-full animate-[spin_3s_linear_infinite]" />
                   <div className="absolute inset-3 border border-white/20 border-b-transparent border-l-transparent rounded-full animate-[spin_2s_linear_infinite_reverse]" />
                   <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
                </div>
             </div>
             
             <div className="w-full h-px bg-gradient-to-l from-white/20 to-transparent my-4" />
             
             <div className="flex items-center gap-6 text-[10px] font-mono tracking-widest text-white/50">
               <span>[LATENCY] <span className="text-white ml-2">12ms</span></span>
               <span>[MEM] <span className="text-white ml-2">24.5TB</span></span>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-10 md:left-20 flex flex-col items-center opacity-40">
        <div className="w-px h-20 bg-gradient-to-b from-white to-transparent" />
      </div>

    </section>
  );
}
