module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
	darkMode: 'class',
	theme: {
		colors: {
			white: '#FFFFFF',
			black: '#000000',
			red: '#FA203C',
		},
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
		borderRadius: {
			none: '0',
			DEFAULT: '8px',
			md: '4px',
			lg: '8px',
			xl: '12px',
			full: '9999px',
		},
		screens: {
			md: { max: '1280px' },
			sm: { max: '640px' },
		},
		extend: {
			zIndex: {
				overlay: '60',
				popup: '70',
				'modal-overlay': '75',
				modal: '80',
				notify: '100',
			},
			spacing: {},
			rotate: {},
			opacity: {},
			backgroundImage: {},
			keyframes: {
				ripples: {
					'0%': {
						transform: 'scale(1)',
						opacity: '0.2',
					},
					'100%': {
						transform: 'scale(10)',
						opacity: '0',
					},
				},
				'absolute-spin': {
					'0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
					'100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				ripples: 'ripples 300ms ease-out forwards',
				'absolute-spin': 'absolute-spin 1s linear infinite',
				'fade-in': 'fade-in 300ms ease-out forwards',
			},
		},
	},

	plugins: [require('@tailwindcss/typography')],
}
