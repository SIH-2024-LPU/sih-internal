// import React, { useState, useCallback } from 'react';

// const roadmapData = {
//   title: "Frontend Development",
//   description: "Core skills and technologies for frontend development",
//   children: [
//     {
//       title: "HTML & CSS",
//       description: "Building blocks of web pages",
//       resources: [
//         { name: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
//         { name: "MDN Web Docs - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
//       ],
//       children: [
//         {
//           title: "Responsive Design",
//           description: "Creating layouts that adapt to different screen sizes",
//           resources: [
//             { name: "CSS Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
//             { name: "Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
//           ],
//         },
//         {
//           title: "CSS Preprocessors",
//           description: "Tools to enhance CSS capabilities",
//           resources: [
//             { name: "Sass Basics", url: "https://sass-lang.com/guide" },
//             { name: "Less CSS", url: "http://lesscss.org/" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "JavaScript",
//       description: "Programming language for web interactivity",
//       resources: [
//         { name: "JavaScript.info", url: "https://javascript.info/" },
//         { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
//       ],
//       children: [
//         {
//           title: "ES6+ Features",
//           description: "Modern JavaScript syntax and capabilities",
//           resources: [
//             { name: "ES6 Features", url: "https://github.com/lukehoban/es6features" },
//           ],
//         },
//         {
//           title: "Async JavaScript",
//           description: "Handling asynchronous operations",
//           resources: [
//             { name: "Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
//             { name: "Async/Await", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "Frontend Frameworks",
//       description: "Libraries for building complex user interfaces",
//       resources: [
//         { name: "React", url: "https://reactjs.org/" },
//         { name: "Vue.js", url: "https://vuejs.org/" },
//         { name: "Angular", url: "https://angular.io/" },
//       ],
//     },
//     {
//       title: "Version Control",
//       description: "Managing and tracking code changes",
//       resources: [
//         { name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
//         { name: "GitHub Guides", url: "https://guides.github.com/" },
//       ],
//     },
//   ],
// };

// const Node = ({ data, level = 0 }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       margin: '10px 0',
//     }}>
//       <button
//         onClick={toggleOpen}
//         style={{
//           backgroundColor: '#3498db',
//           color: 'white',
//           border: 'none',
//           borderRadius: '20px',
//           padding: '10px 20px',
//           fontSize: '16px',
//           cursor: 'pointer',
//           transition: 'all 0.3s ease',
//           boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
//         }}
//       >
//         {data.title}
//       </button>
//       {isOpen && (
//         <div style={{
//           backgroundColor: 'white',
//           borderRadius: '10px',
//           padding: '20px',
//           marginTop: '10px',
//           boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
//           maxWidth: '300px',
//         }}>
//           <h3 style={{ marginTop: 0 }}>{data.title}</h3>
//           <p>{data.description}</p>
//           {data.resources && (
//             <div>
//               <h4>Resources:</h4>
//               <ul style={{ paddingLeft: '20px' }}>
//                 {data.resources.map((resource, index) => (
//                   <li key={index}>
//                     <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//       {data.children && (
//         <div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           marginTop: '20px',
//           position: 'relative',
//         }}>
//           {data.children.map((child, index) => (
//             <React.Fragment key={index}>
//               <Node data={child} level={level + 1} />
//               {index < data.children.length - 1 && <div style={{ width: '40px' }} />}
//             </React.Fragment>
//           ))}
//           <svg style={{
//             position: 'absolute',
//             top: '-20px',
//             left: 0,
//             width: '100%',
//             height: '20px',
//             overflow: 'visible',
//           }}>
//             {data.children.map((_, index) => {
//               const x = (index - (data.children.length - 1) / 2) * 340;
//               return (
//                 <path
//                   key={index}
//                   d={`M0,0 Q${x},10 ${x},20`}
//                   fill="none"
//                   stroke="#3498db"
//                   strokeWidth="2"
//                 />
//               );
//             })}
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// };

