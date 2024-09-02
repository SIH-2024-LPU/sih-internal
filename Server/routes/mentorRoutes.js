const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.post('/register-mentor', mentorController.registerMentor);

module.exports = router;
