const User = require('./user-model')

const actions = [
    'findAll',
    'findOne',
    'findBy',
    'create',
    'update',
    'delete'
]

module.exports = require('../../config/modules/controller')(User, actions)