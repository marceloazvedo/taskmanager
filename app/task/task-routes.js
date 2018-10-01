const ACTIONS_FOLER = '/actions'
const ACTIONS_PATH_FULL = __dirname + ACTIONS_FOLER

const createRoutes = require('../../config/modules/create-routes')
const createActions = require('../../config/modules/create-actions')
const createController = require('../../config/modules/create-controller')(ACTIONS_PATH_FULL)
const Controller = createController(createActions(ACTIONS_PATH_FULL))

const routes = [
    {
        method: 'get',
        path: '/',
        action: Controller.findAll
    },
    {
        method: 'get',
        path: '/:id',
        action: Controller.findOne
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