const mongoose = require('../../config/db')
const createSchema = require('../../config/modules/create-schema');

const fields = [
    'description',
    'end_in',
    'is_finish',
    'active'
]

const schema = createSchema(fields)

module.exports = (mongoose) => new mongoose.Schema(...schema)