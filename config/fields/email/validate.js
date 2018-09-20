module.exports = (lang) => [
    (value) => {
        return require('./regex').test(value)
    },
    require('./messages')[lang]
]
