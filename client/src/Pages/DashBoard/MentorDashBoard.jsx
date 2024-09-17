// import { Avatar } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { MessageSquare, Clock, Users } from "lucide-react"

// export default function CoachProfile() {
//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Header with autumn background */}
//       <div className="relative h-40 bg-gradient-to-r from-orange-200 to-orange-100 rounded-t-lg overflow-hidden">
//         <div className="absolute inset-0 flex items-end justify-end p-4">
//           <img src="/placeholder.svg?height=100&width=100" alt="Mascot" className="h-24 w-24" />
//         </div>
//       </div>

//       {/* Profile information */}
//       <div className="bg-white p-6 shadow-sm flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <Avatar className="h-20 w-20">
//             <img src="/placeholder.svg?height=80&width=80" alt="Pratimesh Tiwari" />
//           </Avatar>
//           <div>
//             <h1 className="text-2xl font-bold">Pratimesh Tiwari</h1>
//             <p className="text-gray-600">Developer, Team - India</p>
//             <div className="flex items-center mt-2">
//               <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Coachee</span>
//               <div className="ml-4 flex items-center">
//                 <span className="mr-2">Coachee</span>
//                 <div className="w-12 h-6 bg-green-500 rounded-full flex items-center">
//                   <div className="w-5 h-5 bg-white rounded-full ml-1"></div>
//                 </div>
//                 <span className="ml-2">Coach</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="space-x-2">
//           <Button variant="outline">Get Support</Button>
//           <Button>Schedule Session</Button>
//         </div>
//       </div>

//       {/* Coaching highlights */}
//       <Card className="mt-6 p-6">
//         <h2 className="text-lg font-semibold mb-4">Coachee Highlights</h2>
//         <div className="grid grid-cols-4 gap-4">
//           {[
//             { icon: MessageSquare, value: 8, label: "Total no. Coaching Sessions" },
//             { icon: Clock, value: 4, label: "Avg Coaching Hours/Coach" },
//             { icon: Clock, value: 4, label: "Total Coaching Hours" },
//             { icon: Users, value: 1, label: "No. of Coaches Engaged" },
//           ].map((item, index) => (
//             <div key={index} className="flex items-center space-x-2">
//               <item.icon className="h-8 w-8 text-blue-600" />
//               <div>
//                 <p className="text-2xl font-bold">{item.value}</p>
//                 <p className="text-sm text-gray-600">{item.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Card>

//       {/* Tabs for sessions, notes, and feedback */}
//       <Tabs defaultValue="upcoming" className="mt-6">
//         <TabsList>
//           <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
//           <TabsTrigger value="completed">Completed Sessions</TabsTrigger>
//           <TabsTrigger value="notes">Notes</TabsTrigger>
//           <TabsTrigger value="feedback">Feedback</TabsTrigger>
//         </TabsList>
//         <TabsContent value="upcoming">
//           <Card>
//             <div className="p-4 flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <Avatar>
//                   <img src="/placeholder.svg?height=40&width=40" alt="Amritpal Singh" />
//                 </Avatar>
//                 <div>
//                   <h3 className="font-semibold">Testing</h3>
//                   <p className="text-sm text-gray-600">TEST</p>
//                   <p className="text-sm text-gray-600">with Amritpal Singh, Computer Science Hod</p>
//                 </div>
//               </div>
//               <div className="space-x-2">
//                 <Button variant="outline" size="sm">Edit</Button>
//                 <Button variant="outline" size="sm">Notes</Button>
//                 <Button size="sm">Start</Button>
//               </div>
//             </div>
//           </Card>
//         </TabsContent>
//         {/* Add content for other tabs as needed */}
//       </Tabs>
//     </div>
//   )
// // }


// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../AuthContext';
// import axios from 'axios';
// import config from '../../config';
// import { Avatar, Button, Card, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/";
// import { MessageSquare, Clock, Users, Edit, Plus } from "lucide-react";

// export default function MentorDashboard() {
//   const { user } = useAuth();
//   const [mentorData, setMentorData] = useState(null);
//   const [appointments, setAppointments] = useState([]);
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState('');

//   useEffect(() => {
//     fetchMentorData();
//     fetchAppointments();
//     fetchNotes();
//   }, []);

//   const fetchMentorData = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentors/${user.id}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setMentorData(response.data);
//     } catch (error) {
//       console.error('Error fetching mentor data:', error);
//     }
//   };

