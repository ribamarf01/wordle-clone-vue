module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: [],
    options: {
        safelist: [/(from|via|to|border|bg|text)-(.*)-(\\d{1}0{1,2})/]
    }
  }
}