// import React from 'react';
// import { Search, Star, Bell, Users, Plus } from 'lucide-react';

// const NavigationItem = ({ href, children, isActive }) => (
//   <a href={href} className={`text-sm font-medium ${isActive ? 'text-blue-600' : ''}`}>
//     {children}
//   </a>
// );

// // const Navigation = () => (
// //   <nav className="flex items-center justify-between px-4 py-2 border-b">
// //     <div className="flex items-center space-x-4">
// //       <img src="/placeholder.svg" alt="Unstop Logo" width={40} height={40} className="rounded-full" />
// //       <div className="relative">
// //         <input
// //           type="text"
// //           placeholder="Search by Skill, Industry or Company"
// //           className="pl-8 pr-4 py-2 border rounded-full w-64 text-sm"
// //         />
// //         <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
// //       </div>
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       {['Learn', 'Practice', 'Mentorship', 'Compete', 'Internships', 'Jobs'].map((item) => (
// //         <NavigationItem key={item} href="#" isActive={item === 'Mentorship'}>
// //           {item}
// //         </NavigationItem>
// //       ))}
// //     </div>
// //     <div className="flex items-center space-x-4">
// //       <button className="p-2 rounded-full bg-gray-100"><Bell className="h-5 w-5" /></button>
// //       <img src="/placeholder.svg" alt="User Avatar" width={32} height={32} className="rounded-full" />
// //       <button className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-full flex items-center">
// //         <Plus className="h-4 w-4 mr-1" /> Host
// //       </button>
// //       <button className="px-3 py-1.5 text-sm font-medium border border-yellow-400 text-yellow-600 rounded-full">
// //         For Business
// //       </button>
// //     </div>
// //   </nav>
// // );

// const PromoSection = () => (
//   <div className="bg-blue-100 text-blue-800 p-4 rounded-lg inline-flex items-center mb-8">
//     <img src="/placeholder.svg" alt="Promo Icon" width={40} height={40} className="mr-4" />
//     <div>
//       <p className="font-medium">Get 15% off on all mentorship sessions!</p>
//       <a href="#" className="text-blue-600 font-medium">Go Pro Now →</a>
//     </div>
//   </div>
// );

// const ActionButtons = () => (
//   <div className="flex space-x-4">
//     <button className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center">
//       <Search className="h-5 w-5 mr-2" /> Find a Mentor
//     </button>
//     <button className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center">
//       <Star className="h-5 w-5 mr-2" /> Mentor Match
//     </button>
//     <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg">
//       Be a mentor
//     </button>
//   </div>
// );

// const MentorBubble = ({ top, left, right, rating }) => (
//   <div className={`absolute ${top} ${left} ${right}`}>
//     <img src="/placeholder.svg" alt="Mentor" width={80} height={80} className="rounded-full" />
//     <div className="absolute bottom-0 right-0 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center">
//       <Star className="h-4 w-4 text-yellow-400 mr-1" /> {rating}
//     </div>
//   </div>
// );

// const SessionsBooked = () => (
//   <div className="bg-yellow-100 rounded-lg p-4 flex items-center mb-4">
//     <Users className="h-8 w-8 text-yellow-600 mr-4" />
//     <div>
//       <p className="font-bold text-2xl">10,000+</p>
//       <p className="text-sm">Sessions booked on Unstop</p>
//     </div>
//   </div>
// );

// const MentorSession = ({ name, topic, action }) => (
//   <div className="flex items-center space-x-4">
//     <img src="/placeholder.svg" alt={`Mentor ${name}`} width={40} height={40} className="rounded-full" />
//     <div>
//       <p className="font-medium">{name}</p>
//       <p className="text-sm text-gray-600">{topic}</p>
//     </div>
//     <button className="ml-auto text-sm text-blue-600 font-medium">{action}</button>
//   </div>
// );

// const CompanyLogo = ({ name }) => (
//   <div className="w-24 h-12 bg-gray-200 flex items-center justify-center rounded">
//     <span className="text-xs font-medium">{name}</span>
//   </div>
// );

// const MentorshipPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* <Navigation /> */}

//       <main className="max-w-6xl mx-auto mt-12 px-4">
//         <div className="flex justify-between">
//           <div className="max-w-xl">
//             <h1 className="text-5xl font-bold mb-4">Unlock Guidance</h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Book a session with unstoppable mentors across domains & work together to build your career!
//             </p>
//             <PromoSection />
//             <ActionButtons />
//           </div>
//           <div className="relative">
//             <MentorBubble top="-top-10" left="-left-10" rating="5.0" />
//             <MentorBubble top="top-20" right="-right-10" rating="4.9" />
//             <SessionsBooked />
//             <div className="bg-blue-50 rounded-lg p-4 space-y-4">
//               <MentorSession name="Prateek Sharma" topic="Resume verification" action="Join Now" />
//               <MentorSession name="Jyoti Aggarwal" topic="Brand growth" action="Reschedule" />
//               <MentorSession name="Renu Pandy" topic="CAT preparation guide" action="Reschedule" />
//             </div>
//           </div>
//         </div>
//       </main>

//       <section className="mt-16 border-t pt-8">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-xl font-bold mb-4">Mentors from Top Companies:</h2>
//           <div className="flex justify-between items-center">
//             {['Asian Paints', 'Airtel', 'Deloitte', 'Tata', 'Uber', 'Goldman Sachs', 'BCG'].map((company) => (
//               <CompanyLogo key={company} name={company} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MentorshipPage;



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