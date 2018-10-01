const SUCCESS = 200

module.exports = (res, response) => {
    res.status(SUCCESS).send(response)
}