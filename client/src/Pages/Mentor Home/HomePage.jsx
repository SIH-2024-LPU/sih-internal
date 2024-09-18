import React from 'react';
import { Search, Star, Bell, Users, Plus } from 'lucide-react';

const NavigationItem = ({ href, children, isActive }) => (
  <a href={href} className={`text-sm font-medium ${isActive ? 'text-blue-600' : ''}`}>
    {children}
  </a>
);

// const Navigation = () => (
//   <nav className="flex items-center justify-between px-4 py-2 border-b">
//     <div className="flex items-center space-x-4">
//       <img src="/placeholder.svg" alt="Unstop Logo" width={40} height={40} className="rounded-full" />
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Search by Skill, Industry or Company"
//           className="pl-8 pr-4 py-2 border rounded-full w-64 text-sm"
//         />
//         <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
//       </div>
//     </div>
//     <div className="flex items-center space-x-4">
//       {['Learn', 'Practice', 'Mentorship', 'Compete', 'Internships', 'Jobs'].map((item) => (
//         <NavigationItem key={item} href="#" isActive={item === 'Mentorship'}>
//           {item}
//         </NavigationItem>
//       ))}
//     </div>
//     <div className="flex items-center space-x-4">
//       <button className="p-2 rounded-full bg-gray-100"><Bell className="h-5 w-5" /></button>
//       <img src="/placeholder.svg" alt="User Avatar" width={32} height={32} className="rounded-full" />
//       <button className="px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-full flex items-center">
//         <Plus className="h-4 w-4 mr-1" /> Host
//       </button>
//       <button className="px-3 py-1.5 text-sm font-medium border border-yellow-400 text-yellow-600 rounded-full">
//         For Business
//       </button>
//     </div>
//   </nav>
// );

const PromoSection = () => (
  <div className="bg-blue-100 text-blue-800 p-4 rounded-lg inline-flex items-center mb-8">
    <img src="/placeholder.svg" alt="Promo Icon" width={40} height={40} className="mr-4" />
    <div>
      <p className="font-medium">Get 15% off on all mentorship sessions!</p>
      <a href="#" className="text-blue-600 font-medium">Go Pro Now →</a>
    </div>
  </div>
);

const ActionButtons = () => (
  <div className="flex space-x-4">
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center">
      <Search className="h-5 w-5 mr-2" /> Find a Mentor
    </button>
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center">
      <Star className="h-5 w-5 mr-2" /> Mentor Match
    </button>
    <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg">
      Be a mentor
    </button>
  </div>
);

const MentorBubble = ({ top, left, right, rating }) => (
  <div className={`absolute ${top} ${left} ${right}`}>
    <img src="/placeholder.svg" alt="Mentor" width={80} height={80} className="rounded-full" />
    <div className="absolute bottom-0 right-0 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center">
      <Star className="h-4 w-4 text-yellow-400 mr-1" /> {rating}
    </div>
  </div>
);

const SessionsBooked = () => (
  <div className="bg-yellow-100 rounded-lg p-4 flex items-center mb-4">
    <Users className="h-8 w-8 text-yellow-600 mr-4" />
    <div>
      <p className="font-bold text-2xl">10,000+</p>
      <p className="text-sm">Sessions booked on Unstop</p>
    </div>
  </div>
);

const MentorSession = ({ name, topic, action }) => (
  <div className="flex items-center space-x-4">
    <img src="/placeholder.svg" alt={`Mentor ${name}`} width={40} height={40} className="rounded-full" />
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-600">{topic}</p>
    </div>
    <button className="ml-auto text-sm text-blue-600 font-medium">{action}</button>
  </div>
);

const CompanyLogo = ({ name }) => (
  <div className="w-24 h-12 bg-gray-200 flex items-center justify-center rounded">
    <span className="text-xs font-medium">{name}</span>
  </div>
);

const MentorshipPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}

      <main className="max-w-6xl mx-auto mt-12 px-4">
        <div className="flex justify-between">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-4">Unlock Guidance</h1>
            <p className="text-xl text-gray-600 mb-8">
              Book a session with unstoppable mentors across domains & work together to build your career!
            </p>
            <PromoSection />
            <ActionButtons />
          </div>
          <div className="relative">
            <MentorBubble top="-top-10" left="-left-10" rating="5.0" />
            <MentorBubble top="top-20" right="-right-10" rating="4.9" />
            <SessionsBooked />
            <div className="bg-blue-50 rounded-lg p-4 space-y-4">
              <MentorSession name="Prateek Sharma" topic="Resume verification" action="Join Now" />
              <MentorSession name="Jyoti Aggarwal" topic="Brand growth" action="Reschedule" />
              <MentorSession name="Renu Pandy" topic="CAT preparation guide" action="Reschedule" />
            </div>
          </div>
        </div>
      </main>

      <section className="mt-16 border-t pt-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Mentors from Top Companies:</h2>
          <div className="flex justify-between items-center">
            {['Asian Paints', 'Airtel', 'Deloitte', 'Tata', 'Uber', 'Goldman Sachs', 'BCG'].map((company) => (
              <CompanyLogo key={company} name={company} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorshipPage;
