const req = require
/** @type { import('tailwindcss/plugin')['default'] } */
const plugin = req('tailwindcss/plugin')

const rtlPlugin = () => plugin.withOptions(options => ({ matchUtilities, theme, addUtilities, e }) => {
  // text-align
  addUtilities({
    '.text-start': {
      textAlign: 'start',
    },
    '.text-end': {
      textAlign: 'end',
    },
  })

  // float
  addUtilities({
    '.float-start': {
      '.rtl &': {
        float: 'right',
      },
      '.ltr &': {
        float: 'left',
      },
    },
    '.float-end': {
      '.rtl &': {
        float: 'left',
      },
      '.ltr &': {
        float: 'right',
      },
    },
    '.clear-start': {
      '.rtl &': {
        clear: 'right',
      },
      '.ltr &': {
        clear: 'left',
      },
    },
    '.clear-end': {
      '.rtl &': {
        clear: 'left',
      },
      '.ltr &': {
        clear: 'right',
      },
    },
  })

  // space-x
  addUtilities({
    '.space-x-start': {
      '.rtl &': {
        '--tw-space-x-reverse': '1',
      },
      '.ltr &': {
        '--tw-space-x-reverse': '0',
      },
    },
    '.space-x-end': {
      '.rtl &': {
        '--tw-space-x-reverse': '0',
      },
      '.ltr &': {
        '--tw-space-x-reverse': '1',
      },
    },
  })

  // divide-x
  addUtilities({
    '.divide-x-start': {
      '.rtl &': {
        '--tw-divide-x-reverse': '1',
      },
      '.ltr &': {
        '--tw-divide-x-reverse': '0',
      },
    },
    '.divide-x-end': {
      '.rtl &': {
        '--tw-divide-x-reverse': '0',
      },
      '.ltr &': {
        '--tw-divide-x-reverse': '1',
      },
    },
  })

  // spacing
  matchUtilities({
    ms: value => ({
      marginInlineStart: value,
    }),
    me: value => ({
      marginInlineEnd: value,
    }),
    ps: value => ({
      paddingInlineStart: value,
    }),
    pe: value => ({
      paddingInlineEnd: value,
    }),
    start: value => ({
      '.rtl &': {
        right: value,
      },
      '.ltr &': {
        left: value,
      },
    }),
    end: value => ({
      '.rtl &': {
        left: value,
      },
      '.ltr &': {
        right: value,
      },
    }),
  }, {
    values: {
      ...theme('spacing'),
      auto: 'auto',
    },
    supportsNegativeValues: true,
  })

  // border-radius
  matchUtilities({
    'rounded-s': value => ({
      '.rtl &': {
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      },
      '.ltr &': {
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      },
    }),
    'rounded-e': value => ({
      '.rtl &': {
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      },
      '.ltr &': {
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      },
    }),
    'rounded-ts': value => ({
      '.rtl &': {
        borderTopRightRadius: value,
      },
      '.ltr &': {
        borderTopLeftRadius: value,
      },
    }),
    'rounded-te': value => ({
      '.rtl &': {
        borderTopLeftRadius: value,
      },
      '.ltr &': {
        borderTopRightRadius: value,
      },
    }),
    'rounded-bs': value => ({
      '.rtl &': {
        borderBottomRightRadius: value,
      },
      '.ltr &': {
        borderBottomLeftRadius: value,
      },
    }),
    'rounded-be': value => ({
      '.rtl &': {
        borderBottomLeftRadius: value,
      },
      '.ltr &': {
        borderBottomRightRadius: value,
      },
    }),
  }, {
    values: theme('borderRadius'),
  })

  // border-width
  matchUtilities({
    'border-s': value => ({
      '.rtl &': {
        borderRightWidth: value,
      },
      '.ltr &': {
        borderLeftWidth: value,
      },
    }),
    'border-e': value => ({
      '.rtl &': {
        borderLeftWidth: value,
      },
      '.ltr &': {
        borderRightWidth: value,
      },
    }),
  }, {
    values: theme('borderWidth'),
  })

  // border-colors
  // matchUtilities({
  //   'border-s': value => ({
  //     '.rtl &': {
  //       borderRightColor: value,
  //     },
  //     '.ltr &': {
  //       borderLeftColor: value,
  //     },
  //   }),
  //   'border-e': value => ({
  //     '.rtl &': {
  //       borderLeftColor: value,
  //     },
  //     '.ltr &': {
  //       borderRightColor: value,
  //     },
  //   }),
  // }, {
  //   values: generateColors(e, theme('borderColor')),
  // })
})

module.exports = rtlPlugin
