import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      animation: {
        "background-fade": "fade 10s ease-in-out infinite",
        "floating-particles": "particles 20s linear infinite",
        "spin-fast": "spin 1.5s linear infinite",
        "spin-reverse": "spin 2s linear infinite reverse",
        "pulse-slow": "pulse 3s infinite",
        fadeSlide: "fadeSlide 0.7s ease-out",
      },
      keyframes: 
        {fadeSlide: {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
        particles: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [react(), tailwindcss(), ],
  build: {
    outDir: 'dist',
  },
  base: './',
})

