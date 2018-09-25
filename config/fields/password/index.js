const rules = [
    'StringBasic',
    'requiredTrue',
    'StringMaxLength-40'
]

module.exports = Object.assign({},
    ...require('../../modules/create-with-rules')(rules)
)