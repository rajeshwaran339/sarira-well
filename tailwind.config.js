/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        headline: ['Playfair Display', 'serif'],
      },
      colors: {
        background: '#F8F5EF', // Heritage Cream
        foreground: '#364A22', // Earth Green
        primary: {
          DEFAULT: '#364A22', // Earth Green
          foreground: '#F8F5EF',
        },
        secondary: {
          DEFAULT: '#F0EDE6',
          foreground: '#364A22',
        },
        accent: {
          DEFAULT: '#E38A30', // Warm Orange
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F0EDE6',
          foreground: '#5A6B3A',
        },
        border: '#E5E0D8',
        input: '#E5E0D8',
        ring: '#E38A30',
        terracotta: '#B85C38',
        brown: '#6B4E3D',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}