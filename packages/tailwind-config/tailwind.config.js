const colors = {
  'moscow-yellow': '#FEE600',
  'moscow-red': '#EE505A',
  'moscow-blue': '#00A5BC',
  'moscow-turquoise': '#19B28D',
  'moscow-orange': '#F88545',

  'milan-black': '#2f2f2f',
}

const palette = {
  'primal-black': '#2f2f2f',
  'secondary-black': '#2B2D33',

  'primal-white': '#ffffff',
  'secondary-white': '#F8F8F8',
  'primal-gray': '#F4F4F4',
  'secondary-gray': '#f5f5f1',

  black: '#000000',

  'exotic-blue': '#0070b9',
  'exotic-cyan': '#009afe',
  'exotic-orange': '#e65706',
  'exotic-turquoise': '#4dd6ca',

  'status-red': '#f06251',
  'status-yellow': '#f8b200',
  'status-green': '#2ec36a',

  'text-gray': '#65727f',
  'text-black': '#0b1f32',
}
const createColor = (light, dark) => ({
  DEFAULT: light?.default,

  light: {
    DEFAULT: light?.default,
    active: light?.active,
  },

  dark: {
    DEFAULT: dark?.default,
    active: dark?.active,
  },
})

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: createColor(
        { default: palette['primal-white'] },
        {
          default: palette['primal-black'],
          active: palette['secondary-black'],
        }
      ),

      text: {
        gray: palette['text-gray'],
      },

      brand: {
        blue: palette['exotic-blue'],
        cyan: palette['exotic-cyan'],
        orange: palette['exotic-orange'],
        turquoise: palette['exotic-turquoise'],
      },

      status: {
        error: palette['status-red'],
        warning: palette['status-yellow'],
        success: palette['status-green'],
        focus: palette['exotic-cyan'],
      },

      paper: {
        light: {
          100: palette['primal-white'],
          200: palette['secondary-white'],
          300: palette['primal-gray'],
          400: palette['secondary-gray'],
        },
      },
    },
    animation: {
      slide: 'slide 1s ease-in-out',
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' },
      },
    },
    extend: {
      lineHeight: {
        125: '125%', // 125%
        150: '150%', // 150%
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
