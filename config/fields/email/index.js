const validate = require(`./validate`)

const rules = [
    'StringBasic',
    'requiredTrue',
    'StringLowercase',
    'StringMaxLength-80'
]

module.exports = Object.assign({},
    ...require('../../modules/create-with-rules')(rules),
    { validate }
)