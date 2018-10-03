const md5 = require('js-md5');

const SECRET = 'urkqsrk'

module.exports = (email) => md5(email.concat(SECRET).concat(new Date().getTime()))