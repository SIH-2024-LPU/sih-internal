// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function CoolNavbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeItem, setActiveItem] = useState('home')
//   const [scrollPosition, setScrollPosition] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.pageYOffset
//       setScrollPosition(position)
//     }

//     window.addEventListener('scroll', handleScroll, { passive: true })

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Predict', path: '/recommendation' },
//     { name: 'Mentorship', path: '/mentorship' },
//   ]

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0" onClick={() => setActiveItem('home')}>
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <svg className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </motion.div>
//             </Link>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navItems.map((item) => (
//                   <motion.div
//                     key={item.name}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                   >
//                     <Link
//                       to={item.path}
//                       className={`px-3 py-2 rounded-md text-sm font-medium ${
//                         activeItem === item.name.toLowerCase()
//                           ? 'text-indigo-600'
//                           : 'text-gray-700 hover:text-indigo-600'
//                       }`}
//                       onClick={() => setActiveItem(item.name.toLowerCase())}
//                     >
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Link
//                   to="/login"
//                   className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Login
//                 </Link>
//               </motion.div>
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <Link
//                   to="/signup"
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
//                 >
//                   Sign up
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="md:hidden"
//             initial={{ opacity: 0, y: -100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`block px-3 py-2 rounded-md text-base font-medium ${
//                     activeItem === item.name.toLowerCase()
//                       ? 'text-indigo-600'
//                       : 'text-gray-700 hover:text-indigo-600'
//                   }`}
//                   onClick={() => {
//                     setActiveItem(item.name.toLowerCase())
//                     setIsOpen(false)
//                   }}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link
//                 to="/login"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Sign up
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   )
// }


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


export default function CoolNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Predict', path: '/recommendation' },
    { name: 'Mentorship', path: '/mentorship' },
    {name: "Mentor" ,path:'/bookappointment'},
  ];

  return (
    <nav
      className={`relative w-full z-50 bg-transparent transition-all duration-300 ${scrollPosition > 50 ? 'bg-transparent shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0"
              onClick={() => setActiveItem('home')}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="h-8 w-8 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </motion.div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        activeItem === item.name.toLowerCase()
                          ? 'text-indigo-600'
                          : 'text-gray-700 hover:text-indigo-600'
                      }`}
                      onClick={() => setActiveItem(item.name.toLowerCase())}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeItem === item.name.toLowerCase()
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => {
                    setActiveItem(item.name.toLowerCase());
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
