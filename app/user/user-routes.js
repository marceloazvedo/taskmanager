const createRoutes = require('../../config/modules/create-routes')
const UserController = require('./user-controller')

const routes = [
    {
        method: 'get',
        path: '/user',
        action: UserController.findByToken,
    },
    {
        method: 'put',
        path: '/user',
        action: UserController.update,
    },
    {
        method: 'delete',
        path: '/user',
        action: UserController.remove
    },
    {
        method: 'post',
        path: '/user/register',
        action: UserController.register
    }
]

module.exports = (router) => createRoutes(router, routes)