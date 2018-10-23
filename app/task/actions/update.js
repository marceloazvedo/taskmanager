const UserDAO = require('../../../config/modules/create-dao')(require('../../user/user-model'), [])
const TaskDAO = require('../../../config/modules/create-dao')(require('../task-model'), [])
const ResponseUtils = require('../../../config/modules/response')

/**
 * @api {put} /api/task/:id Update Task
 * @apiPermission user
 * @apiGroup Task
 * @apiVersion 1.1.0
 * 
 * @apiParam {Number} id Task unique ID.
 * 
 * @apiDescription Para editar a task, basta passar as os campos que deseja editar, caso não queira editar um campo é só não passar. Para finalizar uma task
 * basta passar o campo <code>is_finish</code> com o valor <code>true</code>, o mesmo vale para o campo <code>description</code>.
 * 
 * @apiParamExample {json} Exemplo de requisição:
 *  HTTP/1.1 200 OK
 *  {
 *  	"title": "Hehehe",
 *  	"description": "E aê",
 *  	"is_finish": true
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
    console.log(`User to update: ${JSON.stringify(req.body)}`)
    UserDAO.findOne({ token: req.get('Authorization') })
        .then(user => TaskDAO.update({ _id: req.params.id, user: user._id }, { $set: req.body })
            .then(() => { ResponseUtils.processResponse(req, res) }))
        .catch(err => { ResponseUtils.processResponse(req, res) })
}