const express = require('express');
const group = express.Router();
const controller = require('../controllers/group');

group.route('/').post(controller.createGroup)
group.route('/').get(controller.getAllGroups)
group.route('/:id').get(controller.getGroupByID)
group.route('/:id').delete(controller.deleteGroup)
group.route('/:id').patch(controller.updateGroup)
group.route('/by-user/:id').get(controller.getAllGroupByMember)

module.exports = group;
