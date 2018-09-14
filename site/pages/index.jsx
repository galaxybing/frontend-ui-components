export default {
  documents: {
    'quick-start': require('./quick-start'),
    'i18n': require('./i18n'),
    // 'custom-theme': require('./custom-theme')
  },
  components: {
    'Basic': {
      // 'layout': require('./layout'),
      // 'color': require('./color'),
      // 'typography': require('./typography'),
      // 'icon': require('./icon'),
      'maintemplatelayout': require('./maintemplatelayout'),
      'rangedatepicker': require('./rangedatepicker'),
      'button': require('./button')
    },
    // 'Web': {
    //   'form': require('./form')
    // },
    // 'App': {
    //   'table': require('./table')
    // },
    // 'Others': {
    //   'dialog': require('./dialog'),
    //   'tooltip': require('./tooltip'),
    //   'popover': require('./popover'),
    //   'card': require('./card'),
    //   'carousel': require('./carousel'),
    //   'collapse': require('./collapse')
    // }
  }
}
