// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const experienceLevels = Array.from({length: 10}, (_, i) => i + 1);

// const MentorList = () => {
//   const [mentors, setMentors] = useState([]);
//   const [jobTitles, setJobTitles] = useState([]);
//   const [jobTitle, setJobTitle] = useState('');
//   const [experience, setExperience] = useState('');

//   useEffect(() => {
//     fetchJobTitles();
//     fetchMentors();
//   }, []);

//   useEffect(() => {
//     fetchMentors();
//   }, [jobTitle, experience]);

//   const fetchJobTitles = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/job-titles`);
//       setJobTitles(response.data);
//     } catch (error) {
//       console.error('Error fetching job titles:', error);
//     }
//   };

//   const fetchMentors = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentors`, {
//         params: {
//           jobTitle: jobTitle || undefined,
//           experience: experience || undefined
//         }
//       });
//       setMentors(response.data);
//     } catch (error) {
//       console.error('Error fetching mentors:', error);
//     }
//   };

//   const handleBookAppointment = async (mentorId) => {
//     try {
//       const userId = 'current-user-id'; // Replace with actual user ID
//       const date = new Date(); // Replace with selected date
//       await axios.post(`${config.API_BASE_URL}/book-appointment`, { mentorId, userId, date });
//       alert('Appointment booked successfully!');
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       alert('Failed to book appointment');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Mentor List</h2>
//       <div className="flex space-x-4 mb-6">
//         <Select onValueChange={setJobTitle}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select Job Title" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="">All Job Titles</SelectItem>
//             {jobTitles.map((title) => (
//               <SelectItem key={title} value={title}>{title}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         <Select onValueChange={setExperience}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select Experience" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="">Any Experience</SelectItem>
//             {experienceLevels.map((level) => (
//               <SelectItem key={level} value={level.toString()}>{`${level} year${level > 1 ? 's' : ''}`}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {mentors.map((mentor) => (
//           <Card key={mentor._id}>
//             <CardHeader>
//               <CardTitle>{mentor.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-gray-600 mb-2">Job Title: {mentor.jobTitle}</p>
//               <p className="text-sm text-gray-600 mb-4">Experience: {mentor.experience} years</p>
//               <Button onClick={() => handleBookAppointment(mentor._id)}>Book Appointment</Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MentorList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const experienceLevels = Array.from({ length: 10 }, (_, i) => i + 1);

// const MentorList = () => {
//   const [mentors, setMentors] = useState([]);
//   const [jobTitles, setJobTitles] = useState([]);
//   const [jobTitle, setJobTitle] = useState('');
//   const [experience, setExperience] = useState('');

//   useEffect(() => {
//     fetchJobTitles();
//     fetchMentors();
//   }, []);

//   useEffect(() => {
//     fetchMentors();
//   }, [jobTitle, experience]);

//   const fetchJobTitles = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/job-titles`);
//       setJobTitles(response.data);
//     } catch (error) {
//       console.error('Error fetching job titles:', error);
//     }
//   };

//   const fetchMentors = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentors`, {
//         params: {
//           jobTitle: jobTitle || undefined,
//           experience: experience || undefined
//         }
//       });
//       setMentors(response.data);
//     } catch (error) {
//       console.error('Error fetching mentors:', error);
//     }
//   };

//   const handleBookAppointment = async (mentorId) => {
//     try {
//       const userId = 'current-user-id'; // Replace with actual user ID
//       const date = new Date(); // Replace with selected date
//       await axios.post(`${config.API_BASE_URL}/book-appointment`, { mentorId, userId, date });
//       alert('Appointment booked successfully!');
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       alert('Failed to book appointment');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Mentor List</h2>
//       <div className="flex space-x-4 mb-6">
//         <Select onValueChange={setJobTitle}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select Job Title" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="">All Job Titles</SelectItem>
//             {jobTitles.map((title) => (
//               <SelectItem key={title} value={title}>{title}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         <Select onValueChange={setExperience}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select Experience" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="">Any Experience</SelectItem>
//             {experienceLevels.map((level) => (
//               <SelectItem key={level} value={level.toString()}>{`${level} year${level > 1 ? 's' : ''}`}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {mentors.map((mentor) => (
//           <Card key={mentor._id}>
//             <CardHeader>
//               <CardTitle>{mentor.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-gray-600 mb-2">Job Title: {mentor.jobTitle}</p>
//               <p className="text-sm text-gray-600 mb-4">Experience: {mentor.experience} years</p>
//               <Button onClick={() => handleBookAppointment(mentor._id)}>Book Appointment</Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MentorList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const MentorList = () => {
//   const [mentors, setMentors] = useState([]);
//   const [jobTitles, setJobTitles] = useState([]);
//   const [experienceLevels, setExperienceLevels] = useState([]);
//   const [selectedJobTitle, setSelectedJobTitle] = useState('');
//   const [selectedExperience, setSelectedExperience] = useState('');

