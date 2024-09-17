const express = require('express');
const connectDB = require('./db');
const careerRoutes = require('./routes/careerRoutes');
const axios = require("axios");
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
const resourceRoutes = require('./routes/resourceRoutes');
const communityRoutes = require('./routes/communityRoutes');
const profileRoutes = require('./routes/profileRoutes'); 
const path = require('path');
require("dotenv").config();

const cors = require('cors'); // Import cors
const interestRoutes = require('./routes/interestRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json({ limit: '10mb' }));


const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
console.log(GEMINI_API_KEY)

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
app.use('/api', resourceRoutes);
app.use('/api/profile', profileRoutes); 
app.use('/api', communityRoutes);

// app.post("/api/gemini-suggestion", async (req, res) => {
//   const { answers } = req.body;

//   const prompt = `Based on the following quiz responses, suggest a suitable career path and job titles:
//   ${JSON.stringify(answers, null, 2)}
  
//   Format the output in a JSON object following this structure:
//   {
//     "career": "<predicted career>",
//     "jobProfiles": ["<job profile 1>", "<job profile 2>", "<job profile 3>"],
//     "description": "<brief description of why this career path suits the person based on their answers>"
//   }
//   Make sure the output is relevant to the given profile and follows the format. Do not include any explanations or additional text. Only provide the formatted JSON output.`;

//   const payload = {
//     contents: [
//       {
//         parts: [
//           {
//             text: prompt,
//           },
//         ],
//       },
//     ],
//   };

//   try {
//     console.log("Sending request with payload:", JSON.stringify(payload, null, 2));
    
//     const response = await axios.post(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
//       payload,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("API response:", JSON.stringify(response.data, null, 2));

//     const content = response.data.candidates && response.data.candidates[0] && response.data.candidates[0].content;
    
//     if (content && content.parts && content.parts[0] && content.parts[0].text) {
//       // Extract the JSON from the response text
//       const jsonMatch = content.parts[0].text.match(/```json\n([\s\S]*?)\n```/);
//       if (jsonMatch && jsonMatch[1]) {
//         const suggestion = JSON.parse(jsonMatch[1]);
//         res.json(suggestion);
//       } else {
//         throw new Error("Failed to extract JSON from API response");
//       }
//     } else {
//       throw new Error("Content not found in API response");
//     }
//   } catch (error) {
//     console.error("Error making API request:", error.message);
//     if (error.response) {
//       console.error("API Error Response:", error.response.data);
//       console.error("API Error Status:", error.response.status);
//       console.error("API Error Headers:", error.response.headers);
//       res.status(500).json({ error: error.response.data });
//     } else {
//       console.error("Request Error:", error);
//       res.status(500).json({ error: "Failed to communicate with Gemini API" });
//     }
//   }
// });

// app.post("/api/gemini-suggestion", async (req, res) => {
//   const { quizData } = req.body;

//   const prompt = `Based on the following quiz responses, suggest a suitable career path and job titles:
//   ${JSON.stringify(quizData, null, 2)}
  
//   Analyze the user's answers carefully and suggest a career path that best matches their interests and skills as indicated by their choices.
  
//   Format the output in a JSON object following this structure:
//   {
//     "career": "<predicted career>",
//     "jobProfiles": ["<job profile 1>", "<job profile 2>", "<job profile 3>"],
//     "description": "<brief description of why this career path suits the person based on their specific answers>"
//   }
//   Make sure the output is relevant to the given profile and follows the format. Do not include any explanations or additional text. Only provide the formatted JSON output.`;

//   const payload = {
//     contents: [
//       {
//         parts: [
//           {
//             text: prompt,
//           },
//         ],
//       },
//     ],
//   };

//   try {
//     console.log("Sending request with payload:", JSON.stringify(payload, null, 2));
    
//     const response = await axios.post(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
//       payload,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("API response:", JSON.stringify(response.data, null, 2));

//     const content = response.data.candidates && response.data.candidates[0] && response.data.candidates[0].content;
    
//     if (content && content.parts && content.parts[0] && content.parts[0].text) {
//       // Extract the JSON from the response text
//       const jsonMatch = content.parts[0].text.match(/```json\n([\s\S]*?)\n```/);
//       if (jsonMatch && jsonMatch[1]) {
//         const suggestion = JSON.parse(jsonMatch[1]);
//         res.json(suggestion);
//       } else {
//         throw new Error("Failed to extract JSON from API response");
//       }
//     } else {
//       throw new Error("Content not found in API response");
//     }
//   } catch (error) {
//     console.error("Error making API request:", error.message);
//     if (error.response) {
//       console.error("API Error Response:", error.response.data);
//       console.error("API Error Status:", error.response.status);
//       console.error("API Error Headers:", error.response.headers);
//       res.status(500).json({ error: error.response.data });
//     } else {
//       console.error("Request Error:", error);
//       res.status(500).json({ error: "Failed to communicate with Gemini API" });
//     }
//   }
// });


app.post("/api/gemini-suggestion", async (req, res) => {
  const { quizData } = req.body;

  const prompt = `Based on the following quiz responses, suggest a suitable career path and job titles:
  ${JSON.stringify(quizData, null, 2)}
  
  Analyze the user's answers carefully and suggest a career path that best matches their interests and skills as indicated by their choices.
  
  Format the output in a JSON object following this structure:
  {
    "career": "<predicted career>",
    "jobProfiles": ["<job profile 1>", "<job profile 2>", "<job profile 3>"],
    "description": "<brief description of why this career path suits the person based on their specific answers>"
  }
  Make sure the output is relevant to the given profile and follows the format. Do not include any explanations or additional text. Only provide the formatted JSON output.`;

  const payload = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  };

  try {
    console.log("Sending request with payload:", JSON.stringify(payload, null, 2));
    
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("API response:", JSON.stringify(response.data, null, 2));

    const content = response.data.candidates && response.data.candidates[0] && response.data.candidates[0].content;
    
    if (content && content.parts && content.parts[0] && content.parts[0].text) {
      let suggestion;
      try {
        // First, try to parse the entire text as JSON
        suggestion = JSON.parse(content.parts[0].text);
      } catch (parseError) {
        // If parsing fails, try to extract JSON using regex
        const jsonMatch = content.parts[0].text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          suggestion = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error("Failed to extract JSON from API response");
        }
      }
      res.json(suggestion);
    } else {
      throw new Error("Content not found in API response");
    }
  } catch (error) {
    console.error("Error making API request:", error.message);
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      console.error("API Error Status:", error.response.status);
      console.error("API Error Headers:", error.response.headers);
      res.status(500).json({ error: error.response.data });
    } else {
      console.error("Request Error:", error);
      res.status(500).json({ error: "Failed to communicate with Gemini API" });
    }
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
