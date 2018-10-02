const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const ResponseUtils = require('../../../config/modules/response')
const ErrorHandler = require('../../../config/modules/error-handler')

module.exports = (req, res, next) => {
    TaskDAO.updateById(req.params.id, req.body)
        .then(() => ResponseUtils(res))
        .catch(err => ResponseUtils(res, err))
}