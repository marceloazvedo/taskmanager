const createRoutes = require('../../config/modules/create-routes')
const UserController = require('../user/user-controller')

const routes = [
    {
        method: 'post',
        path: '/register',
        action: UserController.register
    }
]

module.exports = (router) => createRoutes(router, routes)