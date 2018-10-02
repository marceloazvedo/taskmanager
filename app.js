const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const router = express.Router()

const AuthController = require('./app/auth/auth-controller')

const auth = require('./app/auth/auth-routes')(router)
const users = require('./app/user/user-routes')(router)
const tasks = require('./app/task/task-routes')(router)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, retryWrites: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/*', AuthController.interceptor)
app.use('/auth', auth)
app.use('/users', users)
app.use('/tasks', tasks)

module.exports = app