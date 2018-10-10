/**
 * @apiDefine none Public Services
 * Não é necessários nenhum token ou qualquer tipo de autorização para utilizar esse serviço, eles estão disponíveis de forma pública.
 */
const ACTIONS_PATH_FULL = __dirname + '/actions'

const createActions = require('../../config/modules/create-actions')
const createController = require('../../config/modules/create-controller')(ACTIONS_PATH_FULL)

module.exports = createController(createActions(ACTIONS_PATH_FULL))