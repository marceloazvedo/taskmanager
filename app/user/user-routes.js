const ACTIONS_FOLER = '/actions'
const ACTIONS_PATH_FULL = __dirname + ACTIONS_FOLER

const createRoutes = require('../../config/modules/create-routes')
const Controller = require('./user-controller')

const routes = [
    {
        method: 'get',
        path: '/',
        action: Controller.findAll,
    },
    {
        method: 'get',
        path: '/:id',
        action: Controller.findById
    },
    {
        method: 'put',
        path: '/:id',
        action: Controller.update
    },
    {
        method: 'delete',
        path: '/:id',
        action: Controller.remove
    },
    {
        method: 'post',
        path: '/register',
        action: Controller.register
    }
]

module.exports = (router) => createRoutes(router, routes)