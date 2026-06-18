/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: '#0D0D14',
        surface: '#13131E',
        panel: '#1A1A28',
        border: '#2A2A3E',
        accent: '#6C63FF',
        'accent-glow': '#8B85FF',
        gold: '#F5C842',
        emerald: '#2EE8A0',
        rose: '#FF6B9D',
        muted: '#6B6B8A',
        text: '#E8E8F0',
        'text-dim': '#A0A0B8',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, #2A2A3E 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '32px 32px',
      },
    },
  },
  plugins: [],
}
