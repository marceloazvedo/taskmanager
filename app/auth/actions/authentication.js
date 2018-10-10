const UserDAO = require('../../../config/modules/create-dao')(require('../../user/user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

const getNewExpirationDate = require('../../../config/modules/expiration-date')
const generateToken = require('../../../config/modules/generate-token')

/**
 * @api {post} /api/auth Authentication
 * @apiPermission public
 * @apiGroup Public
 * @apiVersion 1.0.0
 * @apiDescription Serviço utilizado obter o <code>token</code> para acessar todos os serviços internos de gestão de usuário e gestão de tasks da <code>api</code>.
 * 
 * @apiParamExample {json} Exemplo de requisição:
 *  HTTP/1.1 200 OK
 *  {
 *  	"email": "marcelo@email.com",
 *  	"password": "123123123"
 *  }
 * 
 * @apiSuccessExample {json} Exemplo de resposta com sucesso:
 *  HTTP/1.1 200 OK
 *  {
 *  	"token": "d9e7cc67bbd83aa2d96a2ad90fd86105",
 *  	"code": "000",
 *  	"message": "Sucesso"
 *  }
 **/
module.exports = (req, res) => {
    UserDAO.findOne({email: req.body.email}).then(user => {
        if(!user)
            throw ResponseUtils.errors.USER_NOT_FOUND
        else if(user.password != req.body.password)
            throw ResponseUtils.errors.WRONG_PASSWORD
        return user
    }).then(user => {
        const token = generateToken(user.email)
        return UserDAO.update({login: user.login, password: user.password}, {$set: {expiration: getNewExpirationDate(), token: token}})
        .then(() => ResponseUtils.processResponse(req, res, {token}))
    }).catch(err => ResponseUtils.processResponseWithError(req, res, err))
}