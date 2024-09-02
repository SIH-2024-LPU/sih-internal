// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { BookOpen, Sparkles, Building, GraduationCap, BriefcaseIcon, TrendingUpIcon, HeartIcon, BrainIcon, ClockIcon, MapPinIcon, UsersIcon, ChevronLeft } from 'lucide-react'

// export default function JobDetails() {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const { job } = location.state

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-background rounded-lg shadow-lg space-y-6">
//       <Button onClick={() => navigate(-1)} variant="outline">
//         <ChevronLeft className="mr-2 h-4 w-4" /> Back to Career Suggestions
//       </Button>
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>{job.jobTitle}</CardTitle>
//           <CardDescription>Average Salary: {job.averageSalary}</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <ScrollArea className="h-[600px] w-full rounded-md border p-4">
//             <div className="space-y-4">
//               <div>
//                 <h4 className="font-medium flex items-center"><BookOpen className="mr-2 h-4 w-4" /> Description</h4>
//                 <p className="text-sm">{job.description}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><Sparkles className="mr-2 h-4 w-4" /> Key Skills</h4>
//                 <ul className="text-sm list-disc list-inside">
//                   {job.skills.map((skill, index) => (
//                     <li key={index}>{skill}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><Building className="mr-2 h-4 w-4" /> Top Companies</h4>
//                 <p className="text-sm">{job.companies.join(', ')}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><GraduationCap className="mr-2 h-4 w-4" /> Education</h4>
//                 <p className="text-sm">{Array.isArray(job.education) ? job.education.join(', ') : job.education}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><MapPinIcon className="mr-2 h-4 w-4" /> Work Environment</h4>
//                 <p className="text-sm">{job.workEnvironment}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><TrendingUpIcon className="mr-2 h-4 w-4" /> Job Outlook</h4>
//                 <p className="text-sm">{job.jobOutlook}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><BriefcaseIcon className="mr-2 h-4 w-4" /> Challenges</h4>
//                 <ul className="text-sm list-disc list-inside">
//                   {job.challenges.map((challenge, index) => (
//                     <li key={index}>{challenge}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><HeartIcon className="mr-2 h-4 w-4" /> Rewards</h4>
//                 <ul className="text-sm list-disc list-inside">
//                   {job.rewards.map((reward, index) => (
//                     <li key={index}>{reward}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><GraduationCap className="mr-2 h-4 w-4" /> Top Colleges</h4>
//                 <ul className="text-sm list-disc list-inside">
//                   {job.topColleges.map((college, index) => (
//                     <li key={index}>{college.name} - Fees: {college.fees}, Duration: {college.duration}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </ScrollArea>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }


// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { BookOpen, Sparkles, Building, GraduationCap, BriefcaseIcon, TrendingUpIcon, HeartIcon, BrainIcon, ClockIcon, MapPinIcon, UsersIcon, ChevronLeft } from 'lucide-react'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// export default function JobDetails() {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const { job } = location.state

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-background rounded-lg shadow-lg space-y-6">
//       <Button onClick={() => navigate(-1)} variant="outline">
//         <ChevronLeft className="mr-2 h-4 w-4" /> Back to Career Suggestions
//       </Button>
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>{job.jobTitle}</CardTitle>
//           <CardDescription>Average Salary: {job.averageSalary}</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <ScrollArea className="h-[600px] w-full rounded-md border p-4">
//             <div className="space-y-4">
//               <div>
//                 <h4 className="font-medium flex items-center"><BookOpen className="mr-2 h-4 w-4" /> Description</h4>
//                 <p className="text-sm">{job.description}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><Sparkles className="mr-2 h-4 w-4" /> Key Skills</h4>
//                 <ul className="text-sm list-disc list-inside">
//                   {job.skills.map((skill, index) => (
//                     <li key={index}>{skill}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><Building className="mr-2 h-4 w-4" /> Top Companies</h4>
//                 <p className="text-sm">{job.companies.join(', ')}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><GraduationCap className="mr-2 h-4 w-4" /> Education</h4>
//                 <p className="text-sm">{Array.isArray(job.education) ? job.education.join(', ') : job.education}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><MapPinIcon className="mr-2 h-4 w-4" /> Work Environment</h4>
//                 <p className="text-sm">{job.workEnvironment}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><TrendingUpIcon className="mr-2 h-4 w-4" /> Job Outlook</h4>
//                 <p className="text-sm">{job.jobOutlook}</p>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><BriefcaseIcon className="mr-2 h-4 w-4" /> Challenges</h4>
//                 <ul className="text-sm list-disc list-inside">
//                   {job.challenges.map((challenge, index) => (
//                     <li key={index}>{challenge}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><HeartIcon className="mr-2 h-4 w-4" /> Rewards</h4>
//                 <ul className="text-sm list-disc list-inside">
//                   {job.rewards.map((reward, index) => (
//                     <li key={index}>{reward}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-medium flex items-center"><GraduationCap className="mr-2 h-4 w-4" /> Top Colleges</h4>
//                 <ul className="text-sm list-disc list-inside">
//                   {job.topColleges.map((college, index) => (
//                     <li key={index}>{college.name} - Fees: {college.fees}, Duration: {college.duration}</li>
//                   ))}
//                 </ul>
//               </div>
//               {job.hiringTrends && (
//                 <div>
//                   <h4 className="font-medium flex items-center"><TrendingUpIcon className="mr-2 h-4 w-4" /> Hiring Trends (Last 10 Years)</h4>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart
//                       data={job.hiringTrends}
//                       margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                       }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="year" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line type="monotone" dataKey="hires" stroke="#8884d8" activeDot={{ r: 8 }} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//               {job.salaryTrends && (
//                 <div>
//                   <h4 className="font-medium flex items-center"><TrendingUpIcon className="mr-2 h-4 w-4" /> Salary Trends (Last 10 Years)</h4>
//                   <ResponsiveContainer width="100%" height={300}>
//                     <LineChart
//                       data={job.salaryTrends}
//                       margin={{
//                         top: 5,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                       }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="year" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line type="monotone" dataKey="salary" stroke="#82ca9d" activeDot={{ r: 8 }} />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               )}
//             </div>
//           </ScrollArea>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { BookOpen, Sparkles, Building, DollarSign, School, MapPinIcon, TrendingUpIcon, BriefcaseIcon, HeartIcon, ChevronLeft } from 'lucide-react';
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


// export default function JobDetails() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { job } = location.state;
//   const [activeTab, setActiveTab] = useState('overview');

//   const TabContent = ({ icon: Icon, title, children }) => (
//     <div className="space-y-4">
//       <h3 className="text-2xl font-semibold flex items-center">
//         <Icon className="mr-2 h-6 w-6" /> {title}
//       </h3>
//       {children}
//     </div>
//   );

//   const ListItem = ({ children }) => (
//     <motion.li
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.3 }}
//       className="flex items-center space-x-2 mb-2"
//     >
//       <div className="h-2 w-2 bg-primary rounded-full" />
//       <span>{children}</span>
//     </motion.li>
//   );

