const mongoose = require('../../config/db')
const Schema = require('./task-schema')(mongoose)

const getModuleName = require('../../config/modules/get-name')

module.exports = mongoose.model(getModuleName(__dirname), Schema)