const express = require('express');
const router = express.Router();
const homeController = require('../controller/home.controller');

router.get('/virtual-tour/:venueId', homeController.getIndex);

module.exports = router;
