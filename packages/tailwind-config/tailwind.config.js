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
    '../../node_modules/@rtkcd/ui-kit/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@rtkcd/ui-kit/dist/**/*.{js,ts,jsx,tsx}',
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
            focus: 'rgba(36, 120, 204, 0.4)',
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
            lite: 'rgba(255, 227, 178, 1)',
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
            lite: 'rgba(255, 178, 178, 1)',
            hover: '#C71F1F',
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
      golos: ['Golos Text', 'sans-serif'],
    },

    extend: {
      lineHeight: {
        112.5: '112.5%', // 112.5%
        125: '125%', // 125%
        137.5: '137.5%', // 137.5%
        150: '150%', // 150%
      },
      borderRadius: {
        625: '0.625rem',
      },
      boxShadow: {
        paper:
          '0px 2px 20px 0px rgba(19, 77, 178, 0.15), 0px 2px 4px 0px rgba(19, 77, 178, 0.25)',
        paperHover:
          '0px 5px 8px 0px rgba(18, 72, 166, 0.02), 0px 0px 16px 0px rgba(18, 72, 166, 0.08), 0px 9px 16px 0px rgba(18, 72, 166, 0.06)',
        dropdownLight:
          '0px 4px 6px 0px rgba(49, 76, 130, 0.06), 0px 2px 10px 0px rgba(49, 76, 130, 0.25)',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 7fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 9fr))',
        10: 'repeat(10, minmax(0, 10fr))',
        11: 'repeat(11, minmax(0, 11fr))',
        12: 'repeat(12, minmax(0, 12fr))',
        13: 'repeat(13, minmax(0, 13fr))',
      },
      keyframes: {
        loader: {
          '0%,10%': {
            transform: 'rotate(0deg)',
          },
          '90%,100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        loader1: 'loader 2s linear infinite',
        loader2: 'loader 2s linear 0.125s infinite',
        loader3: 'loader 2s linear 0.250s infinite',
        loader4: 'loader 2s linear 0.375s infinite',
        loader5: 'loader 2s linear 0.5s infinite',
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
