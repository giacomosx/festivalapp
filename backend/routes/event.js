const express = require('express');
const event = express.Router();
const controller = require('../controllers/event');

event.route('/').post(controller.createEvent);

module.exports = event;