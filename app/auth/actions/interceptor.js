const UserDAO = require('../../../config/modules/create-dao')(require('../../user/user-model'), [])
const getNewExpirationDate = require('../../../config/modules/expiration-date')
const setHeaders = require('../../../config/modules/set-headers')

const OPTIONS_METHOD = 'OPTIONS'
const PUBLIC_PATHS = ['/auth', '/public/register']
const AUTHORIZATION_HEADER = 'Authorization'

module.exports = (req, res, next) => {
    setHeaders(res)
    if (OPTIONS_METHOD === req.method) res.sendStatus(200)
    else {
        const authorization = req.get(AUTHORIZATION_HEADER)
        if (!authorization && PUBLIC_PATHS.indexOf(req.originalUrl) >= 0) next()
        else if (authorization) 
            UserDAO.findOne({token: authorization}).then(user => {
                if(!user) res.status(401).end()
                else if(new Date() > user.expiration) res.status(401).end()
                else UserDAO.updateById(user._id, {$set: {expiration: getNewExpirationDate()}}).then(() => next())
            })
        else res.status(401).end()
    }
}