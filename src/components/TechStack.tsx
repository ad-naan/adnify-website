'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface TechStackProps {
  lang: 'en' | 'zh';
}

const TECH_CATEGORIES = [
  {
    title: { en: 'Framework', zh: '框架' },
    items: [
      { name: 'Electron', version: '39', color: 'from-cyan-500 to-blue-500' },
      { name: 'React', version: '18', color: 'from-blue-500 to-cyan-400' },
      { name: 'TypeScript', version: '5', color: 'from-blue-600 to-blue-400' },
      { name: 'Vite', version: '6', color: 'from-purple-500 to-pink-500' }
    ]
  },
  {
    title: { en: 'Editor & Terminal', zh: '编辑器与终端' },
    items: [
      { name: 'Monaco Editor', version: 'Latest', color: 'from-blue-600 to-indigo-600' },
      { name: 'xterm.js', version: 'Latest', color: 'from-green-500 to-emerald-500' },
      { name: 'node-pty', version: 'Latest', color: 'from-teal-500 to-cyan-500' },
      { name: 'tree-sitter', version: 'Latest', color: 'from-orange-500 to-red-500' }
    ]
  },
  {
    title: { en: 'State & Styling', zh: '状态与样式' },
    items: [
      { name: 'Zustand', version: 'Latest', color: 'from-amber-500 to-orange-500' },
      { name: 'Tailwind CSS', version: 'Latest', color: 'from-cyan-400 to-blue-500' },
      { name: 'Motion', version: 'Latest', color: 'from-purple-500 to-pink-500' },
      { name: 'Zod', version: 'Latest', color: 'from-blue-500 to-purple-500' }
    ]
  },
  {
    title: { en: 'AI & Database', zh: 'AI 与数据库' },
    items: [
      { name: 'LanceDB', version: 'Latest', color: 'from-green-500 to-teal-500' },
      { name: 'Vercel AI SDK', version: 'Latest', color: 'from-black to-gray-700' },
      { name: 'LSP', version: '10+ Languages', color: 'from-indigo-500 to-purple-500' },
      { name: 'MCP', version: 'Protocol', color: 'from-pink-500 to-rose-500' }
    ]
  }
];

export default function TechStack({ lang }: TechStackProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-64 px-10 md:px-20 relative overflow-hidden bg-gradient-to-b from-transparent via-[#020202]/80 to-transparent">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <motion.div style={{ y, opacity }} className="max-w-[1600px] mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-16 h-[1px] bg-white/30" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">
              {lang === 'en' ? 'TECHNOLOGY STACK' : '技术栈'}
            </span>
            <div className="w-16 h-[1px] bg-white/30" />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
              {lang === 'en' ? 'BUILT WITH' : '构建于'}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 via-white/30 to-white/10 italic font-serif">
              {lang === 'en' ? 'Best Tools' : '最佳工具'}
            </span>
          </h2>

          <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium">
            {lang === 'en' 
              ? 'Powered by cutting-edge technologies and industry-leading frameworks.' 
              : '由前沿技术和行业领先框架驱动。'}
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {TECH_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
              className="relative"
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-white/30" />
                <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-white/40">
                  {category.title[lang]}
                </h3>
              </div>

              {/* Tech Items */}
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 + techIndex * 0.05 }}
                    className="group relative p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Shine Effect */}
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out rotate-45" />

                    <div className="relative z-10">
                      {/* Tech Name */}
                      <h4 className="text-xl font-black uppercase tracking-tighter mb-2 text-white group-hover:text-white transition-colors">
                        {tech.name}
                      </h4>
                      
                      {/* Version Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-white/40 group-hover:text-white/60 transition-colors">
                          {tech.version}
                        </span>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/5 group-hover:border-white/20 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16"
        >
          {[
            { value: '39', label: { en: 'Electron Version', zh: 'Electron 版本' } },
            { value: '10+', label: { en: 'LSP Languages', zh: 'LSP 语言' } },
            { value: '24+', label: { en: 'Built-in Tools', zh: '内置工具' } },
            { value: '4', label: { en: 'Stunning Themes', zh: '精美主题' } }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-2 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
                {stat.label[lang]}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
