import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 2026 Premium Design System
        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
          tertiary: "var(--surface-tertiary)",
          elevated: "var(--surface-elevated)",
        },
        border: {
          subtle: "var(--border-subtle)",
          DEFAULT: "var(--border-default)",
          strong: "var(--border-strong)",
        },
        // Aurora Neon Colors - Quantum Computing Palette
        aurora: {
          cyan: "#00FFFF",
          purple: "#7B61FF",
          magenta: "#FF00FF",
          blue: "#0080FF",
          pink: "#FF1493",
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          muted: "var(--text-muted)",
        },
        // VS Code Dark Theme Colors
        'vs-bg': '#1e1e1e',
        'vs-bg-hover': '#2a2d2e',
        'vs-bg-active': '#37373d',
        'vs-border': '#3c3c3c',
        'vs-titlebar': '#252526',
        'vs-activitybar': '#333333',
        'vs-sidebar': '#252526',
        'vs-editor-bg': '#1e1e1e',
        'vs-editor-gutter': '#2d2d2d',
        'vs-editor-line-highlight': '#2a2d2e',
        'vs-editor-selection': '#264f78',
        'vs-editor-inactive-selection': '#3a3d41',
        'vs-statusbar': '#007acc',
        'vs-statusbar-hover': '#005a9e',
        'vs-tab-active': '#1e1e1e',
        'vs-tab-inactive': '#2d2d2d',
        'vs-tab-hover': '#2a2d2e',
        // Syntax Highlighting Colors
        'syntax-keyword': '#c586c0',
        'syntax-function': '#dcdcaa',
        'syntax-string': '#ce9178',
        'syntax-comment': '#6a9955',
        'syntax-number': '#b5cea8',
        'syntax-variable': '#9cdcfe',
        'syntax-type': '#4ec9b0',
        'syntax-property': '#9cdcfe',
        'syntax-operator': '#d4d4d4',
        'syntax-punctuation': '#d4d4d4',
        'syntax-tag': '#569cd6',
        'syntax-attribute': '#9cdcfe',
        'syntax-annotation': '#bb86fc',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.2s ease-out',
        'aurora': 'aurora 20s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'aurora': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(-30px, -20px) scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #00FFFF 0%, #7B61FF 50%, #FF00FF 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Cascadia Code"', 'monospace'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        display: ['"Sora"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(0, 255, 255, 0.3)',
        'glow-purple': '0 0 40px rgba(123, 97, 255, 0.3)',
        'glow-magenta': '0 0 40px rgba(255, 0, 255, 0.3)',
        'glow-blue': '0 0 40px rgba(0, 128, 255, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass-hover': '0 16px 48px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config
