/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	theme: {
		width: {
			auto: 'auto',
			'5': '5%',
			'10': '10%',
			'15': '15%',
			'20': '20%',
			'25': '25%',
			'30': '30%',
			'35': '35%',
			'40': '40%',
			'45': '45%',
			'50': '50%',
			'55': '55%',
			'60': '60%',
			'65': '65%',
			'70': '70%',
			'75': '75%',
			'80': '80%',
			'85': '85%',
			'90': '90%',
			'95': '95%',
			full: '100%',
			fit: 'fit-content',
			screen: '100vw',
		},
		extend: {
			fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				none: '0',
				sm: '0.125rem',
				default: '0.25rem',
				md: '0.375rem',
				lg: '0.5rem',
				xl: '35px',
				full: '9999px',
			},
			inset: {
				'0': '0',
				auto: 'auto',
				'10': '10px',
				'20': '20px',
				'30': '30px',
				'40': '40px',
				'50': '50px',
				'60': '50px',
			},
			colors: {
				brand: {
					accent: '#DEEDAD',
					acccentLight: '#F9FFD6',
					accentLighter: '#FBFBF3',
					primary: '#7B9B0D',
					primaryLight: '#CDE380',
				},
			},
		},
	},
	variants: {
		margin: ['responsive', 'last'],
		backgroundColor: ['responsive', 'hover', 'focus', 'active'],
		textColor: ['responsive', 'hover', 'focus', 'active'],
		borderColor: ['responsive', 'hover', 'focus', 'active'],
		borderWidth: ['responsive', 'focus'],
	},
	plugins: [
		plugin(function({ addComponents }) {
			const buttons = {
				'.btn': {
					paddingLeft: '2rem',
					paddingRight: '2rem',
					borderRadius: '0.5rem',
					paddingTop: '0.75rem',
					paddingBottom: '0.75rem',

					// backgroundColor: "#EAF3CA",
					'&:focus': {
						outline: '0',
						// boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
					},
					'&:hover': {
						// boxShadow: '5px 4px 4px 0px #0000001f',
					},
				},
				'.btn-blue': {
					backgroundColor: '#3490dc',
					color: '#fff',
					'&:hover': {
						backgroundColor: '#2779bd',
					},
				},
				'.btn-red': {
					backgroundColor: '#e3342f',
					color: '#fff',
					'&:hover': {
						backgroundColor: '#cc1f1a',
					},
				},
			}

			addComponents(buttons)
		}),
	],
}
