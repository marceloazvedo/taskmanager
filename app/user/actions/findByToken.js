const UserDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

/**
 * @api {get} /api/user Account Info
 * @apiPermission user
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription Serviço utilizado para listar informações do usuário.
 * 
 * @apiSuccessExample {json} Exemplo de resposta com sucesso:
 *  HTTP/1.1 200 OK
 *  {
 *  	"user": {
 *  		"email": "marceloazvedo1@gmail.com",
 *  		"password": "123123123",
 *  		"name": "Marcelo Azevedo",
 *  		"created_at": "2018-10-09T18:51:16.762Z",
 *  		"updated_at": "2018-10-10T12:20:00.921Z"
 *  	},
 *  	"code": "000",
 *  	"message": "Sucesso"
 *  }
 **/
module.exports = (req, res, next) => {
    UserDAO.findOne({ token: req.get('Authorization') }).then((user) => ResponseUtils.processResponse(req, res, { user }))
}