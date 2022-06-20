module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      light: {
        "primary": "#2A8E9D",
        "secondary": "#FF5144",       
        "accent": "#FFCA38",       
        "neutral": "#36414F",       
        "base-100": "#FFF",       
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23", 
        "error": "#F87272",
      },
      dark: {
        "primary": "#2A8E9D",
        "secondary": "#FF5144",       
        "accent": "#FFCA38",       
        "neutral": "#36414F",       
        "base-100": "#FFF",       
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23", 
        "error": "#F87272",
      }
    }]
  }
}
