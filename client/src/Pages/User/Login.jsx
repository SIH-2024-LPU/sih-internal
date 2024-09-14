

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Bold, EyeIcon, EyeOffIcon, Loader2 } from 'lucide-react'
import config from '../../config'
import { toast } from 'react-hot-toast'

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showCredentials, setShowCredentials] = useState(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const { data } = await axios.post(`${config.API_BASE_URL}/auth/login`, form)
      localStorage.setItem('token', data.token)
      localStorage.setItem('role', data.role)
      setIsAuthenticated(true)
      setRole(data.role)
      toast.success("Login successful! Welcome back to your account.")

      // Refresh the page and navigate to home
      window.location.href = '/'
    } catch (error) {
      toast.error("Login failed. Please check your credentials and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    setIsAuthenticated(false)
    setRole('')
    window.location.href = '/login'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-gray-800">Login</CardTitle>
          <CardDescription className="text-gray-600">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700">Username</Label>
              <Input
                id="username"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-gray-500" />
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
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" 
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
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white" 
            type="button" 
            onClick={() => setShowCredentials(!showCredentials)}
          >
            {showCredentials ? 'Hide Credentials' : 'Show Credentials'}
          </Button>
          {showCredentials && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-sm text-gray-800"
            >
              <div>
                <strong>This is for testing purpose only </strong>
                </div>
              <div>
                <strong>User:</strong> x<br />
                <strong>Password:</strong> x
              </div>
              <div>
                <strong>Mentor:</strong> xyzz<br />
                <strong>Password:</strong> xyzz
              </div>
              <div>
                <strong>Admin:</strong> xyz<br />
                <strong>Password:</strong> xyz
              </div>
             
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
