const UserDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

module.exports = (req, res, next) => {
    UserDAO.remove({ token: req.get('Authorization') })
        .then((result) => {
            console.log(result)
            ResponseUtils.processResponse(req, res) 
        })
        .catch(err => { ResponseUtils.processResponseWithError(req, res, err) })
}