module.exports = [
    (value) => require('./regex').test(value),
    {message: require('./messages')}
]
