const mongoose = require('mongoose');

const MentorAppointmentSchema = new mongoose.Schema({
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  requestedDate: {
    type: Date,
    required: true
  },
  scheduledDate: {
    type: Date
  },
  meetLink: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'scheduled', 'completed', 'cancelled'],
    default: 'pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MentorAppointment', MentorAppointmentSchema);