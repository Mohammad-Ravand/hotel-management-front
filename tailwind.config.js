// tailwind.config.js
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Your primary color
        secondary: '#9333EA', // Your secondary color
        background: '#FFFFFF', // Light mode background
        foreground: '#000000', // Light mode foreground
      },
    },
  },
  plugins: [],
}
