const express = require('express');
const groupRequest = express.Router();
const controller = require('../controllers/grouprequest');

groupRequest.route('/invite-user/:id').post(controller.inviteUserToGroup)
groupRequest.route('/response-request/:id').patch(controller.groupRequestResponse)
groupRequest.route('/sent').get(controller.getSentGroupRequest)
groupRequest.route('/received').get(controller.getReceivedGroupRequest)

module.exports = groupRequest;