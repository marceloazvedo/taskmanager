const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res, next) => {
    TaskDAO.update({ _id: req.params.id }, { $set: req.body })
        .then(() => ResponseUtils.processResponse(req, res))
        .catch(err => ResponseUtils.processResponse(req, res))
}