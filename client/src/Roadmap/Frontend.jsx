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



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roadmapData = {
  title: "Frontend Development",
  description: "Core skills and technologies for frontend development",
  children: [
    {
      title: "HTML & CSS",
      description: "Building blocks of web pages",
      resources: [
        { name: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "MDN Web Docs - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      ],
      children: [
        {
          title: "Responsive Design",
          description: "Creating layouts that adapt to different screen sizes",
          resources: [
            { name: "CSS Grid", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
            { name: "Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
          ],
        },
        {
          title: "CSS Preprocessors",
          description: "Tools to enhance CSS capabilities",
          resources: [
            { name: "Sass Basics", url: "https://sass-lang.com/guide" },
            { name: "Less CSS", url: "http://lesscss.org/" },
          ],
        },
      ],
    },
    {
      title: "JavaScript",
      description: "Programming language for web interactivity",
      resources: [
        { name: "JavaScript.info", url: "https://javascript.info/" },
        { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
      ],
      children: [
        {
          title: "ES6+ Features",
          description: "Modern JavaScript syntax and capabilities",
          resources: [
            { name: "ES6 Features", url: "https://github.com/lukehoban/es6features" },
          ],
        },
        {
          title: "Async JavaScript",
          description: "Handling asynchronous operations",
          resources: [
            { name: "Promises", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
            { name: "Async/Await", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await" },
          ],
        },
      ],
    },
    {
      title: "Frontend Frameworks",
      description: "Libraries for building complex user interfaces",
      resources: [
        { name: "React", url: "https://reactjs.org/" },
        { name: "Vue.js", url: "https://vuejs.org/" },
        { name: "Angular", url: "https://angular.io/" },
      ],
    },
    {
      title: "Version Control",
      description: "Managing and tracking code changes",
      resources: [
        { name: "Git Handbook", url: "https://guides.github.com/introduction/git-handbook/" },
        { name: "GitHub Guides", url: "https://guides.github.com/" },
      ],
    },
  ],
};

const Node = ({ data, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center m-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm md:text-base font-semibold shadow-md transition-all duration-300 ease-in-out"
      >
        {data.title}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-4 mt-4 shadow-lg max-w-xs md:max-w-sm lg:max-w-md"
          >
            <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
            <p className="text-gray-600 mb-4">{data.description}</p>
            {data.resources && (
              <div>
                <h4 className="font-semibold mb-2">Resources:</h4>
                <ul className="list-disc pl-5">
                  {data.resources.map((resource, index) => (
                    <li key={index} className="mb-1">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {data.children && (
        <div className="flex flex-wrap justify-center mt-8 relative">
          {data.children.map((child, index) => (
            <React.Fragment key={index}>
              <Node data={child} level={level + 1} />
              {index < data.children.length - 1 && <div className="w-8" />}
            </React.Fragment>
          ))}
          <svg className="absolute top-0 left-0 w-full h-8 overflow-visible">
            {data.children.map((_, index) => {
              const x = `calc(${(index - (data.children.length - 1) / 2) * 100}% + 50%)`;
              return (
                <motion.path
                  key={index}
                  d={`M50%,0 Q${x},20 ${x},32`}
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              );
            })}
          </svg>
        </div>
      )}
    </div>
  );
};

const FrontendRoadmap = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Frontend Developer Roadmap
      </h1>
      <Node data={roadmapData} />
    </div>
  );
};

export default FrontendRoadmap;