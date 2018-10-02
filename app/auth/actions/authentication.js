const UserDAO = require('../../../config/modules/create-dao')(require('../../user/user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

const getNewExpirationDate = () => {
    const expiration = new Date()
    expiration.setDate(new Date().getDate() + 7)
    return expiration
}

module.exports = (req, res) => {
    UserDAO.find({login: req.body.login}),then(user => {
        if(!user)
            throw ResponseUtils.errors.USER_NOT_FOUND
        else if(user.password != req.body.password)
            throw ResponseUtils.errors.WRONG_PASSWORD
        return user
    }).then(user => 
            UserDAO.update({login: user.login, senha: user.password}, {expiration: getNewExpirationDate()})
                .then(ResponseUtils.processResponse(res))
    ).catch(err => ResponseUtils.responseWithCodeAndMessage(err))
}