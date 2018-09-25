const rules = [
    'user'
]

module.exports = Object.assign({},
    ...require('../../modules/create-with-rules')(rules)
)