// @ts-check
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
  }, {
    values: {
      ...theme('spacing'),
      auto: 'auto',
    },
  })
})

module.exports = rtlPlugin