//   const fetchAppointments = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentor-appointments/${user.id}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setAppointments(response.data);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const fetchNotes = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentor-notes/${user.id}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setNotes(response.data);
//     } catch (error) {
//       console.error('Error fetching notes:', error);
//     }
//   };

//   const addNote = async () => {
//     try {
//       const response = await axios.post(`${config.API_BASE_URL}/mentor-notes`, 
//         { mentorId: user.id, content: newNote },
//         { headers: { Authorization: `Bearer ${user.token}` } }
//       );
//       setNotes([...notes, response.data]);
//       setNewNote('');
//     } catch (error) {
//       console.error('Error adding note:', error);
//     }
//   };

//   if (!mentorData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Header */}
//       <div className="relative h-40 bg-gradient-to-r from-orange-200 to-orange-100 rounded-t-lg overflow-hidden">
//         <div className="absolute inset-0 flex items-end justify-end p-4">
//           <img src="/placeholder.svg?height=100&width=100" alt="Mascot" className="h-24 w-24" />
//         </div>
//       </div>

//       {/* Profile information */}
//       <Card className="mt-4 p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <Avatar className="h-20 w-20">
//               <img src={mentorData.imageUrl || "/placeholder.svg?height=80&width=80"} alt={mentorData.name} />
//             </Avatar>
//             <div>
//               <h1 className="text-2xl font-bold">{mentorData.name}</h1>
//               <p className="text-gray-600">{mentorData.jobTitle}</p>
//               <p className="text-sm text-gray-500">{mentorData.email}</p>
//             </div>
//           </div>
//           <Button variant="outline"><Edit className="mr-2 h-4 w-4" /> Edit Profile</Button>
//         </div>
//       </Card>

//       {/* Mentor stats */}
//       <Card className="mt-6 p-6">
//         <h2 className="text-lg font-semibold mb-4">Mentorship Overview</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex items-center space-x-2">
//             <MessageSquare className="h-8 w-8 text-blue-600" />
//             <div>
//               <p className="text-2xl font-bold">{appointments.length}</p>
//               <p className="text-sm text-gray-600">Total Sessions</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Clock className="h-8 w-8 text-green-600" />
//             <div>
//               <p className="text-2xl font-bold">{appointments.filter(a => a.status === 'completed').length}</p>
//               <p className="text-sm text-gray-600">Completed Sessions</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Users className="h-8 w-8 text-purple-600" />
//             <div>
//               <p className="text-2xl font-bold">{new Set(appointments.map(a => a.userId)).size}</p>
//               <p className="text-sm text-gray-600">Unique Mentees</p>
//             </div>
//           </div>
//         </div>
//       </Card>

//       {/* Tabs for appointments and notes */}
//       <Tabs defaultValue="upcoming" className="mt-6">
//         <TabsList>
//           <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
//           <TabsTrigger value="completed">Completed Sessions</TabsTrigger>
//           <TabsTrigger value="notes">Notes</TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="upcoming">
//           <Card>
//             {appointments.filter(a => a.status === 'scheduled').map((appointment) => (
//               <div key={appointment._id} className="p-4 border-b last:border-b-0">
//                 <h3 className="font-semibold">{appointment.userId.name}</h3>
//                 <p className="text-sm text-gray-600">{new Date(appointment.scheduledDate).toLocaleString()}</p>
//                 <p className="text-sm text-blue-600">{appointment.meetLink}</p>
//               </div>
//             ))}
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="completed">
//           <Card>
//             {appointments.filter(a => a.status === 'completed').map((appointment) => (
//               <div key={appointment._id} className="p-4 border-b last:border-b-0">
//                 <h3 className="font-semibold">{appointment.userId.name}</h3>
//                 <p className="text-sm text-gray-600">{new Date(appointment.scheduledDate).toLocaleString()}</p>
//                 {appointment.rating && (
//                   <p className="text-sm text-green-600">Rating: {appointment.rating.overallRating}/5</p>
//                 )}
//               </div>
//             ))}
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="notes">
//           <Card>
//             <div className="p-4">
//               <textarea
//                 value={newNote}
//                 onChange={(e) => setNewNote(e.target.value)}
//                 className="w-full p-2 border rounded"
//                 placeholder="Add a new note..."
//               />
//               <Button onClick={addNote} className="mt-2"><Plus className="mr-2 h-4 w-4" /> Add Note</Button>
//             </div>
//             {notes.map((note) => (
//               <div key={note._id} className="p-4 border-t">
//                 <p>{note.content}</p>
//                 <p className="text-sm text-gray-500 mt-1">{new Date(note.createdAt).toLocaleString()}</p>
//               </div>
//             ))}
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../AuthContext';
// import axios from 'axios';
// import config from '../../config';
// import { Avatar, Button, Card, Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui";
// import { MessageSquare, Clock, Users, Edit, Plus } from "lucide-react";

