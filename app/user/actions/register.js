const UserDAO = require('../../../config/modules/create-dao')(require('../user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

/**
 * @api {post} /api/public/register Register Account
 * @apiPermission none
 * @apiGroup Public
 * @apiVersion 1.0.0
 * @apiDescription Para cadastrar-se e utilizar os serviços de cadastro de task é necessário inserir um e-mail válido (<code>email</code>), uma senha (<code>password</code>) e um nome (<code>name</code>),
 * nenhum desses campos deve está em branco, e o e-mail deve ser um e-mail válido.
 * Em caso de erro, a <code>api</code> retorna da seguinte forma, o campo que deu problema, o valor do campo e a mensagem, sendo esse um objeto contido dentro de um <code>array</code>
 * com todos os erros dados, sejam, eles de validação, de campo em branco ou qualquer outro tipo de erro voltado para os CAMPOS de cadastro.
 * Esse retorno funciona dessa forma para toda a <code>api</code>, sempre funcionando da seguinte forma, um código (<code>code</code>), mensagem (<code>message</code>) e 
 * os outros valores esperados pelo serviço.
 * Abaixo temos dois exemplos de retorno da <code>api</code>, um que o cadastro deu errado e outro que deu certo, veja abaixo:
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
module.exports = (req, res) => {
    UserDAO.findOne({ email: req.body.email }).then(user => {
        if (user) throw ResponseUtils.errors.USER_ALREADY_REGISTRED
        return {}
    }).then(() => UserDAO.create(req.body)
        .then(() => ResponseUtils.processResponse(req, res)))
        .catch(err => {
            console.error(err)
            ResponseUtils.processResponseWithError(req, res, err)
        })
}