const createColor = (
  { default: lDefault, ...light },
  { default: dDefault, ...dark }
) => ({
  DEFAULT: lDefault,

  light: {
    DEFAULT: lDefault,
    ...light,
  },

  dark: {
    DEFAULT: dDefault,
    ...dark,
  },
})

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    '../../node_modules/@npm.piece/ui-kit/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@npm.piece/ui-kit/dist/**/*.{js,ts,jsx,tsx}',
    './index.html',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',

      base: {
        header: createColor(
          {
            default: '#243D57',
          },
          { default: '#122137' }
        ),
        background: createColor(
          {
            default: '#FDFDFD',
            800: 'rgba(253, 253, 253, 0.8)',
            modal: 'rgba(57, 62, 71, 0.2)',
          },
          {
            default: '#07162C',
            800: 'rgba(255, 255, 255, 0.8)',
            modal: 'rgba(91, 100, 113, 0.2)',
          }
        ),
        primary: createColor(
          {
            default: '#E9EAEC',
          },
          { default: '#18273F' }
        ),
        secondary: createColor(
          {
            default: '#E4E6E7',
            medium: '#E4E6E7',
            low: '#F1F2F3',
          },
          {
            default: '#848B94',
            medium: '#848B94',
            low: '#18273F',
          }
        ),
        tertiary: createColor(
          {
            default: '#E5F3FE',
            disable: '#EAF2FA',
          },
          {
            default: '#20344B',
            disable: '#20344B',
          }
        ),
      },
      borderWidth: {
        3: '3px',
      },

      border: {
        1: createColor({ default: '#D3D3D6' }, { default: '#2E3957' }),
        2: createColor({ default: '#DADCE2' }, { default: '#2E3957' }),
        3: createColor({ default: '#C4C7D4' }, { default: '#334E6B' }),
        4: createColor({ default: '#DFE2E7' }, { default: '#313D5D' }),
        5: createColor(
          { default: 'rgba(196, 228, 253, 1)' },
          { default: 'rgba(38, 62, 89, 1)' }
        ),
        danger: createColor(
          { default: 'rgba(255, 128, 128, 1)' },
          { default: 'rgba(111, 42, 42, 1)' }
        ),
      },

      accent: {
        primary: createColor(
          {
            default: '#4C98E3',
            hover: '#217DD9',
            focus: 'rgba(36, 120, 204, 0.5)',
            transparent: {
              hover: 'rgba(128, 202, 255, 0.2)',
            },
          },
          {
            default: '#335AE3',
            hover: '#1A3EBC',
            focus: 'rgba(51, 90, 227, 0.5)',
            transparent: {
              hover: 'rgba(51, 90, 227, 0.15)',
            },
          }
        ),
        secondary: createColor(
          {
            default: '#AED1EA',
            high: '#8E9CAE',
            medium: '#AED1EA',
            low: '#B2CBE4',
            disable: '#DDE5F2',
          },
          {
            default: '#2E4660',
            high: '#9AA5B5',
            medium: '#2E4660',
            low: '#383B42',
            disable: '#0E1D34',
          }
        ),
        tertiary: createColor(
          {
            default: '#DDE5F2',
            medium: '#DDE5F2',
            low: '#EAF2FA',
          },
          {
            default: '#0E1D34',
            medium: '#0E1D34',
            low: '#172945',
          }
        ),
        quaternary: createColor(
          {
            default: '#E6E7EA',
            disable: '#E6E7EA',
          },
          {
            default: '#4A5668',
            disable: '#4A5668',
          }
        ),
      },

      vizcolor: {
        gold: createColor(
          {
            default: '#CBB478',
          },
          {
            default: '#0A0B0D',
          }
        ),
      },

      indication: {
        success: createColor(
          {
            default: '#60B680',
            hover: '#489D68',
            transparent: {
              hover: 'rgba(96, 182, 128, 0.11)',
            },
          },
          {
            default: '#2ABF62',
            hover: '#1F8E49',
            transparent: {
              hover: 'rgba(42, 191, 98, 0.15)',
            },
          }
        ),
        attention: createColor(
          {
            default: '#D88900',
            lite: 'rgba(255, 227, 178, 1)',
          },
          {
            default: '#EF9701',
            lite: 'rgba(94, 62, 8, 1)',
          }
        ),
        danger: createColor(
          {
            default: '#DB2626',
            lite: 'rgba(255, 178, 178, 1)',
            hover: '#C02020',
            transparent: {
              hover: 'rgba(219, 38, 38, 0.1)',
            },
          },
          {
            default: '#ED4040',
            lite: 'rgba(66, 25, 25, 1)',
            hover: '#CF2020',
            transparent: {
              hover: 'rgba(237, 64, 64, 0.15)',
            },
          }
        ),
      },

      text: {
        primary: createColor(
          {
            default: '#393E47',
          },
          {
            default: '#EBEBEB',
          }
        ),
        secondary: createColor(
          {
            default: '#8E9195',
          },
          {
            default: '#848B94',
          }
        ),
        tertiary: createColor(
          {
            default: '#C0C1C4',
          },
          {
            default: '#566271',
          }
        ),
        accent: createColor(
          {
            default: '#4C98E3',
          },
          {
            default: '#6280EA',
          }
        ),
        contrast: createColor(
          {
            default: '#FFFFFF',
            secondary: '#C0C1C4',
          },
          {
            default: '#FFFFFF',
            secondary: '#848B94',
          }
        ),
      },
    },
    fontFamily: {
      main: ['Roboto', 'sans-serif', 'system-ui'],
    },
    fontSize: {
      xs: '0.625rem', // 10px
      sm: '0.75rem', // 12px
      base: '0.875rem', // 14px
      lg: '1rem', // 16px
      xl: '1.125rem', // 18px
      '2xl': '1.25rem', // 20px
      '3xl': '1.5rem', // 24px
      '4xl': '1.75rem', // 28px
      '5xl': '2.125rem', // 34px
      '6xl': '2.5rem', // 40px
      '7xl': '3rem', // 48px
      '8xl': '3.5rem', // 56px
      '9xl': '4.5rem', // 72px
      '10xl': '5rem', // 80px
    },
    extend: {
      'truncate-3': {
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
      },
      lineHeight: {
        3: '3rem', // 48px
        4: '4rem', // 64px
        5: '5rem', // 80px
        6: '6rem', // 96px
      },
      fontWeight: {
        550: '550',
        500: '500',
        400: '400',
      },
      screens: {
        '3xl': '1920px', // @media (min-width: 1920px)
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
