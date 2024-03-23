/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				top: '0px -10px 10px -10px rgba(0, 0, 0, 0.5)',
			},
		},
	},
	plugins: [],
};
