const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const ResponseUtils = require('../../../config/modules/response')
const ErrorHandler = require('../../../config/modules/error-handler')

module.exports = (req, res, next) => {
    TaskDAO.remove(req.params.id)
        .then(ResponseUtils(res, {}))
        .catch(err => ErrorHandler(err))
}