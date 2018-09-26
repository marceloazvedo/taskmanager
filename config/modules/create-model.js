const toController = (obj, action) => Object.assign(obj, action)

const basicActions = [
    'findAll',
    'findOne',
    'findBy',
    'create',
    'update',
    'remove'
]

const createAction = (Model) => (action) => ({
    [action]: require('../model/actions/' + action)(Model)
})

module.exports = (Model, actions) => (basicActions.concat(actions)).map(createAction(Model)).reduce(toController, {})