const rules = [
    'StringBasic',
    'requiredFalse'
]

module.exports = Object.assign({},
    ...require('../../modules/create-with-rules')(rules)
)