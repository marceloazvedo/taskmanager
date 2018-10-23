const rules = [
    'StringBasic',
    'requiredTrue'
]

module.exports = Object.assign({},
    ...require('../../modules/create-with-rules')(rules)
)