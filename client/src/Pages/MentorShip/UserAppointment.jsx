// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from '../../config';
// import { useAuth } from '../../AuthContext';
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const UserAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [error, setError] = useState(null);
//   const { user } = useAuth();

//   useEffect(() => {
//     if (user && user.role === 'User') {
//       fetchAppointments(user._id);
//     } else {
//       setError('User is not logged in or does not have the correct role');
//     }
//   }, [user]);

//   const fetchAppointments = async (userId) => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/user-appointments/${userId}`, {
//         headers: { Authorization: `Bearer ${user.token}` }
//       });
//       setAppointments(response.data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//       setError('Failed to fetch appointments. Please try again later.');
//     }
//   };

//   if (error) {
//     return (
//       <Alert variant="destructive">
//         <AlertTitle>Error</AlertTitle>
//         <AlertDescription>{error}</AlertDescription>
//       </Alert>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">My Booked Appointments</h2>
//       {appointments.length === 0 ? (
//         <p className="text-gray-500">No appointments found.</p>
//       ) : (
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {appointments.map((appointment) => (
//             <Card key={appointment._id}>
//               <CardHeader>
//                 <CardTitle>{appointment.mentorId?.name || 'Unknown Mentor'}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
//                 {appointment.scheduledDate && (
//                   <p>Scheduled: {new Date(appointment.scheduledDate).toLocaleString()}</p>
//                 )}
//                 {appointment.meetLink ? (
//                   <a href={appointment.meetLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                     Join Google Meet
//                   </a>
//                 ) : (
//                   <p className="text-yellow-600">Waiting for mentor to schedule</p>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserAppointments;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import { useAuth } from '../../AuthContext';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user && user.role === 'User') {
      fetchAppointments(user._id);
    } else {
      setError('User is not logged in or does not have the correct role');
    }
  }, [user]);

  const fetchAppointments = async (userId) => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/user-appointments/${userId}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setAppointments(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setError('Failed to fetch appointments. Please try again later.');
    }
  };

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Booked Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {appointments.map((appointment) => (
            <Card key={appointment._id}>
              <CardHeader>
                <CardTitle>{appointment.mentorId?.name || 'Unknown Mentor'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Requested Date: {new Date(appointment.requestedDate).toLocaleDateString()}</p>
                <p>Status: {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}</p>
                {appointment.scheduledDate && (
                  <p>Scheduled: {new Date(appointment.scheduledDate).toLocaleString()}</p>
                )}
                {appointment.meetLink ? (
                  <a href={appointment.meetLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Join Google Meet
                  </a>
                ) : (
                  <p className="text-yellow-600">
                    {appointment.status === 'pending' ? 'Waiting for mentor to schedule' : 'No meeting link available'}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserAppointments;