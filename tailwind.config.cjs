/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '580px',
			sm: '768px',
			md: '992px',
			lg: '1200px',
			xl: '1440px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
				xs: '1.5rem',
				sm: '2rem',
				md: '3rem',
				lg: '3rem',
				xl: '5rem',
			},
		},
		extend: {
			colors: {
				accent: '#76A9FA',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
