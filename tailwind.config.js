/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        metal: {
          // Casual, metal, medieval palette
          silver: '#C0C0C0',      // bright silver
          iron: '#71797E',        // iron gray
          steel: '#4A4A4A',       // dark steel
          bronze: '#CD7F32',      // bronze
          copper: '#B87333',      // aged copper
          gold: '#D4AF37',        // medieval gold
          stone: '#8B8680',       // stone gray
          darkstone: '#3A3A3A',   // dark stone
          deepred: '#8B0000',     // medieval red
          deepblue: '#1C2841',    // medieval blue
          earth: '#5D4E37',       // earth brown
          dark: '#1A1A1A',        // near-black
          darker: '#0F0F0F',      // darker black
        }
      },
      fontFamily: {
        cyber: ['Orbitron', 'monospace'],
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s infinite',
        'float': 'float 8s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-3d': 'rotate-3d 20s linear infinite',
        'cube-float': 'cube-float 6s ease-in-out infinite',
        'particle-float': 'particle-float 10s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 3px currentColor, 0 0 6px currentColor' },
          '100%': { textShadow: '0 0 6px currentColor, 0 0 10px currentColor' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 0.8, boxShadow: '0 0 10px currentColor' },
          '50%': { opacity: 1, boxShadow: '0 0 20px currentColor' },
        },
        'rotate-3d': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        'cube-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) translateX(10px) rotate(90deg)' },
          '50%': { transform: 'translateY(-10px) translateX(-10px) rotate(180deg)' },
          '75%': { transform: 'translateY(-30px) translateX(5px) rotate(270deg)' },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.2)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
}
