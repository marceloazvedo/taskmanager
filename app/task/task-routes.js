const createRoutes = require('../../config/modules/create-routes')
const TaskController = require('./task-controller')

const routes = [
    {
        method: 'get',
        path: '/task/finished',
        action: TaskController.findFinished
    },
    {
        method: 'get',
        path: '/task/todo',
        action: TaskController.findToDo
    },
    {
        method: 'get',
        path: '/task/:id',
        action: TaskController.findById
    },
    {
        method: 'post',
        path: '/task',
        action: TaskController.create
    },
    {
        method: 'put',
        path: '/task/:id',
        action: TaskController.update
    },
    {
        method: 'delete',
        path: '/task/:id',
        action: TaskController.remove
    }
]

module.exports = (router) => createRoutes(router, routes)