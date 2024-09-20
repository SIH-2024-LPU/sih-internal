// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Loader2, Edit, Trash2 } from 'lucide-react';
// import config from '../../config';

// export default function AvailableWorkshops() {
//   const [workshops, setWorkshops] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchWorkshops();
//   }, []);

//   const fetchWorkshops = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/workshops`);
//       setWorkshops(response.data);
//     } catch (error) {
//       toast.error('Failed to fetch workshops. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this workshop?')) {
//       try {
//         await axios.delete(`${config.API_BASE_URL}/workshops/${id}`);
//         toast.success('Workshop deleted successfully!');
//         fetchWorkshops();
//       } catch (error) {
//         toast.error('Failed to delete workshop. Please try again.');
//       }
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Loader2 className="h-8 w-8 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Available Workshops</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {workshops.map((workshop) => (
//           <Card key={workshop._id} className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-xl font-bold text-gray-800">{workshop.title}</CardTitle>
//               <CardDescription className="text-gray-600">
//                 Date: {new Date(workshop.date).toLocaleDateString()} | Time: {workshop.time}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//             <img 
//                 src={`${config.API_BASE_URL}${workshop.banner}`} 
//                 alt={workshop.title} 
//                 className="w-full h-48 object-cover mb-4 rounded" 
//               />
//               <p><strong>Location:</strong> {workshop.location}</p>
//               <p><strong>Age Group:</strong> {workshop.ageGroup}</p>
//               <p><strong>Language:</strong> {workshop.language}</p>
//               <p><strong>Venue:</strong> {workshop.venueAddress}</p>
//               <div className="mt-4 flex justify-end space-x-2">
//                 <Button variant="outline" size="sm" onClick={() => handleDelete(workshop._id)}>
//                   <Trash2 className="h-4 w-4 mr-1" /> Delete
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   <Edit className="h-4 w-4 mr-1" /> Edit
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Loader2, Edit, Trash2 } from 'lucide-react';
// import config from '../../config';

// export default function AvailableWorkshops() {
//   const [workshops, setWorkshops] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchWorkshops();
//   }, []);

//   const fetchWorkshops = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/workshops`);
//       console.log(`${config.API_BASE_URL}${workshops.banner}`);

//       setWorkshops(response.data);
//     } catch (error) {
//       toast.error('Failed to fetch workshops. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this workshop?')) {
//       try {
//         await axios.delete(`${config.API_BASE_URL}/workshops/${id}`);
        
//         toast.success('Workshop deleted successfully!');

//         fetchWorkshops();
//       } catch (error) {
//         toast.error('Failed to delete workshop. Please try again.');
//       }
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Loader2 className="h-8 w-8 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Available Workshops</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {workshops.map((workshop) => (
//           <Card key={workshop._id} className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-xl font-bold text-gray-800">{workshop.title}</CardTitle>
//               <CardDescription className="text-gray-600">
//                 Date: {new Date(workshop.date).toLocaleDateString()} | Time: {workshop.time}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
              
//               <img 
//                 src={`${config.API_BASE_URL1}${workshop.banner}`}
//                 alt={workshop.title} 
//                 className="w-full h-48 object-cover mb-4 rounded" 
//               />
              
//               <p><strong>Location:</strong> {workshop.location}</p>
//               <p><strong>Age Group:</strong> {workshop.ageGroup}</p>
//               <p><strong>Language:</strong> {workshop.language}</p>
//               <p><strong>Venue:</strong> {workshop.venueAddress}</p>
//               <div className="mt-4 flex justify-end space-x-2">
//                 <Button variant="outline" size="sm" onClick={() => handleDelete(workshop._id)}>
//                   <Trash2 className="h-4 w-4 mr-1" /> Delete
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   <Edit className="h-4 w-4 mr-1" /> Edit
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Loader2, Edit, Trash2 } from 'lucide-react';
// import config from '../../config';

// export default function AvailableWorkshops() {
//   const [workshops, setWorkshops] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchWorkshops();
//   }, []);