// export default function MentorDashboard() {
//   const { user } = useAuth();
//   const [mentorData, setMentorData] = useState(null);
//   const [appointments, setAppointments] = useState([]);
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState('');

//   useEffect(() => {
//     fetchMentorData();
//     fetchAppointments();
//     fetchNotes();
//   }, []);

//   const fetchMentorData = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentors/${user.id}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setMentorData(response.data);
//     } catch (error) {
//       console.error('Error fetching mentor data:', error);
//     }
//   };

//   const fetchAppointments = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentor-appointments/${user.id}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setAppointments(response.data);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const fetchNotes = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentor-notes/${user.id}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setNotes(response.data);
//     } catch (error) {
//       console.error('Error fetching notes:', error);
//     }
//   };

//   const addNote = async () => {
//     try {
//       const response = await axios.post(`${config.API_BASE_URL}/mentor-notes`, 
//         { mentorId: user.id, content: newNote },
//         { headers: { Authorization: `Bearer ${user.token}` } }
//       );
//       setNotes([...notes, response.data]);
//       setNewNote('');
//     } catch (error) {
//       console.error('Error adding note:', error);
//     }
//   };

//   if (!mentorData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Header */}
//       <div className="relative h-40 bg-gradient-to-r from-orange-200 to-orange-100 rounded-t-lg overflow-hidden">
//         <div className="absolute inset-0 flex items-end justify-end p-4">
//           <img src="/placeholder.svg?height=100&width=100" alt="Mascot" className="h-24 w-24" />
//         </div>
//       </div>

//       {/* Profile information */}
//       <Card className="mt-4 p-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <Avatar className="h-20 w-20">
//               <img src={mentorData.imageUrl || "/placeholder.svg?height=80&width=80"} alt={mentorData.name} />
//             </Avatar>
//             <div>
//               <h1 className="text-2xl font-bold">{mentorData.name}</h1>
//               <p className="text-gray-600">{mentorData.jobTitle}</p>
//               <p className="text-sm text-gray-500">{mentorData.email}</p>
//             </div>
//           </div>
//           <Button variant="outline"><Edit className="mr-2 h-4 w-4" /> Edit Profile</Button>
//         </div>
//       </Card>

//       {/* Mentor stats */}
//       <Card className="mt-6 p-6">
//         <h2 className="text-lg font-semibold mb-4">Mentorship Overview</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex items-center space-x-2">
//             <MessageSquare className="h-8 w-8 text-blue-600" />
//             <div>
//               <p className="text-2xl font-bold">{appointments.length}</p>
//               <p className="text-sm text-gray-600">Total Sessions</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Clock className="h-8 w-8 text-green-600" />
//             <div>
//               <p className="text-2xl font-bold">{appointments.filter(a => a.status === 'completed').length}</p>
//               <p className="text-sm text-gray-600">Completed Sessions</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Users className="h-8 w-8 text-purple-600" />
//             <div>
//               <p className="text-2xl font-bold">{new Set(appointments.map(a => a.userId)).size}</p>
//               <p className="text-sm text-gray-600">Unique Mentees</p>
//             </div>
//           </div>
//         </div>
//       </Card>

//       {/* Tabs for appointments and notes */}
//       <Tabs defaultValue="upcoming" className="mt-6">
//         <TabsList>
//           <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
//           <TabsTrigger value="completed">Completed Sessions</TabsTrigger>
//           <TabsTrigger value="notes">Notes</TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="upcoming">
//           <Card>
//             {appointments.filter(a => a.status === 'scheduled').map((appointment) => (
//               <div key={appointment._id} className="p-4 border-b last:border-b-0">
//                 <h3 className="font-semibold">{appointment.userId.name}</h3>
//                 <p className="text-sm text-gray-600">{new Date(appointment.scheduledDate).toLocaleString()}</p>
//                 <p className="text-sm text-blue-600">{appointment.meetLink}</p>
//               </div>
//             ))}
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="completed">
//           <Card>
//             {appointments.filter(a => a.status === 'completed').map((appointment) => (
//               <div key={appointment._id} className="p-4 border-b last:border-b-0">
//                 <h3 className="font-semibold">{appointment.userId.name}</h3>
//                 <p className="text-sm text-gray-600">{new Date(appointment.scheduledDate).toLocaleString()}</p>
//                 {appointment.rating && (
//                   <p className="text-sm text-green-600">Rating: {appointment.rating.overallRating}/5</p>
//                 )}
//               </div>
//             ))}
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="notes">
//           <Card>
//             <div className="p-4">
//               <textarea
//                 value={newNote}
//                 onChange={(e) => setNewNote(e.target.value)}
//                 className="w-full p-2 border rounded"
//                 placeholder="Add a new note..."
//               />
//               <Button onClick={addNote} className="mt-2"><Plus className="mr-2 h-4 w-4" /> Add Note</Button>
//             </div>
//             {notes.map((note) => (
//               <div key={note._id} className="p-4 border-t">
//                 <p>{note.content}</p>
//                 <p className="text-sm text-gray-500 mt-1">{new Date(note.createdAt).toLocaleString()}</p>
//               </div>
//             ))}
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../../AuthContext';
// import axios from 'axios';
// import config from '../../config';
// import { MessageSquare, Clock, Users, Edit, Plus } from "lucide-react";

