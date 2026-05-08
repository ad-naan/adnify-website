'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Github, GitCommit } from 'lucide-react';

interface ContributorsProps {
  lang: 'en' | 'zh';
}

const CONTRIBUTORS = [
  {
    username: 'ad-naan',
    name: 'Adnaan',
    avatar: 'https://github.com/ad-naan.png',
    role: { en: 'Core Architect', zh: '核心架构师' },
    contributions: { en: 'LLM Engine, Agent System, UI/UX', zh: 'LLM 引擎、Agent 系统、UI/UX' }
  },
  {
    username: 'kerwin2046',
    name: 'Kerwin',
    avatar: 'https://github.com/kerwin2046.png',
    role: { en: 'Senior Developer', zh: '高级开发者' },
    contributions: { en: 'Emotion System, Terminal, Type Safety', zh: '情感系统、终端、类型安全' }
  },
  {
    username: 'cniu6',
    name: 'cniu6',
    avatar: 'https://github.com/cniu6.png',
    role: { en: 'Developer', zh: '开发者' },
    contributions: { en: 'Model Testing, i18n Support', zh: '模型测试、国际化支持' }
  },
  {
    username: 'tss-tss',
    name: '晨曦',
    avatar: 'https://github.com/tss-tss.png',
    role: { en: 'UI Developer', zh: 'UI 开发者' },
    contributions: { en: 'Model Selector, UI Components', zh: '模型选择器、UI 组件' }
  },
  {
    username: 'joanboss',
    name: 'joanboss',
    avatar: 'https://github.com/joanboss.png',
    role: { en: 'Developer', zh: '开发者' },
    contributions: { en: 'SSH Terminal Integration', zh: 'SSH 终端集成' }
  },
  {
    username: 'yuheng-888',
    name: '玉衡',
    avatar: 'https://github.com/yuheng-888.png',
    role: { en: 'Platform Engineer', zh: '平台工程师' },
    contributions: { en: 'macOS Compatibility', zh: 'macOS 兼容性' }
  }
];

export default function Contributors({ lang }: ContributorsProps) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-64 px-10 md:px-20 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020202]/80 to-transparent" />
      
      <div className="max-w-[1800px] mx-auto relative z-10">
        <motion.div 
          style={{ y: yTitle, opacity: opacityTitle }}
          className="text-center mb-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-16 h-[1px] bg-white/30" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">
              {lang === 'en' ? 'CORE TEAM' : '核心团队'}
            </span>
            <div className="w-16 h-[1px] bg-white/30" />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
              {lang === 'en' ? 'BUILT BY' : '构建者'}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 via-white/30 to-white/10 italic font-serif">
              {lang === 'en' ? 'Visionaries' : '远见者'}
            </span>
          </h2>

          <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium">
            {lang === 'en' 
              ? 'Meet the brilliant minds behind Adnify. Every line of code, every feature, crafted with passion.' 
              : '认识 Adnify 背后的杰出团队。每一行代码，每一个功能，都倾注了热情。'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {CONTRIBUTORS.map((contributor, index) => (
            <ContributorCard key={contributor.username} contributor={contributor} index={index} lang={lang} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <a
            href="https://github.com/ad-naan/adnify/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md transition-all duration-500 group"
          >
            <Github className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/60 group-hover:text-white transition-colors">
              {lang === 'en' ? 'View All Contributors' : '查看所有贡献者'}
            </span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
              <GitCommit className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ContributorCard({ contributor, index, lang }: { contributor: typeof CONTRIBUTORS[0]; index: number; lang: 'en' | 'zh' }) {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);

  return (
    <motion.a
      ref={cardRef}
      href={`https://github.com/${contributor.username}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ y, opacity, scale }}
      className="group relative p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-xl transition-all duration-700 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full bg-gradient-to-b from-white via-white/50 to-transparent transition-all duration-700 ease-in-out" />
      
      <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out rotate-45 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start gap-6 mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/40 transition-colors duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <img 
                src={contributor.avatar} 
                alt={contributor.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-500">
              <Github className="w-3 h-3 text-white/60 group-hover:text-white transition-colors" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-white group-hover:text-white transition-colors">
              {contributor.name}
            </h3>
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40 mb-1">
              {contributor.role[lang]}
            </p>
            <p className="text-xs text-white/30 font-mono">
              @{contributor.username}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <p className="text-sm text-white/50 leading-relaxed font-medium">
            {contributor.contributions[lang]}
          </p>
        </div>
      </div>

      <div className="absolute right-6 bottom-6 text-[80px] font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-700 leading-none pointer-events-none select-none">
        0{index + 1}
      </div>
    </motion.a>
  );
}
