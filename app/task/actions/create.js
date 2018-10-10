const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const UserDAO = require('../../../config/modules/create-dao')(require('../../user/user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

/**
 * @api {post} /api/task Create Task
 * @apiPermission user
 * @apiGroup Task
 * @apiVersion 1.0.0
 * 
 * @apiParamExample {json} Exemplo de requisição:
 *  HTTP/1.1 200 OK
 *  {
 *  	"description": "Terminar TCC"
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
    UserDAO.findOne({ token: req.get('Authorization') })
        .then(user =>
            TaskDAO.create(Object.assign(req.body, { user: user._id }))
                .then(() => ResponseUtils.processResponse(req, res)))
        .catch(err => ResponseUtils.processResponseWithError(req, res, err))
}