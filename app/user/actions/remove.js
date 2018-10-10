const UserDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

/**
 * @api {delete} /api/user Delete Account
 * @apiPermission user
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Serviço utilizado para deletar a conta do usuário, é necessário
 * enviar o <code>token</code> obtido na autenticação (<code>Auth</code>) no <code>Header</code> <code>Authorization</code>.
 * 
 * @apiSuccessExample {json} Exemplo de resposta com sucesso:
 *  HTTP/1.1 200 OK
 *  {
 *  	"code": "000",
 *  	"message": "Sucesso"
 *  }
 **/
module.exports = (req, res, next) => {
    UserDAO.remove({ token: req.get('Authorization') })
        .then(() => {
            ResponseUtils.processResponse(req, res) 
        })
        .catch(err => { ResponseUtils.processResponseWithError(req, res, err) })
}