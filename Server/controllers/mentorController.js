
// controllers/mentorController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const emailjs = require('@emailjs/nodejs');

emailjs.init({
  publicKey: 'VtWNYb9AxIQiQsP_s',
  privateKey: 'mrFJw2Q0Hj6tCJ9pd-rPE'
});

exports.registerMentor = async (req, res) => {
  const { name, email, phoneNumber, jobTitle, companiesJoined, experience, password, username } = req.body;

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
    });

    await newMentor.save();

    // Send email
    const templateParams = {
      to_name: name,
      to_email: email,
      username: username,
      password: password, // Note: Sending password via email is not secure. Consider alternatives.
      job_title: jobTitle,
      companies: companiesJoined.join(', '),
      experience: experience
    };

    await emailjs.send('service_u8vd6xq', 'template_v68ai1q', templateParams);

    res.status(201).json({ message: 'Mentor registered successfully' });
  } catch (error) {
    console.error('Error during mentor registration:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
