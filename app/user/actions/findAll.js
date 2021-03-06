const UserDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res, next) => {
    UserDAO.findAll({}).then((tasks) => {
        ResponseUtils.processResponse(req, res, {tasks})
    })
}