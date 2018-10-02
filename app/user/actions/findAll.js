const TaskDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res, next) => {
    TaskDAO.findAll({}).then((tasks) => {
        ResponseUtils(res, {tasks})
    })
}