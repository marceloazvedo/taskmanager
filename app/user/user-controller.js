/**
 * @apiDefine user User
 * Ao obter um <code>token</code> no serviço de autenticação, em todas as requisições do tipo <code>user</code> o token deve ser passado no
 * <code>header</code> <code>Authorization</code>.
 */
const ACTIONS_PATH_FULL = __dirname + '/actions'

const createActions = require('../../config/modules/create-actions')
const createController = require('../../config/modules/create-controller')(ACTIONS_PATH_FULL)

module.exports = createController(createActions(ACTIONS_PATH_FULL))