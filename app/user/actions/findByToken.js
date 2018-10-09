const UserDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res, next) => {
    UserDAO.findOne({ token: req.get('Authorization') }).then((user) => ResponseUtils.processResponse(req, res, { user }))
}