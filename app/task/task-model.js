const mongoose = require('../../config/db')
const Schema = require('./task-schema')(mongoose)
var ValidationError = mongoose.Error.ValidationError;
var ValidatorError = mongoose.Error.ValidatorError;

Schema.pre('validate', function (next) {
    if(!this.title && !this.description) {
        const validationError = new ValidationError(this)
        validationError.errors.title = new ValidatorError('title', 'as;kdjsa;jdśja', 'notvalid', this.title)
        next(validationError)
    }
    next()
})

const getModuleName = require('../../config/modules/get-name')

module.exports = mongoose.model(getModuleName(__dirname), Schema)