// const FrontendRoadmap = () => {
//   return (
//     <div style={{
//       fontFamily: 'Arial, sans-serif',
//       backgroundColor: '#f0f0f0',
//       minHeight: '100vh',
//       padding: '40px',
//       boxSizing: 'border-box',
//     }}>
//       <h1 style={{
//         textAlign: 'center',
//         color: '#2c3e50',
//         marginBottom: '40px',
//       }}>
//         Frontend Developer Roadmap
//       </h1>
//       <Node data={roadmapData} />
//     </div>
//   );
// };

// export default FrontendRoadmap;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const roadmapData = {
//   title: "Frontend Development",
//   description: "Core skills and technologies for frontend development",
//   children: [
//     {
//       title: "HTML & CSS",
//       description: "Building blocks of web pages",
//       resources: [
//         { name: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
//         { name: "MDN Web Docs - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
//       ],
//       children: [
//         {
//           title: "Responsive Design",
//           description: "Creating layouts that adapt to different screen sizes",
//           resources: [
//             { name: "CSS Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
//             { name: "Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
//           ],
//         },
//         {
//           title: "CSS Preprocessors",
//           description: "Tools to enhance CSS capabilities",
//           resources: [
//             { name: "Sass Basics", url: "https://sass-lang.com/guide" },
//             { name: "Less CSS", url: "http://lesscss.org/" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "JavaScript",
//       description: "Programming language for web interactivity",
//       resources: [
//         { name: "JavaScript.info", url: "https://javascript.info/" },
//         { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
//       ],
//       children: [
//         {
//           title: "ES6+ Features",
//           description: "Modern JavaScript syntax and capabilities",
//           resources: [
//             { name: "ES6 Features", url: "https://github.com/lukehoban/es6features" },
//           ],
//         },
//         {
//           title: "Async JavaScript",
//           description: "Handling asynchronous operations",
//           resources: [
//             { name: "Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
//             { name: "Async/Await", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "Frontend Frameworks",
//       description: "Libraries for building complex user interfaces",
//       resources: [
//         { name: "React", url: "https://reactjs.org/" },
//         { name: "Vue.js", url: "https://vuejs.org/" },
//         { name: "Angular", url: "https://angular.io/" },
//       ],
//     },
//     {
//       title: "Version Control",
//       description: "Managing and tracking code changes",
//       resources: [
//         { name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
//         { name: "GitHub Guides", url: "https://guides.github.com/" },
//       ],
//     },
//   ],
// };

// const Node = ({ data, level = 0 }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col items-center m-4">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm md:text-base font-semibold shadow-md transition-all duration-300 ease-in-out"
//       >
//         {data.title}
//       </motion.button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-lg p-4 mt-4 shadow-lg max-w-xs md:max-w-sm lg:max-w-md"
//           >
//             <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
//             <p className="text-gray-600 mb-4">{data.description}</p>
//             {data.resources && (
//               <div>
//                 <h4 className="font-semibold mb-2">Resources:</h4>
//                 <ul className="list-disc pl-5">
//                   {data.resources.map((resource, index) => (
//                     <li key={index} className="mb-1">
//                       <a
//                         href={resource.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-500 hover:underline"
//                       >
//                         {resource.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {data.children && (
//         <div className="flex flex-wrap justify-center mt-8 relative">
//           {data.children.map((child, index) => (
//             <React.Fragment key={index}>
//               <Node data={child} level={level + 1} />
//               {index < data.children.length - 1 && <div className="w-8" />}
//             </React.Fragment>
//           ))}
//           <svg className="absolute top-0 left-0 w-full h-8 overflow-visible">
//             {data.children.map((_, index) => {
//               const x = `calc(${(index - (data.children.length - 1) / 2) * 100}% + 50%)`;
//               return (
//                 <motion.path
//                   key={index}
//                   d={`M50%,0 Q${x},20 ${x},32`}
//                   fill="none"
//                   stroke="#3B82F6"
//                   strokeWidth="2"
//                   initial={{ pathLength: 0 }}
//                   animate={{ pathLength: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 />
//               );
//             })}
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// };

// const FrontendRoadmap = () => {
//   return (
//     <div className="font-sans bg-gray-100 min-h-screen p-8">
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//         Frontend Developer Roadmap
//       </h1>
//       <Node data={roadmapData} />
//     </div>
//   );
// };

