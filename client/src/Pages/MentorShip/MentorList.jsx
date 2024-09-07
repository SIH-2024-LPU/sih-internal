
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useAuth } from '../../AuthContext';
// import config from '../../config';

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

//   const handleBookAppointment = async (mentorId) => {
//     if (!user) {
//       navigate('/login', { state: { from: '/mentor-list' } });
//       return;
//     }
    
//     try {
//       const date = new Date().toISOString();
//       console.log('Sending appointment request:', { mentorId, userId: user._id, date });
      
//       const response = await axios.post(`${config.API_BASE_URL}/book-appointment`, { 
//         mentorId, 
//         userId: user._id, 
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from '../../AuthContext';
import config from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [experienceLevels, setExperienceLevels] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
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
      const date = new Date(new Date().getTime() + 12 * 60 * 60 * 1000).toISOString();
      const response = await axios.post(`${config.API_BASE_URL}/book-appointment`, { 
        mentorId, 
        userId: user._id, 
        date 
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      toast.success('Appointment booked successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      if (error.response && error.response.status === 401) {
        toast.error('Your session has expired. Please log in again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate('/login', { state: { from: '/mentor-list' } });
      } else {
        toast.error('Failed to book appointment. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-indigo-800">Mentorship Program</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
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
          <p className="text-gray-600 mb-4 text-sm">
            Due to storage issues, we haven't uploaded any mentor images. Please bear with us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-indigo-900 p-4">
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src="/mentor-placeholder.png" alt="Mentor Avatar" />
                    <AvatarFallback>
                      {mentor.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-white text-xl font-bold">{mentor.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 mb-2">Job Title: {mentor.jobTitle}</p>
                <p className="text-sm text-gray-600 mb-4">Experience: {mentor.experience} years</p>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => handleBookAppointment(mentor._id)}>
                  {user ? 'Book Appointment' : 'Login to Book'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MentorList;