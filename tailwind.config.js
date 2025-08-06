/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "641px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        'jmi-green': '#347B5E',
        'jmi-accent': '#58AF89',
        'jmi-purple': '#7C3AED',
        'jmi-pink': '#EC4899',
        'jmi-cyan': '#06B6D4',
      },
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'mono': ['Fira Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}

