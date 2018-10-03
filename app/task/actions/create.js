const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const UserDAO = require('../../../config/modules/create-dao')(require('../../user/user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res) => {
    UserDAO.findOneBy('token', req.get('Authorization'))
        .then(user =>
            TaskDAO.create(Object.assign(req.body, { user: user._id }))
                .then(() => ResponseUtils.processResponse(req, res)))
        .catch(err => ResponseUtils.processResponseWithError(req, res, err))
}