const erroHandler = require('../../config/modules/error-handler')
const UserController = require('./user-controller');

const LOCALE = 'en'

UserController.findBy('email','marceloazvedo@gmail.com').then(users => {
    users.map(user => console.log(user))
}).catch(err => {
    console.error(err)
})