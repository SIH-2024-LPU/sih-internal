// import React, { useState } from 'react'
// import axios from 'axios'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import { Toaster } from "@/components/ui/toaster"
// import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
// import config from '../../config'

// export default function SignupForm() {
//   const { toast } = Toaster()
//   const [isLoading, setIsLoading] = useState(false)
//   const [form, setForm] = useState({
//     username: '',
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     newsletter: false,
//     subscription: false,
//   })

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsLoading(true)
//     try {
//       // Validate form
//       if (form.password !== form.confirmPassword) {
//         throw new Error("Passwords don't match")
//       }

//       // Simulating API call
//       const { data } = await axios.post(`${config.API_BASE_URL}/auth/signup`, form)
//       localStorage.setItem('token', data.token)
//       localStorage.setItem('role', data.role)
//       toast({
//         title: "Account created!",
//         description: "We've created your account for you.",
//         icon: <CheckCircle className="h-4 w-4" />,
//       })
//       // Redirect or show a success message
//     } catch (error) {
//       toast({
//         title: "Uh oh! Something went wrong.",
//         description: error.response?.data?.message || error.message || "There was a problem with your request.",
//         variant: "destructive",
//         icon: <AlertCircle className="h-4 w-4" />,
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader className="space-y-1">
//         <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
//         <CardDescription>Enter your information to create an account</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="username">Username</Label>
//             <Input id="username" name="username" placeholder="cooluser123" value={form.username} onChange={handleChange} required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="password">Password</Label>
//             <Input id="password" name="password" type="password" value={form.password} onChange={handleChange} required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="confirmPassword">Confirm Password</Label>
//             <Input id="confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} required />
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox id="newsletter" name="newsletter" checked={form.newsletter} onCheckedChange={(checked) => setForm((prev) => ({ ...prev, newsletter: checked }))} />
//             <Label htmlFor="newsletter" className="text-sm">Subscribe to newsletter</Label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Checkbox id="subscription" name="subscription" checked={form.subscription} onCheckedChange={(checked) => setForm((prev) => ({ ...prev, subscription: checked }))} />
//             <Label htmlFor="subscription" className="text-sm">Subscribe to premium plan</Label>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter>
//         <Button className="w-full" type="submit" onClick={handleSubmit} disabled={isLoading}>
//           {isLoading ? (
//             <>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               Signing Up...
//             </>
//           ) : (
//             'Sign Up'
//           )}
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }


import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from 'react-toastify'; // Ensure this is correctly imported
import config from '../../config';

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
    subscription: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Validate form
      if (form.password !== form.confirmPassword) {
        throw new Error("Passwords don't match");
      }

      // Simulating API call
      const { data } = await axios.post(`${config.API_BASE_URL}/auth/signup`, form);
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      toast.success("Account created! We've created your account for you.");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "There was a problem with your request.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign up</CardTitle>
        <CardDescription>Enter your information to create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" placeholder="cooluser123" value={form.username} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" value={form.password} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" name="newsletter" checked={form.newsletter} onChange={(e) => handleChange(e)} />
            <Label htmlFor="newsletter" className="text-sm">Subscribe to newsletter</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="subscription" name="subscription" checked={form.subscription} onChange={(e) => handleChange(e)} />
            <Label htmlFor="subscription" className="text-sm">Subscribe to premium plan</Label>
          </div>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? (
              'Signing Up...'
            ) : (
              'Sign Up'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
