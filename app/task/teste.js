const Task = require('./task-model')
const User = require('../user/user-model')

const erroHandler = require('../../config/modules/error-handler')



User.findOne({}).lean().exec().then(user => {
    const task = new Task({
        description: 'TESTE'
    });
    task.save(err => {
        if (err) console.log(JSON.stringify(erroHandler(err)))
    })
}).catch(err => {
    console.error(err)
})