import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    colors: {
      'amz': '#1C2B35',
    },
    extend: {},
  },
  plugins: [daisyui],
}

