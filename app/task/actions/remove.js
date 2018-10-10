const UserDAO = require('../../../config/modules/create-dao')(require('../../user/user-model'), [])
const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const ResponseUtils = require('../../../config/modules/response')

/**
 * @api {delete} /api/task/:id Delete Task
 * @apiPermission user
 * @apiGroup Task
 * @apiVersion 1.0.0
 * @apiDescription Deletar <code>task</code> passando o <code>id</code> da task.
 * 
 * @apiSuccessExample {json} Exemplo de resposta com sucesso:
 *  HTTP/1.1 200 OK
 *  {
 *  	"code": "000",
 *  	"message": "Sucesso"
 *  }
 **/
module.exports = (req, res, next) => {
    UserDAO.findOne({ token: req.get('Authorization') })
        .then(user => TaskDAO.update({ _id: req.params.id, user: user._id }, { $set: {active: false} })
            .then(() => { ResponseUtils.processResponse(req, res) }))
        .catch(err => { ResponseUtils.processResponse(req, res) })
}