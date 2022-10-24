/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#106c75",
        
"secondary": "#2d2987",
        
"accent": "#e290f4",
        
"neutral": "#1F1820",
        
"base-100": "#FFFFFF",
        
"info": "#4190C8",
        
"success": "#32E7BA",
        
"warning": "#EC9909",
        
"error": "#E5667C",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
