const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const UserDAO = require('../../../config/modules/create-dao')(require('../../user/user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res, next) => {
    UserDAO.findAll({ token: req.get('Authorization') })
        .then(user => TaskDAO.findAll({ user: user._id })
            .then(tasks => {
                ResponseUtils.processResponse(req, res, { tasks })
            })
        ).catch(err => ResponseUtils.processResponseWithError(req, res, err))
}