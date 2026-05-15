/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0B0D',
          900: '#0E1013',
          800: '#11140F',
          700: '#1A1D20',
          600: '#1F2126'
        },
        bone: {
          50: '#F5F1E8',
          100: '#E8E2D2',
          300: '#A8A095',
          500: '#6E6960'
        },
        emerald: {
          accent: '#5FAA6E',
          deep: '#2D5F3F',
          glow: '#7BC68B'
        },
        gold: {
          accent: '#D4A84A',
          deep: '#B8842C',
          glow: '#E8C268'
        },
        earth: {
          accent: '#7A5B3A',
          deep: '#4A3724'
        }
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        eyebrow: '0.22em'
      },
      transitionTimingFunction: {
        cinema: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
}
