
// 'use client'

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import axios from 'axios'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import { EyeIcon, EyeOffIcon, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
// import config from '../../config'
// import { toast } from 'react-hot-toast'

// export default function LoginForm() {
//   const [isLoading, setIsLoading] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [form, setForm] = useState({
//     username: '',
//     password: ''
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setForm(prev => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       // Simulating API call
//       await new Promise(resolve => setTimeout(resolve, 2000))
//       const { data } = await axios.post(`${config.API_BASE_URL}/auth/login`, form)
//       localStorage.setItem('token', data.token)
//       localStorage.setItem('role', data.role)
//       toast.success("Login successful! Welcome back to your account.")
//       // Redirect to home page
//       window.location.href = '/'
//     } catch (error) {
//       toast.error("Login failed. Please check your credentials and try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="w-full max-w-md mx-auto">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-bold">Login</CardTitle>
//           <CardDescription>Enter your credentials to access your account</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="username">Username</Label>
//               <Input
//                 id="username"
//                 name="username"
//                 value={form.username}
//                 onChange={handleChange}
//                 placeholder="Enter your username"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   value={form.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                   required
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOffIcon className="h-4 w-4" />
//                   ) : (
//                     <EyeIcon className="h-4 w-4" />
//                   )}
//                   <span className="sr-only">
//                     {showPassword ? "Hide password" : "Show password"}
//                   </span>
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//         <CardFooter className="flex flex-col space-y-4">
//           <Button 
//             className="w-full" 
//             type="submit" 
//             onClick={handleSubmit} 
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Logging in...
//               </>
//             ) : (
//               'Login'
//             )}
//           </Button>
//           <div className="flex justify-between w-full text-sm">
//             <Button variant="link" className="px-0">Forgot password?</Button>
//             <Button variant="link" className="px-0">Create an account</Button>
//           </div>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   )
// }



'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { EyeIcon, EyeOffIcon, Loader2 } from 'lucide-react'
import config from '../../config'
import { toast } from 'react-hot-toast'

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [role, setRole] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userRole = localStorage.getItem('role')
    if (token && userRole) {
      setIsAuthenticated(true)
      setRole(userRole)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setIsLoading(true)
  //   try {
  //     const { data } = await axios.post(`${config.API_BASE_URL}/auth/login`, form)
  //     localStorage.setItem('token', data.token)
  //     localStorage.setItem('role', data.role)
  //     setIsAuthenticated(true)
  //     setRole(data.role)
  //     toast.success("Login successful! Welcome back to your account.")
  //   } catch (error) {
  //     toast.error("Login failed. Please check your credentials and try again.")
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     const { data } = await axios.post(`${config.API_BASE_URL}/auth/login`, form);
  //     localStorage.setItem('token', data.token);
  //     localStorage.setItem('role', data.role);
  //     setIsAuthenticated(true);
  //     setRole(data.role);
  //     toast.success("Login successful! Welcome back to your account.");
  
  //     // Refresh the page after successful login
  //     window.location.reload();
  //   } catch (error) {
  //     toast.error("Login failed. Please check your credentials and try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(`${config.API_BASE_URL}/auth/login`, form);
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      setIsAuthenticated(true);
      setRole(data.role);
      toast.success("Login successful! Welcome back to your account.");
  
      // Refresh the page and navigate to home
      window.location.href = '/';
    } catch (error) {
      toast.error("Login failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    setIsAuthenticated(false)
    setRole('')
    window.location.href = '/login'
  }

  if (isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Welcome {role === 'admin' ? 'Admin' : 'User'}!</CardTitle>
            <CardDescription>You're successfully logged in.</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              className="w-full" 
              type="button" 
              onClick={handleLogout}
            >
              Logout
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            className="w-full" 
            type="submit" 
            onClick={handleSubmit} 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </Button>
          <div className="flex justify-between w-full text-sm">
            <Button variant="link" className="px-0">Forgot password?</Button>
            <Button variant="link" className="px-0">Create an account</Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
