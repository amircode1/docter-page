/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'accent-blue': {
          DEFAULT: 'var(--accent-blue)',
          dark: 'var(--accent-blue-dark)',
          light: 'var(--accent-blue-light)'
        },
        'accent-purple': 'var(--accent-purple)',
        background: {
          card: 'var(--background-card)',
          DEFAULT: 'var(--background)',
          hover: 'var(--background-hover)'
        },
        border: {
          DEFAULT: 'var(--border-color)'
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          gray: 'var(--text-gray)'
        },
        star: {
          DEFAULT: 'var(--star-color)', // اضافه کردن رنگ زرد ستاره
        },
        state: {
          success: 'var(--state-success)',
          error: 'var(--state-error)',
          warning: 'var(--state-warning)',
          info: 'var(--state-info)',
          warning: 'var(--state-warning)',
          warning: 'var(--state-warning)',
          success: 'var(--state-success)',
          error: 'var(--state-error)',
        },
        'card': {
          
          bg: 'var(--card-bg)',        
          text: 'var(--card-text)',     
          icon: 'var(--card-icon-bg)',  
        }
      }
    },
  },
  plugins: [],
}