const i18n = require("i18n")

i18n.configure({
    locales:['pt', 'en'],
    directory: '../../locales',
    defaultLocale: 'pt',
    objectNotation: true
})

module.exports = i18n