//   return (
//     <div className="flex h-screen bg-background">
//       <nav className="w-64 bg-secondary p-6 flex flex-col">
//         <Button onClick={() => navigate(-1)} variant="ghost" className="mb-6">
//           <ChevronLeft className="mr-2 h-4 w-4" /> Back
//         </Button>
//         <h2 className="text-2xl font-bold mb-4">{job.jobTitle}</h2>
//         <p className="text-muted-foreground mb-6">Average Salary: {job.averageSalary}</p>
//         <Tabs value={activeTab} onValueChange={setActiveTab}>
//           <TabsList className="flex flex-col items-start space-y-2">
//             <TabsTrigger value="overview">Overview</TabsTrigger>
//             <TabsTrigger value="salary">Salary</TabsTrigger>
//             <TabsTrigger value="education">Education</TabsTrigger>
//             <TabsTrigger value="details">Details</TabsTrigger>
//           </TabsList>
//         </Tabs>
//       </nav>
//       <main className="flex-1 p-6 overflow-auto">
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <TabsContent value="overview">
//                 <Card>
//                   <CardContent className="p-6">
//                     <TabContent icon={BookOpen} title="Job Description">
//                       <p>{job.description}</p>
//                     </TabContent>
//                     <TabContent icon={Sparkles} title="Key Skills">
//                       <ul className="grid grid-cols-2 gap-2">
//                         {job.skills.map((skill, index) => (
//                           <ListItem key={index}>{skill}</ListItem>
//                         ))}
//                       </ul>
//                     </TabContent>
//                     <TabContent icon={Building} title="Top Companies">
//                       <p>{job.companies.join(', ')}</p>
//                     </TabContent>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//               <TabsContent value="salary">
//                 <Card>
//                   <CardContent className="p-6">
//                     <TabContent icon={DollarSign} title="Salary Trends">
//                       <ResponsiveContainer width="100%" height={400}>
//                         <LineChart data={job.salaryTrends}>
//                           <CartesianGrid strokeDasharray="3 3" />
//                           <XAxis dataKey="year" />
//                           <YAxis />
//                           <Tooltip />
//                           <Legend />
//                           <Line type="monotone" dataKey="salary" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
//                         </LineChart>
//                       </ResponsiveContainer>
//                     </TabContent>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//               <TabsContent value="education">
//                 <Card>
//                   <CardContent className="p-6">
//                     <TabContent icon={School} title="Top Colleges">
//                       <ScrollArea className="h-[400px]">
//                         {job.topColleges.map((college, index) => (
//                           <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.3, delay: index * 0.1 }}
//                             className="mb-4 p-4 bg-secondary rounded-lg"
//                           >
//                             <h4 className="font-semibold">{college.name}</h4>
//                             <p>Fees: {college.fees}</p>
//                             <p>Duration: {college.duration}</p>
//                           </motion.div>
//                         ))}
//                       </ScrollArea>
//                     </TabContent>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//               <TabsContent value="details">
//                 <Card>
//                   <CardContent className="p-6">
//                     <TabContent icon={MapPinIcon} title="Work Environment">
//                       <p>{job.workEnvironment}</p>
//                     </TabContent>
//                     <TabContent icon={TrendingUpIcon} title="Job Outlook">
//                       <p>{job.jobOutlook}</p>
//                     </TabContent>
//                     <TabContent icon={BriefcaseIcon} title="Challenges">
//                       <ul>
//                         {job.challenges.map((challenge, index) => (
//                           <ListItem key={index}>{challenge}</ListItem>
//                         ))}
//                       </ul>
//                     </TabContent>
//                     <TabContent icon={HeartIcon} title="Rewards">
//                       <ul>
//                         {job.rewards.map((reward, index) => (
//                           <ListItem key={index}>{reward}</ListItem>
//                         ))}
//                       </ul>
//                     </TabContent>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             </motion.div>
//           </AnimatePresence>
//         </Tabs>
//       </main>
//     </div>
//   );
// }

// 'use client'

// import React, { useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { BookOpen, Sparkles, Building, DollarSign, School, MapPinIcon, TrendingUpIcon, BriefcaseIcon, HeartIcon, ChevronLeft, BarChart2 } from 'lucide-react'
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, PieChart, Pie, Cell } from 'recharts'

// export default function JobDetails() {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const { job } = location.state
//   const [activeTab, setActiveTab] = useState('overview')

//   const TabContent = ({ icon: Icon, title, children }) => (
//     <div className="space-y-6">
//       <h3 className="text-3xl font-bold flex items-center text-primary">
//         <Icon className="mr-3 h-8 w-8" /> {title}
//       </h3>
//       {children}
//     </div>
//   )

