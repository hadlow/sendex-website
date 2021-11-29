module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      gray: {
        '100': '#F8F8F8',
        '200': '#E0E0E0',
        '300': '#C8C8C8',
        '400': '#888888',
        '500': '#707070',
        '600': '#505050',
        '700': '#383838',
        '800': '#282828',
        '900': '#101010',
      },
      blue: {
        primary: '#23059f',
        mid: '#1e1086',
        dark: '#141255'
      },
      yellow: '#efbb00',
      orange: '#f29f05',
      red: '#ff4f3c',
      green: '#00c800',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['serif'],
      mono: ['Monaco', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
