
// controllers/mentorController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const emailjs = require('@emailjs/nodejs');
const MentorAppointment = require('../models/Mentor');
const mongoose = require('mongoose');

emailjs.init({
  publicKey: 'VtWNYb9AxIQiQsP_s',
  privateKey: 'mrFJw2Q0Hj6tCJ9pd-rPE'
});

// exports.registerMentor = async (req, res) => {
//   const { name, email, phoneNumber, jobTitle, companiesJoined, experience, password, username } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newMentor = new User({
//       username,
//       name,
//       email,
//       phoneNumber,
//       jobTitle,
//       companiesJoined,
//       experience,
//       password: hashedPassword,
//       role: 'Mentor',
//     });

//     await newMentor.save();

//     // Send email
//     const templateParams = {
//       to_name: name,
//       to_email: email,
//       username: username,
//       password: password, // Note: Sending password via email is not secure. Consider alternatives.
//       job_title: jobTitle,
//       companies: companiesJoined.join(', '),
//       experience: experience
//     };

//     await emailjs.send('service_u8vd6xq', 'template_v68ai1q', templateParams);

//     res.status(201).json({ message: 'Mentor registered successfully' });
//   } catch (error) {
//     console.error('Error during mentor registration:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };


exports.registerMentor = async (req, res) => {
  const { name, email, phoneNumber, jobTitle, companiesJoined, experience, password, username, imageUrl } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newMentor = new User({
      username,
      name,
      email,
      phoneNumber,
      jobTitle,
      companiesJoined,
      experience,
      password: hashedPassword,
      role: 'Mentor',
      imageUrl,
    });

    await newMentor.save();

    // ... rest of the function ...
  } catch (error) {
    console.error('Error during mentor registration:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await User.find({ role: 'Mentor' }).select('-password');
    res.json(mentors);
  } catch (error) {
    console.error('Error fetching mentors:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const updatedMentor = await User.findByIdAndUpdate(id, updateData, { new: true }).select('-password');
    
    if (!updatedMentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    
    res.json(updatedMentor);
  } catch (error) {
    console.error('Error updating mentor:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
exports.deleteMentor = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedMentor = await User.findByIdAndDelete(id);
    
    if (!deletedMentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    
    res.json({ message: 'Mentor deleted successfully' });
  } catch (error) {
    console.error('Error deleting mentor:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.getMentors = async (req, res) => {
    try {
      const { jobTitle, experience } = req.query;
      let query = { role: 'Mentor' };
  
      if (jobTitle) {
        query.jobTitle = jobTitle;
      }
  
      if (experience) {
        query.experience = { $gte: parseInt(experience) };
      }
  
      const mentors = await User.find(query).select('name jobTitle experience');
      res.json(mentors);
    } catch (error) {
      console.error('Error fetching mentors:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
//   exports.bookAppointment = async (req, res) => {
//     try {
//       const { mentorId, userId, date } = req.body;
//       const mentor = await User.findById(mentorId);
//       const user = await User.findById(userId);
  
//       if (!mentor || !user) {
//         return res.status(404).json({ message: 'Mentor or User not found' });
//       }
  
//       if (!mentor.appointments) {
//         mentor.appointments = [];
//       }
  
//       mentor.appointments.push({ userId, date });
//       await mentor.save();
  
//       res.status(201).json({ message: 'Appointment booked successfully' });
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       res.status(500).json({ message: 'Server Error' });
//     }
//   };

//Workinf 


// exports.bookAppointment = async (req, res) => {
//     try {
//       const { mentorId, userId, date } = req.body;
      
//       // Validate that mentorId and userId are valid ObjectIds
//       if (!mongoose.Types.ObjectId.isValid(mentorId) || !mongoose.Types.ObjectId.isValid(userId)) {
//         return res.status(400).json({ message: 'Invalid mentor or user ID' });
//       }
  
//       const mentor = await User.findById(mentorId);
//       const user = await User.findById(userId);
  
//       if (!mentor || !user) {
//         return res.status(404).json({ message: 'Mentor or User not found' });
//       }
  
//       if (!mentor.appointments) {
//         mentor.appointments = [];
//       }
  
//       mentor.appointments.push({ userId, date });
//       await mentor.save();
  
//       res.status(201).json({ message: 'Appointment booked successfully' });
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       res.status(500).json({ message: 'Server Error' });
//     }
//   };
  

  // exports.getMentorAppointments = async (req, res) => {
  //   try {
  //     const { mentorId } = req.params;
  //     const mentor = await User.findById(mentorId).populate('appointments.userId', 'name email');
  
  //     if (!mentor) {
  //       return res.status(404).json({ message: 'Mentor not found' });
  //     }
  
  //     res.json(mentor.appointments);
  //   } catch (error) {
  //     console.error('Error fetching mentor appointments:', error);
  //     res.status(500).json({ message: 'Server Error' });
  //   }
  // };
  




// exports.scheduleMeeting = async (req, res) => {
//   try {
//     const { appointmentId } = req.params;
//     const { date, time, meetLink } = req.body;

//     const mentor = await User.findOne({ 'appointments._id': appointmentId });

//     if (!mentor) {
//       return res.status(404).json({ message: 'Appointment not found' });
//     }

//     const appointment = mentor.appointments.id(appointmentId);
//     appointment.scheduledDate = new Date(`${date}T${time}`);
//     appointment.meetLink = meetLink;

//     await mentor.save();

//     res.json({ message: 'Meeting scheduled successfully' });
//   } catch (error) {
//     console.error('Error scheduling meeting:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

// exports.getUserAppointments = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const appointments = await User.find({ 'appointments.userId': userId })
//       .select('appointments')
//       .populate('appointments.userId', 'name email')
//       .lean();

//     const userAppointments = appointments.flatMap(mentor => 
//       mentor.appointments.filter(app => app.userId._id.toString() === userId)
//     );

//     res.json(userAppointments);
//   } catch (error) {
//     console.error('Error fetching user appointments:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };



exports.bookAppointment = async (req, res) => {
  try {
    const { mentorId, userId, date } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(mentorId) || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid mentor or user ID' });
    }

    const mentor = await User.findById(mentorId);
    const user = await User.findById(userId);

    if (!mentor || !user) {
      return res.status(404).json({ message: 'Mentor or User not found' });
    }

    const newAppointment = new MentorAppointment({
      mentorId,
      userId,
      requestedDate: date
    });

    await newAppointment.save();

    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getMentorAppointments = async (req, res) => {
  try {
    const { mentorId } = req.params;
    const appointments = await MentorAppointment.find({ mentorId })
      .populate('userId', 'name email')
      .sort({ requestedDate: 1 });

    res.json(appointments);
  } catch (error) {
    console.error('Error fetching mentor appointments:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.scheduleMeeting = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { date, time, meetLink } = req.body;

    const appointment = await MentorAppointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    appointment.scheduledDate = new Date(`${date}T${time}`);
    appointment.meetLink = meetLink;
    appointment.status = 'scheduled';

    await appointment.save();

    res.json({ message: 'Meeting scheduled successfully' });
  } catch (error) {
    console.error('Error scheduling meeting:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getUserAppointments = async (req, res) => {
  try {
    const { userId } = req.params;
    const appointments = await MentorAppointment.find({ userId })
      .populate('mentorId', 'name email jobTitle')
      .sort({ requestedDate: 1 });

    res.json(appointments);
  } catch (error) {
    console.error('Error fetching user appointments:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};





// exports.completeSession = async (req, res) => {
//   try {
//     const { appointmentId } = req.params;
    
//     const appointment = await MentorAppointment.findById(appointmentId);
    
//     if (!appointment) {
//       return res.status(404).json({ message: 'Appointment not found' });
//     }
    
//     if (appointment.mentorId.toString() !== req.user._id.toString()) {
//       return res.status(403).json({ message: 'Not authorized to complete this session' });
//     }
    
//     appointment.status = 'completed';
//     await appointment.save();
    
//     res.json({ message: 'Session marked as completed successfully' });
//   } catch (error) {
//     console.error('Error completing session:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };


exports.completeSession = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const appointment = await MentorAppointment.findById(appointmentId);
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    if (appointment.mentorId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to complete this session' });
    }
    
    appointment.status = 'completed';
    await appointment.save();
    
    res.json({ message: 'Session marked as completed successfully' });
  } catch (error) {
    console.error('Error completing session:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.submitRating = async (req, res) => {
  try {
    const { appointmentId, communicationSkills, clarityOfGuidance, learningOutcomes, frequencyAndQualityOfMeetings, remarks } = req.body;
    
    const appointment = await MentorAppointment.findById(appointmentId);
    
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    if (appointment.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to rate this session' });
    }
    
    appointment.rating = {
      communicationSkills,
      clarityOfGuidance,
      learningOutcomes,
      frequencyAndQualityOfMeetings,
      remarks
    };
    
    await appointment.save();
    
    res.json({ message: 'Rating submitted successfully' });
  } catch (error) {
    console.error('Error submitting rating:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};


exports.getMentorFeedback = async (req, res) => {
  try {
    const { mentorId } = req.params;
    
    console.log('Received mentorId:', mentorId); // Add this line for debugging

    if (!mentorId) {
      return res.status(400).json({ message: 'mentorId is required' });
    }

    const feedback = await MentorAppointment.find({ 
      mentorId, 
      status: 'completed',
      rating: { $exists: true }
    }).populate('userId', 'name');
    
    res.json(feedback);
  } catch (error) {
    console.error('Error fetching mentor feedback:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};



exports.getAllFeedback = async (req, res) => {
  try {
    const feedback = await MentorAppointment.find({
      status: 'completed',
      rating: { $exists: true }
    }).populate('userId', 'name').populate('mentorId', 'name');
    
    res.json(feedback);
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};