module.exports = () => {
    const expiration = new Date()
    expiration.setDate(new Date().getDate() + 7)
    return expiration
}