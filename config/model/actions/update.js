module.exports = (Model) => (id, obj) => Model.updateOne({_id: id}, obj).exec()