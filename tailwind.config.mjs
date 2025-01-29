/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        screens: {
           sm: "100%",
           md: "100%",
           lg: "900px",
           xl: "900px"
        }
      },
      colors: {
        primary: {
          dark: '#141255',
          mid: '#1e1086',
          light: '#23059f',
        }
      }
    },
  },
  plugins: [],
}
