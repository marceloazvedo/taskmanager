const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports =  (req, res, next) => {
    TaskDAO.findOne({_id: req.params.id}).then((task) => ResponseUtils(res, task))
}