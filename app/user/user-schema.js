const mongoose = require('../../config/db')
const createSchema = require('../../config/modules/create-schema');

const fields = [
    'name',
    'email',
    'password',
    'active',
    'expiration',
    'token'
]

const schema = createSchema(fields)

module.exports = (mongoose) => new mongoose.Schema(...schema)