module.exports = (res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Expose-Headers", "Authorization")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, X-XSRF-TOKEN, Authorization, Content-Type, Accept")
}