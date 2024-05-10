import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--tw-color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--tw-color-secondary) / <alpha-value>)',
			},
			fontFamily: {
				sans: ['var(--font-rubik)', ...fontFamily.sans],
				serif: ['var(--font-fraunces)', ...fontFamily.serif],
			},
		},
	},
	plugins: [],
};
export default config;
