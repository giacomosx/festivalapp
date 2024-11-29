const express = require('express');
const organization = express.Router();
const controller = require('../controllers/organization');

organization.route('/').post(controller.createOrganization);

module.exports = organization;

