const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const UserDAO = require('../../../config/modules/create-dao')(require('../../user/user-model'), [])
const ResponseUtils = require('../../../config/modules/response')

/**
 * @api {get} /api/task/todo To Do Task List
 * @apiPermission user
 * @apiGroup Task
 * @apiVersion 1.0.0
 * @apiDescription Lista de <code>taks</code> que ainda estão por fazer.
 * 
 * @apiSuccessExample {json} Exemplo de resposta com sucesso:
 *  HTTP/1.1 200 OK
 *  {
 *  	"tasks": [
 *  		{
 *  			"_id": "5bbdf3de4747cf52786993ff",
 *  			"description": "Terminar TCC",
 *  			"created_at": "2018-10-10T12:43:10.878Z",
 *  			"updated_at": "2018-10-10T12:43:10.878Z"
 *  		}
 *  	],
 *  	"code": "000",
 *  	"message": "Sucesso"
 *  }
 **/
module.exports = (req, res, next) => {
    UserDAO.findOne({ token: req.get('Authorization') })
        .then(user => TaskDAO.findAll({ user : user._id, is_finish: false, active: true })
            .then(tasks => {
                ResponseUtils.processResponse(req, res, { tasks })
            })
        )
        .catch(err => ResponseUtils.processResponseWithError(req, res, err))
}