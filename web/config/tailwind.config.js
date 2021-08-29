module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0A5285',
        },
        muted: {
          DEFAULT: '#7A7A7A',
        },
        apptab: {
          plan: '#00B2FF',
          today: '#FCC605',
        },
        task: {
          DEFAULT: '#16AFD0',
        },
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
