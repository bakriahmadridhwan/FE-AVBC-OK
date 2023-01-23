module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      rotate: {
        '17': '17deg',
      },
      backgroundImage: {
        'hero-pattern': "url('~/static/avbc/6.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      animation: {
        'slow-spin': 'spin 5s linear infinite'
      },
      colors: {
        // primary: '#14b8a6',
        secondary: '#64748b',
        tri: '#94a3b8',
        dark: '#0f172a',
        nav: '#4A148C',
        primary: '#C400C6',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1320px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
