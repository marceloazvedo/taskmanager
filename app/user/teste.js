const User = require('./user-model')
const I18N = require("i18n")

I18N.configure({
    locales:['en', 'de'],
    directory: '../../locales',
    defaultLocale: 'en'
})

const marcelo = new User({email: 'marceloazvedo1'})
marcelo.save(function(err) {
    if(err) {
        const fields = Object.keys(err.errors)
        for(const field of fields){
            const fieldError = err.errors[field]
            console.log(fieldError.message)
            console.log(I18N.__(fieldError.message))
        }
    }
})