//   const ListItem = ({ children }) => (
//     <motion.li
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.3 }}
//       className="flex items-center space-x-3 mb-3"
//     >
//       <div className="h-2 w-2 bg-primary rounded-full" />
//       <span className="text-lg">{children}</span>
//     </motion.li>
//   )

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <Button onClick={() => navigate(-1)} variant="outline" className="hover:bg-primary/10">
//             <ChevronLeft className="mr-2 h-5 w-5" /> Back to Jobs
//           </Button>
//           <h1 className="text-4xl font-extrabold text-primary">{job.jobTitle}</h1>
//           <div className="text-2xl font-semibold text-secondary-foreground">
//             Average Salary: {job.averageSalary}
//           </div>
//         </div>

//         <Card className="w-full bg-card/50 backdrop-blur-sm shadow-2xl">
//           <CardContent className="p-0">
//             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//               <TabsList className="w-full justify-start p-2 bg-muted/50">
//                 <TabsTrigger value="overview" className="text-lg px-6 py-3">Overview</TabsTrigger>
//                 <TabsTrigger value="salary" className="text-lg px-6 py-3">Salary</TabsTrigger>
//                 <TabsTrigger value="education" className="text-lg px-6 py-3">Education</TabsTrigger>
//                 <TabsTrigger value="details" className="text-lg px-6 py-3">Details</TabsTrigger>
//               </TabsList>