// export default FrontendRoadmap;



// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const roadmapData = {
//   title: "Frontend Development",
//   description: "Core skills and technologies for frontend development",
//   children: [
//     {
//       title: "HTML & CSS",
//       description: "Building blocks of web pages",
//       resources: [
//         { name: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
//         { name: "MDN Web Docs - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
//       ],
//       children: [
//         {
//           title: "Responsive Design",
//           description: "Creating layouts that adapt to different screen sizes",
//           resources: [
//             { name: "CSS Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
//             { name: "Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
//           ],
//         },
//         {
//           title: "CSS Preprocessors",
//           description: "Tools to enhance CSS capabilities",
//           resources: [
//             { name: "Sass Basics", url: "https://sass-lang.com/guide" },
//             { name: "Less CSS", url: "http://lesscss.org/" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "JavaScript",
//       description: "Programming language for web interactivity",
//       resources: [
//         { name: "JavaScript.info", url: "https://javascript.info/" },
//         { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
//       ],
//       children: [
//         {
//           title: "ES6+ Features",
//           description: "Modern JavaScript syntax and capabilities",
//           resources: [
//             { name: "ES6 Features", url: "https://github.com/lukehoban/es6features" },
//           ],
//         },
//         {
//           title: "Async JavaScript",
//           description: "Handling asynchronous operations",
//           resources: [
//             { name: "Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
//             { name: "Async/Await", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await" },
//           ],
//         },
//       ],
//     },
//     {
//       title: "Frontend Frameworks",
//       description: "Libraries for building complex user interfaces",
//       resources: [
//         { name: "React", url: "https://reactjs.org/" },
//         { name: "Vue.js", url: "https://vuejs.org/" },
//         { name: "Angular", url: "https://angular.io/" },
//       ],
//     },
//     {
//       title: "Version Control",
//       description: "Managing and tracking code changes",
//       resources: [
//         { name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
//         { name: "GitHub Guides", url: "https://guides.github.com/" },
//       ],
//     },
//   ],
// };

// const Node = ({ data, level = 0 }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex flex-col items-center m-4">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm md:text-base font-semibold shadow-md transition-all duration-300 ease-in-out"
//       >
//         {data.title}
//       </motion.button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-lg p-4 mt-4 shadow-lg max-w-xs md:max-w-sm lg:max-w-md"
//           >
//             <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
//             <p className="text-gray-600 mb-4">{data.description}</p>
//             {data.resources && (
//               <div>
//                 <h4 className="font-semibold mb-2">Resources:</h4>
//                 <ul className="list-disc pl-5">
//                   {data.resources.map((resource, index) => (
//                     <li key={index} className="mb-1">
//                       <a
//                         href={resource.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-500 hover:underline"
//                       >
//                         {resource.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {data.children && (
//         <div className="flex flex-wrap justify-center mt-8 relative">
//           {data.children.map((child, index) => (
//             <React.Fragment key={index}>
//               <Node data={child} level={level + 1} />
//               {index < data.children.length - 1 && <div className="w-8" />}
//             </React.Fragment>
//           ))}
//           <svg className="absolute top-0 left-0 w-full h-8 overflow-visible">
//             {data.children.map((_, index) => {
//               const x = `calc(${(index - (data.children.length - 1) / 2) * 100}% + 50%)`;
//               return (
//                 <motion.path
//                   key={index}
//                   d={`M50%,0 Q${x},20 ${x},32`}
//                   fill="none"
//                   stroke="#3B82F6"
//                   strokeWidth="2"
//                   initial={{ pathLength: 0 }}
//                   animate={{ pathLength: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 />
//               );
//             })}
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// };

// const FrontendRoadmap = () => {
//   return (
//     <div className="font-sans bg-gray-100 min-h-screen p-8">
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//         Frontend Developer Roadmap
//       </h1>
//       <Node data={roadmapData} />
//     </div>
//   );
// };

// export default FrontendRoadmap;


// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';

