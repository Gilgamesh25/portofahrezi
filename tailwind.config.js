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
          DEFAULT: "#18181B",
          light: "#27272A",
          dark: "#09090B",
        },
        secondary: {
          DEFAULT: "#3F3F46",
          light: "#52525B",
          dark: "#27272A",
        },
        accent: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        surface: {
          DEFAULT: "#FAFAFA",
          muted: "#F4F4F5",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Mobile-first typography scale
        "xs-mobile": ["0.75rem", { lineHeight: "1rem" }],
        "sm-mobile": ["0.875rem", { lineHeight: "1.25rem" }],
        "base-mobile": ["1rem", { lineHeight: "1.5rem" }],
        "lg-mobile": ["1.125rem", { lineHeight: "1.75rem" }],
        "xl-mobile": ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl-mobile": ["1.5rem", { lineHeight: "2rem" }],
        "3xl-mobile": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl-mobile": ["2.25rem", { lineHeight: "2.5rem" }],
      },
      spacing: {
        // Responsive spacing
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      backdropBlur: {
        glass: "16px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.06)",
        card: "0 4px 24px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 12px 40px -8px rgba(0, 0, 0, 0.12), 0 4px 16px -4px rgba(0, 0, 0, 0.06)",
        glow: "0 0 24px rgba(37, 99, 235, 0.2)",
      },
      maxWidth: {
        content: "1200px",
        "content-sm": "640px",
        "content-md": "768px",
        "content-lg": "1024px",
      },
      minHeight: {
        "screen-mobile": "100dvh",
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient": "gradient-shift 6s ease infinite",
        "slide-up": "slide-up-fade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 99, 235, 0.3)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(37, 99, 235, 0.15)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "slide-up-fade": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
