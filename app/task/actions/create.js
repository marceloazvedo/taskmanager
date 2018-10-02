const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res) => {
    TaskDAO.create(req.body)
        .then(() => ResponseUtils(res))
        .catch(err => ResponseUtils(res, err))
}