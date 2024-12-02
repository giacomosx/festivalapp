const express = require('express');
const event = express.Router();
const controller = require('../controllers/event');

event.route('/').post(controller.createEvent);
event.route('/:id/new-act').patch(controller.addActToEvent);
event.route('/subscribe/:id').patch(controller.subScribeEvent)
event.route('/unsubscribe/:id').patch(controller.unSubScribeEvent)

module.exports = event;