// export default function MentorDashboard() {
//   const { user } = useAuth();
//   const [mentorData, setMentorData] = useState(null);
//   const [appointments, setAppointments] = useState([]);
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState('');

//   useEffect(() => {
//     fetchMentorData();
//     fetchAppointments();
//     fetchNotes();
//   }, []);

//   const fetchMentorData = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentors/${user.id}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setMentorData(response.data);
//     } catch (error) {
//       console.error('Error fetching mentor data:', error);
//     }
//   };

//   const fetchAppointments = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentor-appointments/${user.id}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setAppointments(response.data);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

//   const fetchNotes = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/mentor-notes/${user.id}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setNotes(response.data);
//     } catch (error) {
//       console.error('Error fetching notes:', error);
//     }
//   };

//   const addNote = async () => {
//     try {
//       const response = await axios.post(`${config.API_BASE_URL}/mentor-notes`, 
//         { mentorId: user.id, content: newNote },
//         { headers: { Authorization: `Bearer ${user.token}` } }
//       );
//       setNotes([...notes, response.data]);
//       setNewNote('');
//     } catch (error) {
//       console.error('Error adding note:', error);
//     }
//   };

//   if (!mentorData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Header */}
//       <div className="relative h-40 bg-gradient-to-r from-orange-200 to-orange-100 rounded-t-lg overflow-hidden">
//         <div className="absolute inset-0 flex items-end justify-end p-4">
//           <img src="/placeholder.svg?height=100&width=100" alt="Mascot" className="h-24 w-24" />
//         </div>
//       </div>

//       {/* Profile information */}
//       <div className="mt-4 p-6 shadow rounded-lg">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <div className="h-20 w-20 rounded-full overflow-hidden">
//               <img src={mentorData.imageUrl || "/placeholder.svg?height=80&width=80"} alt={mentorData.name} />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold">{mentorData.name}</h1>
//               <p className="text-gray-600">{mentorData.jobTitle}</p>
//               <p className="text-sm text-gray-500">{mentorData.email}</p>
//             </div>
//           </div>
//           <button className="border rounded px-4 py-2 text-sm font-medium"><Edit className="mr-2 h-4 w-4" /> Edit Profile</button>
//         </div>
//       </div>

//       {/* Mentor stats */}
//       <div className="mt-6 p-6 shadow rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Mentorship Overview</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div className="flex items-center space-x-2">
//             <MessageSquare className="h-8 w-8 text-blue-600" />
//             <div>
//               <p className="text-2xl font-bold">{appointments.length}</p>
//               <p className="text-sm text-gray-600">Total Sessions</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Clock className="h-8 w-8 text-green-600" />
//             <div>
//               <p className="text-2xl font-bold">{appointments.filter(a => a.status === 'completed').length}</p>
//               <p className="text-sm text-gray-600">Completed Sessions</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Users className="h-8 w-8 text-purple-600" />
//             <div>
//               <p className="text-2xl font-bold">{new Set(appointments.map(a => a.userId)).size}</p>
//               <p className="text-sm text-gray-600">Unique Mentees</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tabs for appointments and notes */}
//       <div className="mt-6">
//         <div className="flex space-x-4 border-b">
//           <button className="py-2 px-4 font-medium border-b-2">Upcoming Sessions</button>
//           <button className="py-2 px-4 font-medium">Completed Sessions</button>
//           <button className="py-2 px-4 font-medium">Notes</button>
//         </div>
        
