const UserDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res) => {
    UserDAO.findOne({ email: req.body.email }).then(user => {
        console.log(`User: ${JSON.stringify(user)}`)
        if (user) throw ResponseUtils.errors.USER_ALREADY_REGISTRED
        return {}
    })
        .then(() => UserDAO.create(req.body)
            .then(() => ResponseUtils.processResponse(req, res)))
        .catch(err => {
            console.error(err)
            ResponseUtils.processResponseWithError(req, res, err)
        })
}