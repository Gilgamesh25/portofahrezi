/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A365D",
          light: "#2C5282",
          dark: "#153E75",
        },
        secondary: {
          DEFAULT: "#4A5568",
          light: "#718096",
          dark: "#2D3748",
        },
        surface: {
          DEFAULT: "#F7FAFC",
          muted: "#EDF2F7",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        glass: "12px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(26, 54, 93, 0.12)",
        card: "0 4px 24px rgba(26, 54, 93, 0.08)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
