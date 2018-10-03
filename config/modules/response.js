const ErrorHandler = require('../../config/modules/error-handler')

const getErrors = (err) => ({ errors: ErrorHandler(err) })

const getResponse = (req, code, obj) => Object.assign({}, obj, {code}, { message: req.i18n.__(`messages.${code}`) })

const SUCSESS = '000'
const VALIDATION_ERRO = '001'
const WRONG_PASSWORD = '002'
const USER_NOT_FOUND = '003'

const STATUS_CODE_SUCSESS = 200
const STATUS_CODE_INTERNAL_SERVERAL_ERRO = 500

const processResponse = (req, res, response, status = 200, code = '000') => {
    console.log(response)
    if (response && response.name === 'ValidationError')
        res.status(status).json(getResponse(req, VALIDATION_ERRO, getErrors(response)))
    else
        res.status(status).json(getResponse(req, code, response))
}

const processResponseWithError = (req, res, err) =>{
    if (err && err.name === 'ValidationError')
        res.status(STATUS_CODE_SUCSESS).json(getResponse(req, VALIDATION_ERRO, getErrors(response)))
    else
        res.status(STATUS_CODE_SUCSESS).json(getResponse(req, err))
} 

module.exports = Object.assign({}, { processResponse }, { processResponseWithError }, { errors: Object.assign({}, { SUCSESS }, { VALIDATION_ERRO }, { WRONG_PASSWORD }, { USER_NOT_FOUND }) })