/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#333333',
        dark: '#000000'
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      animation: {
        'quantum-float': 'quantum-float 6s ease-in-out infinite',
        'temporal-shift': 'temporal-shift 4s ease-in-out infinite',
        'temporal-text-flow': 'temporal-text-flow 3s linear infinite',
        'quantum-scan': 'quantum-scan 2s infinite',
        'temporal-grid-flow': 'temporal-grid-flow 20s linear infinite',
      },
      keyframes: {
        'quantum-float': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.3'
          },
          '25%': {
            transform: 'translateY(-20px) rotate(90deg)',
            opacity: '0.8'
          },
          '50%': {
            transform: 'translateY(-10px) rotate(180deg)',
            opacity: '1'
          },
          '75%': {
            transform: 'translateY(-30px) rotate(270deg)',
            opacity: '0.6'
          }
        },
        'temporal-shift': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
        'temporal-text-flow': {
          '0%': {
            'background-position': '0% center'
          },
          '100%': {
            'background-position': '200% center'
          }
        },
        'quantum-scan': {
          '0%': {
            left: '-100%'
          },
          '100%': {
            left: '100%'
          }
        },
        'temporal-grid-flow': {
          '0%': {
            'background-position': '0 0'
          },
          '100%': {
            'background-position': '50px 50px'
          }
        }
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'quantum': '0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.05), 0 0 60px rgba(255, 255, 255, 0.02)',
        '4d': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
};