//   const fetchWorkshops = async () => {
//     try {
//       const response = await axios.get(`${config.API_BASE_URL}/workshops`);
//       setWorkshops(response.data);
//     } catch (error) {
//       console.error('Error fetching workshops:', error);
//       toast.error('Failed to fetch workshops. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this workshop?')) {
//       try {
//         await axios.delete(`${config.API_BASE_URL}/workshops/${id}`);
//         toast.success('Workshop deleted successfully!');
//         fetchWorkshops();
//       } catch (error) {
//         console.error('Error deleting workshop:', error);
//         toast.error('Failed to delete workshop. Please try again.');
//       }
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Loader2 className="h-8 w-8 animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Available Workshops</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {workshops.map((workshop) => (
//           <Card key={workshop._id} className="bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-xl font-bold text-gray-800">{workshop.title}</CardTitle>
//               <CardDescription className="text-gray-600">
//                 Date: {new Date(workshop.date).toLocaleDateString()} | Time: {workshop.time}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               {workshop.banner && (
//                 <img 
//                   src={workshop.banner.startsWith('http') ? workshop.banner : `${config.API_BASE_URL1}${workshop.banner}`}
//                   alt={workshop.title} 
//                   className="w-full h-48 object-cover mb-4 rounded" 
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = '/placeholder-image.jpg'; // Replace with your placeholder image path
//                   }}
//                 />
//               )}
//               <p><strong>Location:</strong> {workshop.location}</p>
//               <p><strong>Age Group:</strong> {workshop.ageGroup}</p>
//               <p><strong>Language:</strong> {workshop.language}</p>
//               <p><strong>Venue:</strong> {workshop.venueAddress}</p>
//               <div className="mt-4 flex justify-end space-x-2">
//                 <Button variant="outline" size="sm" onClick={() => handleDelete(workshop._id)}>
//                   <Trash2 className="h-4 w-4 mr-1" /> Delete
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   <Edit className="h-4 w-4 mr-1" /> Edit
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import config from '../../config';

export default function AvailableWorkshops() {
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/workshops`);
      setWorkshops(response.data);
    } catch (error) {
      console.error('Error fetching workshops:', error);
      toast.error('Failed to fetch workshops. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-primary"
      >
        Available Workshops
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={workshop._id} workshop={workshop} index={index} />
        ))}
      </div>
    </div>
  );
}

function WorkshopCard({ workshop, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-primary">{workshop.title}</CardTitle>
          <CardDescription className="text-gray-600">
            {new Date(workshop.date).toLocaleDateString()} | {workshop.time}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {workshop.banner && (
            <img 
              src={workshop.banner.startsWith('http') ? workshop.banner : `${config.API_BASE_URL1}${workshop.banner}`}
              alt={workshop.title} 
              className="w-full h-48 object-cover mb-4 rounded-md shadow-md" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/placeholder-image.jpg';
              }}
            />
          )}
          <p className="mb-2"><span className="font-semibold">Location:</span> {workshop.location}</p>
          <p className="mb-2"><span className="font-semibold">Age Group:</span> {workshop.ageGroup}</p>
          <p className="mb-2"><span className="font-semibold">Language:</span> {workshop.language}</p>
        </CardContent>
        <div className="p-4 mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{workshop.title}</DialogTitle>
                <DialogDescription>
                  Complete details of the workshop
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <img 
                  src={workshop.banner.startsWith('http') ? workshop.banner : `${config.API_BASE_URL1}${workshop.banner}`}
                  alt={workshop.title} 
                  className="w-full h-48 object-cover rounded-md shadow-md" 
                />
                <p><span className="font-semibold">Date:</span> {new Date(workshop.date).toLocaleDateString()}</p>
                <p><span className="font-semibold">Time:</span> {workshop.time}</p>
                <p><span className="font-semibold">Location:</span> {workshop.location}</p>
                <p><span className="font-semibold">Age Group:</span> {workshop.ageGroup}</p>
                <p><span className="font-semibold">Language:</span> {workshop.language}</p>
                <p><span className="font-semibold">Venue:</span> {workshop.venueAddress}</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </motion.div>
  );
}