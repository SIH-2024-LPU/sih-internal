// import { Truck, Umbrella, Award } from 'lucide-react';

// export default function WhyChooseUs() {
//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h2 className="text-4xl font-bold text-center mb-12">Why choose us?</h2>
//       <div className="relative">
//         <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
//           <svg className="w-full h-24" viewBox="0 0 1000 100" preserveAspectRatio="none">
//             <path
//               d="M0,50 Q250,0 500,50 T1000,50"
//               fill="none"
//               stroke="#E5E7EB"
//               strokeWidth="2"
//               strokeDasharray="8,8"
//             />
//           </svg>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
//           <FeatureCard
//             icon={<Truck className="w-12 h-12 text-blue-500" />}
//             title="AI Powered Career Roadmaps"
//             description="Personalized roadmaps tailored to your goals. Customized quizzes to identify strengths and weaknesses."
//           />
//           <FeatureCard
//             icon={<Umbrella className="w-12 h-12 text-white" />}
//             title="Mentorship"
//             description="AI mentor for solving real-time doubts and queries, with human mentors for further guidance."
//             highlighted={true}
//           />
//           <FeatureCard
//             icon={<Award className="w-12 h-12 text-blue-500" />}
//             title="High Quality Resources"
//             description="A comprehensive data-driven approach to career planning."
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description, highlighted = false }) {
//   return (
//     <div
//       className={`p-6 rounded-lg ${
//         highlighted ? 'bg-teal-400 text-white' : 'bg-white'
//       } shadow-lg flex flex-col items-center text-center`}
//     >
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className={highlighted ? 'text-teal-100' : 'text-gray-600'}>{description}</p>
//     </div>
//   );
// }


import { Brain, Users, GraduationCap } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Why choose us?</h2>
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
          <svg className="w-full h-24" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="M0,50 Q250,0 500,50 T1000,50"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="8,8"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-blue-500" />}
            title="AI Powered Career Roadmaps"
            description="Personalized roadmaps tailored to your goals. Customized quizzes to identify strengths and weaknesses."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-white" />}
            title="Mentorship"
            description="AI mentor for solving real-time doubts and queries, with human mentors for further guidance."
            highlighted={true}
          />
          <FeatureCard
            icon={<GraduationCap className="w-12 h-12 text-blue-500" />}
            title="High Quality Resources"
            description="A comprehensive data-driven approach to career planning."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, highlighted = false }) {
  return (
    <div
      className={`p-6 rounded-lg ${
        highlighted ? 'bg-teal-400 text-white' : 'bg-white'
      } shadow-lg flex flex-col items-center text-center`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={highlighted ? 'text-teal-100' : 'text-gray-600'}>{description}</p>
    </div>
  );
}