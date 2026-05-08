'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Languages } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  lang: 'en' | 'zh';
  setLang: (lang: 'en' | 'zh') => void;
  t: any;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-8 px-8 md:px-16"
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020202]/90 to-transparent pointer-events-none" />
      <div className="w-full flex items-center justify-between relative z-10 max-w-[1800px]">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tighter">ADNIFY</span>
            <span className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          </div>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="https://github.com/ad-naan/adnify" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold tracking-[0.2em] text-white/40 hover:text-white transition-opacity uppercase">{t.nav.docs}</a>
            <a href="https://github.com/ad-naan/adnify/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold tracking-[0.2em] text-white/40 hover:text-white transition-opacity uppercase">Changelog</a>
            <a href="http://www.adnaan.site" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold tracking-[0.2em] text-white/40 hover:text-white transition-opacity uppercase">Blog</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="text-[10px] font-mono tracking-[0.3em] text-white/30 hover:text-white transition-colors uppercase"
            >
              [ {lang === 'en' ? 'ZH' : 'EN'} ]
            </button>
            <a href="https://github.com/ad-naan/adnify/releases" target="_blank" rel="noopener noreferrer" className="relative group px-8 py-3 bg-white/5 backdrop-blur-md border border-white/10 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse group-hover:bg-black transition-colors" />
                {t.nav.cta}
              </span>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black p-12 flex flex-col gap-8 lg:hidden z-50 pt-32"
          >
            <a href="#features" className="text-4xl font-black uppercase tracking-tighter" onClick={() => setIsOpen(false)}>{t.nav.product}</a>
            <a href="#solutions" className="text-4xl font-black uppercase tracking-tighter" onClick={() => setIsOpen(false)}>{t.nav.engine}</a>
            <a href="#pricing" className="text-4xl font-black uppercase tracking-tighter" onClick={() => setIsOpen(false)}>{t.nav.pricing}</a>
            <a href="https://github.com/ad-naan/adnify" target="_blank" rel="noopener noreferrer" className="text-4xl font-black uppercase tracking-tighter" onClick={() => setIsOpen(false)}>{t.nav.docs}</a>
            
            <div className="mt-auto flex flex-col gap-4">
              <button 
                onClick={() => { setLang(lang === 'en' ? 'zh' : 'en'); setIsOpen(false); }}
                className="w-full py-4 border border-white/10 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <Languages className="w-4 h-4" />
                {lang === 'en' ? '中文' : 'ENGLISH'}
              </button>
              <a href="https://github.com/ad-naan/adnify/releases" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-white text-black rounded-full text-sm font-bold uppercase text-center">{t.nav.cta}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
