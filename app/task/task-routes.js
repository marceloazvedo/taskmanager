const ACTIONS_FOLER = '/actions'
const ACTIONS_PATH_FULL = __dirname + ACTIONS_FOLER

const createRoutes = require('../../config/modules/create-routes')
const Controller = require('./task-controller')

const routes = [
    {
        method: 'get',
        path: '/',
        action: Controller.findAll
    },
    {
        method: 'get',
        path: '/:id',
        action: Controller.findById
    },
    {
        method: 'post',
        path: '/',
        action: Controller.create
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
    }
]

module.exports = (router) => createRoutes(router, routes)