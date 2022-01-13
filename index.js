const plugin = require('tailwindcss/plugin')

const rtlPlugin = () => plugin(({ matchUtilities, theme, addUtilities }) => {
  addUtilities({
    '.text-start': {
      textAlign: 'start',
    },
    '.text-end': {
      textAlign: 'end',
    },
  })

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
    values: {
      ...theme('spacing'),
      auto: 'auto',
    },
  })
})

module.exports = rtlPlugin
