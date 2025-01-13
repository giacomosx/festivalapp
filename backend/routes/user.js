const express = require('express')
const user = express.Router()
const controller = require('../controllers/user')

user.route('/me').get(controller.getUser)
user.route('/me/edit').patch(controller.editUser)
user.route('/me/delete').delete(controller.deleteUser)
user.route('/search').get(controller.getUserByQuery)
user.route('/:id').get(controller.getUserById)
user.route('/me/friends').get(controller.getUserFriends)
user.route('/me/events').get(controller.getUserEvents)
user.route('/me/groups').get(controller.getUserGroups)

module.exports = user