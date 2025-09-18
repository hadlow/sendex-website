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
          dark: '#293241',
          mid: '#617B9D',
          light: '#9BC0DA',
        },
        secondary: "#C75940",
      }
    },
  },
  plugins: [],
}