//         <div className="mt-4">
//           {/* Upcoming Sessions */}
//           <div className="p-4 shadow rounded-lg">
//             {appointments.filter(a => a.status === 'scheduled').map((appointment) => (
//               <div key={appointment._id} className="p-4 border-b last:border-b-0">
//                 <h3 className="font-semibold">{appointment.userId.name}</h3>
//                 <p className="text-sm text-gray-600">{new Date(appointment.scheduledDate).toLocaleString()}</p>
//                 <p className="text-sm text-blue-600">{appointment.meetLink}</p>
//               </div>
//             ))}
//           </div>

//           {/* Completed Sessions */}
//           <div className="mt-4 p-4 shadow rounded-lg">
//             {appointments.filter(a => a.status === 'completed').map((appointment) => (
//               <div key={appointment._id} className="p-4 border-b last:border-b-0">
//                 <h3 className="font-semibold">{appointment.userId.name}</h3>
//                 <p className="text-sm text-gray-600">{new Date(appointment.scheduledDate).toLocaleString()}</p>
//                 {appointment.rating && (
//                   <p className="text-sm text-green-600">Rating: {appointment.rating.overallRating}/5</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Notes */}
//           <div className="mt-4 p-4 shadow rounded-lg">
//             <div className="p-4">
//               <textarea
//                 value={newNote}
//                 onChange={(e) => setNewNote(e.target.value)}
//                 className="w-full p-2 border rounded"
//                 placeholder="Add a new note..."
//               />
//               <button onClick={addNote} className="mt-2 border rounded px-4 py-2 text-sm font-medium"><Plus className="mr-2 h-4 w-4" /> Add Note</button>
//             </div>
//             {notes.map((note) => (
//               <div key={note._id} className="p-4 border-t">
//                 <p>{note.content}</p>
//                 <p className="text-sm text-gray-500 mt-1">{new Date(note.createdAt).toLocaleString()}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext';
import axios from 'axios';
import config from '../../config';
import { MessageSquare, Clock, Users, Edit, Plus, Calendar, CheckCircle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function MentorDashboard() {
  const { user } = useAuth();
  const [mentorData, setMentorData] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetchMentorData();
    fetchAppointments();
    fetchNotes();
  }, []);

  const fetchMentorData = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/mentors/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setMentorData(response.data);
    } catch (error) {
      console.error('Error fetching mentor data:', error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/mentor-appointments/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/mentor-notes/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = async () => {
    try {
      const response = await axios.post(`${config.API_BASE_URL}/mentor-notes`, 
        { mentorId: user.id, content: newNote },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setNotes([...notes, response.data]);
      setNewNote('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  if (!mentorData) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20 border-4 border-white">
                <AvatarImage src={mentorData.imageUrl || "/placeholder.svg?height=80&width=80"} alt={mentorData.name} />
                <AvatarFallback>{mentorData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">{mentorData.name}</h1>
                <p className="text-xl">{mentorData.jobTitle}</p>
                <p className="text-sm">{mentorData.email}</p>
              </div>
            </div>
            <Button variant="secondary" className="flex items-center">
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Mentor stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{appointments.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Sessions</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{appointments.filter(a => a.status === 'completed').length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Mentees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{new Set(appointments.map(a => a.userId)).size}</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for appointments and notes */}
        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="completed">Completed Sessions</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                {appointments.filter(a => a.status === 'scheduled').map((appointment) => (
                  <div key={appointment._id} className="mb-4 p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{appointment.userId.name}</h3>
                        <p className="text-sm text-gray-600">{new Date(appointment.scheduledDate).toLocaleString()}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" /> Join Meeting
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Completed Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                {appointments.filter(a => a.status === 'completed').map((appointment) => (
                  <div key={appointment._id} className="mb-4 p-4 bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{appointment.userId.name}</h3>
                        <p className="text-sm text-gray-600">{new Date(appointment.scheduledDate).toLocaleString()}</p>
                      </div>
                      {appointment.rating && (
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium">Rating: {appointment.rating.overallRating}/5</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notes">
            <Card>
              <CardHeader>
                <CardTitle>Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add a new note..."
                  />
                  <Button onClick={addNote} className="mt-2">
                    <Plus className="mr-2 h-4 w-4" /> Add Note
                  </Button>
                </div>
                {notes.map((note) => (
                  <div key={note._id} className="mb-4 p-4 bg-white rounded-lg shadow">
                    <p>{note.content}</p>
                    <p className="text-sm text-gray-500 mt-1">{new Date(note.createdAt).toLocaleString()}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}