// const roadmapData = [
//   {
//     id: 'mathematics',
//     label: 'Mathematics',
//     children: [
//       {
//         id: 'linear-algebra',
//         label: 'Linear Algebra, Calculus, Probability',
//         resources: [
//           { type: 'Course', label: 'Mathematics for Machine Learning', url: '#' }
//         ]
//       },
//       {
//         id: 'differential-calculus',
//         label: 'Differential Calculus',
//         resources: [
//           { type: 'Course', label: 'Calculus: Single Variable Part 1', url: '#' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'statistics',
//     label: 'Statistics',
//     children: [
//       {
//         id: 'descriptive-statistics',
//         label: 'Descriptive Statistics',
//         resources: [
//           { type: 'Course', label: 'Introduction to Statistics', url: '#' }
//         ]
//       },
//       {
//         id: 'hypothesis-testing',
//         label: 'Hypothesis Testing',
//         resources: [
//           { type: 'Course', label: 'Statistical Inference', url: '#' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'programming',
//     label: 'Programming',
//     children: [
//       {
//         id: 'python',
//         label: 'Python Programming Language',
//         resources: [
//           { type: 'Course', label: 'Learn Python, Kaggle', url: '#' },
//           { type: 'Course', label: 'Google Python Class', url: '#' }
//         ]
//       },
//       {
//         id: 'data-structures',
//         label: 'Data Structures and Algorithms (Python)',
//         resources: [
//           { type: 'Tutorial', label: 'Algorithmic Complexity', url: '#' },
//           { type: 'Challenge', label: 'Study Plan - LeetCode', url: '#' }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'machine-learning',
//     label: 'Machine Learning',
//     children: [
//       {
//         id: 'ml-basics',
//         label: 'Classic ML (Sup, Unsup.), Advanced ML (Ensemble, NNet)',
//         resources: [
//           { type: 'Course', label: 'Machine Learning Specialization', url: '#' }
//         ]
//       },
//       {
//         id: 'deep-learning',
//         label: 'Deep Learning',
//         resources: [
//           { type: 'Course', label: 'Deep Learning Specialization', url: '#' },
//           { type: 'Book', label: 'Deep Learning Book', url: '#' }
//         ]
//       }
//     ]
//   }
// ];

// const ResourceLink = ({ resource }) => (
//   <a
//     href={resource.url}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200"
//   >
//     {resource.type}
//     <ExternalLink className="ml-1" size={12} />
//   </a>
// );

// const RoadmapNode = ({ node, level = 0 }) => {
//   const [isOpen, setIsOpen] = useState(level === 0);

//   return (
//     <div className="mb-2">
//       <div
//         className={`flex items-center cursor-pointer p-2 rounded ${
//           level === 0 ? 'bg-yellow-300' : 'hover:bg-gray-100'
//         }`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {node.children && (
//           <span className="mr-2">
//             {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//           </span>
//         )}
//         <span className="font-medium">{node.label}</span>
//       </div>
//       {isOpen && node.children && (
//         <div className="ml-4 mt-2 border-l-2 border-gray-200 pl-4">
//           {node.children.map((child) => (
//             <RoadmapNode key={child.id} node={child} level={level + 1} />
//           ))}
//         </div>
//       )}
//       {isOpen && node.resources && (
//         <div className="ml-6 mt-2 space-y-1">
//           {node.resources.map((resource, index) => (
//             <ResourceLink key={index} resource={resource} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const AIDataScienceRoadmap = () => {
//   return (
//     <div className="bg-white min-h-screen p-8">
//       <h1 className="text-3xl font-bold text-center mb-8">AI and Data Scientist Roadmap</h1>
//       <div className="max-w-4xl mx-auto bg-white shadow overflow-hidden sm:rounded-md">
//         <div className="px-4 py-5 sm:p-6">
//           {roadmapData.map((node) => (
//             <RoadmapNode key={node.id} node={node} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIDataScienceRoadmap;


import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, BookOpen, Code, Terminal, Briefcase, Clock, ExternalLink } from 'lucide-react';

