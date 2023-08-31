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
				accent: '#2CA6FE',
				'gri-text': '#212121',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			backgroundImage: {
				'imagine-hero': "url('../assets/backgroundhero.jpg')",
			},
			letterSpacing: {
				subtitle: '.0141rem',
				h3title: '-0.0238rem',
				'8years': '.0594rem',
				ajutor: '0.00938rem',
				testimoniale: '0.0325rem',
				footertitles: '-0.02625rem',
				solutii: '-0.0875rem',
			},
		},
	},
	plugins: [],
};
