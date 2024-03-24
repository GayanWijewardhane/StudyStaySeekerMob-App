/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.js'],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f2fbf3',
					100: '#e0f8e3',
					200: '#c2f0c8',
					300: '#93e29d',
					400: '#61ce70',
					500: '#35b247',
					600: '#279236',
					700: '#22732e',
					800: '#1f5c28',
					900: '#1c4b24',
					950: '#0a2910'
				}
			}
		}
	},

	plugins: [require('flowbite/plugin')]
};

module.exports = config;
