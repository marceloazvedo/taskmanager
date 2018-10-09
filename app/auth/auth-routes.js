const createRoutes = require('../../config/modules/create-routes')
const AuthController = require('./auth-controller')

const routes = [
    {
        method: 'post',
        path: '/auth',
        action: AuthController.authentication
    }
]

module.exports = (router) => createRoutes(router, routes)