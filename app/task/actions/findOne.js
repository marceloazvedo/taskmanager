const TaskModel = require('../task-model')
const TaskDAO = require('../../../config/modules/create-dao')(TaskModel, [])
const ResponseUtils = require('../../../config/modules/response')

module.exports =  (req, res, next) => {
    TaskDAO.findOne(req.params.id).then((task) => {
        console.log(task)
        return ResponseUtils.processResponse(req, res, task)
    })
}