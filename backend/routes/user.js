const express = require('express')
const user = express.Router()
const controller = require('../controllers/user')

user.route('/me').get(controller.getUser)
user.route('/me/edit').patch(controller.editUser)
user.route('/me/delete').delete(controller.deleteUser)

module.exports = user