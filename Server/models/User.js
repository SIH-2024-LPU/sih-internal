const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  companiesJoined: [{
    type: String,
    required: true,
  }],
  experience: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'User', 'Mentor'],
  },
  newsletter: {
    type: Boolean,
    default: false,
  },
  subscription: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', UserSchema);