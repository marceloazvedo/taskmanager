const createRoutes = require('../../config/modules/create-routes')
const Controller = require('./auth-controller')

const routes = [
    {
        method: 'post',
        path: '/',
        action: Controller.authentication
    }
]

module.exports = (router) => createRoutes(router, routes)