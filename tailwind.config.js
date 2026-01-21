/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base - Warm Gray
        base: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4de',
          300: '#d4cec4',
          400: '#b5ada0',
          500: '#9a917f',
          600: '#7d7466',
          700: '#5f5850',
          800: '#3d3a35',
          900: '#1f1d1a',
          950: '#141312',
        },
        // Accent - Terracotta
        accent: {
          50: '#fdf4f1',
          100: '#fce7e0',
          200: '#f9d0c3',
          300: '#f4b099',
          400: '#ed8a68',
          500: '#e9593a',
          600: '#d54228',
          700: '#b3331f',
          800: '#922c1d',
          900: '#78281d',
          950: '#41120b',
        },
        // App-specific colors
        app: {
          flagquiz: {
            light: '#d1fae5',
            DEFAULT: '#10b981',
            dark: '#065f46',
          },
          shiftcalendar: {
            light: '#e0f2fe',
            DEFAULT: '#0ea5e9',
            dark: '#075985',
          },
          themejinro: {
            light: '#fce7f3',
            DEFAULT: '#f43f5e',
            dark: '#9f1239',
          },
          yataimobile: {
            light: '#fef3c7',
            DEFAULT: '#f59e0b',
            dark: '#92400e',
          },
          kachikan: {
            light: '#ede9fe',
            DEFAULT: '#8b5cf6',
            dark: '#5b21b6',
          },
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          'Meiryo',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
