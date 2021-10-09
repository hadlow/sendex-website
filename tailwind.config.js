module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#fff',
      blue: {
        primary: '#23059f',
        mid: '#1e1086',
        dark: '#141255'
      },
      yellow: '#efbb00',
      orange: '#f29f05',
      red: '#ff4f3c',
      green: '#00c800'
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
