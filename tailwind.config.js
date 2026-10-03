/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core dark background palette
        ink: {
          950: "#050509",
          900: "#0a0a12",
          800: "#12121d",
        },
        // Accent colors for glow / highlights
        accent: {
          blue: "#5b8cff",
          violet: "#a066ff",
          cyan: "#4be0e6",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.5em",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(91, 140, 255, 0.45)",
        "glow-violet": "0 0 80px -10px rgba(160, 102, 255, 0.45)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 50% 50%, rgba(91,140,255,0.15), transparent 60%)",
      },
    },
  },
  plugins: [],
}