//               <div className="p-8">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={activeTab}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="space-y-10"
//                   >
//                     <TabsContent value="overview">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <TabContent icon={BookOpen} title="Job Description">
//                           <p className="text-xl leading-relaxed">{job.description}</p>
//                         </TabContent>
//                         <TabContent icon={Sparkles} title="Key Skills">
//                           <ul className="grid grid-cols-2 gap-4">
//                             {job.skills.map((skill, index) => (
//                               <ListItem key={index}>{skill}</ListItem>
//                             ))}
//                           </ul>
//                         </TabContent>
//                       </div>
//                       <TabContent icon={Building} title="Top Companies">
//                         <div className="grid grid-cols-2 gap-8">
//                           <div>
//                             <p className="text-xl mb-4">{job.companies.join(', ')}</p>
//                           </div>
//                           <div className="h-64">
//                             <ResponsiveContainer width="100%" height="100%">
//                               <PieChart>
//                                 <Pie
//                                   data={job.companies.map((company, index) => ({ name: company, value: 100 / job.companies.length }))}
//                                   cx="50%"
//                                   cy="50%"
//                                   outerRadius={80}
//                                   fill="#8884d8"
//                                   dataKey="value"
//                                   label={({ name }) => name}
//                                 >
//                                   {job.companies.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                   ))}
//                                 </Pie>
//                                 <Tooltip />
//                               </PieChart>
//                             </ResponsiveContainer>
//                           </div>
//                         </div>
//                       </TabContent>
//                     </TabsContent>
//                     <TabsContent value="salary">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <TabContent icon={DollarSign} title="Salary Trends">
//                           <ResponsiveContainer width="100%" height={400}>
//                             <AreaChart data={job.salaryTrends}>
//                               <defs>
//                                 <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
//                                   <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
//                                   <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
//                                 </linearGradient>
//                               </defs>
//                               <CartesianGrid strokeDasharray="3 3" />
//                               <XAxis dataKey="year" />
//                               <YAxis />
//                               <Tooltip />
//                               <Legend />
//                               <Area type="monotone" dataKey="salary" stroke="#10b981" fillOpacity={1} fill="url(#colorSalary)" />
//                             </AreaChart>
//                           </ResponsiveContainer>
//                         </TabContent>
//                         <TabContent icon={BarChart2} title="Hiring Trends">
//                           <ResponsiveContainer width="100%" height={400}>
//                             <AreaChart data={job.hiringTrends}>
//                               <defs>
//                                 <linearGradient id="colorHires" x1="0" y1="0" x2="0" y2="1">
//                                   <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
//                                   <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
//                                 </linearGradient>
//                               </defs>
//                               <CartesianGrid strokeDasharray="3 3" />
//                               <XAxis dataKey="year" />
//                               <YAxis />
//                               <Tooltip />
//                               <Legend />
//                               <Area type="monotone" dataKey="hires" stroke="#3b82f6" fillOpacity={1} fill="url(#colorHires)" />
//                             </AreaChart>
//                           </ResponsiveContainer>
//                         </TabContent>
//                       </div>
//                     </TabsContent>
//                     <TabsContent value="education">
//                       <TabContent icon={School} title="Top Colleges">
//                         <ScrollArea className="h-[600px] pr-4">
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {job.topColleges.map((college, index) => (
//                               <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                                 className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                               >
//                                 <h4 className="text-xl font-bold mb-2">{college.name}</h4>
//                                 <p className="text-lg">Fees: <span className="font-semibold">{college.fees}</span></p>
//                                 <p className="text-lg">Duration: <span className="font-semibold">{college.duration}</span></p>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </ScrollArea>
//                       </TabContent>
//                     </TabsContent>
//                     <TabsContent value="details">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <TabContent icon={MapPinIcon} title="Work Environment">
//                           <p className="text-xl leading-relaxed">{job.workEnvironment}</p>
//                         </TabContent>
//                         <TabContent icon={TrendingUpIcon} title="Job Outlook">
//                           <p className="text-xl leading-relaxed">{job.jobOutlook}</p>
//                         </TabContent>
//                         <TabContent icon={BriefcaseIcon} title="Challenges">
//                           <ul className="space-y-2">
//                             {job.challenges.map((challenge, index) => (
//                               <ListItem key={index}>{challenge}</ListItem>
//                             ))}
//                           </ul>
//                         </TabContent>
//                         <TabContent icon={HeartIcon} title="Rewards">
//                           <ul className="space-y-2">
//                             {job.rewards.map((reward, index) => (
//                               <ListItem key={index}>{reward}</ListItem>
//                             ))}
//                           </ul>
//                         </TabContent>
//                       </div>
//                     </TabsContent>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </Tabs>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// import React, { useState, useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { BookOpen, Sparkles, Building, DollarSign, School, MapPinIcon, TrendingUpIcon, BriefcaseIcon, HeartIcon, ChevronLeft, BarChart2 } from 'lucide-react'
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, PieChart, Pie, Cell } from 'recharts'

// export default function JobDetails() {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const [job, setJob] = useState(null)
//   const [activeTab, setActiveTab] = useState('overview')
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     if (location.state && location.state.job) {
//       setJob(location.state.job)
//     } else {
//       setError("Job details not found. Please try selecting a job again.")
//     }
//   }, [location])

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-8">
//         <div className="max-w-7xl mx-auto">
//           <Card className="w-full bg-card/50 backdrop-blur-sm shadow-2xl">
//             <CardContent className="p-8">
//               <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
//               <p>{error}</p>
//               <Button onClick={() => navigate(-1)} className="mt-4">
//                 Go Back
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     )
//   }

//   if (!job) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-8">
//         <div className="max-w-7xl mx-auto">
//           <Card className="w-full bg-card/50 backdrop-blur-sm shadow-2xl">
//             <CardContent className="p-8">
//               <h1 className="text-2xl font-bold mb-4">Loading...</h1>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     )
//   }
//   const TabContent = ({ icon: Icon, title, children }) => (
//     <div className="space-y-6">
//       <h3 className="text-3xl font-bold flex items-center text-primary">
//         <Icon className="mr-3 h-8 w-8" /> {title}
//       </h3>
//       {children}
//     </div>
//   )

//   const ListItem = ({ children }) => (
//     <motion.li
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.3 }}
//       className="flex items-center space-x-3 mb-3"
//     >
//       <div className="h-2 w-2 bg-primary rounded-full" />
//       <span className="text-lg">{children}</span>
//     </motion.li>
//   )

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <Button onClick={() => navigate(-1)} variant="outline" className="hover:bg-primary/10">
//             <ChevronLeft className="mr-2 h-5 w-5" /> Back to Jobs
//           </Button>
//           <h1 className="text-4xl font-extrabold text-primary">{job.jobTitle}</h1>
//           <div className="text-2xl font-semibold text-secondary-foreground">
//             Average Salary: {job.averageSalary}
//           </div>
//         </div>

