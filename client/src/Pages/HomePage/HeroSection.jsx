// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Rocket, BookOpen, Briefcase, PenTool, Trophy, Users } from 'lucide-react'

// export default function Dashboard() {
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
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
//         {/* Left side content */}
//         <div className="lg:w-1/3 max-w-xs">
//           <h1 className="text-2xl lg:text-3xl font-bold mb-2">
//             Unlock Your Career
//           </h1>
//           <p className="text-sm lg:text-base text-gray-600 mb-4">
//             Explore global opportunities to learn, showcase skills, and get hired.
//           </p>
//           <div className="flex -space-x-2 mb-2">
//             <Avatar className="w-6 h-6 border-2 border-white">
//               <AvatarImage src="/api/placeholder/30/30" alt="Avatar" />
//               <AvatarFallback>AC</AvatarFallback>
//             </Avatar>
//             <Avatar className="w-6 h-6 border-2 border-white">
//               <AvatarImage src="/api/placeholder/30/30" alt="Avatar" />
//               <AvatarFallback>JD</AvatarFallback>
//             </Avatar>
//             <Avatar className="w-6 h-6 border-2 border-white">
//               <AvatarImage src="/api/placeholder/30/30" alt="Avatar" />
//               <AvatarFallback>TS</AvatarFallback>
//             </Avatar>
//           </div>
//         </div>

//         {/* Right side grid */}
//         <div className="lg:w-2/3 max-w-md">
//           <div 
//             className="grid grid-cols-2 gap-4"
//             style={{
//               position: 'relative',
//               zIndex: 12,
//               width: '100%',
//               maxWidth: '540px',
//               height: '412px',
//               display: 'grid',
//             }}
//           >
//             {careerOptions.map((option, index) => (
//               <Card 
//                 key={index} 
//                 className={`${option.bgColor} cursor-pointer transition-transform duration-200 hover:scale-105`}
//                 onClick={() => handleCardClick(option.link)}
//               >
//                 <CardHeader className="p-2">
//                   <CardTitle className="flex justify-between items-center text-sm">
//                     <span>{option.title}</span>
//                     <option.icon className="h-4 w-4" />
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-2">
//                   <p className="text-xs">{option.desc}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Rocket, BookOpen, Briefcase, PenTool, Trophy, Users } from 'lucide-react'

export default function HeroSection() {
  const navigate = useNavigate();

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
                <AvatarImage src="/api/placeholder/40/40" alt="Avatar" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/api/placeholder/40/40" alt="Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white">
                <AvatarImage src="/api/placeholder/40/40" alt="Avatar" />
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
    </div>
  )
}