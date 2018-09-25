const toController = (obj, action) => Object.assign(obj, action)

const createAction = (Model) => (action) => ({
    [action]: require('../model/actions/' + action)(Model)
})

module.exports = (Model, actions) => actions.map(createAction(Model)).reduce(toController, {})