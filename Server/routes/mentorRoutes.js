const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');
const User=require("../models/User")
const { verifyToken } = require('../middleware/auth'); // Assuming you have this middleware


router.post('/register-mentor', mentorController.registerMentor);

router.get('/mentors', mentorController.getMentors);
router.post('/book-appointment', mentorController.bookAppointment);
router.get('/mentor-appointments/:mentorId', mentorController.getMentorAppointments);
router.put('/schedule-meeting/:appointmentId',  mentorController.scheduleMeeting);
router.get('/user-appointments/:userId',  mentorController.getUserAppointments);



router.get('/job-titles', async (req, res) => {
    try {
      const jobTitles = await User.distinct('jobTitle', { role: 'Mentor' });
      res.json(jobTitles);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Get unique experience levels
  router.get('/experience-levels', async (req, res) => {
    try {
      const experienceLevels = await User.distinct('experience', { role: 'Mentor' });
      res.json(experienceLevels);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Get mentors with optional filtering
  router.get('/mentors', async (req, res) => {
    try {
      const { jobTitle, experience } = req.query;
      let query = { role: 'Mentor' };
      if (jobTitle) query.jobTitle = jobTitle;
      if (experience) query.experience = parseInt(experience);
      
      const mentors = await User.find(query).select('-password');
      res.json(mentors);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  module.exports = router;


module.exports = router;
