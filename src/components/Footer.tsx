'use client';

import { Globe, Github, Mail, ArrowRight } from 'lucide-react';
import React from 'react';

interface FooterProps {
  lang: 'en' | 'zh';
  t: any;
}

export default function Footer({ lang, t }: FooterProps) {
  return (
    <footer className="pt-40 pb-12 px-10 md:px-20 bg-transparent border-t border-white/5 relative z-10">
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#020202] to-transparent pointer-events-none" />
      <div className="w-full max-w-[1800px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8 lg:col-span-1 border-white/5 pb-8 md:border-r md:border-b-0 md:pr-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black tracking-tighter uppercase drop-shadow-lg">ADNIFY</span>
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <p className="text-white/40 font-medium leading-relaxed">
              {lang === 'en' 
                ? 'The neural interface for next-gen software synthesis. Connect AI to your code.' 
                : '次世代软件合成的神经接口。将 AI 连接到您的代码。'}
            </p>
            <div className="flex items-center gap-6 pt-6 border-t border-white/5 inline-flex w-full">
              <SocialLink icon={Globe} href="http://www.adnaan.site" />
              <SocialLink icon={Github} href="https://github.com/ad-naan/adnify" />
              <SocialLink icon={Mail} href="mailto:adnaan.worker@gmail.com" />
            </div>
          </div>

          <div className="lg:col-span-1 lg:pl-10">
            <h5 className="text-[10px] font-mono font-bold text-white/30 mb-8 tracking-[0.4em] uppercase">{lang === 'en' ? 'Resources' : '资源'}</h5>
            <ul className="space-y-4 text-white/50 text-sm font-bold tracking-widest uppercase">
              <li><FooterLink href="https://github.com/ad-naan/adnify">{lang === 'en' ? 'Documentation' : '文档'}</FooterLink></li>
              <li><FooterLink href="https://github.com/ad-naan/adnify/releases">{lang === 'en' ? 'Download' : '下载'}</FooterLink></li>
              <li><FooterLink href="https://github.com/ad-naan/adnify/issues">{lang === 'en' ? 'Issues' : '问题反馈'}</FooterLink></li>
              <li><FooterLink href="https://github.com/ad-naan/adnify/blob/main/CHANGELOG.md">{lang === 'en' ? 'Changelog' : '更新日志'}</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="text-[10px] font-mono font-bold text-white/30 mb-8 tracking-[0.4em] uppercase">{lang === 'en' ? 'Community' : '社区'}</h5>
            <ul className="space-y-4 text-white/50 text-sm font-bold tracking-widest uppercase">
              <li><FooterLink href="https://github.com/ad-naan/adnify/blob/main/CONTRIBUTING.md">{lang === 'en' ? 'Contributing' : '贡献指南'}</FooterLink></li>
              <li><FooterLink href="https://github.com/ad-naan/adnify/blob/main/CODE_OF_CONDUCT.md">{lang === 'en' ? 'Code of Conduct' : '行为准则'}</FooterLink></li>
              <li><FooterLink href="#">{lang === 'en' ? 'WeChat Group' : '微信群'}</FooterLink></li>
              <li><FooterLink href="#">{lang === 'en' ? 'QQ Group: 1076926858' : 'QQ群: 1076926858'}</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <h5 className="text-[10px] font-mono font-bold text-white/30 mb-4 tracking-[0.4em] uppercase">{lang === 'en' ? 'Stay Updated' : '保持更新'}</h5>
            <p className="text-white/40 text-sm font-medium">{lang === 'en' ? 'Get notified about new releases and updates.' : '获取最新版本和更新通知。'}</p>
            <div className="relative group mt-6">
              <input 
                type="email" 
                placeholder={lang === 'en' ? "your@email.com" : "your@email.com"}
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-all text-xs font-mono tracking-widest text-white" 
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                 <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
          <p>{t.footer.rights}</p>
          <div className="flex gap-12">
            <FooterLink href="https://github.com/ad-naan/adnify/blob/main/LICENSE">{lang === 'en' ? 'License' : '许可证'}</FooterLink>
            <FooterLink href="#">{lang === 'en' ? 'Privacy' : '隐私政策'}</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group overflow-hidden relative">
      <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <Icon className="w-3.5 h-3.5 text-white group-hover:text-black relative z-10 transition-colors" />
    </a>
  );
}

function FooterLink({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href || '#'} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group/link">
      <span className="w-0 h-0.5 bg-white transition-all group-hover/link:w-3" />
      {children}
    </a>
  );
}
