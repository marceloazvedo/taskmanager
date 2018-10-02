const ACTIONS_FOLER = '/actions'
const ACTIONS_PATH_FULL = __dirname + ACTIONS_FOLER

const createRoutes = require('../../config/modules/create-routes')
const Controller = require('./auth-controller')

console.log(Controller.authentication())

const routes = [
    {
        method: 'post',
        path: '/',
        action: Controller.authentication
    }
]

module.exports = (router) => createRoutes(router, routes)