const I18N = require("i18n")

I18N.configure({
    locales:['pt', 'en'],
    directory: '../../locales',
    defaultLocale: 'pt',
    objectNotation: true
})

module.exports = I18N