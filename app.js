const ResponseUtil = require('./config/modules/response')

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const i18n = require('i18n-2')

const router = express.Router()

const auth = require('./app/auth/auth-routes')(router)
const tasks = require('./app/task/task-routes')(router)
const users = require('./app/user/user-routes')(router)
const public = require('./app/public/public-routes')(router)

const app = express()
i18n.expressBind(app, { locales: ['pt', 'en'], extension: '.json' })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, retryWrites: true }))
app.use(express.static(path.join(__dirname, 'public')))

const AuthController = require('./app/auth/auth-controller')

app.use('/*', AuthController.interceptor)
app.use('/api', auth)
app.use('/api', tasks)
app.use('/api', users)
app.use('/api', public)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    // return json with code and message {code: 'xxx', message: 'page not found'}
    res.json({})
})

module.exports = app