const roadmapData = [
  {
    id: 'high-school',
    label: 'High School (10th-12th)',
    icon: BookOpen,
    duration: '3 years',
    children: [
      {
        id: 'math',
        label: 'Focus on Mathematics',
        description: 'Build a strong foundation in algebra, geometry, and calculus.',
        resources: [
          { name: 'Khan Academy Math', url: 'https://www.khanacademy.org/math' },
          { name: 'MIT OpenCourseWare - High School Math', url: 'https://ocw.mit.edu/high-school/mathematics/' }
        ]
      },
      {
        id: 'cs-intro',
        label: 'Introduction to Computer Science',
        description: 'Learn basic programming concepts and computational thinking.',
        resources: [
          { name: 'Code.org', url: 'https://code.org/' },
          { name: 'CS50 Introduction to Computer Science', url: 'https://www.edx.org/course/introduction-computer-science-harvardx-cs50x' }
        ]
      },
      {
        id: 'coding-basics',
        label: 'Learn Coding Basics',
        description: 'Start with Python or JavaScript to understand programming fundamentals.',
        resources: [
          { name: 'Codecademy - Learn Python', url: 'https://www.codecademy.com/learn/learn-python-3' },
          { name: 'freeCodeCamp - JavaScript Algorithms and Data Structures', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/' }
        ]
      },
      {
        id: 'ap-courses',
        label: 'Advanced Placement Courses',
        description: 'Take AP Computer Science A or AP Computer Science Principles if available.',
        resources: [
          { name: 'College Board - AP Computer Science A', url: 'https://apstudents.collegeboard.org/courses/ap-computer-science-a' },
          { name: 'College Board - AP Computer Science Principles', url: 'https://apstudents.collegeboard.org/courses/ap-computer-science-principles' }
        ]
      }
    ]
  },
  {
    id: 'undergraduate',
    label: 'Undergraduate Studies',
    icon: Code,
    duration: '4 years',
    children: [
      {
        id: 'cs-degree',
        label: 'Computer Science Degree',
        description: 'Enroll in a reputable CS program. Focus on core CS subjects and electives.',
        resources: [
          { name: 'Top Computer Science Programs - US News', url: 'https://www.usnews.com/best-graduate-schools/top-science-schools/computer-science-rankings' }
        ]
      },
      {
        id: 'data-structures',
        label: 'Data Structures and Algorithms',
        description: 'Master fundamental CS concepts crucial for problem-solving and interviews.',
        resources: [
          { name: 'Coursera - Data Structures and Algorithms Specialization', url: 'https://www.coursera.org/specializations/data-structures-algorithms' },
          { name: 'LeetCode', url: 'https://leetcode.com/' }
        ]
      },
      {
        id: 'web-dev',
        label: 'Web Development',
        description: 'Learn full-stack web development, including front-end and back-end technologies.',
        resources: [
          { name: 'The Odin Project', url: 'https://www.theodinproject.com/' },
          { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/' }
        ]
      },
      {
        id: 'databases',
        label: 'Databases',
        description: 'Understand database design, SQL, and NoSQL technologies.',
        resources: [
          { name: 'Stanford Database Course', url: 'https://online.stanford.edu/courses/soe-ydatabases-databases' },
          { name: 'MongoDB University', url: 'https://university.mongodb.com/' }
        ]
      },
      {
        id: 'internships',
        label: 'Summer Internships',
        description: 'Gain practical experience through internships at tech companies.',
        resources: [
          { name: 'GitHub - Summer 2024 Internships', url: 'https://github.com/pittcsc/Summer2024-Internships' },
          { name: 'Handshake', url: 'https://joinhandshake.com/' }
        ]
      }
    ]
  },
  {
    id: 'skills-development',
    label: 'Skills Development',
    icon: Terminal,
    duration: 'Ongoing',
    children: [
      {
        id: 'languages',
        label: 'Master Programming Languages',
        description: 'Become proficient in languages like Python, Java, JavaScript, and C++.',
        resources: [
          { name: 'Codecademy', url: 'https://www.codecademy.com/' },
          { name: 'Exercism', url: 'https://exercism.org/' }
        ]
      },
      {
        id: 'frameworks',
        label: 'Learn Popular Frameworks',
        description: 'Explore frameworks like React, Angular, Vue.js, Django, or Spring.',
        resources: [
          { name: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
          { name: 'Vue.js Guide', url: 'https://vuejs.org/v2/guide/' }
        ]
      },
      {
        id: 'version-control',
        label: 'Version Control (Git)',
        description: 'Master Git for source code management and collaboration.',
        resources: [
          { name: 'Git - Official Documentation', url: 'https://git-scm.com/doc' },
          { name: 'GitHub Learning Lab', url: 'https://lab.github.com/' }
        ]
      },
      {
        id: 'agile',
        label: 'Agile Methodologies',
        description: 'Understand Agile software development practices.',
        resources: [
          { name: 'Agile Alliance', url: 'https://www.agilealliance.org/agile101/' },
          { name: 'Scrum.org', url: 'https://www.scrum.org/resources/what-is-scrum' }
        ]
      },
      {
        id: 'ci-cd',
        label: 'CI/CD',
        description: 'Learn Continuous Integration and Continuous Deployment practices.',
        resources: [
          { name: 'Travis CI Documentation', url: 'https://docs.travis-ci.com/' },
          { name: 'Jenkins User Documentation', url: 'https://www.jenkins.io/doc/' }
        ]
      }
    ]
  },
  {
    id: 'career',
    label: 'Professional Career',
    icon: Briefcase,
    duration: '5+ years',
    children: [
      {
        id: 'entry-level',
        label: 'Entry-level Software Engineer',
        description: 'Start your career, focus on learning from senior developers and improving your skills.',
        duration: '0-2 years'
      },
      {
        id: 'mid-level',
        label: 'Mid-level Software Engineer',
        description: 'Take on more responsibilities, lead small projects, and mentor junior developers.',
        duration: '2-5 years'
      },
      {
        id: 'senior',
        label: 'Senior Software Engineer',
        description: 'Lead major projects, make architectural decisions, and guide team members.',
        duration: '5+ years'
      },
      {
        id: 'specialist',
        label: 'Specialized Roles',
        description: 'Specialize in areas like DevOps, AI/ML, or become a technical lead or architect.',
        duration: 'Varies'
      }
    ]
  },
];

const ResourceLink = ({ resource }) => (
  <a
    href={resource.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 mr-2 mb-2"
  >
    {resource.name}
    <ExternalLink className="ml-1" size={12} />
  </a>
);

const RoadmapNode = ({ node, index, totalNodes }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const Icon = node.icon;

  return (
    <div className={`mb-8 transform transition-all duration-500 ease-out ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="flex items-center cursor-pointer p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <Icon className="mr-4 text-blue-500" size={24} />
        <span className="font-bold text-lg">{node.label}</span>
        <div className="ml-auto flex items-center">
          <Clock className="mr-2 text-gray-500" size={16} />
          <span className="text-sm text-gray-500 mr-4">{node.duration}</span>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>
      {isOpen && node.children && (
        <div className="mt-4 ml-8 pl-4 border-l-2 border-blue-200">
          {node.children.map((child, childIndex) => (
            <div key={child.id} className={`mb-6 transform transition-all duration-300 ease-out delay-${childIndex * 100} ${animated ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-gray-50 rounded-lg p-4 shadow">
                <h3 className="font-semibold text-lg mb-2">{child.label}</h3>
                {child.description && <p className="text-gray-600 mb-2">{child.description}</p>}
                {child.duration && (
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock size={14} className="mr-1" />
                    <span>{child.duration}</span>
                  </div>
                )}
                {child.resources && (
                  <div className="mt-2">
                    <h4 className="font-medium text-sm mb-1">Resources:</h4>
                    <div className="flex flex-wrap">
                      {child.resources.map((resource, i) => (
                        <ResourceLink key={i} resource={resource} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {index < totalNodes - 1 && (
        <div className="w-px h-8 bg-blue-200 mx-auto mt-4"></div>
      )}
    </div>
  );
};

const DetailedSoftwareEngineerRoadmap = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="border-gray-200 border-r border-b"></div>
        ))}
      </div>
      
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Detailed Software Engineer Roadmap</h1>
        <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg">
          {roadmapData.map((node, index) => (
            <RoadmapNode key={node.id} node={node} index={index} totalNodes={roadmapData.length} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedSoftwareEngineerRoadmap;