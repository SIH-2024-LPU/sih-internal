const express = require('express');
const connectDB = require('./db');
const careerRoutes = require('./routes/careerRoutes');
const authRoutes=require("./routes/authRoutes")
const Title=require("./routes/Jobtitle")
const applicationRoutes = require('./routes/applicationRoutes');
const videoRoutes = require('./routes/videoRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const strengthRoutes = require('./routes/strengthRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const collegesRoutes = require('./routes/collegesRoutes');
const recommendationRoutes = require('./routes/Recommendation');
const workshopRoutes = require('./routes/workshopRoutes');
const path = require('path');

const cors = require('cors'); // Import cors
const interestRoutes = require('./routes/interestRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json({ limit: '10mb' }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/careers', careerRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/job',Title)
app.use('/api/job', collegesRoutes);
app.use('/api', applicationRoutes);
app.use('/api/job', interestRoutes);
app.use('/api', mentorRoutes);
app.use('/api', recommendationRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/job', strengthRoutes);
app.use('/api/job', skillsRoutes);
app.use('/api/workshops', workshopRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
