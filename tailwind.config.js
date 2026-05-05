/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0C',
        surface: '#1A1A1D',
        divider: '#2A2F36',
        primary: '#F5F5F5',
        secondary: '#7A8087',
        body: '#8A8F98',
        accent: '#C56A1A',
      },
      fontFamily: {
        sans: ['"Helvetica Now"', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
      },
      maxWidth: {
        'container': '960px',
      },
      letterSpacing: {
        'label': '0.08em',
        'meta': '0.10em',
        'tight': '-0.04em',
        'slight': '-0.02em',
      }
    },
  },
  plugins: [],
}
