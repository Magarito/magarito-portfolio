/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090B',
          900: '#0B0D10',
          800: '#12151A',
          700: '#1A1E25',
          600: '#242932',
          500: '#343B47',
        },
        mist: {
          400: '#5B6472',
          300: '#8B95A1',
          200: '#B7BFC9',
          100: '#E7EAEE',
        },
        truth: {
          DEFAULT: '#7CFFB2',
          dim: '#4FCE8A',
          glow: 'rgba(124,255,178,0.18)',
        },
        pred: {
          DEFAULT: '#FFB454',
          dim: '#D9923F',
          glow: 'rgba(255,180,84,0.16)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(231,234,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(231,234,238,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '36px 36px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        blink: 'blink 1s step-end infinite',
        scanline: 'scanline 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
