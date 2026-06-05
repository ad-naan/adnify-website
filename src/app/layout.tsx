import type { Metadata } from "next";
import Script from 'next/script'
import "./globals.css";

export const metadata: Metadata = {
  title: "Adnify - Connect AI to Your Code",
  description: "一个拥有极致视觉体验、深度集成 AI Agent 的下一代代码编辑器。The AI-first code editor with stunning visual experience and deeply integrated AI Agent.",
  keywords: ["AI", "code editor", "IDE", "developer tools", "programming", "AI Agent", "Electron", "Monaco Editor"],
  authors: [{ name: "adnaan", url: "https://github.com/ad-naan/adnify" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "Adnify",
    title: "Adnify - Connect AI to Your Code",
    description: "一个拥有极致视觉体验、深度集成 AI Agent 的下一代代码编辑器。",
    images: [
      {
        url: "https://github.com/ad-naan/adnify/raw/master/images/main.png",
        width: 1200,
        height: 630,
        alt: "Adnify - AI Code Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnify - Connect AI to Your Code",
    description: "一个拥有极致视觉体验、深度集成 AI Agent 的下一代代码编辑器。",
    images: ["https://github.com/ad-naan/adnify/raw/master/images/main.png"],
  },
  metadataBase: new URL("https://ad-naan.github.io"),
  other: {
    'google-adsense-account': 'ca-pub-2158925493674970',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black text-white selection:bg-white/20">
        {children}
        <Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2158925493674970"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
      </body>
    </html>
  );
}
