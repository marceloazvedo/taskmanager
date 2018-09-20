const User = require('./user-model')

const marcelo = new User({})
marcelo.save(function(err) {
    if(err) console.error(err)
})