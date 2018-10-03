const UserDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res) => {
    UserDAO.create(req.body)
        .then(() => ResponseUtils.processResponse(req, res))
        .catch(err => ResponseUtils.processResponseWithError(req, res, err))
}