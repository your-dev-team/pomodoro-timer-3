const express = require('express');
const router = express.Router();
const timerController = require('../controllers/timerController');

router.post('/start', timerController.start);
router.post('/pause', timerController.pause);
router.post('/reset', timerController.reset);

module.exports = router;
