/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0f1a',
        foreground: '#e6e9ef',
        muted: '#0f1729',
        primary: '#82d1ff',
        accent: '#c084fc',
        card: '#11182a',
        cardHover: '#1a2340'
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.25)',
        glow: '0 0 0 2px rgba(130,209,255,0.35)'
      },
      borderRadius: {
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
