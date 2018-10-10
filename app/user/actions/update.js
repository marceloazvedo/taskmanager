const UserDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

/**
 * @api {put} /api/user Update Account
 * @apiPermission user
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Serviço utilizado para atualizar informações da conta do usuário, funciona basicamente da mesma forma que o cadastro, sendo que é necessário
 * enviar o <code>token</code> obtido na autenticação (<code>Auth</code>) no <code>Header</code> <code>Authorization</code>.
 *
 * @apiParamExample {json} Exemplo de requisição:
 *  HTTP/1.1 200 OK
 *  {
 *  	"email": "marcelo@",
 *  	"password": "",
 *  	"name": "Marcelo Santos de Azevedo"
 *  }
 *
 * @apiErrorExample {json} Exemplo de resposta com erros de validação:
 *  HTTP/1.1 200 OK
 *  {
 *  	"errors": [
 *  		{
 *  			"field": "email",
 *  			"value": "marcelo@",
 *  			"message": "O email \"marcelo@\" não é válido!"
 *  		},
 *  		{
 *  			"field": "password",
 *  			"value": "",
 *  			"message": "Insira uma senha!"
 *  		}
 *  	],
 *  	"code": "001",
 *  	"message": "Erro de validação"
 *  }
 * 
 * @apiSuccessExample {json} Exemplo de resposta com sucesso:
 *  HTTP/1.1 200 OK
 *  {
 *  	"code": "000",
 *  	"message": "Sucesso"
 *  }
 **/
module.exports = (req, res, next) => {
    UserDAO.update({ token: req.get('Authorization') }, {$set: req.body})
        .then(() => ResponseUtils.processResponse(req, res))
        .catch(err => ResponseUtils.processResponseWithError(req, res, err))
}