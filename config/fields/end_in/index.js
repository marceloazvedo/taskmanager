const validate = require('./validate')

const rules = [
    'Date'
]

module.exports = Object.assign({},
    ...require('../../modules/create-with-rules')(rules)
)