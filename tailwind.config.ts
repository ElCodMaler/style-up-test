import type { Config } from 'tailwindcss'
import { content, plugin } from 'flowbite-react/tailwind'

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.{html,js,jsx,ts,tsx}",
    content(),
  ],
  theme: {
    extend: {},
    colors:{
      'primary': '#1b171c',
      'secondary': '#632374',
      'primary-gray': '#5d5656',
      'light-gray': '#b4b4b4',
      'new-white': '#d1d1d1',
      'light-primary': '#262128',
      'light-secondary': '#72427f'
    },
    screens: {
      sm: '200px',
      md: '500px',
      lg: '976px',
      xl: '1450px',
      '2xl': '2000px',
    },
    fontFamily: {
      'sans': ['sans-serif', 'system-ui'],
    }
  },
  plugins: [
    plugin(),
  ],
} satisfies Config

