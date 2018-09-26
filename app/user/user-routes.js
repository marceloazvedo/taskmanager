const Controller = require('./user-controller')
const createRoutes = require('../../config/modules/create-routes')

const routes = [
    {
        method: 'get',
        path: '/',
        action: Controller.findAll,
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