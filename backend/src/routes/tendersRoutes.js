const express = require('express');
const router = express.Router();
const tendersController = require('../controllers/tendersController');

router.get('/', tendersController.getTendersByCityAndDate);

module.exports = router;
