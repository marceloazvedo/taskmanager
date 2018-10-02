const ErrorHandler = require('../../config/modules/error-handler')
const I18N = require('./i18n-init')

const getErrors = (err) => ({ errors: ErrorHandler(err) })

const getResponse = (code, obj) => Object.assign({}, obj, { code }, { message: I18N__('messages.' + code) })

const SUCSESS = '000'
const VALIDATION_ERRO = '001'
const WRONG_PASSWORD = '002'
const USER_NOT_FOUND = '003'

const processResponse = (res, response, status) => {
    const sts = !status ? 200 : status
    if (response && response.name === 'ValidationError')
        res.status(sts).json(getResponse(VALIDATION_ERRO, getErrors(response)))
    else
        res.status(sts).json(getResponse(SUCSESS, response))

}

const responseWithCodeAndMessage = (code) => res.status(sts).json(({ code }, { message: I18N__('messages.' + code) }))

module.exports = Object.assign({}, { processResponse }, { responseWithCodeAndMessage }, { errors: Object.assign({}, { SUCSESS }, { VALIDATION_ERRO }, { WRONG_PASSWORD }, { USER_NOT_FOUND }) })