//   useEffect(() => {
//     fetchJobTitles();
//     fetchExperienceLevels();
//     fetchMentors();
//   }, []);

//   useEffect(() => {
//     fetchMentors();
//   }, [selectedJobTitle, selectedExperience]);

//   const fetchJobTitles = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/job-titles`);
//       setJobTitles(response.data);
//     } catch (error) {
//       console.error('Error fetching job titles:', error);
//     }
//   };

//   const fetchExperienceLevels = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/experience-levels`);
//       setExperienceLevels(response.data);
//     } catch (error) {
//       console.error('Error fetching experience levels:', error);
//     }
//   };

//   const fetchMentors = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentors`, {
//         params: {
//           jobTitle: selectedJobTitle || undefined,
//           experience: selectedExperience || undefined
//         }
//       });
//       setMentors(response.data);
//     } catch (error) {
//       console.error('Error fetching mentors:', error);
//     }
//   };

//   const handleBookAppointment = async (mentorId) => {
//     try {
//       const userId = 'current-user-id'; // Replace with actual user ID
//       const date = new Date(); // Replace with selected date
//       await axios.post(`${config.API_BASE_URL}/book-appointment`, { mentorId, userId, date });
//       alert('Appointment booked successfully!');
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       alert('Failed to book appointment');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Mentor List</h2>
//       <div className="flex space-x-4 mb-6">
//         <Select onValueChange={setSelectedJobTitle}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select Job Title" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All Job Titles</SelectItem>
//             {jobTitles.map((title) => (
//               <SelectItem key={title} value={title}>{title}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         <Select onValueChange={setSelectedExperience}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select Experience" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">Any Experience</SelectItem>
//             {experienceLevels.map((level) => (
//               <SelectItem key={level} value={level.toString()}>{`${level} year${level > 1 ? 's' : ''}`}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {mentors.map((mentor) => (
//           <Card key={mentor._id}>
//             <CardHeader>
//               <CardTitle>{mentor.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-gray-600 mb-2">Job Title: {mentor.jobTitle}</p>
//               <p className="text-sm text-gray-600 mb-4">Experience: {mentor.experience} years</p>
//               <Button onClick={() => handleBookAppointment(mentor._id)}>Book Appointment</Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MentorList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useAuth } from '../../AuthContext';
// import { useNavigate } from 'react-router-dom';

// const MentorList = () => {
//   const [mentors, setMentors] = useState([]);
//   const [jobTitles, setJobTitles] = useState([]);
//   const [experienceLevels, setExperienceLevels] = useState([]);
//   const [selectedJobTitle, setSelectedJobTitle] = useState('');
//   const [selectedExperience, setSelectedExperience] = useState('');
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchJobTitles();
//     fetchExperienceLevels();
//     fetchMentors();
//   }, []);

//   useEffect(() => {
//     fetchMentors();
//   }, [selectedJobTitle, selectedExperience]);

//   const fetchJobTitles = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/job-titles`);
//       setJobTitles(response.data);
//     } catch (error) {
//       console.error('Error fetching job titles:', error);
//     }
//   };

//   const fetchExperienceLevels = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/experience-levels`);
//       setExperienceLevels(response.data);
//     } catch (error) {
//       console.error('Error fetching experience levels:', error);
//     }
//   };

//   const fetchMentors = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentors`, {
//         params: {
//           jobTitle: selectedJobTitle !== 'all' ? selectedJobTitle : undefined,
//           experience: selectedExperience !== 'all' ? selectedExperience : undefined
//         }
//       });
//       setMentors(response.data);
//     } catch (error) {
//       console.error('Error fetching mentors:', error);
//     }
//   };

//   // const handleBookAppointment = async (mentorId) => {
//   //   if (!user) {
//   //     navigate('/login', { state: { from: '/mentor-list' } });
//   //     return;
//   //   }
    
//   //   try {
//   //     const date = new Date(); // You might want to let the user select a date instead
//   //     await axios.post(`${config.API_BASE_URL}/book-appointment`, { 
//   //       mentorId, 
//   //       userId: user.id, 
//   //       date 
//   //     }, {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem('token')}`
//   //       }
//   //     });
//   //     alert('Appointment booked successfully!');
//   //   } catch (error) {
//   //     console.error('Error booking appointment:', error);
//   //     if (error.response && error.response.status === 401) {
//   //       alert('Your session has expired. Please log in again.');
//   //       navigate('/login', { state: { from: '/mentor-list' } });
//   //     } else {
//   //       alert('Failed to book appointment. Please try again.');
//   //     }
//   //   }
//   // };

