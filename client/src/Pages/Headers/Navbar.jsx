

// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useAuth } from '../../AuthContext'
// import { motion } from 'framer-motion'
// import { Menu, X, Zap } from 'lucide-react'

// export default function Navbar() {
//   const { logout } = useAuth()
//   const token = localStorage.getItem('token')
//   const role = localStorage.getItem('role')
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Predict', path: '/recommendation' },
//     { name: 'Mentorship', path: '/mentorship' },
//     ...(role === 'Admin' ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
//   ]

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               <Zap className="h-8 w-8 text-purple-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">Spark</span>
//             </Link>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             {navItems.map((item) => (
//               <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link
//                   to={item.path}
//                   className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-150 ease-in-out"
//                 >
//                   {item.name}
//                 </Link>
//               </motion.div>
//             ))}
//             {role === 'Admin' && (
//               <span className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
//                 Admin
//               </span>
//             )}
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             {!token ? (
//               <>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link
//                     to="/login"
//                     className="px-4 py-2 rounded-md text-sm font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition duration-150 ease-in-out"
//                   >
//                     Login
//                   </Link>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link
//                     to="/signup"
//                     className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition duration-150 ease-in-out"
//                   >
//                     Signup
//                   </Link>
//                 </motion.div>
//               </>
//             ) : (
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={logout}
//                 className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition duration-150 ease-in-out"
//               >
//                 Logout
//               </motion.button>
//             )}
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <motion.div
//         className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
//         initial="closed"
//         animate={isOpen ? "open" : "closed"}
//         variants={{
//           open: { opacity: 1, height: "auto" },
//           closed: { opacity: 0, height: 0 }
//         }}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition duration-150 ease-in-out"
//             >
//               {item.name}
//             </Link>
//           ))}
//           {!token ? (
//             <>
//               <Link
//                 to="/login"
//                 className="block px-3 py-2 rounded-md text-base font-medium text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition duration-150 ease-in-out"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="block px-3 py-2 rounded-md text-base font-medium bg-purple-600 text-white hover:bg-purple-700 transition duration-150 ease-in-out"
//               >
//                 Signup
//               </Link>
//             </>
//           ) : (
//             <button
//               onClick={logout}
//               className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition duration-150 ease-in-out"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </motion.div>
//     </nav>
//   )
// }


// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useAuth } from '../../AuthContext'
// import { motion } from 'framer-motion'
// import { Menu, X, Zap, Home, Brain, Users, LayoutDashboard, LogIn, UserPlus, LogOut } from 'lucide-react'

// export default function Navbar() {
//   const { logout } = useAuth()
//   const token = localStorage.getItem('token')
//   const role = localStorage.getItem('role')
//   const [isOpen, setIsOpen] = useState(false)

//   const navItems = [
//     { name: 'Home', path: '/', icon: Home },
//     { name: 'Predict', path: '/recommendation', icon: Brain },
//     { name: 'Mentorship', path: '/mentorship', icon: Users },
//     {name : 'Program' , path: '/application',icon: Users},
//     ...(role === 'Admin' ? [{ name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard }] : []),
//   ]

//   return (
//     <nav className="bg-gradient-to-r from-blue-50 to-indigo-100 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               <Zap className="h-8 w-8 text-indigo-600" />
//               <span className="ml-2 text-xl font-bold text-gray-800">Spark</span>
//             </Link>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             {navItems.map((item) => (
//               <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link
//                   to={item.path}
//                   className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-150 ease-in-out"
//                 >
//                   <item.icon className="h-5 w-5 mr-1" />
//                   {item.name}
//                 </Link>
//               </motion.div>
//             ))}
//             {role === 'Admin' && (
//               <span className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
//                 Admin
//               </span>
//             )}
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             {!token ? (
//               <>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link
//                     to="/login"
//                     className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition duration-150 ease-in-out"
//                   >
//                     <LogIn className="h-5 w-5 mr-1" />
//                     Login
//                   </Link>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link
//                     to="/signup"
//                     className="ml-4 flex items-center px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition duration-150 ease-in-out"
//                   >
//                     <UserPlus className="h-5 w-5 mr-1" />
//                     Signup
//                   </Link>
//                 </motion.div>
//               </>
//             ) : (
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={logout}
//                 className="ml-4 flex items-center px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition duration-150 ease-in-out"
//               >
//                 <LogOut className="h-5 w-5 mr-1" />
//                 Logout
//               </motion.button>
//             )}
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <motion.div
//         className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
//         initial="closed"
//         animate={isOpen ? "open" : "closed"}
//         variants={{
//           open: { opacity: 1, height: "auto" },
//           closed: { opacity: 0, height: 0 }
//         }}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-150 ease-in-out"
//             >
//               <item.icon className="h-5 w-5 mr-2" />
//               {item.name}
//             </Link>
//           ))}
//           {!token ? (
//             <>
//               <Link
//                 to="/login"
//                 className="flex items-center px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition duration-150 ease-in-out"
//               >
//                 <LogIn className="h-5 w-5 mr-2" />
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="flex items-center px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition duration-150 ease-in-out"
//               >
//                 <UserPlus className="h-5 w-5 mr-2" />
//                 Signup
//               </Link>
//             </>
//           ) : (
//             <button
//               onClick={logout}
//               className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition duration-150 ease-in-out"
//             >
//               <LogOut className="h-5 w-5 mr-2" />
//               Logout
//             </button>
//           )}
//         </div>
//       </motion.div>
//     </nav>
//   )
// }


import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../AuthContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, Home, Brain, Users, LayoutDashboard, LogIn, UserPlus, LogOut, ChevronDown, Settings, FileText, Video, BookOpen } from 'lucide-react'

export default function Navbar() {
  const { logout } = useAuth()
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Predict', path: '/recommendation', icon: Brain },
    { name: 'Mentorship', path: '/mentorship', icon: Users },
    { name: 'Program', path: '/application', icon: Users },
  ]

  const dropdownItems = {
    User: [
      { name: 'Profile', path: '/profile', icon: Settings },
      { name: 'My Applications', path: '/my-applications', icon: FileText },
    ],
    Mentor: [
      { name: 'Profile', path: '/profile', icon: Settings },
      { name: 'My Sessions', path: '/my-sessions', icon: Video },
      { name: 'Resources', path: '/resources', icon: BookOpen },
    ],
    Admin: [
      { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { name: 'Manage Users', path: '/manage-users', icon: Users },
      { name: 'Reports', path: '/reports', icon: FileText },
    ],
  }

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-indigo-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Zap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Spark</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.path}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-150 ease-in-out"
                >
                  <item.icon className="h-5 w-5 mr-1" />
                  {item.name}
                </Link>
              </motion.div>
            ))}
            {token && (
              <div className="relative" ref={dropdownRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="ml-4 flex items-center px-4 py-2 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition duration-150 ease-in-out"
                >
                  {role}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </motion.button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                      <div className="py-1">
                        {dropdownItems[role]?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <item.icon className="h-4 w-4 mr-2" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {!token ? (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition duration-150 ease-in-out"
                  >
                    <LogIn className="h-5 w-5 mr-1" />
                    Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/signup"
                    className="ml-4 flex items-center px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    <UserPlus className="h-5 w-5 mr-1" />
                    Signup
                  </Link>
                </motion.div>
              </>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="ml-4 flex items-center px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition duration-150 ease-in-out"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </motion.button>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-150 ease-in-out"
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </Link>
          ))}
          {token && dropdownItems[role]?.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition duration-150 ease-in-out"
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </Link>
          ))}
          {!token ? (
            <>
              <Link
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition duration-150 ease-in-out"
              >
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Link>
              <Link
                to="/signup"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition duration-150 ease-in-out"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition duration-150 ease-in-out"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          )}
        </div>
      </motion.div>
    </nav>
  )
}