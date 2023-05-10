const colors = {
	'miami-blue': '#0070b9',
	'miami-cyan': '#009afe',
	'miami-orange': '#e65706',
	'miami-turquoise': '#4dd6ca',
	'moscow-yellow': '#FEE600',
	'moscow-red': '#EE505A',
	'moscow-blue': '#00A5BC',
	'moscow-turquoise': '#19B28D',
	'moscow-orange': '#F88545',
	'moscow-white': '#F4F4F4',
	'moscow-black': '#2B2D33',
	'milan-black': '#2f2f2f',
}

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
	darkMode: 'class',
	theme: {
		colors,
		fontSize: {
			'paragraph-xs': ['8px', { lineHeight: '14px' }],
			'paragraph-s': ['10px', { lineHeight: '15px' }],
			'paragraph-m-s': ['12px', { lineHeight: '25px' }],
			'paragraph-l-m': ['14px', { lineHeight: '22px' }],
			'paragraph-m-l': ['14px', { lineHeight: '26px' }],
			'paragraph-l': ['16px', { lineHeight: '28px' }],
			'paragraph-xl': ['18px', { lineHeight: '29px' }],
			'headline-xs': ['20px', { lineHeight: '31px' }],
			'headline-s': ['24px', { lineHeight: '33px' }],
			'headline-m-s': ['28px', { lineHeight: '36px' }],
			'headline-l-m': ['32px', { lineHeight: '47px' }],
			'headline-l': ['36px', { lineHeight: '50px' }],
			'headline-xl': ['40px', { lineHeight: '53px' }],
			'accent-s': ['48px', { lineHeight: '67px' }],
			'accent-m-s': ['56px', { lineHeight: '73px' }],
			'accent-l-m': ['64px', { lineHeight: '79px' }],
			'accent-l': ['72px', { lineHeight: '80px' }],
		},
	},

	plugins: [require('@tailwindcss/typography')],
}
