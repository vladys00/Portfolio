/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
      "./node_modules/flowbite/**/*.js"
    ],
    theme: {
      extend: {
        colors: {  
          'brand-yellow': '#FFFA64',
        },
        fontSize:{
          'size-title': '2rem',
        },
        borderRadius:{
          'default': '20px'
        }
      },
    },
    plugins: [
      require('flowbite')
    ],
  };