const User = require('./task-model')

const actions = []

module.exports = require('../../config/modules/controller')(User, actions)