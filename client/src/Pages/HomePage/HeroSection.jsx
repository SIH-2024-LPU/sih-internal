
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Rocket, BookOpen, Briefcase, PenTool, Trophy, Users } from 'lucide-react'

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

//   const handleRedirect = () => {
//     navigate('/roadmap');
//   };
  
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
//           {/* <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
//            */}
//            <Button
//         size="lg"
//         className="bg-indigo-600 hover:bg-indigo-700 text-white"
//         onClick={handleRedirect}
//       >
//         Get Started
//       </Button>
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
//         </div>
//       </div>
//     </div>
//   )
// }


// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { MapPin, Play, X, Star, Book, Calendar, Building2 } from "lucide-react"

// export default function Component() {
//   return (
//     <div className="min-h-screen bg-white">
      
//       <main className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row items-start">
//           <div className="md:w-1/2 pr-8 content-center">
//             <h2 className="text-red-500 font-bold mb-2">Hi I'm ProPilot</h2>
//             <h1 className="text-4xl font-bold mb-4">Your Personal AI Career Assistant</h1>
//             <p className="text-gray-600 mb-6">Tell me your career goal, and I'll help you achieve it - the fastest route, no detours.</p>
//             <Button size="lg" className="mb-4">Get My Roadmap</Button>
//           </div>
//           <div className="md:w-1/2">
//             <div className="relative bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
//               <div className="absolute -top-4 -left-4 bg-blue-100 rounded-full w-32 h-32 z-0" />
//               <div className="absolute top-1/4 right-0 bg-yellow-100 rounded-full w-24 h-24 z-0" />
              
//               <div className="relative z-10">
//                 <div className="bg-white rounded-lg shadow p-3 mb-6 inline-block">
//                   <div className="flex items-center">
//                     <Play className="text-blue-500 w-5 h-5 mr-2" />
//                     <span className="font-semibold">Trained on 15000+</span>
//                   </div>
//                   <div className="text-lg font-bold">Mentorship Sessions</div>
//                 </div>

//                 <div className="flex items-center mb-4">
//                   <div className="bg-orange-400 p-2 rounded-md mr-3">
//                     <Star className="text-white w-5 h-5" />
//                   </div>
//                   <p className="text-gray-700">
//                     Let me guide you to your{" "}
//                     <span className="text-purple-600 font-medium">career destination</span>
//                   </p>
//                 </div>

//                 <div className="space-y-3 mb-6">
//                   <div className="flex items-center bg-gray-100 rounded-md p-2">
//                     <MapPin className="text-gray-400 w-5 h-5 mr-2" />
//                     <Input
//                       placeholder="Select your starting point..."
//                       className="border-0 bg-transparent focus:ring-0"
//                     />
//                   </div>
//                   <div className="flex items-center bg-gray-100 rounded-md p-2">
//                     <MapPin className="text-purple-600 w-5 h-5 mr-2" />
//                     <Input
//                       placeholder="Choose your career destination"
//                       className="border-0 bg-transparent focus:ring-0"
//                     />
//                   </div>
//                 </div>

//                 <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
//                   Start My Career Journey
//                 </Button>
//               </div>

//               <div className="absolute top-2 right-2 bg-red-400 rounded-full p-1">
//                 <X className="text-white w-4 h-4" />
//               </div>

//               <div className="flex justify-end mt-4 space-x-2">
//                 <Book className="text-gray-400 w-4 h-4" />
//                 <Calendar className="text-gray-400 w-4 h-4" />
//                 <Building2 className="text-gray-400 w-4 h-4" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Play, X, Star, Book, Calendar, Building2 } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-white flex items-center  space-x-20 justify-center  space-x-4">
      <main className="container mx-auto px-4   space-x-20 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between max-w-4xl mx-auto">
          <div className="md:w-2/5 mb-8 md:mb-0 text-left">
            <h2 className="text-red-500 font-bold mb-2 text-sm">Hi I'm ProPilot</h2>
            <h1 className="text-3xl font-bold mb-3">Your Personal AI Career Assistant</h1>
            <p className="text-gray-600 mb-4 text-sm">Tell me your career goal, and I'll help you achieve it - the fastest route, no detours.</p>
            <Button size="sm" className="mb-4">Get My Roadmap</Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative bg-white rounded-xl shadow-lg p-4 max-w-sm w-full">
              <div className="absolute -top-3 -left-3 bg-blue-100 rounded-full w-24 h-24 z-0" />
              <div className="absolute top-1/4 right-0 bg-yellow-100 rounded-full w-16 h-16 z-0" />
              
              <div className="relative z-10">
                <div className="bg-white rounded-lg shadow p-2 mb-4 inline-block">
                  <div className="flex items-center">
                    <Play className="text-blue-500 w-4 h-4 mr-1" />
                    <span className="font-semibold text-xs">Trained on 15000+</span>
                  </div>
                  <div className="text-sm font-bold">Mentorship Sessions</div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="bg-orange-400 p-1 rounded-md mr-2">
                    <Star className="text-white w-4 h-4" />
                  </div>
                  <p className="text-gray-700 text-xs">
                    Let me guide you to your{" "}
                    <span className="text-purple-600 font-medium">career destination</span>
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center bg-gray-100 rounded-md p-1">
                    <MapPin className="text-gray-400 w-4 h-4 mr-1" />
                    <Input
                      placeholder="Select your starting point..."
                      className="border-0 bg-transparent focus:ring-0 text-xs"
                    />
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-md p-1">
                    <MapPin className="text-purple-600 w-4 h-4 mr-1" />
                    <Input
                      placeholder="Choose your career destination"
                      className="border-0 bg-transparent focus:ring-0 text-xs"
                    />
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs py-1">
                  Start My Career Journey
                </Button>
              </div>

              <div className="absolute top-1 right-1 bg-red-400 rounded-full p-1">
                <X className="text-white w-3 h-3" />
              </div>

              <div className="flex justify-end mt-2 space-x-1">
                <Book className="text-gray-400 w-3 h-3" />
                <Calendar className="text-gray-400 w-3 h-3" />
                <Building2 className="text-gray-400 w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}