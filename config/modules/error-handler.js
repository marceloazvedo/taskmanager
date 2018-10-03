const INTERNAL_SERVER_ERROR = 'internal server error'
const DEFAULT_LOCALE = 'pt'

module.exports = (req, err, locale) => {
    if (err && err.name === 'ValidationError') {
        return Object.keys(err.errors).map(field => {
            const fieldError = err.errors[field]
            return {
                field: fieldError.path,
                value: fieldError.value ? fieldError.value : '',
                message: req.i18n.__({ phrase: fieldError.path + '.' + fieldError.properties.type, locale: locale ? locale : DEFAULT_LOCALE }, fieldError.value)
            }
        }, {})
    } else {
        return {
            field: '',
            value: '',
            message: req.i18n.__({ phrase: INTERNAL_SERVER_ERROR, locale: locale })
        }
    }
}