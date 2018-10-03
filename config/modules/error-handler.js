const INTERNAL_SERVER_ERROR = 'internal server error'

const validationError = (req, err, locale) => Object.keys(err.errors).map(field => ({
    field: err.errors[field].path,
    value: err.errors[field].value ? err.errors[field].value : '',
    message: req.i18n.__(err.errors[field].path + '.' + err.errors[field].properties.type, err.errors[field].value)
}), {})

const internalError = (req, locale) =>
    ({
        field: '',
        value: '',
        message: req.i18n.__({ phrase: INTERNAL_SERVER_ERROR, locale: locale })
    })

module.exports = (req, err, locale = 'pt') => (err && err.name === 'ValidationError') ?
    validationError(req, err, locale) : internalError(req, locale)
