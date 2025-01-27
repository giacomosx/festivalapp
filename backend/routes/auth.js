const express = require('express')
const user = express.Router()
const controller = require('../controllers/auth')

user.route('/register').post(controller.register)
user.route('/login').post(controller.login)
user.route('/register-admin').post(controller.registerAdmin)

module.exports = user;