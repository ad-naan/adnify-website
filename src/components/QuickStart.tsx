'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Download, Github, Terminal, Rocket } from 'lucide-react';

interface QuickStartProps {
  lang: 'en' | 'zh';
}

const STEPS = [
  {
    icon: Github,
    title: { en: 'Download', zh: '下载' },
    desc: { en: 'Get the latest release from GitHub', zh: '从 GitHub 获取最新版本' },
    code: { 
      en: '# Download from GitHub Releases\n# Windows / macOS / Linux', 
      zh: '# 从 GitHub Releases 下载\n# Windows / macOS / Linux' 
    }
  },
  {
    icon: Terminal,
    title: { en: 'Install', zh: '安装' },
    desc: { en: 'Run the installer for your platform', zh: '运行适合您平台的安装程序' },
    code: { 
      en: '# Windows: .exe installer\n# macOS: .dmg installer\n# Linux: .AppImage', 
      zh: '# Windows: .exe 安装程序\n# macOS: .dmg 安装程序\n# Linux: .AppImage' 
    }
  },
  {
    icon: Rocket,
    title: { en: 'Configure', zh: '配置' },
    desc: { en: 'Set up your AI provider and start coding', zh: '设置 AI 提供商并开始编码' },
    code: { 
      en: '# Open Settings (Ctrl+,)\n# Add your API key\n# Select your model', 
      zh: '# 打开设置 (Ctrl+,)\n# 添加 API 密钥\n# 选择模型' 
    }
  }
];

const REQUIREMENTS = [
  { label: { en: 'Node.js', zh: 'Node.js' }, value: '>= 18' },
  { label: { en: 'Memory', zh: '内存' }, value: '>= 4GB' },
  { label: { en: 'Disk', zh: '磁盘' }, value: '>= 500MB' },
  { label: { en: 'OS', zh: '操作系统' }, value: 'Win10+ / macOS 10.15+ / Linux' }
];

export default function QuickStart({ lang }: QuickStartProps) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-64 px-10 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
      
      <motion.div style={{ y, opacity }} className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <Download className="w-4 h-4 text-white/50" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">
              {lang === 'en' ? 'GET STARTED' : '快速开始'}
            </span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
              {lang === 'en' ? 'READY IN' : '三步'}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 via-white/30 to-white/10 italic font-serif">
              {lang === 'en' ? '3 Steps' : '即刻启动'}
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-6 -left-6 text-[120px] font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-700 leading-none pointer-events-none select-none">
                  0{index + 1}
                </div>

                <div className="relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-xl transition-all duration-700">
                  {/* Top Border Glow */}
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-white via-white/50 to-transparent group-hover:w-full transition-all duration-700 ease-out" />

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center mb-6 group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-500">
                    <Icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">
                    {step.title[lang]}
                  </h3>
                  <p className="text-white/50 text-base font-medium mb-6 leading-relaxed">
                    {step.desc[lang]}
                  </p>

                  {/* Code Block */}
                  <div className="relative p-4 bg-black/40 border border-white/5 font-mono text-xs text-white/40 leading-relaxed overflow-hidden">
                    <div className="absolute top-2 right-2 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                    </div>
                    <pre className="whitespace-pre-wrap">{step.code[lang]}</pre>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="border border-white/10 bg-white/[0.02] backdrop-blur-xl p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-white/30" />
            <h3 className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">
              {lang === 'en' ? 'SYSTEM REQUIREMENTS' : '系统要求'}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {REQUIREMENTS.map((req, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black text-white/20 mb-2 font-mono">
                  {req.value}
                </div>
                <div className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
                  {req.label[lang]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/adnaan-worker/adnify/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-16 py-6 bg-white text-black font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 group"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            {lang === 'en' ? 'DOWNLOAD NOW' : '立即下载'}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
