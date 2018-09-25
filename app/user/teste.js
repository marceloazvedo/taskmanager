const User = require('./user-model')
const ErroHandler = require('../../config/modules/error-handler')

const LOCALE = 'en'

// user defined
// required

const marcelo = new User({ email: 'marceloazvedo@gmail.com' })
marcelo.save(function (err) {
    if (err) {
        console.log(JSON.stringify(ErroHandler(err, LOCALE)))
    }
})