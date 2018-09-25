const rules = [
    'StringBasic',
    'requiredTrue',
    'StringMaxLength-80'
]

module.exports = Object.assign({},
    ...require('../../modules/create-with-rules')(rules)
)