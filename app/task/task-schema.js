const mongoose = require('../../config/db')
const createSchema = require('../../config/modules/create-schema');

const fields = [
    'title',
    'description',
    'end_in',
    'is_finish',
    'active',
    'user'
]

const schema = createSchema(fields)

module.exports = (mongoose) => new mongoose.Schema(...schema)