//   const handleBookAppointment = async (mentorId) => {
//     if (!user) {
//       navigate('/login', { state: { from: '/mentor-list' } });
//       return;
//     }
    
//     try {
//       const date = new Date().toISOString(); // Format date as ISO string
//       console.log('Sending appointment request:', { mentorId, userId: user.id, date });
      
//       const response = await axios.post(`${config.API_BASE_URL}/book-appointment`, { 
//         mentorId, 
//         userId: user.id, 
//         date 
//       }, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//       });
      
//       console.log('Server response:', response.data);
//       alert('Appointment booked successfully!');
//     } catch (error) {
//       console.error('Error booking appointment:', error);
//       if (error.response) {
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//         console.error('Response headers:', error.response.headers);
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//       } else {
//         console.error('Error setting up request:', error.message);
//       }
      
//       if (error.response && error.response.status === 401) {
//         alert('Your session has expired. Please log in again.');
//         navigate('/login', { state: { from: '/mentor-list' } });
//       } else {
//         alert('Failed to book appointment. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Mentor List</h2>
//       <div className="flex space-x-4 mb-6">
//         <Select onValueChange={setSelectedJobTitle}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select Job Title" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All Job Titles</SelectItem>
//             {jobTitles.map((title) => (
//               <SelectItem key={title} value={title}>{title}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         <Select onValueChange={setSelectedExperience}>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Select Experience" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">Any Experience</SelectItem>
//             {experienceLevels.map((level) => (
//               <SelectItem key={level} value={level.toString()}>{`${level} year${level > 1 ? 's' : ''}`}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {mentors.map((mentor) => (
//           <Card key={mentor._id}>
//             <CardHeader>
//               <CardTitle>{mentor.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-gray-600 mb-2">Job Title: {mentor.jobTitle}</p>
//               <p className="text-sm text-gray-600 mb-4">Experience: {mentor.experience} years</p>
//               <Button onClick={() => handleBookAppointment(mentor._id)}>
//                 {user ? 'Book Appointment' : 'Login to Book'}
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MentorList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '../../AuthContext';
import config from '../../config';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [experienceLevels, setExperienceLevels] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobTitles();
    fetchExperienceLevels();
    fetchMentors();
  }, []);

  useEffect(() => {
    fetchMentors();
  }, [selectedJobTitle, selectedExperience]);

  const fetchJobTitles = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/job-titles`);
      setJobTitles(response.data);
    } catch (error) {
      console.error('Error fetching job titles:', error);
    }
  };

  const fetchExperienceLevels = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/experience-levels`);
      setExperienceLevels(response.data);
    } catch (error) {
      console.error('Error fetching experience levels:', error);
    }
  };

  const fetchMentors = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/mentors`, {
        params: {
          jobTitle: selectedJobTitle !== 'all' ? selectedJobTitle : undefined,
          experience: selectedExperience !== 'all' ? selectedExperience : undefined
        }
      });
      setMentors(response.data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  const handleBookAppointment = async (mentorId) => {
    if (!user) {
      navigate('/login', { state: { from: '/mentor-list' } });
      return;
    }
    
    try {
      const date = new Date().toISOString();
      console.log('Sending appointment request:', { mentorId, userId: user._id, date });
      
      const response = await axios.post(`${config.API_BASE_URL}/book-appointment`, { 
        mentorId, 
        userId: user._id, 
        date 
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      console.log('Server response:', response.data);
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error booking appointment:', error);
      if (error.response && error.response.status === 401) {
        alert('Your session has expired. Please log in again.');
        navigate('/login', { state: { from: '/mentor-list' } });
      } else {
        alert('Failed to book appointment. Please try again.');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Mentor List</h2>
      <div className="flex space-x-4 mb-6">
        <Select onValueChange={setSelectedJobTitle}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Job Title" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Job Titles</SelectItem>
            {jobTitles.map((title) => (
              <SelectItem key={title} value={title}>{title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedExperience}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Experience</SelectItem>
            {experienceLevels.map((level) => (
              <SelectItem key={level} value={level.toString()}>{`${level} year${level > 1 ? 's' : ''}`}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentors.map((mentor) => (
          <Card key={mentor._id}>
            <CardHeader>
              <CardTitle>{mentor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-2">Job Title: {mentor.jobTitle}</p>
              <p className="text-sm text-gray-600 mb-4">Experience: {mentor.experience} years</p>
              <Button onClick={() => handleBookAppointment(mentor._id)}>
                {user ? 'Book Appointment' : 'Login to Book'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MentorList;