
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Rocket, BookOpen, Briefcase, PenTool, Trophy, Users } from 'lucide-react'

// import { SizeExample } from '../ChatBot';

// export default function HeroSection() {
//   const navigate = useNavigate();

//   const careerOptions = [
//     { title: "Internship", desc: "Gain Experience", link: "/internship", icon: Rocket, bgColor: "bg-green-100" },
//     { title: "Learn", desc: "Expand Knowledge", link: "/learn", icon: BookOpen, bgColor: "bg-pink-100" },
//     { title: "Jobs", desc: "Explore Careers", link: "/jobs", icon: Briefcase, bgColor: "bg-blue-100" },
//     { title: "Practice", desc: "Refine Skills", link: "/practice", icon: PenTool, bgColor: "bg-purple-100" },
//     { title: "Compete", desc: "Battle", link: "/compete", icon: Trophy, bgColor: "bg-yellow-100" },
//     { title: "Mentorship", desc: "Get Guidance", link: "/mentorship", icon: Users, bgColor: "bg-orange-100" },
//   ];

//   const handleCardClick = (link) => {
//     navigate(link);
//   };

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
//             Unlock Your Career Potential
//           </h1>
//           <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
//             Explore global opportunities to learn, showcase skills, and get hired.
//           </p>
//           <div className="flex justify-center mb-6">
//             <div className="flex -space-x-4 mr-4">
//               <Avatar className="w-10 h-10 border-2 border-white">
//                 <AvatarImage src="/hacker.png" alt="Avatar" />
//                 <AvatarFallback>AC</AvatarFallback>
//               </Avatar>
//               <Avatar className="w-10 h-10 border-2 border-white">
//                 <AvatarImage src="/boy.png" alt="Avatar" />
//                 <AvatarFallback>JD</AvatarFallback>
//               </Avatar>
//               <Avatar className="w-10 h-10 border-2 border-white">
//                 <AvatarImage src="/human.png" alt="Avatar" />
//                 <AvatarFallback>TS</AvatarFallback>
//               </Avatar>
//             </div>
//             <span className="text-gray-600 self-center">Join 1000+ professionals</span>
//           </div>
//           <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//           {careerOptions.map((option, index) => (
//             <Card 
//               key={index} 
//               className={`${option.bgColor} cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg`}
//               onClick={() => handleCardClick(option.link)}
//             >
//               <CardHeader className="p-4">
//                 <CardTitle className="flex items-center text-lg text-gray-800">
//                   <option.icon className="h-6 w-6 mr-2" />
//                   <span>{option.title}</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-4">
//                 <p className="text-sm text-gray-600">{option.desc}</p>
//               </CardContent>
              
//             </Card>
            
//           ))}

//             {/* <SizeExample/> */}
//         </div>
//       </div>
//       <div className="fixed bottom-6 right-6">
//         <Button className="flex items-center bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg">
//           {/* <img src="sih-internal\client\public\BOT.png" alt="Heart Icon" className="w-6 h-6 mr-2" /> */}
//           <span className="font-semibold">ChatBot</span>
//         </Button>
//       </div>
//     </div>
//   )
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rocket, BookOpen, Briefcase, PenTool, Trophy, Users } from 'lucide-react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

export default function HeroSection() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure(); // Added for Drawer control

  const careerOptions = [
    { title: "Internship", desc: "Gain Experience", link: "/internship", icon: Rocket, bgColor: "bg-green-100" },
    { title: "Learn", desc: "Expand Knowledge", link: "/learn", icon: BookOpen, bgColor: "bg-pink-100" },
    { title: "Jobs", desc: "Explore Careers", link: "/jobs", icon: Briefcase, bgColor: "bg-blue-100" },
    { title: "Practice", desc: "Refine Skills", link: "/practice", icon: PenTool, bgColor: "bg-purple-100" },
    { title: "Compete", desc: "Battle", link: "/compete", icon: Trophy, bgColor: "bg-yellow-100" },
    { title: "Mentorship", desc: "Get Guidance", link: "/mentorship", icon: Users, bgColor: "bg-orange-100" },
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Unlock Your Career Potential
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore global opportunities to learn, showcase skills, and get hired.
          </p>
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-4 mr-4">
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/hacker.png" alt="Avatar" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/boy.png" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/human.png" alt="Avatar" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-gray-600 self-center">Join 1000+ professionals</span>
          </div>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {careerOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`${option.bgColor} cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              onClick={() => handleCardClick(option.link)}
            >
              <CardHeader className="p-4">
                <CardTitle className="flex items-center text-lg text-gray-800">
                  <option.icon className="h-6 w-6 mr-2" />
                  <span>{option.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">{option.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating Cute Button that triggers the Drawer */}
      <div className="fixed bottom-6 right-6">
        <Button onClick={onOpen} className="flex items-center bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg">
          {/* <Image
            borderRadius="full"
            boxSize="20px"
            src="/heart-icon.png"
            alt="ChatBot Icon"
            className="mr-2"
          /> */}
          <span className="font-semibold">ChatBot</span>
        </Button>
      </div>

      {/* Drawer that opens when the Cute Button is clicked */}
      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Welcome to the ChatBot</DrawerHeader>

          <DrawerBody>
            {/* Placeholder for ChatBot content */}
            <p>Chat Bot Avatar and Interface here</p>
            <Image
            borderRadius="full"
            boxSize="20px"
            src='sih-internal\client\public\BOT.png'
            alt="ChatBot Icon"
            className="mr-2"
          />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
