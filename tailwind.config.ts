import type { Config } from 'tailwindcss'

const spacingConfig = {
  28: '7rem',
  '15vw': '15vw',
  '15vh': '15vh',
  'n25vw': '-25vw',
  'n25vh': '-25vh',
  '25vw': '25vw',
  '25vh': '25vh',
  '45vh': '45vh',
  '50vh': '50vh',
  '50vw': '50vw',
  '65vh': '65vh',
  '75vh': '75vh',
  '90vh': '90vh',
}
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'roboto': ['var(--font-roboto)'],
      'sans': ['var(--font-open-sans)']
    },
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      rotate: {
        '40': '40deg',
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'aqua-green': '#1FB25A',
        'aqua-blue': '#1AB7EA'
      },
      spacing: {
        ...spacingConfig
      },
      minHeight: {
        ...spacingConfig
      },
      minWidth: {
        ...spacingConfig
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: '1.2',
        11: '3rem'
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}


export default config