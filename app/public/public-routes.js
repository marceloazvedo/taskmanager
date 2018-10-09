const createRoutes = require('../../config/modules/create-routes')
const UserController = require('../user/user-controller')

const routes = [
    {
        method: 'post',
        path: '/public/register',
        action: UserController.register
    }
]

module.exports = (router) => createRoutes(router, routes)