/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#0F291E",
          "green-hover": "#081711",
          "green-light": "#1B3B2B",
          "emerald-accent": "#154231",
          beige: "#FAF7F2",
          "beige-dark": "#F2EBE0",
          card: "#FFFFFF",
          gold: "#C5A059",
          "gold-light": "#EAD8A7",
          "gold-dark": "#9A7B39",
          charcoal: "#1A1A1A",
          gray: "#555555",
          "border-light": "#E6DEC8"
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"]
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(197, 160, 89, 0.5)' },
          '50%': { opacity: '0.9', boxShadow: '0 0 0 14px rgba(197, 160, 89, 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.15)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        swayWind: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0px)' },
          '25%': { transform: 'rotate(2.5deg) translateY(-4px)' },
          '50%': { transform: 'rotate(-1.5deg) translateY(-8px)' },
          '75%': { transform: 'rotate(1.8deg) translateY(-2px)' },
        },
        leafDrift: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translate(120px, 95vh) rotate(360deg)', opacity: '0' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        slideUp: 'slideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        pulseGold: 'pulseGold 2.5s infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        blob: 'blob 8s ease-in-out infinite',
        swayWind: 'swayWind 10s ease-in-out infinite',
        leafDrift: 'leafDrift 14s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
