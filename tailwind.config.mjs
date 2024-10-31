/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-midnight-green': '#014E56',
        'primary-light-coral': '#F67E7E',
        'primary-white': '#FFFFFF',
        'secondary-rapture-blue': '#79C8C7',
        'secondary-police-blue': '#2C6269',
        'secondary-deep-jungle-green': '#004047',
        'secondary-sacramento-state-green': '#012F34',
        'secondary-dark-green': '#002529',
      },
      fontFamily: {
        sans: ['Livvic', 'sans-serif'],
      },
      fontSize: {
        'h1-lg': '6.25rem',
        'h1-sm': '4rem',
        h2: '3rem',
        h3: '1.125rem',
        'body-lg': '1.125rem',
        'body-sm': '0.938rem',
      },
      lineHeight: {
        'h1-lg': '6.25rem',
        'h1-sm': '3.5rem',
        h2: '3rem',
        h3: '1.75rem',
        'body-lg': '1.75rem',
        'body-sm': '1.563rem',
      },
    },
  },
  plugins: [],
};
