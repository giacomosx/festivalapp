const express = require('express');
const publicRoutes = express.Router();
const userController = require('../controllers/user');
const organizationController = require('../controllers/organization');
const eventController = require('../controllers/event');

publicRoutes.route('/users').get(userController.getAllUsers);
publicRoutes.route('/organizations').get(organizationController.getAllOrganizations)
publicRoutes.route('/events').get(eventController.getAllEvents);
publicRoutes.route('/events/:id').get(eventController.getEventById);

module.exports = publicRoutes;