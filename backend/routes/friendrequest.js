const express = require('express');
const friendRequest = express.Router();
const controller = require('../controllers/friendrequest');

friendRequest.route('/add-request/:id').post(controller.addFriendRequest)
friendRequest.route('/response-request/:id').patch(controller.friendRequestResponse)
friendRequest.route('/received').get(controller.getReceivedRequest)
friendRequest.route('/sent').get(controller.getSentRequest)

module.exports = friendRequest;