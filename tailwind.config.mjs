/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'secundary': '#89CFF0',
        'tertiary': '#F4A1A1',
        'quaternary': '#98FF98',
        'quinary': '#E6E6FA',
        'verde-claro': '#80D8DA',
        'rosa-pessego': '#F8B7B7',
      },
    },
	},
	plugins: [],
}
