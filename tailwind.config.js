/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Lexend", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        // PRIMARY: Sky Blue — light, clean, professional
        brand: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",   // PRIMARY Sky Blue
          600: "#0284c7",   // Main brand CTA
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        // NAVY: Dark Blue accent — enterprise / authority
        navy: {
          50:  "#f0f4ff",
          100: "#e0e9ff",
          200: "#c1d2fe",
          300: "#93aafd",
          400: "#6070f8",
          500: "#3b4ed4",
          600: "#2a38b5",
          700: "#1e2d8f",  // Primary navy
          800: "#182470",
          900: "#0c1e3e",  // Deep navy
          950: "#060f1f",
        },
        // SOFT GREY: Secondary surfaces
        soft: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Brand specific
        eatbit: {
          light: "#FEE1BD",
          mid:   "#F5C07A",
          dark:  "#5E3100",
          deep:  "#3D1F00",
        },
        craveto: {
          light: "#FFF8E7",
          gold:  "#FCC746",
          dark:  "#1a1a2e",
          deep:  "#0f0f1a",
        },
      },
      boxShadow: {
        "card":       "0 1px 3px 0 rgba(14,165,233,0.06), 0 1px 2px -1px rgba(14,165,233,0.04)",
        "card-md":    "0 4px 12px -2px rgba(14,165,233,0.1), 0 2px 4px -1px rgba(14,165,233,0.06)",
        "card-lg":    "0 10px 30px -4px rgba(14,165,233,0.14), 0 4px 8px -2px rgba(14,165,233,0.08)",
        "card-xl":    "0 20px 50px -8px rgba(14,165,233,0.18), 0 8px 16px -4px rgba(14,165,233,0.1)",
        "premium":    "0 2px 8px -1px rgba(2,132,199,0.15), 0 1px 3px 0 rgba(2,132,199,0.1)",
        "premium-md": "0 8px 20px -6px rgba(2,132,199,0.25), 0 4px 8px -2px rgba(2,132,199,0.15)",
        "premium-lg": "0 20px 40px -8px rgba(2,132,199,0.3), 0 8px 16px -4px rgba(2,132,199,0.2)",
        "navy":       "0 8px 24px -4px rgba(30,45,143,0.3), 0 4px 8px -2px rgba(30,45,143,0.2)",
        "sky-sm":     "0 0 0 3px rgba(14,165,233,0.15)",
        "sky-md":     "0 0 20px -4px rgba(14,165,233,0.35)",
        "sky-lg":     "0 0 40px -8px rgba(14,165,233,0.45)",
      },
      animation: {
        "fade-up":     "fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":     "fadeIn 0.5s ease forwards",
        "slide-right": "slideRight 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "float":       "float 6s ease-in-out infinite",
        "float-slow":  "float 8s ease-in-out infinite",
        "count-up":    "countUp 0.3s ease-out forwards",
        "shimmer":     "shimmer 2s linear infinite",
        "pulse-soft":  "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity:"0", transform:"translateY(24px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        fadeIn:    { "0%": { opacity:"0" }, "100%": { opacity:"1" } },
        slideRight:{ "0%": { opacity:"0", transform:"translateX(-20px)" }, "100%": { opacity:"1", transform:"translateX(0)" } },
        float:     { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-10px)" } },
        countUp:   { "0%": { opacity:"0", transform:"translateY(8px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        shimmer:   { "0%": { backgroundPosition:"200% 0" }, "100%": { backgroundPosition:"-200% 0" } },
        pulseSoft: { "0%,100%": { opacity:"0.6", transform:"scale(1)" }, "50%": { opacity:"1", transform:"scale(1.03)" } },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};