//         <Card className="w-full bg-card/50 backdrop-blur-sm shadow-2xl">
//           <CardContent className="p-0">
//             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//               <TabsList className="w-full justify-start p-2 bg-muted/50">
//                 <TabsTrigger value="overview" className="text-lg px-6 py-3">Overview</TabsTrigger>
//                 <TabsTrigger value="education" className="text-lg px-6 py-3">Education</TabsTrigger>
//                 <TabsTrigger value="trends" className="text-lg px-6 py-3">Trends</TabsTrigger>
//                 <TabsTrigger value="details" className="text-lg px-6 py-3">Details</TabsTrigger>
//               </TabsList>

//               <div className="p-8">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={activeTab}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="space-y-10"
//                   >
//                     <TabsContent value="overview">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <TabContent icon={BookOpen} title="Job Description">
//                           <p className="text-xl leading-relaxed">{job.description}</p>
//                         </TabContent>
//                         <TabContent icon={Sparkles} title="Key Skills">
//                           <ul className="grid grid-cols-2 gap-4">
//                             {job.skills.map((skill, index) => (
//                               <ListItem key={index}>{skill}</ListItem>
//                             ))}
//                           </ul>
//                         </TabContent>
//                         <TabContent icon={Building} title="Top Companies">
//                           <ul className="grid grid-cols-2 gap-4">
//                             {job.companies.map((company, index) => (
//                               <ListItem key={index}>{company}</ListItem>
//                             ))}
//                           </ul>
//                         </TabContent>
//                         <TabContent icon={School} title="Required Education">
//                           <ul className="grid grid-cols-1 gap-4">
//                             {job.education.map((edu, index) => (
//                               <ListItem key={index}>{edu}</ListItem>
//                             ))}
//                           </ul>
//                         </TabContent>
//                       </div>
//                     </TabsContent>
//                     <TabsContent value="education">
//                       <TabContent icon={School} title="Top Colleges">
//                         <ScrollArea className="h-[600px] pr-4">
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {job.topColleges.map((college, index) => (
//                               <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                                 className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//                               >
//                                 <h4 className="text-xl font-bold mb-2">{college.name}</h4>
//                                 <p className="text-lg">Fees: <span className="font-semibold">{college.fees}</span></p>
//                                 <p className="text-lg">Duration: <span className="font-semibold">{college.duration}</span></p>
//                               </motion.div>
//                             ))}
//                           </div>
//                         </ScrollArea>
//                       </TabContent>
//                     </TabsContent>
//                     <TabsContent value="trends">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <TabContent icon={DollarSign} title="Salary Trends">
//                           <ResponsiveContainer width="100%" height={400}>
//                             <AreaChart data={job.salaryTrends}>
//                               <defs>
//                                 <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
//                                   <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
//                                   <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
//                                 </linearGradient>
//                               </defs>
//                               <CartesianGrid strokeDasharray="3 3" />
//                               <XAxis dataKey="year" />
//                               <YAxis />
//                               <Tooltip />
//                               <Legend />
//                               <Area type="monotone" dataKey="salary" stroke="#10b981" fillOpacity={1} fill="url(#colorSalary)" />
//                             </AreaChart>
//                           </ResponsiveContainer>
//                         </TabContent>
//                         <TabContent icon={BarChart2} title="Hiring Trends">
//                           <ResponsiveContainer width="100%" height={400}>
//                             <AreaChart data={job.hiringTrends}>
//                               <defs>
//                                 <linearGradient id="colorHires" x1="0" y1="0" x2="0" y2="1">
//                                   <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
//                                   <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
//                                 </linearGradient>
//                               </defs>
//                               <CartesianGrid strokeDasharray="3 3" />
//                               <XAxis dataKey="year" />
//                               <YAxis />
//                               <Tooltip />
//                               <Legend />
//                               <Area type="monotone" dataKey="hires" stroke="#3b82f6" fillOpacity={1} fill="url(#colorHires)" />
//                             </AreaChart>
//                           </ResponsiveContainer>
//                         </TabContent>
//                       </div>
//                     </TabsContent>
//                     <TabsContent value="details">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <TabContent icon={MapPinIcon} title="Work Environment">
//                           <p className="text-xl leading-relaxed">{job.workEnvironment}</p>
//                         </TabContent>
//                         <TabContent icon={TrendingUpIcon} title="Job Outlook">
//                           <p className="text-xl leading-relaxed">{job.jobOutlook}</p>
//                         </TabContent>
//                         <TabContent icon={BriefcaseIcon} title="Challenges">
//                           <ul className="space-y-2">
//                             {job.challenges.map((challenge, index) => (
//                               <ListItem key={index}>{challenge}</ListItem>
//                             ))}
//                           </ul>
//                         </TabContent>
//                         <TabContent icon={HeartIcon} title="Rewards">
//                           <ul className="space-y-2">
//                             {job.rewards.map((reward, index) => (
//                               <ListItem key={index}>{reward}</ListItem>
//                             ))}
//                           </ul>
//                         </TabContent>
//                       </div>
//                     </TabsContent>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </Tabs>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Sparkles, Building, DollarSign, School, MapPinIcon, TrendingUpIcon, BriefcaseIcon, HeartIcon, ChevronLeft, BarChart2 } from 'lucide-react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, PieChart, Pie, Cell } from 'recharts'

export default function JobDetails() {
  const location = useLocation()
  const navigate = useNavigate()
  const [job, setJob] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (location.state && location.state.job) {
      setJob(location.state.job)
    } else {
      setError("Job details not found. Please try selecting a job again.")
    }
  }, [location])

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-8">
        <div className="max-w-7xl mx-auto">
          <Card className="w-full bg-card/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
              <p>{error}</p>
              <Button onClick={() => navigate(-1)} className="mt-4">
                Go Back
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-8">
        <div className="max-w-7xl mx-auto">
          <Card className="w-full bg-card/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <h1 className="text-2xl font-bold mb-4">Loading...</h1>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const TabContent = ({ icon: Icon, title, children }) => (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold flex items-center text-primary">
        <Icon className="mr-3 h-8 w-8" /> {title}
      </h3>
      {children}
    </div>
  )

  const ListItem = ({ children }) => (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center space-x-3 mb-3"
    >
      <div className="h-2 w-2 bg-primary rounded-full" />
      <span className="text-lg">{children}</span>
    </motion.li>
  )

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Button onClick={() => navigate(-1)} variant="outline" className="hover:bg-primary/10">
            <ChevronLeft className="mr-2 h-5 w-5" /> Back to Jobs
          </Button>
          <h1 className="text-4xl font-extrabold text-primary">{job.jobTitle}</h1>
          <div className="text-2xl font-semibold text-secondary-foreground">
            Average Salary: {job.averageSalary}
          </div>
        </div>

        <Card className="w-full bg-card/50 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start p-2 bg-muted/50">
                <TabsTrigger value="overview" className="text-lg px-6 py-3">Overview</TabsTrigger>
                <TabsTrigger value="education" className="text-lg px-6 py-3">Education</TabsTrigger>
                <TabsTrigger value="trends" className="text-lg px-6 py-3">Trends</TabsTrigger>
                <TabsTrigger value="details" className="text-lg px-6 py-3">Details</TabsTrigger>
              </TabsList>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-10"
                  >
                    <TabsContent value="overview">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TabContent icon={BookOpen} title="Job Description">
                          <p className="text-xl leading-relaxed">{job.description}</p>
                        </TabContent>
                        <TabContent icon={Sparkles} title="Key Skills">
                          <ul className="grid grid-cols-2 gap-4">
                            {job.skills && job.skills.map((skill, index) => (
                              <ListItem key={index}>{skill}</ListItem>
                            ))}
                          </ul>
                        </TabContent>
                        <TabContent icon={Building} title="Top Companies">
                          <ul className="grid grid-cols-2 gap-4">
                            {job.companies && job.companies.map((company, index) => (
                              <ListItem key={index}>{company}</ListItem>
                            ))}
                          </ul>
                        </TabContent>
                        <TabContent icon={School} title="Required Education">
                          <ul className="grid grid-cols-1 gap-4">
                            {job.education && job.education.map((edu, index) => (
                              <ListItem key={index}>{edu}</ListItem>
                            ))}
                          </ul>
                        </TabContent>
                      </div>
                    </TabsContent>
                    <TabsContent value="education">
                      <TabContent icon={School} title="Top Colleges">
                        <ScrollArea className="h-[600px] pr-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {job.topColleges && job.topColleges.map((college, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                              >
                                <h4 className="text-xl font-bold mb-2">{college.name}</h4>
                                <p className="text-lg">Fees: <span className="font-semibold">{college.fees}</span></p>
                                <p className="text-lg">Duration: <span className="font-semibold">{college.duration}</span></p>
                              </motion.div>
                            ))}
                          </div>
                        </ScrollArea>
                      </TabContent>
                    </TabsContent>
                    <TabsContent value="trends">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TabContent icon={DollarSign} title="Salary Trends">
                          {job.salaryTrends && job.salaryTrends.length > 0 ? (
                            <ResponsiveContainer width="100%" height={400}>
                              <AreaChart data={job.salaryTrends}>
                                <defs>
                                  <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="salary" stroke="#10b981" fillOpacity={1} fill="url(#colorSalary)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          ) : (
                            <p>No salary trend data available.</p>
                          )}
                        </TabContent>
                        <TabContent icon={BarChart2} title="Hiring Trends">
                          {job.hiringTrends && job.hiringTrends.length > 0 ? (
                            <ResponsiveContainer width="100%" height={400}>
                              <AreaChart data={job.hiringTrends}>
                                <defs>
                                  <linearGradient id="colorHires" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="hires" stroke="#3b82f6" fillOpacity={1} fill="url(#colorHires)" />
                              </AreaChart>
                            </ResponsiveContainer>
                          ) : (
                            <p>No hiring trend data available.</p>
                          )}
                        </TabContent>
                      </div>
                    </TabsContent>
                    <TabsContent value="details">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TabContent icon={MapPinIcon} title="Work Environment">
                          <p className="text-xl leading-relaxed">{job.workEnvironment}</p>
                        </TabContent>
                        <TabContent icon={TrendingUpIcon} title="Job Outlook">
                          <p className="text-xl leading-relaxed">{job.jobOutlook}</p>
                        </TabContent>
                        <TabContent icon={BriefcaseIcon} title="Challenges">
                          <ul className="space-y-2">
                            {job.challenges && job.challenges.map((challenge, index) => (
                              <ListItem key={index}>{challenge}</ListItem>
                            ))}
                          </ul>
                        </TabContent>
                        <TabContent icon={HeartIcon} title="Rewards">
                          <ul className="space-y-2">
                            {job.rewards && job.rewards.map((reward, index) => (
                              <ListItem key={index}>{reward}</ListItem>
                            ))}
                          </ul>
                        </TabContent>
                      </div>
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}