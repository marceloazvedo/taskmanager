const fs = require('fs')

module.exports = (path) => fs.readdirSync(path).map(file => file.replace('.js', ''))