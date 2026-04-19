'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Cpu, Maximize, Network, X } from 'lucide-react';

interface HorizontalShowcaseProps {
  lang: 'en' | 'zh';
}

const CARDS = [
  {
    title: { en: "The Omnipresent Editor", zh: "全息隐形编辑器" },
    subtitle: { en: "Monaco Editor core with full LSP support for 10+ languages. TypeScript, Python, Go, Rust, C/C++, and more with intelligent completion and diagnostics.", zh: "Monaco 编辑器内核，完整支持 10+ 种语言的 LSP。TypeScript、Python、Go、Rust、C/C++ 等，具备智能补全和诊断功能。" },
    img: "/images/image.png",
    icon: Maximize
  },
  {
    title: { en: "Contextual AI Agent", zh: "上下文 AI 智能体" },
    subtitle: { en: "Three working modes: Chat (conversation), Agent (task execution), and Orchestrator (expert coordination) with 24 built-in tools for complete automation.", zh: "三种工作模式：Chat（对话）、Agent（任务执行）和 Orchestrator（专家协调），内置 24 个工具实现完全自动化。" },
    img: "/images/chatpanel.png",
    icon: Network
  },
  {
    title: { en: "Smart Replace System", zh: "智能替换系统" },
    subtitle: { en: "9-strategy intelligent replacement ensures AI code edits succeed even with format differences, dramatically improving success rate by 2-5x.", zh: "9 策略智能替换确保 AI 代码编辑即使在格式差异下也能成功，成功率提升 2-5 倍。" },
    img: "/images/tool.png",
    icon: Cpu
  },
  {
    title: { en: "Agentic Autonomy", zh: "全自主智能体算力" },
    subtitle: { en: "AI agents with checkpoint system, conversation branching, loop detection, auto error fix, and memory system for project-specific knowledge.", zh: "AI 智能体具备检查点系统、对话分支、循环检测、自动错误修复和项目专属知识记忆系统。" },
    img: "/images/orchestrator.png",
    icon: Network
  }
];

export default function HorizontalShowcase({ lang }: HorizontalShowcaseProps) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<{ img: string; title: string } | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // 根据滚动进度计算当前激活的卡片，并自动打开模态框
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // 将滚动进度映射到卡片索引
      const progress = latest * (CARDS.length + 1) - 0.5;
      const cardIndex = Math.floor(progress);
      
      // 只在有效范围内显示模态框
      if (cardIndex >= 0 && cardIndex < CARDS.length) {
        if (cardIndex !== activeCardIndex) {
          setActiveCardIndex(cardIndex);
        }
        // 显示模态框
        setSelectedImage({
          img: CARDS[cardIndex].img,
          title: CARDS[cardIndex].title[lang]
        });
      } else {
        // 超出范围时（向上或向下滚动超出）关闭模态框
        setSelectedImage(null);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, activeCardIndex, lang]);

  return (
    <>
      <section ref={targetRef} className="relative h-[400vh] bg-transparent">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vh] bg-white/[0.02] blur-[150px] rounded-[100%] pointer-events-none" />

          <div className="absolute top-20 left-10 md:left-20 z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4"
            >
               <div className="w-12 h-[1px] bg-white/30" />
               <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">
                 {lang === 'en' ? "SYSTEM ARCHITECTURE" : "系统架构解析"}
               </span>
            </motion.div>
          </div>

          <motion.div style={{ x }} className="flex gap-20 px-[10vw] items-center h-full">
            {CARDS.map((card, i) => (
              <Card 
                key={i} 
                card={card} 
                index={i} 
                lang={lang} 
                isActive={activeCardIndex === i}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal - 自动随滚动打开/关闭，带阻尼动画 */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            key={selectedImage.img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                scale: {
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                  mass: 1
                }
              }}
              className="relative max-w-7xl w-full"
            >
              {/* Title */}
              <div className="mb-6 text-center">
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">
                  {selectedImage.title}
                </h3>
              </div>

              {/* Image Container */}
              <div className="relative border border-white/20 bg-white/5 backdrop-blur-xl overflow-hidden rounded-lg">
                {/* Window Header */}
                <div className="h-12 bg-gradient-to-b from-white/[0.08] to-transparent border-b border-white/10 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                {/* Image */}
                <div className="relative bg-black/40">
                  <img
                    src={selectedImage.img}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
              </div>

              {/* Hint */}
              <div className="mt-6 text-center">
                <p className="text-sm text-white/40 font-mono">
                  {lang === 'en' ? 'Scroll to explore more' : '滚动查看更多'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Card({ card, index, lang, isActive }: any) {
  const Icon = card.icon;

  return (
    <div className="w-[85vw] max-w-[1200px] h-[65vh] md:h-[75vh] shrink-0 relative group flex flex-col justify-end">
      
      <motion.div 
        className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-2xl transition-transform duration-700 ease-out transform-gpu shadow-[0_0_50px_rgba(255,255,255,0.01)] border-t-white/20"
        animate={{
          scale: isActive ? 1.02 : 1,
          boxShadow: isActive 
            ? '0 20px 100px rgba(255,255,255,0.05)' 
            : '0 0 50px rgba(255,255,255,0.01)'
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/[0.05] to-transparent border-b border-white/5 flex items-center px-8 gap-3 z-20">
          <motion.div 
            className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"
            animate={{ opacity: isActive ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"
            animate={{ opacity: isActive ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"
            animate={{ opacity: isActive ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          />
          
          <div className="ml-auto flex items-center gap-4 text-[10px] font-mono text-white/30 tracking-widest uppercase">
            <Icon className="w-3 h-3" />
            MODULE_0{index + 1}
          </div>
        </div>

        <div className="absolute inset-0 top-14 overflow-hidden">
          <motion.img 
            src={card.img} 
            alt={card.title[lang]} 
            className="absolute inset-0 w-full h-full object-cover grayscale-0" 
            animate={{
              scale: isActive ? 1.05 : 1,
              opacity: isActive ? 0.8 : 0.5,
              filter: isActive ? 'brightness(1.25)' : 'brightness(1.1)'
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
        </div>

        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out rotate-45 pointer-events-none" />
      </motion.div>

      <motion.div 
        className="relative z-20 p-10 md:p-16 w-full md:w-3/4"
        animate={{
          y: isActive ? 0 : 32
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          {card.title[lang]}
        </h3>
        <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
          {card.subtitle[lang]}
        </p>
      </motion.div>

      <motion.div 
        className="absolute right-10 top-20 text-[15rem] font-black leading-none pointer-events-none select-none"
        animate={{
          color: isActive ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)'
        }}
        transition={{ duration: 0.7 }}
      >
        0{index + 1}
      </motion.div>

    </div>
  );
}
