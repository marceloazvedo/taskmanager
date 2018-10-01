const TaskDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')
const ErrorHandler = require('../../../config/modules/error-handler')

module.exports = (req, res, next) => {
    TaskDAO.create(req.body)
        .then(() => ResponseUtils(res, {}))
        .catch(err => ResponseUtils(res, ErrorHandler(err)))
}