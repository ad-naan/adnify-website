'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'motion/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HorizontalShowcase from '../components/HorizontalShowcase';
import Stats from '../components/Stats';
import TechStack from '../components/TechStack';
import QuickStart from '../components/QuickStart';
import Contributors from '../components/Contributors';
import Community from '../components/Community';
import Footer from '../components/Footer';
import GlobalBackground from '../components/GlobalBackground';
import { en, zh } from '../lib/i18n';

function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const x = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 100, damping: 20 });

  return (
    <motion.div 
      style={{ left: x, top: y }}
      className="fixed w-[600px] h-[600px] bg-white/[0.05] rounded-full blur-[120px] pointer-events-none z-[-10] -translate-x-1/2 -translate-y-1/2"
    />
  );
}

export default function Home() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const t = lang === 'en' ? en : zh;

  // Lenis smooth scroll
  useEffect(() => {
    let lenis: any;
    
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-transparent text-white font-sans selection:bg-white selection:text-black">
      <GlobalBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white/50 z-[100] origin-left" 
        style={{ scaleX }} 
      />

      {/* Global Cursor Glow */}
      <MouseGlow />
      
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} />
        
        {/* Transitional Section */}
        <section className="py-40 px-10 md:px-20 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent via-[#020202]/60 to-transparent backdrop-blur-sm">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-8xl font-black text-center max-w-5xl leading-[1.0] tracking-tighter uppercase"
          >
            {lang === 'en' ? (
              <>
                <span className="text-white/60">WE DO NOT WRITE CODE.</span><br />
                WE <span className="text-white italic font-serif">FORGE</span> REALITIES.
              </>
            ) : (
              <>
                <span className="text-white/60">不再拘泥于敲击代码。</span><br />
                我们在<span className="text-white italic font-serif">重构</span>现实。
              </>
            )}
          </motion.h2>
        </section>

        <HorizontalShowcase lang={lang} />

        <Features t={t} />
        
        <Stats t={t} />

        <TechStack lang={lang} />

        <QuickStart lang={lang} />

        <Contributors lang={lang} />

        <Community lang={lang} />

        {/* Final CTA */}
        <section className="py-64 px-10 md:px-20 text-center relative overflow-hidden bg-black/80 backdrop-blur-xl border-t border-white/5">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />
           <div className="max-w-5xl mx-auto relative z-10">
             <h2 className="text-7xl md:text-[10rem] font-black mb-8 tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">
               <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">EVOLVE</span> <br />
               <span className="text-white/30 italic font-serif">BEYOND limits.</span>
             </h2>
             <p className="text-white/40 text-2xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
               {lang === 'en' ? 'The era of manual boilerplate is dead. Claim your early access to the neural IDE.' : '繁杂代码的时代已经终结。立即获取您的下一代神经计算 IDE 内测资格。'}
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="https://github.com/ad-naan/adnify/releases" target="_blank" rel="noopener noreferrer" className="px-16 py-6 bg-white text-black font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95">
                  {t.nav.cta}
                </a>
                <a href="https://github.com/ad-naan/adnify" target="_blank" rel="noopener noreferrer" className="px-16 py-6 border border-white/20 font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white hover:bg-white/5 transition-all">
                  {lang === 'en' ? 'View on GitHub' : '查看 GitHub'}
                </a>
             </div>
           </div>
        </section>
      </main>

      <Footer lang={lang} t={t} />
    </div>
  );
}
