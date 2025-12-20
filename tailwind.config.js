/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
        },
        primary: {
          DEFAULT: '#007BFF',
          50: '#e6f3ff',
          100: '#cce7ff',
          500: '#007BFF',
          600: '#0066d6',
          700: '#0052ad',
        },
        dark: {
          900: '#1F2937',
          800: '#374151',
          700: '#4B5563',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
