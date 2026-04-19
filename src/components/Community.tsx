'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, Users, Github, Star } from 'lucide-react';
import Image from 'next/image';

interface CommunityProps {
  lang: 'en' | 'zh';
}

const COMMUNITY_CHANNELS = [
  {
    icon: MessageCircle,
    title: { en: 'WeChat Group', zh: '微信群' },
    desc: { en: 'Join our WeChat community for discussions', zh: '加入微信社区进行讨论' },
    image: '/wechat-group.png',
    action: { en: 'Scan QR Code', zh: '扫码加入' }
  },
  {
    icon: Users,
    title: { en: 'QQ Group', zh: 'QQ 群' },
    desc: { en: 'QQ Group: 1076926858', zh: 'QQ 群号：1076926858' },
    image: '/qq-group.png',
    action: { en: 'Scan QR Code', zh: '扫码加入' }
  },
  {
    icon: MessageCircle,
    title: { en: 'Author WeChat', zh: '作者微信' },
    desc: { en: 'Contact: adnaan_worker', zh: '微信号：adnaan_worker' },
    image: '/wechat-author.png',
    action: { en: 'Add Friend', zh: '添加好友' }
  }
];

export default function Community({ lang }: CommunityProps) {
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
      
      <motion.div style={{ y, opacity }} className="max-w-[1600px] mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <Users className="w-4 h-4 text-white/50" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/50">
              {lang === 'en' ? 'JOIN COMMUNITY' : '加入社区'}
            </span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
              {lang === 'en' ? 'CONNECT' : '连接'}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 via-white/30 to-white/10 italic font-serif">
              {lang === 'en' ? 'With Us' : '我们'}
            </span>
          </h2>

          <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium">
            {lang === 'en' 
              ? 'Join thousands of developers in our vibrant community. Get help, share ideas, and shape the future of Adnify.' 
              : '加入我们充满活力的社区，与数千名开发者交流。获取帮助、分享想法，共同塑造 Adnify 的未来。'}
          </p>
        </div>

        {/* Community Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {COMMUNITY_CHANNELS.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-xl transition-all duration-700 overflow-hidden">
                  {/* Top Glow */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-500">
                      <Icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tighter text-white">
                        {channel.title[lang]}
                      </h3>
                      <p className="text-xs text-white/40 font-mono">
                        {channel.desc[lang]}
                      </p>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="relative aspect-square mb-6 bg-white p-4 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={channel.image}
                      alt={channel.title[lang]}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Action */}
                  <div className="text-center">
                    <span className="inline-block px-6 py-3 border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-[0.2em] text-white/60 group-hover:text-white group-hover:border-white/30 transition-all duration-500">
                      {channel.action[lang]}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="border border-white/10 bg-white/[0.02] backdrop-blur-xl p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 bg-white/5 flex items-center justify-center">
                <Github className="w-8 h-8 text-white/60" />
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-1">
                  {lang === 'en' ? 'Open Source' : '开源项目'}
                </h3>
                <p className="text-white/40 text-sm">
                  {lang === 'en' ? 'Star us on GitHub and contribute!' : '在 GitHub 上给我们 Star 并贡献代码！'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-3xl font-black text-white font-mono">300+</span>
                </div>
                <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
                  {lang === 'en' ? 'Stars' : 'Stars'}
                </span>
              </div>

              <div className="w-px h-12 bg-white/10" />

              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-cyan-500" />
                  <span className="text-3xl font-black text-white font-mono">6</span>
                </div>
                <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
                  {lang === 'en' ? 'Contributors' : '贡献者'}
                </span>
              </div>

              <a
                href="https://github.com/adnaan-worker/adnify"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95"
              >
                {lang === 'en' ? 'VIEW ON GITHUB' : '查看 GITHUB'}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
