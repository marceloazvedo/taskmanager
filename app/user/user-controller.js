const User = require('./user-model')

const actions = []

module.exports = require('../../config/modules/create-model')(User, actions)