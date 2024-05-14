import { addDynamicIconSelectors } from '@iconify/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true
			},
			colors: {
				primary: 'rgb(var(--primary) / <alpha-value>)'
			}
		}
	},
	plugins: [addDynamicIconSelectors()]
}
