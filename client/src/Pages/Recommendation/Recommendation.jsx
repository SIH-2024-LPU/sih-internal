// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { ChevronRight, ChevronLeft, Sparkles, BookOpen, Building, GraduationCap, BriefcaseIcon, TrendingUpIcon, HeartIcon, BrainIcon } from 'lucide-react'

// const careerData = {
//   "Technology": {
//     "Problem Solving": {
//       jobTitle: "Software Engineer",
//       description: "As a Software Engineer with strong problem-solving skills, you'll be at the forefront of creating innovative solutions to complex technical challenges.",
//       skills: ["Algorithmic thinking", "Debugging", "System design", "Coding in multiple languages"],
//       companies: ["Google", "Microsoft", "Amazon", "Apple", "Facebook"],
//       colleges: ["Massachusetts Institute of Technology", "Stanford University", "Carnegie Mellon University"],
//       salary: "$70,000 - $150,000+"
//     },
//     "Creativity": {
//       jobTitle: "UX/UI Designer",
//       description: "Your creative strength combined with technological interest makes you an ideal candidate for UX/UI Design, where you'll shape user experiences in digital products.",
//       skills: ["User research", "Wireframing", "Prototyping", "Visual design"],
//       companies: ["Airbnb", "Uber", "Adobe", "Figma", "Spotify"],
//       colleges: ["Rhode Island School of Design", "Parsons School of Design", "California Institute of the Arts"],
//       salary: "$60,000 - $120,000+"
//     }
//   },
//   "Medicine": {
//     "Empathy": {
//       jobTitle: "Pediatrician",
//       description: "Your empathetic nature combined with an interest in medicine makes you well-suited for pediatrics, where you'll care for children's health and well-being.",
//       skills: ["Patient care", "Diagnosis", "Communication with children and parents", "Preventive care"],
//       companies: ["Children's Hospital of Philadelphia", "Boston Children's Hospital", "Cincinnati Children's Hospital Medical Center"],
//       colleges: ["Harvard Medical School", "Johns Hopkins University School of Medicine", "University of Pennsylvania Perelman School of Medicine"],
//       salary: "$150,000 - $250,000+"
//     },
//     "Analytical Thinking": {
//       jobTitle: "Medical Researcher",
//       description: "Your analytical skills and interest in medicine position you well for a career in medical research, where you'll contribute to advancing healthcare through scientific inquiry.",
//       skills: ["Data analysis", "Experimental design", "Scientific writing", "Laboratory techniques"],
//       companies: ["Pfizer", "Johnson & Johnson", "Roche", "Novartis", "Merck"],
//       colleges: ["Stanford University School of Medicine", "University of California, San Francisco", "Washington University School of Medicine in St. Louis"],
//       salary: "$70,000 - $150,000+"
//     }
//   },
//   "Business": {
//     "Leadership": {
//       jobTitle: "Management Consultant",
//       description: "Your leadership skills and business acumen make you an excellent fit for management consulting, where you'll guide organizations to improve their performance.",
//       skills: ["Strategic thinking", "Problem-solving", "Client management", "Data analysis"],
//       companies: ["McKinsey & Company", "Boston Consulting Group", "Bain & Company", "Deloitte", "Accenture"],
//       colleges: ["Harvard Business School", "Stanford Graduate School of Business", "Wharton School of the University of Pennsylvania"],
//       salary: "$80,000 - $200,000+"
//     },
//     "Communication": {
//       jobTitle: "Marketing Manager",
//       description: "Your communication skills combined with business interest set you up for success in marketing, where you'll craft strategies to promote products and services.",
//       skills: ["Brand management", "Market research", "Digital marketing", "Content strategy"],
//       companies: ["Procter & Gamble", "Unilever", "Coca-Cola", "Nike", "Apple"],
//       colleges: ["Northwestern University (Kellogg)", "University of Michigan (Ross)", "Columbia Business School"],
//       salary: "$60,000 - $150,000+"
//     }
//   }
// }

// const strengthOptions = [
//   { value: "Problem Solving", label: "Problem Solving" },
//   { value: "Creativity", label: "Creativity" },
//   { value: "Empathy", label: "Empathy" },
//   { value: "Analytical Thinking", label: "Analytical Thinking" },
//   { value: "Leadership", label: "Leadership" },
//   { value: "Communication", label: "Communication" },
// ]

// export default function Recommendation() {
//   const [page, setPage] = useState(1)
//   const [formData, setFormData] = useState({
//     tenthPercentage: '',
//     twelfthPercentage: '',
//     interest: '',
//     strength: ''
//   })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handleNext = () => {
//     setPage(prevPage => prevPage + 1)
//   }

//   const handleBack = () => {
//     setPage(prevPage => prevPage - 1)
//   }

//   const handleSkip = (field) => {
//     setFormData(prevData => ({
//       ...prevData,
//       [field]: 'Skipped'
//     }))
//     handleNext()
//   }

//   const renderPage = () => {
//     switch(page) {
//       case 1:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>10th Grade Percentage</CardTitle>
//                 <CardDescription>Enter your 10th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="tenthPercentage"
//                     name="tenthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.tenthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={() => handleSkip('tenthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext} disabled={formData.tenthPercentage === ''}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 2:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>12th Grade Percentage</CardTitle>
//                 <CardDescription>Enter your 12th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="twelfthPercentage"
//                     name="twelfthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.twelfthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={() => handleSkip('twelfthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext} disabled={formData.twelfthPercentage === ''}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 3:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Area of Interest</CardTitle>
//                 <CardDescription>Select your primary area of interest</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <RadioGroup name="interest" onValueChange={(value) => handleInputChange({ target: { name: 'interest', value } })}>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Technology" id="technology" />
//                     <Label htmlFor="technology">Technology</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Medicine" id="medicine" />
//                     <Label htmlFor="medicine">Medicine</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Business" id="business" />
//                     <Label htmlFor="business">Business</Label>
//                   </div>
//                 </RadioGroup>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={handleNext} disabled={!formData.interest}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 4:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Your Biggest Strength</CardTitle>
//                 <CardDescription>What do you consider your biggest strength?</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <Select onValueChange={(value) => handleInputChange({ target: { name: 'strength', value } })}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Select your biggest strength" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {strengthOptions.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={handleNext} disabled={!formData.strength}>Submit <Sparkles className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 5:
//         const careerSuggestion = careerData[formData.interest][formData.strength]
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Your Personalized Career Path</CardTitle>
//                 <CardDescription>Based on your interest in {formData.interest} and strength in {formData.strength}</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-semibold flex items-center"><BriefcaseIcon className="mr-2" /> Recommended Career</h3>
//                   <p className="text-lg text-primary">{careerSuggestion.jobTitle}</p>
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-semibold flex items-center"><BookOpen className="mr-2" /> Career Description</h3>
//                   <p>{careerSuggestion.description}</p>
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-semibold flex items-center"><Sparkles className="mr-2" /> Key Skills</h3>
//                   <ul className="grid grid-cols-2 gap-2">
//                     {careerSuggestion.skills.map((skill, index) => (
//                       <li key={index} className="flex items-center"><BrainIcon className="mr-2 h-4 w-4 text-yellow-500" /> {skill}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-semibold flex items-center"><Building className="mr-2" /> Top Companies</h3>
//                   <ul className="grid grid-cols-2 gap-2">
//                     {careerSuggestion.companies.map((company, index) => (
//                       <li key={index} className="flex items-center"><Building className="mr-2 h-4 w-4 text-blue-500" /> {company}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-semibold flex items-center"><GraduationCap className="mr-2" /> Top Colleges</h3>
//                   <ul className="space-y-2">
//                     {careerSuggestion.colleges.map((college, index) => (
//                       <li key={index} className="flex items-center"><GraduationCap className="mr-2 h-4 w-4 text-green-500" /> {college}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl font-semibold flex items-center"><TrendingUpIcon className="mr-2" /> Salary Range</h3>
//                   <p className="text-lg text-primary">{careerSuggestion.salary}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-background rounded-lg shadow-lg space-y-6">
//       <Progress value={(page / 5) * 100} className="w-full" />
//       <AnimatePresence mode="wait">
//         {renderPage()}
//       </AnimatePresence>
//     </div>
//   )
// }


//Done

// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Loader2, ChevronRight, ChevronLeft, Sparkles, BookOpen, Building, GraduationCap, BriefcaseIcon, TrendingUpIcon, HeartIcon, BrainIcon, ClockIcon, MapPinIcon, UsersIcon } from 'lucide-react'
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { ScrollArea } from "@/components/ui/scroll-area"

// const careerData = {
//   "Technology": {
//     "Problem Solving": [
//       {
//         jobTitle: "Software Engineer",
//         averageSalary: "$92,000",
//         description: "Design, develop, and maintain software systems and applications.",
//         skills: ["Programming", "Algorithms", "Data Structures", "Software Architecture"],
//         companies: ["Google", "Microsoft", "Amazon", "Apple", "Facebook"],
//         education: ["Computer Science", "Software Engineering", "Information Technology"],
//         workEnvironment: "Office or Remote",
//         jobOutlook: "Excellent, with 22% growth expected over the next decade",
//         challenges: ["Keeping up with rapidly evolving technologies", "Debugging complex systems", "Meeting tight deadlines"],
//         rewards: ["Creating innovative solutions", "High earning potential", "Opportunities for career advancement"]
//       },
//       {
//         jobTitle: "Data Scientist",
//         averageSalary: "$100,000",
//         description: "Analyze complex data to help companies make better decisions.",
//         skills: ["Machine Learning", "Statistics", "Python", "Data Visualization"],
//         companies: ["IBM", "Netflix", "Airbnb", "Uber", "LinkedIn"],
//         education: ["Data Science", "Statistics", "Computer Science", "Mathematics"],
//         workEnvironment: "Office or Remote",
//         jobOutlook: "Very good, with 36% growth expected over the next decade",
//         challenges: ["Handling large datasets", "Communicating complex findings to non-technical stakeholders", "Ensuring data privacy and security"],
//         rewards: ["Solving real-world problems with data", "High demand across industries", "Intellectual stimulation"]
//       },
//       {
//         jobTitle: "Cybersecurity Analyst",
//         averageSalary: "$99,000",
//         description: "Protect computer networks from threats and breaches.",
//         skills: ["Network Security", "Ethical Hacking", "Risk Analysis", "Security Software"],
//         companies: ["Cisco", "Palo Alto Networks", "FireEye", "Symantec", "Crowdstrike"],
//         education: ["Cybersecurity", "Information Security", "Computer Science"],
//         workEnvironment: "Office, with potential for remote work",
//         jobOutlook: "Excellent, with 31% growth expected over the next decade",
//         challenges: ["Staying ahead of evolving cyber threats", "Managing security in cloud environments", "Balancing security with user accessibility"],
//         rewards: ["Protecting valuable data and systems", "High job security", "Exciting and dynamic work environment"]
//       }
//     ],
//     "Creativity": [
//       {
//         jobTitle: "UX/UI Designer",
//         averageSalary: "$85,000",
//         description: "Create intuitive and visually appealing user interfaces for digital products.",
//         skills: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
//         companies: ["Airbnb", "Uber", "Adobe", "Figma", "Spotify"],
//         education: ["Graphic Design", "Human-Computer Interaction", "Digital Media"],
//         workEnvironment: "Office or Remote",
//         jobOutlook: "Good, with 13% growth expected over the next decade",
//         challenges: ["Balancing aesthetics with functionality", "Keeping up with design trends and user expectations", "Collaborating with diverse teams"],
//         rewards: ["Seeing your designs come to life", "Improving user experiences", "Combining creativity with technology"]
//       },
//       {
//         jobTitle: "Game Developer",
//         averageSalary: "$79,000",
//         description: "Design and program video games for various platforms.",
//         skills: ["Game Engines (Unity, Unreal)", "3D Modeling", "Scripting", "Game Design"],
//         companies: ["Electronic Arts", "Ubisoft", "Blizzard", "Nintendo", "Rockstar Games"],
//         education: ["Game Development", "Computer Science", "Interactive Media"],
//         workEnvironment: "Office, with some remote opportunities",
//         jobOutlook: "Favorable, with 11% growth expected over the next decade",
//         challenges: ["Meeting tight deadlines in a fast-paced industry", "Balancing creativity with technical constraints", "Adapting to rapidly changing gaming trends"],
//         rewards: ["Bringing imaginative worlds to life", "Combining passion for gaming with career", "Potential for high-profile projects"]
//       },
//       {
//         jobTitle: "Digital Content Creator",
//         averageSalary: "$63,000",
//         description: "Produce engaging digital content for various platforms and audiences.",
//         skills: ["Video Editing", "Graphic Design", "Social Media Management", "Storytelling"],
//         companies: ["YouTube", "TikTok", "Instagram", "Digital Marketing Agencies"],
//         education: ["Digital Media", "Communications", "Film and Video Production"],
//         workEnvironment: "Varied - Studio, Remote, On-location",
//         jobOutlook: "Excellent, with 12% growth expected over the next decade",
//         challenges: ["Staying relevant in a rapidly changing digital landscape", "Managing multiple projects and deadlines", "Building and maintaining an audience"],
//         rewards: ["Creative freedom", "Potential for viral success", "Diverse work opportunities"]
//       }
//     ]
//   },
//   "Medicine": {
//     "Empathy": [
//       {
//         jobTitle: "Pediatrician",
//         averageSalary: "$177,000",
//         description: "Provide medical care for infants, children, and adolescents.",
//         skills: ["Patient Care", "Diagnosis", "Communication", "Pediatric Medicine"],
//         companies: ["Children's Hospitals", "Private Practices", "Community Health Centers"],
//         education: ["Medical Degree (MD or DO)", "Pediatric Residency"],
//         workEnvironment: "Hospitals, Clinics, Private Practices",
//         jobOutlook: "Good, with 3% growth expected over the next decade",
//         challenges: ["Communicating with young patients and their families", "Staying updated on pediatric health trends", "Managing emotional stress"],
//         rewards: ["Making a difference in children's lives", "Building long-term relationships with families", "Diverse and rewarding patient interactions"]
//       },
//       {
//         jobTitle: "Mental Health Counselor",
//         averageSalary: "$47,000",
//         description: "Help individuals, families, and groups manage mental health issues.",
//         skills: ["Active Listening", "Counseling Techniques", "Psychological Assessment", "Empathy"],
//         companies: ["Mental Health Clinics", "Schools", "Private Practices", "Community Organizations"],
//         education: ["Master's in Counseling or Psychology", "State Licensure"],
//         workEnvironment: "Offices, Clinics, Schools, or Remote (Teletherapy)",
//         jobOutlook: "Excellent, with 23% growth expected over the next decade",
//         challenges: ["Managing emotional boundaries", "Addressing diverse mental health needs", "Keeping up with evolving treatment methods"],
//         rewards: ["Helping people overcome challenges", "Promoting mental wellness", "Flexible career options"]
//       },
//       {
//         jobTitle: "Nurse Practitioner",
//         averageSalary: "$111,000",
//         description: "Provide advanced nursing care and treatment to patients.",
//         skills: ["Patient Assessment", "Medication Management", "Health Education", "Clinical Procedures"],
//         companies: ["Hospitals", "Clinics", "Private Practices", "Community Health Centers"],
//         education: ["Master's or Doctoral Degree in Nursing", "Advanced Practice Registered Nurse License"],
//         workEnvironment: "Various Healthcare Settings",
//         jobOutlook: "Excellent, with 45% growth expected over the next decade",
//         challenges: ["Managing complex patient cases", "Balancing autonomy with collaboration", "Staying updated on medical advancements"],
//         rewards: ["High level of patient care involvement", "Career autonomy", "Diverse specialization options"]
//       }
//     ],
//     "Analytical Thinking": [
//       {
//         jobTitle: "Medical Researcher",
//         averageSalary: "$88,000",
//         description: "Conduct research to improve human health and medical treatments.",
//         skills: ["Research Design", "Data Analysis", "Laboratory Techniques", "Scientific Writing"],
//         companies: ["Pharmaceutical Companies", "Research Institutions", "Universities", "Government Agencies"],
//         education: ["PhD in Biomedical Sciences or related field", "Medical Degree for some positions"],
//         workEnvironment: "Laboratories, Research Facilities",
//         jobOutlook: "Good, with 6% growth expected over the next decade",
//         challenges: ["Securing research funding", "Publishing in competitive journals", "Translating research into practical applications"],
//         rewards: ["Contributing to medical breakthroughs", "Intellectual stimulation", "Potential for global impact"]
//       },
//       {
//         jobTitle: "Biostatistician",
//         averageSalary: "$92,000",
//         description: "Apply statistical methods to analyze health-related data.",
//         skills: ["Statistical Analysis", "Data Modeling", "Programming (R, SAS, Python)", "Study Design"],
//         companies: ["Pharmaceutical Companies", "Research Institutions", "Government Health Agencies", "Hospitals"],
//         education: ["Master's or PhD in Biostatistics or Statistics"],
//         workEnvironment: "Offices, Research Centers",
//         jobOutlook: "Excellent, with 33% growth expected over the next decade",
//         challenges: ["Handling large and complex datasets", "Communicating statistical findings to non-experts", "Ensuring data integrity and validity"],
//         rewards: ["Contributing to evidence-based medicine", "Diverse application areas", "High demand across health sectors"]
//       },
//       {
//         jobTitle: "Epidemiologist",
//         averageSalary: "$74,000",
//         description: "Study patterns and causes of diseases in human populations.",
//         skills: ["Data Analysis", "Research Methods", "Public Health Principles", "Statistical Software"],
//         companies: ["Public Health Departments", "Centers for Disease Control", "World Health Organization", "Universities"],
//         education: ["Master's or Doctoral Degree in Epidemiology or Public Health"],
//         workEnvironment: "Offices, Laboratories, Field Work",
//         jobOutlook: "Good, with 30% growth expected over the next decade",
//         challenges: ["Responding to public health emergencies", "Analyzing complex health data", "Communicating findings to policymakers and the public"],
//         rewards: ["Impacting public health policies", "Diverse work environments", "Combining medical knowledge with data analysis"]
//       }
//     ]
//   },
//   "Business": {
//     "Leadership": [
//       {
//         jobTitle: "Management Consultant",
//         averageSalary: "$87,000",
//         description: "Advise organizations on improving their performance and operations.",
//         skills: ["Strategic Thinking", "Problem-Solving", "Business Analysis", "Project Management"],
//         companies: ["McKinsey & Company", "Boston Consulting Group", "Bain & Company", "Deloitte", "Accenture"],
//         education: ["MBA or related Master's degree", "Bachelor's degree for entry-level positions"],
//         workEnvironment: "Office and Client Sites, Frequent Travel",
//         jobOutlook: "Good, with 14% growth expected over the next decade",
//         challenges: ["Adapting to diverse client environments", "Managing tight project deadlines", "Balancing multiple client engagements"],
//         rewards: ["Exposure to various industries", "High earning potential", "Rapid career progression"]
//       },
//       {
//         jobTitle: "Entrepreneur",
//         averageSalary: "Varies widely",
//         description: "Start and run your own business ventures.",
//         skills: ["Business Planning", "Financial Management", "Marketing", "Networking"],
//         companies: "Self-employed, various startups",
//         education: ["No specific requirement, but business education can be beneficial"],
//         workEnvironment: "Varied - Office, Remote, On-site",
//         jobOutlook: "Dependent on economic conditions and individual success",
//         challenges: ["Securing funding", "Managing all aspects of a business", "Dealing with uncertainty and risk"],
//         rewards: ["Being your own boss", "Potential for high financial returns", "Bringing innovative ideas to life"]
//       },
//       {
//         jobTitle: "Chief Executive Officer (CEO)",
//         averageSalary: "$185,000 (varies widely)",
//         description: "Lead and oversee all aspects of an organization's operations.",
//         skills: ["Strategic Leadership", "Decision Making", "Financial Acumen", "Communication"],
//         companies: "All major corporations and organizations",
//         education: ["MBA or related advanced degree often preferred", "Extensive industry experience"],
//         workEnvironment: "Corporate Offices, Frequent Travel",
//         jobOutlook: "Stable, with 8% growth expected over the next decade",
//         challenges: ["Navigating complex business environments", "Balancing stakeholder interests", "Driving organizational change"],
//         rewards: ["High level of influence", "Substantial compensation packages", "Opportunity to shape company direction"]
//       }
//     ],
//     "Communication": [
//       {
//         jobTitle: "Marketing Manager",
//         averageSalary: "$136,000",
//         description: "Develop and implement marketing strategies to promote products or services.",
//         skills: ["Marketing Strategy", "Brand Management", "Digital Marketing", "Analytics"],
//         companies: ["Procter & Gamble", "Unilever", "Coca-Cola", "Nike", "Apple"],
//         education: ["Bachelor's or Master's in Marketing, Business, or related field"],
//         workEnvironment: "Corporate Offices, Some Remote Work",
//         jobOutlook: "Good, with 10% growth expected over the next decade",
//         challenges: ["Keeping up with rapidly changing digital landscape", "Measuring marketing ROI", "Managing diverse marketing channels"],
//         rewards: ["Creative expression in business context", "Opportunity to influence consumer behavior", "Dynamic and evolving field"]
//       },
//       {
//         jobTitle: "Public Relations Specialist",
//         averageSalary: "$62,000",
//         description: "Manage the public image of organizations or individuals.",
//         skills: ["Media Relations", "Crisis Management", "Writing", "Social Media Management"],
//         companies: ["PR Agencies", "Corporations", "Non-profit Organizations", "Government Agencies"],
//         education: ["Bachelor's in Public Relations, Communications, or Journalism"],
//         workEnvironment: "Offices, Some Remote Work, Event Venues",
//         jobOutlook: "Stable, with 11% growth expected over the next decade",
//         challenges: ["Managing public perception during crises", "Adapting to changing media landscapes", "Measuring PR impact"],
//         rewards: ["Shaping public narratives", "Diverse and dynamic work environments", "Opportunity for high-profile projects"]
//       },
//       {
//         jobTitle: "Human Resources Manager",
//         averageSalary: "$121,000",
//         description: "Oversee the administrative functions of an organization, particularly hiring and employee relations.",
//         skills: ["Employee Relations", "Recruitment", "Conflict Resolution", "HR Policies an Procedures"],
//         companies: "All major corporations and organizations",
//         education: ["Bachelor's or Master's in Human Resources, Business Administration, or related field"],
//         workEnvironment: "Corporate Offices, Some Remote Work",
//         jobOutlook: "Good, with 9% growth expected over the next decade",
//         challenges: ["Balancing employee needs with organizational goals", "Navigating complex labor laws", "Fostering positive workplace culture"],
//         rewards: ["Impacting employee satisfaction and retention", "Shaping organizational culture", "Diverse responsibilities"]
//       }
//     ]
//   }
// }

// const strengthOptions = [
//   { value: "Problem Solving", label: "Problem Solving" },
//   { value: "Creativity", label: "Creativity" },
//   { value: "Empathy", label: "Empathy" },
//   { value: "Analytical Thinking", label: "Analytical Thinking" },
//   { value: "Leadership", label: "Leadership" },
//   { value: "Communication", label: "Communication" },
// ]

// export default function Recommendation() {
//   const [page, setPage] = useState(1)
//   const [formData, setFormData] = useState({
//     tenthPercentage: '',
//     twelfthPercentage: '',
//     interest: '',
//     strength: ''
//   })
//   const [isLoading, setIsLoading] = useState(false)
//   const [careerSuggestions, setCareerSuggestions] = useState([])
//   const [selectedJob, setSelectedJob] = useState(null)

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handleNext = () => {
//     if (page === 4) {
//       setIsLoading(true)
//       // Simulate AI prediction
//       setTimeout(() => {
//         setCareerSuggestions(careerData[formData.interest][formData.strength])
//         setIsLoading(false)
//         setPage(prevPage => prevPage + 1)
//       }, 2000)
//     } else {
//       setPage(prevPage => prevPage + 1)
//     }
//   }

//   const handleBack = () => {
//     setPage(prevPage => prevPage - 1)
//   }

//   const handleSkip = (field) => {
//     setFormData(prevData => ({
//       ...prevData,
//       [field]: 'Skipped'
//     }))
//     handleNext()
//   }

//   const renderPage = () => {
//     switch(page) {
//       case 1:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>10th Grade Percentage (Optional)</CardTitle>
//                 <CardDescription>Enter your 10th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="tenthPercentage"
//                     name="tenthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.tenthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={() => handleSkip('tenthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 2:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>12th Grade Percentage (Optional)</CardTitle>
//                 <CardDescription>Enter your 12th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="twelfthPercentage"
//                     name="twelfthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.twelfthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={() => handleSkip('twelfthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 3:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Area of Interest (Required)</CardTitle>
//                 <CardDescription>Select your primary area of interest</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <RadioGroup name="interest" onValueChange={(value) => handleInputChange({ target: { name: 'interest', value } })}>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Technology" id="technology" />
//                     <Label htmlFor="technology">Technology</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Medicine" id="medicine" />
//                     <Label htmlFor="medicine">Medicine</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Business" id="business" />
//                     <Label htmlFor="business">Business</Label>
//                   </div>
//                 </RadioGroup>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={handleNext} disabled={!formData.interest}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 4:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Your Biggest Strength (Required)</CardTitle>
//                 <CardDescription>What do you consider your biggest strength?</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <Select onValueChange={(value) => handleInputChange({ target: { name: 'strength', value } })}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Select your biggest strength" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {strengthOptions.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={handleNext} disabled={!formData.strength}>Submit <Sparkles className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 5:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Your Career Suggestions</CardTitle>
//                 <CardDescription>Based on your interest in {formData.interest} and strength in {formData.strength}</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {isLoading ? (
//                   <div className="flex flex-col items-center justify-center h-64">
//                     <Loader2 className="h-8 w-8 animate-spin" />
//                     <p className="mt-4 text-sm text-muted-foreground">AI is analyzing your profile...</p>
//                   </div>
//                 ) : (
//                   <ul className="space-y-4">
//                     {careerSuggestions.map((job, index) => (
//                       <li key={index}>
//                         <Dialog>
//                           <DialogTrigger asChild>
//                             <Button
//                               variant="outline"
//                               className="w-full justify-between text-left font-normal"
//                               onClick={() => setSelectedJob(job)}
//                             >
//                               <span>{job.jobTitle}</span>
//                               <span>{job.averageSalary}</span>
//                             </Button>
//                           </DialogTrigger>
//                           <DialogContent className="sm:max-w-[425px]">
//                             <DialogHeader>
//                               <DialogTitle>{job.jobTitle}</DialogTitle>
//                               <DialogDescription>Average Salary: {job.averageSalary}</DialogDescription>
//                             </DialogHeader>
//                             <ScrollArea className="h-[400px] w-full rounded-md border p-4">
//                               <div className="space-y-4">
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><BookOpen className="mr-2 h-4 w-4" /> Description</h4>
//                                   <p className="text-sm">{job.description}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><Sparkles className="mr-2 h-4 w-4" /> Key Skills</h4>
//                                   <ul className="text-sm list-disc list-inside">
//                                     {job.skills.map((skill, index) => (
//                                       <li key={index}>{skill}</li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><Building className="mr-2 h-4 w-4" /> Top Companies</h4>
//                                   <p className="text-sm">{job.companies.join(', ')}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><GraduationCap className="mr-2 h-4 w-4" /> Education</h4>
//                                   <p className="text-sm">{Array.isArray(job.education) ? job.education.join(', ') : job.education}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><MapPinIcon className="mr-2 h-4 w-4" /> Work Environment</h4>
//                                   <p className="text-sm">{job.workEnvironment}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><TrendingUpIcon className="mr-2 h-4 w-4" /> Job Outlook</h4>
//                                   <p className="text-sm">{job.jobOutlook}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><BriefcaseIcon className="mr-2 h-4 w-4" /> Challenges</h4>
//                                   <ul className="text-sm list-disc list-inside">
//                                     {job.challenges.map((challenge, index) => (
//                                       <li key={index}>{challenge}</li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><HeartIcon className="mr-2 h-4 w-4" /> Rewards</h4>
//                                   <ul className="text-sm list-disc list-inside">
//                                     {job.rewards.map((reward, index) => (
//                                       <li key={index}>{reward}</li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                               </div>
//                             </ScrollArea>
//                           </DialogContent>
//                         </Dialog>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-background rounded-lg shadow-lg space-y-6">
//       <Progress value={(page / 5) * 100} className="w-full" />
//       <AnimatePresence mode="wait">
//         {renderPage()}
//       </AnimatePresence>
//     </div>
//   )
// }

// Super COol 

// 'use client'

// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { BriefcaseIcon, BuildingIcon, GraduationCapIcon, TrendingUpIcon, UsersIcon, MapPinIcon, SparklesIcon, BookOpenIcon, HeartIcon, ChevronRightIcon } from 'lucide-react'
// const careerData = {
//     "Technology": {
//       "Problem Solving": [
//         {
//           jobTitle: "Software Engineer",
//           averageSalary: "$92,000",
//           description: "Design, develop, and maintain software systems and applications.",
//           skills: ["Programming", "Algorithms", "Data Structures", "Software Architecture"],
//           companies: ["Google", "Microsoft", "Amazon", "Apple", "Facebook"],
//           education: ["Computer Science", "Software Engineering", "Information Technology"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Excellent, with 22% growth expected over the next decade",
//           challenges: ["Keeping up with rapidly evolving technologies", "Debugging complex systems", "Meeting tight deadlines"],
//           rewards: ["Creating innovative solutions", "High earning potential", "Opportunities for career advancement"],
//           topColleges: [
//             { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
//             { name: "Stanford University", fees: "$55,473", duration: "4 years" },
//             { name: "Carnegie Mellon University", fees: "$57,560", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Data Scientist",
//           averageSalary: "$100,000",
//           description: "Analyze complex data to help companies make better decisions.",
//           skills: ["Machine Learning", "Statistics", "Python", "Data Visualization"],
//           companies: ["IBM", "Netflix", "Airbnb", "Uber", "LinkedIn"],
//           education: ["Data Science", "Statistics", "Computer Science", "Mathematics"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Very good, with 36% growth expected over the next decade",
//           challenges: ["Handling large datasets", "Communicating complex findings to non-technical stakeholders", "Ensuring data privacy and security"],
//           rewards: ["Solving real-world problems with data", "High demand across industries", "Intellectual stimulation"],
//           topColleges: [
//             { name: "Harvard University", fees: "$51,925", duration: "4 years" },
//             { name: "University of California, Berkeley", fees: "$44,007", duration: "4 years" },
//             { name: "Georgia Institute of Technology", fees: "$33,020", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Cybersecurity Analyst",
//           averageSalary: "$99,730",
//           description: "Protect computer networks and systems from cyber threats and attacks.",
//           skills: ["Network Security", "Ethical Hacking", "Risk Analysis", "Incident Response"],
//           companies: ["Cisco", "Palo Alto Networks", "FireEye", "CrowdStrike", "Symantec"],
//           education: ["Cybersecurity", "Information Security", "Computer Science"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Excellent, with 31% growth expected over the next decade",
//           challenges: ["Staying ahead of evolving cyber threats", "Managing security in cloud environments", "Balancing security with user accessibility"],
//           rewards: ["Protecting vital information and systems", "High demand and job security", "Continuous learning and growth"],
//           topColleges: [
//             { name: "Purdue University", fees: "$28,794", duration: "4 years" },
//             { name: "Rochester Institute of Technology", fees: "$45,890", duration: "4 years" },
//             { name: "University of Maryland", fees: "$36,891", duration: "4 years" }
//           ]
//         }
//       ],
//       "Creativity": [
//         {
//           jobTitle: "UX/UI Designer",
//           averageSalary: "$85,000",
//           description: "Create intuitive and visually appealing user interfaces for digital products.",
//           skills: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
//           companies: ["Airbnb", "Uber", "Adobe", "Figma", "Spotify"],
//           education: ["Graphic Design", "Human-Computer Interaction", "Digital Media"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Good, with 13% growth expected over the next decade",
//           challenges: ["Balancing aesthetics with functionality", "Keeping up with design trends and user expectations", "Collaborating with diverse teams"],
//           rewards: ["Seeing your designs come to life", "Improving user experiences", "Combining creativity with technology"],
//           topColleges: [
//             { name: "Rhode Island School of Design", fees: "$52,860", duration: "4 years" },
//             { name: "Parsons School of Design", fees: "$49,844", duration: "4 years" },
//             { name: "California Institute of the Arts", fees: "$51,466", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Game Developer",
//           averageSalary: "$79,000",
//           description: "Design and program video games for various platforms.",
//           skills: ["Game Engines (Unity, Unreal)", "3D Modeling", "Scripting", "Game Design"],
//           companies: ["Electronic Arts", "Ubisoft", "Blizzard", "Nintendo", "Rockstar Games"],
//           education: ["Game Development", "Computer Science", "Interactive Media"],
//           workEnvironment: "Office, with some remote opportunities",
//           jobOutlook: "Favorable, with 11% growth expected over the next decade",
//           challenges: ["Meeting tight deadlines in a fast-paced industry", "Balancing creativity with technical constraints", "Adapting to rapidly changing gaming trends"],
//           rewards: ["Bringing imaginative worlds to life", "Combining passion for gaming with career", "Potential for high-profile projects"],
//           topColleges: [
//             { name: "University of Southern California", fees: "$58,195", duration: "4 years" },
//             { name: "DigiPen Institute of Technology", fees: "$35,000", duration: "4 years" },
//             { name: "Rochester Institute of Technology", fees: "$45,890", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Digital Animator",
//           averageSalary: "$77,700",
//           description: "Create animated visual effects for films, TV shows, video games, and other media.",
//           skills: ["3D Animation Software", "Character Design", "Storyboarding", "Motion Graphics"],
//           companies: ["Pixar", "DreamWorks", "Walt Disney Animation Studios", "Weta Digital", "Industrial Light & Magic"],
//           education: ["Animation", "Fine Arts", "Computer Graphics"],
//           workEnvironment: "Studios, some remote work possible",
//           jobOutlook: "Good, with 16% growth expected over the next decade",
//           challenges: ["Mastering complex animation software", "Meeting tight production deadlines", "Staying current with evolving animation techniques"],
//           rewards: ["Bringing characters and stories to life", "Working on high-profile entertainment projects", "Combining artistic skills with technology"],
//           topColleges: [
//             { name: "California Institute of the Arts", fees: "$51,466", duration: "4 years" },
//             { name: "Ringling College of Art and Design", fees: "$45,130", duration: "4 years" },
//             { name: "Savannah College of Art and Design", fees: "$37,575", duration: "4 years" }
//           ]
//         }
//       ],
//       "Innovation": [
//         {
//           jobTitle: "AI Research Scientist",
//           averageSalary: "$114,121",
//           description: "Develop and improve artificial intelligence algorithms and systems.",
//           skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
//           companies: ["Google AI", "OpenAI", "DeepMind", "Microsoft Research", "IBM Research"],
//           education: ["PhD in Computer Science", "AI", "Machine Learning"],
//           workEnvironment: "Research Labs, Universities, Tech Companies",
//           jobOutlook: "Excellent, with 22% growth expected over the next decade",
//           challenges: ["Pushing the boundaries of AI capabilities", "Ethical considerations in AI development", "Translating research into practical applications"],
//           rewards: ["Contributing to cutting-edge technology", "Potential for groundbreaking discoveries", "High intellectual stimulation"],
//           topColleges: [
//             { name: "Stanford University", fees: "$55,473", duration: "4-6 years (PhD)" },
//             { name: "Carnegie Mellon University", fees: "$57,560", duration: "4-6 years (PhD)" },
//             { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4-6 years (PhD)" }
//           ]
//         },
//         {
//           jobTitle: "Robotics Engineer",
//           averageSalary: "$85,620",
//           description: "Design, build, and maintain robots for various applications.",
//           skills: ["Mechanical Engineering", "Programming", "Control Systems", "Machine Vision"],
//           companies: ["Boston Dynamics", "iRobot", "ABB", "FANUC", "Intuitive Surgical"],
//           education: ["Robotics Engineering", "Mechanical Engineering", "Electrical Engineering"],
//           workEnvironment: "Research Labs, Manufacturing Facilities, Tech Companies",
//           jobOutlook: "Very good, with 9% growth expected over the next decade",
//           challenges: ["Integrating complex systems", "Ensuring robot safety and reliability", "Adapting to diverse application environments"],
//           rewards: ["Creating tangible, interactive technologies", "Potential for significant societal impact", "Working at the forefront of automation"],
//           topColleges: [
//             { name: "Carnegie Mellon University", fees: "$57,560", duration: "4 years" },
//             { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
//             { name: "University of Michigan", fees: "$52,266", duration: "4 years" }
//           ]
//         }
//       ]
//     },
//     "Medicine": {
//       "Empathy": [
//         {
//           jobTitle: "Pediatrician",
//           averageSalary: "$177,000",
//           description: "Provide medical care for infants, children, and adolescents.",
//           skills: ["Patient Care", "Diagnosis", "Communication", "Pediatric Medicine"],
//           companies: ["Children's Hospitals", "Private Practices", "Community Health Centers"],
//           education: ["Medical Degree (MD or DO)", "Pediatric Residency"],
//           workEnvironment: "Hospitals, Clinics, Private Practices",
//           jobOutlook: "Good, with 3% growth expected over the next decade",
//           challenges: ["Communicating with young patients and their families", "Staying updated on pediatric health trends", "Managing emotional stress"],
//           rewards: ["Making a difference in children's lives", "Building long-term relationships with families", "Diverse and rewarding patient interactions"],
//           topColleges: [
//             { name: "Harvard Medical School", fees: "$65,203", duration: "4 years" },
//             { name: "Johns Hopkins University School of Medicine", fees: "$54,900", duration: "4 years" },
//             { name: "University of Pennsylvania Perelman School of Medicine", fees: "$61,586", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Mental Health Counselor",
//           averageSalary: "$47,000",
//           description: "Help individuals, families, and groups manage mental health issues.",
//           skills: ["Active Listening", "Counseling Techniques", "Psychological Assessment", "Empathy"],
//           companies: ["Mental Health Clinics", "Schools", "Private Practices", "Community Organizations"],
//           education: ["Master's in Counseling or Psychology", "State Licensure"],
//           workEnvironment: "Offices, Clinics, Schools, or Remote (Teletherapy)",
//           jobOutlook: "Excellent, with 23% growth expected over the next decade",
//           challenges: ["Managing emotional boundaries", "Addressing diverse mental health needs", "Keeping up with evolving treatment methods"],
//           rewards: ["Helping people overcome challenges", "Promoting mental wellness", "Flexible career options"],
//           topColleges: [
//             { name: "Columbia University", fees: "$48,390", duration: "2 years" },
//             { name: "New York University", fees: "$45,426", duration: "2 years" },
//             { name: "University of California, Los Angeles", fees: "$28,000", duration: "2 years" }
//           ]
//         },
//         {
//           jobTitle: "Nurse Practitioner",
//           averageSalary: "$111,680",
//           description: "Provide advanced nursing care and can prescribe medication in most states.",
//           skills: ["Patient Assessment", "Diagnosis", "Treatment Planning", "Health Education"],
//           companies: ["Hospitals", "Private Practices", "Community Health Centers", "Urgent Care Clinics"],
//           education: ["Master of Science in Nursing", "Nurse Practitioner Certification"],
//           workEnvironment: "Various Healthcare Settings",
//           jobOutlook: "Excellent, with 45% growth expected over the next decade",
//           challenges: ["Managing complex patient cases", "Staying updated with medical advancements", "Balancing autonomy and collaboration with physicians"],
//           rewards: ["High level of patient care autonomy", "Strong job security and growth", "Opportunity to specialize in various fields"],
//           topColleges: [
//             { name: "Johns Hopkins University", fees: "$54,900", duration: "2 years" },
//             { name: "University of Pennsylvania", fees: "$61,586", duration: "2 years" },
//             { name: "Duke University", fees: "$55,888", duration: "2 years" }
//           ]
//         }
//       ],
//       "Analytical Thinking": [
//         {
//           jobTitle: "Medical Researcher",
//           averageSalary: "$88,000",
//           description: "Conduct research to improve human health and medical treatments.",
//           skills: ["Research Design", "Data Analysis", "Laboratory Techniques", "Scientific Writing"],
//           companies: ["Pharmaceutical Companies", "Research Institutions", "Universities", "Government Agencies"],
//           education: ["PhD in Biomedical Sciences or related field", "Medical Degree for some positions"],
//           workEnvironment: "Laboratories, Research Facilities",
//           jobOutlook: "Good, with 6% growth expected over the next decade",
//           challenges: ["Securing research funding", "Publishing in competitive journals", "Translating research into practical applications"],
//           rewards: ["Contributing to medical breakthroughs", "Intellectual stimulation", "Potential for global impact"],
//           topColleges: [
//             { name: "Stanford University School of Medicine", fees: "$56,229", duration: "4-6 years" },
//             { name: "University of California, San Francisco", fees: "$35,148", duration: "4-6 years" },
//             { name: "Washington University in St. Louis", fees: "$58,460", duration: "4-6 years" }
//           ]
//         },
//         {
//           jobTitle: "Biostatistician",
//           averageSalary: "$92,000",
//           description: "Apply statistical methods to analyze health-related data.",
//           skills: ["Statistical Analysis", "Data Modeling", "Programming (R, SAS, Python)", "Study Design"],
//           companies: ["Pharmaceutical Companies", "Research Institutions", "Government Health Agencies", "Hospitals"],
//           education: ["Master's or PhD in Biostatistics or Statistics"],
//           workEnvironment: "Offices, Research Centers",
//           jobOutlook: "Excellent, with 33% growth expected over the next decade",
//           challenges: ["Handling large and complex datasets", "Communicating statistical findings to non-experts", "Ensuring data integrity and validity"],
//           rewards: ["Contributing to evidence-based medicine", "Diverse application areas", "High demand across health sectors"],
//           topColleges: [
//             { name: "Harvard T.H. Chan School of Public Health", fees: "$63,440", duration: "2 years" },
//             { name: "Johns Hopkins Bloomberg School of Public Health", fees: "$62,592", duration: "2 years" },
//             { name: "University of Michigan School of Public Health", fees: "$47,006", duration: "2 years" }
//         ]
//       },
//       {
//         jobTitle: "Epidemiologist",
//         averageSalary: "$74,560",
//         description: "Study patterns and causes of diseases in human populations.",
//         skills: ["Data Analysis", "Research Methodology", "Public Health Knowledge", "Statistical Software"],
//         companies: ["Centers for Disease Control and Prevention", "World Health Organization", "Universities", "State Health Departments"],
//         education: ["Master's or PhD in Epidemiology or Public Health"],
//         workEnvironment: "Government Agencies, Research Institutions, Universities",
//         jobOutlook: "Good, with 30% growth expected over the next decade",
//         challenges: ["Analyzing complex health data", "Responding to public health emergencies", "Communicating findings to policymakers and the public"],
//         rewards: ["Contributing to disease prevention and control", "Potential for global impact", "Diverse research opportunities"],
//         topColleges: [
//           { name: "Johns Hopkins Bloomberg School of Public Health", fees: "$62,592", duration: "2 years" },
//           { name: "Harvard T.H. Chan School of Public Health", fees: "$63,440", duration: "2 years" },
//           { name: "Columbia University Mailman School of Public Health", fees: "$48,390", duration: "2 years" }
//         ]
//       }
//     ],
//     "Precision and Dexterity": [
//       {
//         jobTitle: "Surgeon",
//         averageSalary: "$409,665",
//         description: "Perform operations to treat injuries, diseases, and deformities.",
//         skills: ["Surgical Techniques", "Anatomy Knowledge", "Decision Making", "Hand-eye Coordination"],
//         companies: ["Hospitals", "Surgical Centers", "Private Practices"],
//         education: ["Medical Degree", "Surgical Residency", "Fellowship for Specialization"],
//         workEnvironment: "Hospitals, Operating Rooms",
//         jobOutlook: "Good, with 3% growth expected over the next decade",
//         challenges: ["High-stress environment", "Long and irregular hours", "Continuous learning of new surgical techniques"],
//         rewards: ["Directly saving and improving lives", "High earning potential", "Respect and prestige"],
//         topColleges: [
//           { name: "Johns Hopkins University School of Medicine", fees: "$54,900", duration: "4 years + 5-7 years residency" },
//           { name: "Harvard Medical School", fees: "$65,203", duration: "4 years + 5-7 years residency" },
//           { name: "Stanford University School of Medicine", fees: "$56,229", duration: "4 years + 5-7 years residency" }
//         ]
//       },
//       {
//         jobTitle: "Dentist",
//         averageSalary: "$164,010",
//         description: "Diagnose and treat problems with patients' teeth, gums, and related parts of the mouth.",
//         skills: ["Dental Procedures", "Patient Care", "Manual Dexterity", "Diagnostic Skills"],
//         companies: ["Private Practices", "Dental Clinics", "Hospitals"],
//         education: ["Doctor of Dental Surgery (DDS) or Doctor of Dental Medicine (DMD)"],
//         workEnvironment: "Dental Offices, Clinics",
//         jobOutlook: "Good, with 3% growth expected over the next decade",
//         challenges: ["Managing patient anxiety", "Staying updated with dental technologies", "Running a business (for private practice)"],
//         rewards: ["Improving oral health and smiles", "Potential for owning a practice", "Regular working hours"],
//         topColleges: [
//           { name: "University of Michigan School of Dentistry", fees: "$52,266", duration: "4 years" },
//           { name: "Harvard School of Dental Medicine", fees: "$65,203", duration: "4 years" },
//           { name: "University of California, San Francisco School of Dentistry", fees: "$35,148", duration: "4 years" }
//         ]
//       }
//     ]
//   },
//   "Business": {
//     "Leadership": [
//       {
//         jobTitle: "Management Consultant",
//         averageSalary: "$87,000",
//         description: "Advise organizations on improving their performance and operations.",
//         skills: ["Strategic Thinking", "Problem-Solving", "Business Analysis", "Project Management"],
//         companies: ["McKinsey & Company", "Boston Consulting Group", "Bain & Company", "Deloitte", "Accenture"],
//         education: ["MBA or related Master's degree", "Bachelor's degree for entry-level positions"],
//         workEnvironment: "Office and Client Sites, Frequent Travel",
//         jobOutlook: "Good, with 14% growth expected over the next decade",
//         challenges: ["Adapting to diverse client environments", "Managing tight project deadlines", "Balancing multiple client engagements"],
//         rewards: ["Exposure to various industries", "High earning potential", "Rapid career progression"],
//         topColleges: [
//           { name: "Harvard Business School", fees: "$73,440", duration: "2 years" },
//           { name: "Stanford Graduate School of Business", fees: "$74,706", duration: "2 years" },
//           { name: "Wharton School of the University of Pennsylvania", fees: "$81,378", duration: "2 years" }
//         ]
//       },
//       {
//         jobTitle: "Entrepreneur",
//         averageSalary: "Varies widely",
//         description: "Start and run your own business ventures.",
//         skills: ["Business Planning", "Financial Management", "Marketing", "Networking"],
//         companies: "Self-employed, various startups",
//         education: ["No specific requirement, but business education can be beneficial"],
//         workEnvironment: "Varied - Office, Remote, On-site",
//         jobOutlook: "Dependent on economic conditions and individual success",
//         challenges: ["Securing funding", "Managing all aspects of a business", "Dealing with uncertainty and risk"],
//         rewards: ["Being your own boss", "Potential for high financial returns", "Bringing innovative ideas to life"],
//         topColleges: [
//           { name: "Babson College", fees: "$52,608", duration: "4 years" },
//           { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
//           { name: "Stanford University", fees: "$55,473", duration: "4 years" }
//         ]
//       },
//       {
//         jobTitle: "Chief Executive Officer (CEO)",
//         averageSalary: "$193,850",
//         description: "Provide overall direction and strategy for an organization.",
//         skills: ["Strategic Planning", "Leadership", "Decision Making", "Financial Management"],
//         companies: "All major corporations and many smaller businesses",
//         education: ["MBA or related Master's degree", "Significant industry experience"],
//         workEnvironment: "Corporate Offices, Some Travel",
//         jobOutlook: "Stable, with 4% growth expected over the next decade",
//         challenges: ["Managing diverse stakeholder interests", "Navigating complex business environments", "Maintaining company growth and profitability"],
//         rewards: ["High level of influence", "Substantial compensation packages", "Opportunity to shape organizational direction"],
//         topColleges: [
//           { name: "Harvard Business School", fees: "$73,440", duration: "2 years" },
//           { name: "Stanford Graduate School of Business", fees: "$74,706", duration: "2 years" },
//           { name: "INSEAD", fees: "€89,000", duration: "1 year" }
//         ]
//       }
//     ],
//     "Communication": [
//       {
//         jobTitle: "Marketing Manager",
//         averageSalary: "$136,000",
//         description: "Develop and implement marketing strategies to promote products or services.",
//         skills: ["Marketing Strategy", "Brand Management", "Digital Marketing", "Analytics"],
//         companies: ["Procter & Gamble", "Unilever", "Coca-Cola", "Nike", "Apple"],
//         education: ["Bachelor's or Master's in Marketing, Business, or related field"],
//         workEnvironment: "Corporate Offices, Some Remote Work",
//         jobOutlook: "Good, with 10% growth expected over the next decade",
//         challenges: ["Keeping up with rapidly changing digital landscape", "Measuring marketing ROI", "Managing diverse marketing channels"],
//         rewards: ["Creative expression in business context", "Opportunity to influence consumer behavior", "Dynamic and evolving field"],
//         topColleges: [
//           { name: "Northwestern University (Kellogg)", fees: "$74,468", duration: "2 years" },
//           { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "2 years" },
//           { name: "Columbia Business School", fees: "$77,376", duration: "2 years" }
//         ]
//       },
//       {
//         jobTitle: "Public Relations Specialist",
//         averageSalary: "$62,000",
//         description: "Manage the public image of organizations or individuals.",
//         skills: ["Media Relations", "Crisis Management", "Writing", "Social Media Management"],
//         companies: ["PR Agencies", "Corporations", "Non-profit Organizations", "Government Agencies"],
//         education: ["Bachelor's in Public Relations, Communications, or Journalism"],
//         workEnvironment: "Offices, Some Remote Work, Event Venues",
//         jobOutlook: "Stable, with 11% growth expected over the next decade",
//         challenges: ["Managing public perception during crises", "Adapting to changing media landscapes", "Measuring PR impact"],
//         rewards: ["Shaping public narratives", "Diverse and dynamic work environments", "Opportunity for high-profile projects"],
//         topColleges: [
//           { name: "University of Southern California", fees: "$58,195", duration: "4 years" },
//           { name: "New York University", fees: "$53,308", duration: "4 years" },
//           { name: "Boston University", fees: "$55,892", duration: "4 years" }
//         ]
//       },
//       {
//         jobTitle: "Sales Manager",
//         averageSalary: "$126,640",
//         description: "Lead and guide a team of sales representatives to meet company revenue goals.",
//         skills: ["Sales Strategy", "Team Leadership", "Customer Relationship Management", "Negotiation"],
//         companies: ["Oracle", "Salesforce", "IBM", "Microsoft", "ADP"],
//         education: ["Bachelor's in Business, Marketing, or related field"],
//         workEnvironment: "Offices, Client Sites, Some Travel",
//         jobOutlook: "Average, with 4% growth expected over the next decade",
//         challenges: ["Meeting aggressive sales targets", "Motivating and developing sales teams", "Adapting to changing customer needs and market conditions"],
//         rewards: ["High earning potential with commissions", "Dynamic and goal-oriented environment", "Opportunity to directly impact company growth"],
//         topColleges: [
//           { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "4 years" },
//           { name: "Michigan State University", fees: "$39,766", duration: "4 years" },
//           { name: "Indiana University (Kelley)", fees: "$36,512", duration: "4 years" }
//         ]
//       }
//     ],
//     "Financial Acumen": [
//       {
//         jobTitle: "Financial Analyst",
//         averageSalary: "$83,660",
//         description: "Provide guidance to businesses and individuals making investment decisions.",
//         skills: ["Financial Modeling", "Data Analysis", "Market Research", "Financial Reporting"],
//         companies: ["JPMorgan Chase", "Goldman Sachs", "Morgan Stanley", "BlackRock", "Vanguard"],
//         education: ["Bachelor's in Finance, Accounting, Economics, or related field"],
//         workEnvironment: "Offices, Some Remote Work",
//         jobOutlook: "Good, with 6% growth expected over the next decade",
//         challenges: ["Analyzing complex financial data", "Staying updated with market trends", "Making accurate financial projections"],
//         rewards: ["Intellectual stimulation", "Potential for high earnings", "Opportunity to influence major financial decisions"],
//         topColleges: [
//           { name: "New York University (Stern)", fees: "$53,308", duration: "4 years" },
//           { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "4 years" },
//           { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" }
//         ]
//       },
//       {
//         jobTitle: "Investment Banker",
//         averageSalary: "$101,420",
//         description: "Help companies and governments raise capital by issuing and selling securities.",
//         skills: ["Financial Modeling", "Valuation", "Mergers & Acquisitions", "Client Relationship Management"],
//         companies: ["Goldman Sachs", "JPMorgan Chase", "Morgan Stanley", "Citigroup", "Bank of America Merrill Lynch"],
//         education: ["Bachelor's in Finance, Economics, or related field; MBA often preferred"],
//         workEnvironment: "Offices, Long Hours",
//         jobOutlook: "Average, with 4% growth expected over the next decade",
//         challenges: ["High-pressure work environment", "Long and irregular hours", "Intense competition"],
//         rewards: ["Very high earning potential", "Exposure to high-profile deals", "Rapid career progression"],
//         topColleges: [
//           { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "4 years" },
//           { name: "New York University (Stern)", fees: "$53,308", duration: "4 years" },
//           { name: "Harvard University", fees: "$51,925", duration: "4 years" }
//         ]
//       }
//     ]
//   },
//   "Education": {
//     "Teaching": [
//       {
//         jobTitle: "Elementary School Teacher",
//         averageSalary: "$60,660",
//         description: "Educate young students in basic subjects like math, reading, and science.",
//         skills: ["Classroom Management", "Curriculum Development", "Communication", "Patience"],
//         companies: ["Public School Districts", "Private Schools", "Charter Schools"],
//         education: ["Bachelor's in Elementary Education", "Teaching Certification"],
//         workEnvironment: "Schools, Classrooms",
//         jobOutlook: "Average, with 4% growth expected over the next decade",
//         challenges: ["Managing diverse learning needs", "Adapting to educational policy changes", "Balancing teaching with administrative tasks"],
//         rewards: ["Shaping young minds", "Long summer breaks", "Job stability"],
//         topColleges: [
//           { name: "Vanderbilt University (Peabody)", fees: "$52,070", duration: "4 years" },
//           { name: "University of Michigan", fees: "$52,266", duration: "4 years" },
//           { name: "Teachers College, Columbia University", fees: "$48,390", duration: "2 years (Master's)" }
//         ]
//       },
//       {
//         jobTitle: "University Professor",
//         averageSalary: "$80,560",
//         description: "Teach courses in their field of expertise at the college or university level.",
//         skills: ["Research", "Lecturing", "Grant Writing", "Publishing"],
//         companies: ["Universities", "Colleges", "Community Colleges"],
//         education: ["PhD in the relevant field"],
//         workEnvironment: "Universities, Research Facilities",
//         jobOutlook: "Good, with 12% growth expected over the next decade",
//         challenges: ["Balancing teaching and research", "Securing research funding", "Publishing in competitive academic journals"],
//         rewards: ["Intellectual stimulation", "Academic freedom", "Opportunity to shape future professionals"],
//         topColleges: [
//           { name: "Stanford University", fees: "$55,473", duration: "5-7 years (PhD)" },
//           { name: "Harvard University", fees: "$51,925", duration: "5-7 years (PhD)" },
//           { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "5-7 years (PhD)" }
//         ]
//       }
//     ],
//     "Curriculum Development": [
//       {
//         jobTitle: "Instructional Designer",
//         averageSalary: "$66,290",
//         description: "Create educational experiences and instructional materials for various learning environments.",
//         skills: ["Curriculum Design", "E-learning Technologies", "Educational Psychology", "Project Management"],
//         companies: ["Educational Technology Companies", "Universities", "Corporate Training Departments"],
//         education: ["Master's in Instructional Design, Educational Technology, or related field"],
//         workEnvironment: "Offices, Remote Work",
//         jobOutlook: "Good, with 6% growth expected over the next decade",
//         challenges: ["Keeping up with evolving educational technologies", "Designing for diverse learning styles", "Measuring learning outcomes"],
//         rewards: ["Creating impactful learning experiences", "Combining creativity with education", "Potential for remote work"],
//         topColleges: [
//           { name: "Florida State University", fees: "$21,683", duration: "2 years (Master's)" },
//           { name: "Indiana University", fees: "$36,512", duration: "2 years (Master's)" },
//           { name: "University of Georgia", fees: "$27,658", duration: "2 years (Master's)" }
//         ]
//       },
//       {
//         jobTitle: "Education Policy Analyst",
//         averageSalary: "$63,270",
//         description: "Analyze and develop educational policies to improve educational systems.",
//         skills: ["Policy Analysis", "Research", "Data Analysis", "Report Writing"],
//         companies: ["Government Education Departments", "Think Tanks", "Non-profit Organizations"],
//         education: ["Master's in Education Policy, Public Policy, or related field"],
//         workEnvironment: "Offices, Some Remote Work",
//         jobOutlook: "Average, with 5% growth expected over the next decade",
//         challenges: ["Navigating complex political landscapes", "Balancing diverse stakeholder interests", "Implementing effective policy changes"],
//         rewards: ["Influencing education on a systemic level", "Contributing to educational equity", "Engaging in meaningful policy debates"],
//         topColleges: [
//           { name: "Harvard Graduate School of Education", fees: "$51,925", duration: "1 year (Master's)" },
//           { name: "Stanford Graduate School of Education", fees: "$55,473", duration: "1 year (Master's)" },
//           { name: "Teachers College, Columbia University", fees: "$48,390", duration: "2 years (Master's)" }
//         ]
//       }
//     ]
//   }
// };

// const JobCard = ({ job }) => (
//   <Card className="w-full mb-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
//     <CardHeader>
//       <CardTitle className="text-xl flex items-center justify-between">
//         <span className="flex items-center">
//           <BriefcaseIcon className="mr-2 h-5 w-5 text-primary" />
//           {job.jobTitle}
//         </span>
//         <span className="text-lg font-normal text-muted-foreground">{job.averageSalary}</span>
//       </CardTitle>
//       <CardDescription>{job.description}</CardDescription>
//     </CardHeader>
//     <CardContent>
//       <div className="flex flex-wrap gap-2 mb-4">
//         {job.skills.slice(0, 3).map((skill, index) => (
//           <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{skill}</span>
//         ))}
//         {job.skills.length > 3 && <span className="text-xs text-muted-foreground">+{job.skills.length - 3} more</span>}
//       </div>
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button variant="outline" className="w-full">
//             View Details
//             <ChevronRightIcon className="ml-2 h-4 w-4" />
//           </Button>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>{job.jobTitle}</DialogTitle>
//             <DialogDescription>Average Salary: {job.averageSalary}</DialogDescription>
//           </DialogHeader>
//           <JobDetails job={job} />
//         </DialogContent>
//       </Dialog>
//     </CardContent>
//   </Card>
// )

// const JobDetails = ({ job }) => (
//   <Tabs defaultValue="overview" className="w-full">
//     <TabsList className="grid w-full grid-cols-3">
//       <TabsTrigger value="overview">Overview</TabsTrigger>
//       <TabsTrigger value="details">Details</TabsTrigger>
//       <TabsTrigger value="colleges">Colleges</TabsTrigger>
//     </TabsList>
//     <TabsContent value="overview">
//       <ScrollArea className="h-[300px] w-full rounded-md border p-4">
//         <div className="space-y-4">
//           <div>
//             <h4 className="font-medium flex items-center"><BookOpenIcon className="mr-2 h-4 w-4" /> Description</h4>
//             <p className="text-sm">{job.description}</p>
//           </div>
//           <div>
//             <h4 className="font-medium flex items-center"><SparklesIcon className="mr-2 h-4 w-4" /> Key Skills</h4>
//             <ul className="text-sm list-disc list-inside">
//               {job.skills.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-medium flex items-center"><BuildingIcon className="mr-2 h-4 w-4" /> Top Companies</h4>
//             <p className="text-sm">{job.companies.join(', ')}</p>
//           </div>
//         </div>
//       </ScrollArea>
//     </TabsContent>
//     <TabsContent value="details">
//       <ScrollArea className="h-[300px] w-full rounded-md border p-4">
//         <div className="space-y-4">
//           <div>
//             <h4 className="font-medium flex items-center"><GraduationCapIcon className="mr-2 h-4 w-4" /> Education</h4>
//             <p className="text-sm">{job.education.join(', ')}</p>
//           </div>
//           <div>
//             <h4 className="font-medium flex items-center"><MapPinIcon className="mr-2 h-4 w-4" /> Work Environment</h4>
//             <p className="text-sm">{job.workEnvironment}</p>
//           </div>
//           <div>
//             <h4 className="font-medium flex items-center"><TrendingUpIcon className="mr-2 h-4 w-4" /> Job Outlook</h4>
//             <p className="text-sm">{job.jobOutlook}</p>
//           </div>
//           <div>
//             <h4 className="font-medium flex items-center"><BriefcaseIcon className="mr-2 h-4 w-4" /> Challenges</h4>
//             <ul className="text-sm list-disc list-inside">
//               {job.challenges.map((challenge, index) => (
//                 <li key={index}>{challenge}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-medium flex items-center"><HeartIcon className="mr-2 h-4 w-4" /> Rewards</h4>
//             <ul className="text-sm list-disc list-inside">
//               {job.rewards.map((reward, index) => (
//                 <li key={index}>{reward}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </ScrollArea>
//     </TabsContent>
//     <TabsContent value="colleges">
//       <ScrollArea className="h-[300px] w-full rounded-md border p-4">
//         <div className="space-y-4">
//           {job.topColleges.map((college, index) => (
//             <Card key={index} className="bg-primary/5">
//               <CardHeader>
//                 <CardTitle className="text-lg">{college.name}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm">Fees: {college.fees}</p>
//                 <p className="text-sm">Duration: {college.duration}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </ScrollArea>
//     </TabsContent>
//   </Tabs>
// )

// export default function CareerExplorer() {
//   const [selectedField, setSelectedField] = useState("Technology")
//   const [selectedStrength, setSelectedStrength] = useState("Problem Solving")

//   return (
//     <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
//       <h1 className="text-3xl font-bold text-center">Career Explorer</h1>
//       <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//         <Select value={selectedField} onValueChange={setSelectedField}>
//           <SelectTrigger className="w-full sm:w-[180px]">
//             <SelectValue placeholder="Select field" />
//           </SelectTrigger>
//           <SelectContent>
//             {Object.keys(careerData).map((field) => (
//               <SelectItem key={field} value={field}>{field}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//         <Select value={selectedStrength} onValueChange={setSelectedStrength}>
//           <SelectTrigger className="w-full sm:w-[180px]">
//             <SelectValue placeholder="Select strength" />
//           </SelectTrigger>
//           <SelectContent>
//             {Object.keys(careerData[selectedField]).map((strength) => (
//               <SelectItem key={strength} value={strength}>{strength}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`${selectedField}-${selectedStrength}`}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//           className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
//         >
//           {careerData[selectedField][selectedStrength].map((job, index) => (
//             <JobCard key={index} job={job} />
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   )
// }



// 'use client'

// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Loader2, ChevronRight, ChevronLeft, Sparkles, BookOpen, Building, GraduationCap, BriefcaseIcon, TrendingUpIcon, HeartIcon, BrainIcon, ClockIcon, MapPinIcon, UsersIcon } from 'lucide-react'
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { ScrollArea } from "@/components/ui/scroll-area"

// const careerData = {
//     "Technology": {
//       "Problem Solving": [
//         {
//           jobTitle: "Software Engineer",
//           averageSalary: "$92,000",
//           description: "Design, develop, and maintain software systems and applications.",
//           skills: ["Programming", "Algorithms", "Data Structures", "Software Architecture"],
//           companies: ["Google", "Microsoft", "Amazon", "Apple", "Facebook"],
//           education: ["Computer Science", "Software Engineering", "Information Technology"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Excellent, with 22% growth expected over the next decade",
//           challenges: ["Keeping up with rapidly evolving technologies", "Debugging complex systems", "Meeting tight deadlines"],
//           rewards: ["Creating innovative solutions", "High earning potential", "Opportunities for career advancement"],
//           topColleges: [
//             { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
//             { name: "Stanford University", fees: "$55,473", duration: "4 years" },
//             { name: "Carnegie Mellon University", fees: "$57,560", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Data Scientist",
//           averageSalary: "$100,000",
//           description: "Analyze complex data to help companies make better decisions.",
//           skills: ["Machine Learning", "Statistics", "Python", "Data Visualization"],
//           companies: ["IBM", "Netflix", "Airbnb", "Uber", "LinkedIn"],
//           education: ["Data Science", "Statistics", "Computer Science", "Mathematics"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Very good, with 36% growth expected over the next decade",
//           challenges: ["Handling large datasets", "Communicating complex findings to non-technical stakeholders", "Ensuring data privacy and security"],
//           rewards: ["Solving real-world problems with data", "High demand across industries", "Intellectual stimulation"],
//           topColleges: [
//             { name: "Harvard University", fees: "$51,925", duration: "4 years" },
//             { name: "University of California, Berkeley", fees: "$44,007", duration: "4 years" },
//             { name: "Georgia Institute of Technology", fees: "$33,020", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Cybersecurity Analyst",
//           averageSalary: "$99,730",
//           description: "Protect computer networks and systems from cyber threats and attacks.",
//           skills: ["Network Security", "Ethical Hacking", "Risk Analysis", "Incident Response"],
//           companies: ["Cisco", "Palo Alto Networks", "FireEye", "CrowdStrike", "Symantec"],
//           education: ["Cybersecurity", "Information Security", "Computer Science"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Excellent, with 31% growth expected over the next decade",
//           challenges: ["Staying ahead of evolving cyber threats", "Managing security in cloud environments", "Balancing security with user accessibility"],
//           rewards: ["Protecting vital information and systems", "High demand and job security", "Continuous learning and growth"],
//           topColleges: [
//             { name: "Purdue University", fees: "$28,794", duration: "4 years" },
//             { name: "Rochester Institute of Technology", fees: "$45,890", duration: "4 years" },
//             { name: "University of Maryland", fees: "$36,891", duration: "4 years" }
//           ]
//         }
//       ],
//       "Creativity": [
//         {
//           jobTitle: "UX/UI Designer",
//           averageSalary: "$85,000",
//           description: "Create intuitive and visually appealing user interfaces for digital products.",
//           skills: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
//           companies: ["Airbnb", "Uber", "Adobe", "Figma", "Spotify"],
//           education: ["Graphic Design", "Human-Computer Interaction", "Digital Media"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Good, with 13% growth expected over the next decade",
//           challenges: ["Balancing aesthetics with functionality", "Keeping up with design trends and user expectations", "Collaborating with diverse teams"],
//           rewards: ["Seeing your designs come to life", "Improving user experiences", "Combining creativity with technology"],
//           topColleges: [
//             { name: "Rhode Island School of Design", fees: "$52,860", duration: "4 years" },
//             { name: "Parsons School of Design", fees: "$49,844", duration: "4 years" },
//             { name: "California Institute of the Arts", fees: "$51,466", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Game Developer",
//           averageSalary: "$79,000",
//           description: "Design and program video games for various platforms.",
//           skills: ["Game Engines (Unity, Unreal)", "3D Modeling", "Scripting", "Game Design"],
//           companies: ["Electronic Arts", "Ubisoft", "Blizzard", "Nintendo", "Rockstar Games"],
//           education: ["Game Development", "Computer Science", "Interactive Media"],
//           workEnvironment: "Office, with some remote opportunities",
//           jobOutlook: "Favorable, with 11% growth expected over the next decade",
//           challenges: ["Meeting tight deadlines in a fast-paced industry", "Balancing creativity with technical constraints", "Adapting to rapidly changing gaming trends"],
//           rewards: ["Bringing imaginative worlds to life", "Combining passion for gaming with career", "Potential for high-profile projects"],
//           topColleges: [
//             { name: "University of Southern California", fees: "$58,195", duration: "4 years" },
//             { name: "DigiPen Institute of Technology", fees: "$35,000", duration: "4 years" },
//             { name: "Rochester Institute of Technology", fees: "$45,890", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Digital Animator",
//           averageSalary: "$77,700",
//           description: "Create animated visual effects for films, TV shows, video games, and other media.",
//           skills: ["3D Animation Software", "Character Design", "Storyboarding", "Motion Graphics"],
//           companies: ["Pixar", "DreamWorks", "Walt Disney Animation Studios", "Weta Digital", "Industrial Light & Magic"],
//           education: ["Animation", "Fine Arts", "Computer Graphics"],
//           workEnvironment: "Studios, some remote work possible",
//           jobOutlook: "Good, with 16% growth expected over the next decade",
//           challenges: ["Mastering complex animation software", "Meeting tight production deadlines", "Staying current with evolving animation techniques"],
//           rewards: ["Bringing characters and stories to life", "Working on high-profile entertainment projects", "Combining artistic skills with technology"],
//           topColleges: [
//             { name: "California Institute of the Arts", fees: "$51,466", duration: "4 years" },
//             { name: "Ringling College of Art and Design", fees: "$45,130", duration: "4 years" },
//             { name: "Savannah College of Art and Design", fees: "$37,575", duration: "4 years" }
//           ]
//         }
//       ],
//       "Innovation": [
//         {
//           jobTitle: "AI Research Scientist",
//           averageSalary: "$114,121",
//           description: "Develop and improve artificial intelligence algorithms and systems.",
//           skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
//           companies: ["Google AI", "OpenAI", "DeepMind", "Microsoft Research", "IBM Research"],
//           education: ["PhD in Computer Science", "AI", "Machine Learning"],
//           workEnvironment: "Research Labs, Universities, Tech Companies",
//           jobOutlook: "Excellent, with 22% growth expected over the next decade",
//           challenges: ["Pushing the boundaries of AI capabilities", "Ethical considerations in AI development", "Translating research into practical applications"],
//           rewards: ["Contributing to cutting-edge technology", "Potential for groundbreaking discoveries", "High intellectual stimulation"],
//           topColleges: [
//             { name: "Stanford University", fees: "$55,473", duration: "4-6 years (PhD)" },
//             { name: "Carnegie Mellon University", fees: "$57,560", duration: "4-6 years (PhD)" },
//             { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4-6 years (PhD)" }
//           ]
//         },
//         {
//           jobTitle: "Robotics Engineer",
//           averageSalary: "$85,620",
//           description: "Design, build, and maintain robots for various applications.",
//           skills: ["Mechanical Engineering", "Programming", "Control Systems", "Machine Vision"],
//           companies: ["Boston Dynamics", "iRobot", "ABB", "FANUC", "Intuitive Surgical"],
//           education: ["Robotics Engineering", "Mechanical Engineering", "Electrical Engineering"],
//           workEnvironment: "Research Labs, Manufacturing Facilities, Tech Companies",
//           jobOutlook: "Very good, with 9% growth expected over the next decade",
//           challenges: ["Integrating complex systems", "Ensuring robot safety and reliability", "Adapting to diverse application environments"],
//           rewards: ["Creating tangible, interactive technologies", "Potential for significant societal impact", "Working at the forefront of automation"],
//           topColleges: [
//             { name: "Carnegie Mellon University", fees: "$57,560", duration: "4 years" },
//             { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
//             { name: "University of Michigan", fees: "$52,266", duration: "4 years" }
//           ]
//         }
//       ]
//     },
//     "Medicine": {
//       "Empathy": [
//         {
//           jobTitle: "Pediatrician",
//           averageSalary: "$177,000",
//           description: "Provide medical care for infants, children, and adolescents.",
//           skills: ["Patient Care", "Diagnosis", "Communication", "Pediatric Medicine"],
//           companies: ["Children's Hospitals", "Private Practices", "Community Health Centers"],
//           education: ["Medical Degree (MD or DO)", "Pediatric Residency"],
//           workEnvironment: "Hospitals, Clinics, Private Practices",
//           jobOutlook: "Good, with 3% growth expected over the next decade",
//           challenges: ["Communicating with young patients and their families", "Staying updated on pediatric health trends", "Managing emotional stress"],
//           rewards: ["Making a difference in children's lives", "Building long-term relationships with families", "Diverse and rewarding patient interactions"],
//           topColleges: [
//             { name: "Harvard Medical School", fees: "$65,203", duration: "4 years" },
//             { name: "Johns Hopkins University School of Medicine", fees: "$54,900", duration: "4 years" },
//             { name: "University of Pennsylvania Perelman School of Medicine", fees: "$61,586", duration: "4 years" }
//           ]
//         },
//         {
//           jobTitle: "Mental Health Counselor",
//           averageSalary: "$47,000",
//           description: "Help individuals, families, and groups manage mental health issues.",
//           skills: ["Active Listening", "Counseling Techniques", "Psychological Assessment", "Empathy"],
//           companies: ["Mental Health Clinics", "Schools", "Private Practices", "Community Organizations"],
//           education: ["Master's in Counseling or Psychology", "State Licensure"],
//           workEnvironment: "Offices, Clinics, Schools, or Remote (Teletherapy)",
//           jobOutlook: "Excellent, with 23% growth expected over the next decade",
//           challenges: ["Managing emotional boundaries", "Addressing diverse mental health needs", "Keeping up with evolving treatment methods"],
//           rewards: ["Helping people overcome challenges", "Promoting mental wellness", "Flexible career options"],
//           topColleges: [
//             { name: "Columbia University", fees: "$48,390", duration: "2 years" },
//             { name: "New York University", fees: "$45,426", duration: "2 years" },
//             { name: "University of California, Los Angeles", fees: "$28,000", duration: "2 years" }
//           ]
//         },
//         {
//           jobTitle: "Nurse Practitioner",
//           averageSalary: "$111,680",
//           description: "Provide advanced nursing care and can prescribe medication in most states.",
//           skills: ["Patient Assessment", "Diagnosis", "Treatment Planning", "Health Education"],
//           companies: ["Hospitals", "Private Practices", "Community Health Centers", "Urgent Care Clinics"],
//           education: ["Master of Science in Nursing", "Nurse Practitioner Certification"],
//           workEnvironment: "Various Healthcare Settings",
//           jobOutlook: "Excellent, with 45% growth expected over the next decade",
//           challenges: ["Managing complex patient cases", "Staying updated with medical advancements", "Balancing autonomy and collaboration with physicians"],
//           rewards: ["High level of patient care autonomy", "Strong job security and growth", "Opportunity to specialize in various fields"],
//           topColleges: [
//             { name: "Johns Hopkins University", fees: "$54,900", duration: "2 years" },
//             { name: "University of Pennsylvania", fees: "$61,586", duration: "2 years" },
//             { name: "Duke University", fees: "$55,888", duration: "2 years" }
//           ]
//         }
//       ],
//       "Analytical Thinking": [
//         {
//           jobTitle: "Medical Researcher",
//           averageSalary: "$88,000",
//           description: "Conduct research to improve human health and medical treatments.",
//           skills: ["Research Design", "Data Analysis", "Laboratory Techniques", "Scientific Writing"],
//           companies: ["Pharmaceutical Companies", "Research Institutions", "Universities", "Government Agencies"],
//           education: ["PhD in Biomedical Sciences or related field", "Medical Degree for some positions"],
//           workEnvironment: "Laboratories, Research Facilities",
//           jobOutlook: "Good, with 6% growth expected over the next decade",
//           challenges: ["Securing research funding", "Publishing in competitive journals", "Translating research into practical applications"],
//           rewards: ["Contributing to medical breakthroughs", "Intellectual stimulation", "Potential for global impact"],
//           topColleges: [
//             { name: "Stanford University School of Medicine", fees: "$56,229", duration: "4-6 years" },
//             { name: "University of California, San Francisco", fees: "$35,148", duration: "4-6 years" },
//             { name: "Washington University in St. Louis", fees: "$58,460", duration: "4-6 years" }
//           ]
//         },
//         {
//           jobTitle: "Biostatistician",
//           averageSalary: "$92,000",
//           description: "Apply statistical methods to analyze health-related data.",
//           skills: ["Statistical Analysis", "Data Modeling", "Programming (R, SAS, Python)", "Study Design"],
//           companies: ["Pharmaceutical Companies", "Research Institutions", "Government Health Agencies", "Hospitals"],
//           education: ["Master's or PhD in Biostatistics or Statistics"],
//           workEnvironment: "Offices, Research Centers",
//           jobOutlook: "Excellent, with 33% growth expected over the next decade",
//           challenges: ["Handling large and complex datasets", "Communicating statistical findings to non-experts", "Ensuring data integrity and validity"],
//           rewards: ["Contributing to evidence-based medicine", "Diverse application areas", "High demand across health sectors"],
//           topColleges: [
//             { name: "Harvard T.H. Chan School of Public Health", fees: "$63,440", duration: "2 years" },
//             { name: "Johns Hopkins Bloomberg School of Public Health", fees: "$62,592", duration: "2 years" },
//             { name: "University of Michigan School of Public Health", fees: "$47,006", duration: "2 years" }
//         ]
//       },
//       {
//         jobTitle: "Epidemiologist",
//         averageSalary: "$74,560",
//         description: "Study patterns and causes of diseases in human populations.",
//         skills: ["Data Analysis", "Research Methodology", "Public Health Knowledge", "Statistical Software"],
//         companies: ["Centers for Disease Control and Prevention", "World Health Organization", "Universities", "State Health Departments"],
//         education: ["Master's or PhD in Epidemiology or Public Health"],
//         workEnvironment: "Government Agencies, Research Institutions, Universities",
//         jobOutlook: "Good, with 30% growth expected over the next decade",
//         challenges: ["Analyzing complex health data", "Responding to public health emergencies", "Communicating findings to policymakers and the public"],
//         rewards: ["Contributing to disease prevention and control", "Potential for global impact", "Diverse research opportunities"],
//         topColleges: [
//           { name: "Johns Hopkins Bloomberg School of Public Health", fees: "$62,592", duration: "2 years" },
//           { name: "Harvard T.H. Chan School of Public Health", fees: "$63,440", duration: "2 years" },
//           { name: "Columbia University Mailman School of Public Health", fees: "$48,390", duration: "2 years" }
//         ]
//       }
//     ],
//     "Precision and Dexterity": [
//       {
//         jobTitle: "Surgeon",
//         averageSalary: "$409,665",
//         description: "Perform operations to treat injuries, diseases, and deformities.",
//         skills: ["Surgical Techniques", "Anatomy Knowledge", "Decision Making", "Hand-eye Coordination"],
//         companies: ["Hospitals", "Surgical Centers", "Private Practices"],
//         education: ["Medical Degree", "Surgical Residency", "Fellowship for Specialization"],
//         workEnvironment: "Hospitals, Operating Rooms",
//         jobOutlook: "Good, with 3% growth expected over the next decade",
//         challenges: ["High-stress environment", "Long and irregular hours", "Continuous learning of new surgical techniques"],
//         rewards: ["Directly saving and improving lives", "High earning potential", "Respect and prestige"],
//         topColleges: [
//           { name: "Johns Hopkins University School of Medicine", fees: "$54,900", duration: "4 years + 5-7 years residency" },
//           { name: "Harvard Medical School", fees: "$65,203", duration: "4 years + 5-7 years residency" },
//           { name: "Stanford University School of Medicine", fees: "$56,229", duration: "4 years + 5-7 years residency" }
//         ]
//       },
//       {
//         jobTitle: "Dentist",
//         averageSalary: "$164,010",
//         description: "Diagnose and treat problems with patients' teeth, gums, and related parts of the mouth.",
//         skills: ["Dental Procedures", "Patient Care", "Manual Dexterity", "Diagnostic Skills"],
//         companies: ["Private Practices", "Dental Clinics", "Hospitals"],
//         education: ["Doctor of Dental Surgery (DDS) or Doctor of Dental Medicine (DMD)"],
//         workEnvironment: "Dental Offices, Clinics",
//         jobOutlook: "Good, with 3% growth expected over the next decade",
//         challenges: ["Managing patient anxiety", "Staying updated with dental technologies", "Running a business (for private practice)"],
//         rewards: ["Improving oral health and smiles", "Potential for owning a practice", "Regular working hours"],
//         topColleges: [
//           { name: "University of Michigan School of Dentistry", fees: "$52,266", duration: "4 years" },
//           { name: "Harvard School of Dental Medicine", fees: "$65,203", duration: "4 years" },
//           { name: "University of California, San Francisco School of Dentistry", fees: "$35,148", duration: "4 years" }
//         ]
//       }
//     ]
//   },
//   "Business": {
//     "Leadership": [
//       {
//         jobTitle: "Management Consultant",
//         averageSalary: "$87,000",
//         description: "Advise organizations on improving their performance and operations.",
//         skills: ["Strategic Thinking", "Problem-Solving", "Business Analysis", "Project Management"],
//         companies: ["McKinsey & Company", "Boston Consulting Group", "Bain & Company", "Deloitte", "Accenture"],
//         education: ["MBA or related Master's degree", "Bachelor's degree for entry-level positions"],
//         workEnvironment: "Office and Client Sites, Frequent Travel",
//         jobOutlook: "Good, with 14% growth expected over the next decade",
//         challenges: ["Adapting to diverse client environments", "Managing tight project deadlines", "Balancing multiple client engagements"],
//         rewards: ["Exposure to various industries", "High earning potential", "Rapid career progression"],
//         topColleges: [
//           { name: "Harvard Business School", fees: "$73,440", duration: "2 years" },
//           { name: "Stanford Graduate School of Business", fees: "$74,706", duration: "2 years" },
//           { name: "Wharton School of the University of Pennsylvania", fees: "$81,378", duration: "2 years" }
//         ]
//       },
//       {
//         jobTitle: "Entrepreneur",
//         averageSalary: "Varies widely",
//         description: "Start and run your own business ventures.",
//         skills: ["Business Planning", "Financial Management", "Marketing", "Networking"],
//         companies: "Self-employed, various startups",
//         education: ["No specific requirement, but business education can be beneficial"],
//         workEnvironment: "Varied - Office, Remote, On-site",
//         jobOutlook: "Dependent on economic conditions and individual success",
//         challenges: ["Securing funding", "Managing all aspects of a business", "Dealing with uncertainty and risk"],
//         rewards: ["Being your own boss", "Potential for high financial returns", "Bringing innovative ideas to life"],
//         topColleges: [
//           { name: "Babson College", fees: "$52,608", duration: "4 years" },
//           { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
//           { name: "Stanford University", fees: "$55,473", duration: "4 years" }
//         ]
//       },
//       {
//         jobTitle: "Chief Executive Officer (CEO)",
//         averageSalary: "$193,850",
//         description: "Provide overall direction and strategy for an organization.",
//         skills: ["Strategic Planning", "Leadership", "Decision Making", "Financial Management"],
//         companies: "All major corporations and many smaller businesses",
//         education: ["MBA or related Master's degree", "Significant industry experience"],
//         workEnvironment: "Corporate Offices, Some Travel",
//         jobOutlook: "Stable, with 4% growth expected over the next decade",
//         challenges: ["Managing diverse stakeholder interests", "Navigating complex business environments", "Maintaining company growth and profitability"],
//         rewards: ["High level of influence", "Substantial compensation packages", "Opportunity to shape organizational direction"],
//         topColleges: [
//           { name: "Harvard Business School", fees: "$73,440", duration: "2 years" },
//           { name: "Stanford Graduate School of Business", fees: "$74,706", duration: "2 years" },
//           { name: "INSEAD", fees: "€89,000", duration: "1 year" }
//         ]
//       }
//     ],
//     "Communication": [
//       {
//         jobTitle: "Marketing Manager",
//         averageSalary: "$136,000",
//         description: "Develop and implement marketing strategies to promote products or services.",
//         skills: ["Marketing Strategy", "Brand Management", "Digital Marketing", "Analytics"],
//         companies: ["Procter & Gamble", "Unilever", "Coca-Cola", "Nike", "Apple"],
//         education: ["Bachelor's or Master's in Marketing, Business, or related field"],
//         workEnvironment: "Corporate Offices, Some Remote Work",
//         jobOutlook: "Good, with 10% growth expected over the next decade",
//         challenges: ["Keeping up with rapidly changing digital landscape", "Measuring marketing ROI", "Managing diverse marketing channels"],
//         rewards: ["Creative expression in business context", "Opportunity to influence consumer behavior", "Dynamic and evolving field"],
//         topColleges: [
//           { name: "Northwestern University (Kellogg)", fees: "$74,468", duration: "2 years" },
//           { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "2 years" },
//           { name: "Columbia Business School", fees: "$77,376", duration: "2 years" }
//         ]
//       },
//       {
//         jobTitle: "Public Relations Specialist",
//         averageSalary: "$62,000",
//         description: "Manage the public image of organizations or individuals.",
//         skills: ["Media Relations", "Crisis Management", "Writing", "Social Media Management"],
//         companies: ["PR Agencies", "Corporations", "Non-profit Organizations", "Government Agencies"],
//         education: ["Bachelor's in Public Relations, Communications, or Journalism"],
//         workEnvironment: "Offices, Some Remote Work, Event Venues",
//         jobOutlook: "Stable, with 11% growth expected over the next decade",
//         challenges: ["Managing public perception during crises", "Adapting to changing media landscapes", "Measuring PR impact"],
//         rewards: ["Shaping public narratives", "Diverse and dynamic work environments", "Opportunity for high-profile projects"],
//         topColleges: [
//           { name: "University of Southern California", fees: "$58,195", duration: "4 years" },
//           { name: "New York University", fees: "$53,308", duration: "4 years" },
//           { name: "Boston University", fees: "$55,892", duration: "4 years" }
//         ]
//       },
//       {
//         jobTitle: "Sales Manager",
//         averageSalary: "$126,640",
//         description: "Lead and guide a team of sales representatives to meet company revenue goals.",
//         skills: ["Sales Strategy", "Team Leadership", "Customer Relationship Management", "Negotiation"],
//         companies: ["Oracle", "Salesforce", "IBM", "Microsoft", "ADP"],
//         education: ["Bachelor's in Business, Marketing, or related field"],
//         workEnvironment: "Offices, Client Sites, Some Travel",
//         jobOutlook: "Average, with 4% growth expected over the next decade",
//         challenges: ["Meeting aggressive sales targets", "Motivating and developing sales teams", "Adapting to changing customer needs and market conditions"],
//         rewards: ["High earning potential with commissions", "Dynamic and goal-oriented environment", "Opportunity to directly impact company growth"],
//         topColleges: [
//           { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "4 years" },
//           { name: "Michigan State University", fees: "$39,766", duration: "4 years" },
//           { name: "Indiana University (Kelley)", fees: "$36,512", duration: "4 years" }
//         ]
//       }
//     ],
//     "Financial Acumen": [
//       {
//         jobTitle: "Financial Analyst",
//         averageSalary: "$83,660",
//         description: "Provide guidance to businesses and individuals making investment decisions.",
//         skills: ["Financial Modeling", "Data Analysis", "Market Research", "Financial Reporting"],
//         companies: ["JPMorgan Chase", "Goldman Sachs", "Morgan Stanley", "BlackRock", "Vanguard"],
//         education: ["Bachelor's in Finance, Accounting, Economics, or related field"],
//         workEnvironment: "Offices, Some Remote Work",
//         jobOutlook: "Good, with 6% growth expected over the next decade",
//         challenges: ["Analyzing complex financial data", "Staying updated with market trends", "Making accurate financial projections"],
//         rewards: ["Intellectual stimulation", "Potential for high earnings", "Opportunity to influence major financial decisions"],
//         topColleges: [
//           { name: "New York University (Stern)", fees: "$53,308", duration: "4 years" },
//           { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "4 years" },
//           { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" }
//         ]
//       },
//       {
//         jobTitle: "Investment Banker",
//         averageSalary: "$101,420",
//         description: "Help companies and governments raise capital by issuing and selling securities.",
//         skills: ["Financial Modeling", "Valuation", "Mergers & Acquisitions", "Client Relationship Management"],
//         companies: ["Goldman Sachs", "JPMorgan Chase", "Morgan Stanley", "Citigroup", "Bank of America Merrill Lynch"],
//         education: ["Bachelor's in Finance, Economics, or related field; MBA often preferred"],
//         workEnvironment: "Offices, Long Hours",
//         jobOutlook: "Average, with 4% growth expected over the next decade",
//         challenges: ["High-pressure work environment", "Long and irregular hours", "Intense competition"],
//         rewards: ["Very high earning potential", "Exposure to high-profile deals", "Rapid career progression"],
//         topColleges: [
//           { name: "University of Pennsylvania (Wharton)", fees: "$81,378", duration: "4 years" },
//           { name: "New York University (Stern)", fees: "$53,308", duration: "4 years" },
//           { name: "Harvard University", fees: "$51,925", duration: "4 years" }
//         ]
//       }
//     ]
//   },
//   "Education": {
//     "Teaching": [
//       {
//         jobTitle: "Elementary School Teacher",
//         averageSalary: "$60,660",
//         description: "Educate young students in basic subjects like math, reading, and science.",
//         skills: ["Classroom Management", "Curriculum Development", "Communication", "Patience"],
//         companies: ["Public School Districts", "Private Schools", "Charter Schools"],
//         education: ["Bachelor's in Elementary Education", "Teaching Certification"],
//         workEnvironment: "Schools, Classrooms",
//         jobOutlook: "Average, with 4% growth expected over the next decade",
//         challenges: ["Managing diverse learning needs", "Adapting to educational policy changes", "Balancing teaching with administrative tasks"],
//         rewards: ["Shaping young minds", "Long summer breaks", "Job stability"],
//         topColleges: [
//           { name: "Vanderbilt University (Peabody)", fees: "$52,070", duration: "4 years" },
//           { name: "University of Michigan", fees: "$52,266", duration: "4 years" },
//           { name: "Teachers College, Columbia University", fees: "$48,390", duration: "2 years (Master's)" }
//         ]
//       },
//       {
//         jobTitle: "University Professor",
//         averageSalary: "$80,560",
//         description: "Teach courses in their field of expertise at the college or university level.",
//         skills: ["Research", "Lecturing", "Grant Writing", "Publishing"],
//         companies: ["Universities", "Colleges", "Community Colleges"],
//         education: ["PhD in the relevant field"],
//         workEnvironment: "Universities, Research Facilities",
//         jobOutlook: "Good, with 12% growth expected over the next decade",
//         challenges: ["Balancing teaching and research", "Securing research funding", "Publishing in competitive academic journals"],
//         rewards: ["Intellectual stimulation", "Academic freedom", "Opportunity to shape future professionals"],
//         topColleges: [
//           { name: "Stanford University", fees: "$55,473", duration: "5-7 years (PhD)" },
//           { name: "Harvard University", fees: "$51,925", duration: "5-7 years (PhD)" },
//           { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "5-7 years (PhD)" }
//         ]
//       }
//     ],
//     "Curriculum Development": [
//       {
//         jobTitle: "Instructional Designer",
//         averageSalary: "$66,290",
//         description: "Create educational experiences and instructional materials for various learning environments.",
//         skills: ["Curriculum Design", "E-learning Technologies", "Educational Psychology", "Project Management"],
//         companies: ["Educational Technology Companies", "Universities", "Corporate Training Departments"],
//         education: ["Master's in Instructional Design, Educational Technology, or related field"],
//         workEnvironment: "Offices, Remote Work",
//         jobOutlook: "Good, with 6% growth expected over the next decade",
//         challenges: ["Keeping up with evolving educational technologies", "Designing for diverse learning styles", "Measuring learning outcomes"],
//         rewards: ["Creating impactful learning experiences", "Combining creativity with education", "Potential for remote work"],
//         topColleges: [
//           { name: "Florida State University", fees: "$21,683", duration: "2 years (Master's)" },
//           { name: "Indiana University", fees: "$36,512", duration: "2 years (Master's)" },
//           { name: "University of Georgia", fees: "$27,658", duration: "2 years (Master's)" }
//         ]
//       },
//       {
//         jobTitle: "Education Policy Analyst",
//         averageSalary: "$63,270",
//         description: "Analyze and develop educational policies to improve educational systems.",
//         skills: ["Policy Analysis", "Research", "Data Analysis", "Report Writing"],
//         companies: ["Government Education Departments", "Think Tanks", "Non-profit Organizations"],
//         education: ["Master's in Education Policy, Public Policy, or related field"],
//         workEnvironment: "Offices, Some Remote Work",
//         jobOutlook: "Average, with 5% growth expected over the next decade",
//         challenges: ["Navigating complex political landscapes", "Balancing diverse stakeholder interests", "Implementing effective policy changes"],
//         rewards: ["Influencing education on a systemic level", "Contributing to educational equity", "Engaging in meaningful policy debates"],
//         topColleges: [
//           { name: "Harvard Graduate School of Education", fees: "$51,925", duration: "1 year (Master's)" },
//           { name: "Stanford Graduate School of Education", fees: "$55,473", duration: "1 year (Master's)" },
//           { name: "Teachers College, Columbia University", fees: "$48,390", duration: "2 years (Master's)" }
//         ]
//       }
//     ]
//   }
// };

// const strengthOptions = [
//   { value: "Problem Solving", label: "Problem Solving 🧠", emoji: "🧠" },
//   { value: "Creativity", label: "Creativity 🎨", emoji: "🎨" },
//   { value: "Empathy", label: "Empathy 🤗", emoji: "🤗" },
//   { value: "Analytical Thinking", label: "Analytical Thinking 🔬", emoji: "🔬" },
//   { value: "Leadership", label: "Leadership 👑", emoji: "👑" },
//   { value: "Communication", label: "Communication 🗣️", emoji: "🗣️" },
// ]

// export default function CareerExplorer() {
//   const [page, setPage] = useState(1)
//   const [formData, setFormData] = useState({
//     tenthPercentage: '',
//     twelfthPercentage: '',
//     interest: '',
//     strength: ''
//   })
//   const [isLoading, setIsLoading] = useState(false)
//   const [careerSuggestions, setCareerSuggestions] = useState([])

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handleNext = () => {
//     if (page === 4) {
//       setIsLoading(true)
//       // Simulate AI prediction
//       setTimeout(() => {
//         setCareerSuggestions(careerData[formData.interest][formData.strength])
//         setIsLoading(false)
//         setPage(prevPage => prevPage + 1)
//       }, 2000)
//     } else {
//       setPage(prevPage => prevPage + 1)
//     }
//   }

//   const handleBack = () => {
//     setPage(prevPage => prevPage - 1)
//   }

//   const handleSkip = (field) => {
//     setFormData(prevData => ({
//       ...prevData,
//       [field]: 'Skipped'
//     }))
//     handleNext()
//   }

//   const renderPage = () => {
//     switch(page) {
//       case 1:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>10th Grade Percentage (Optional)</CardTitle>
//                 <CardDescription>Enter your 10th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="tenthPercentage"
//                     name="tenthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.tenthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={() => handleSkip('tenthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 2:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>12th Grade Percentage (Optional)</CardTitle>
//                 <CardDescription>Enter your 12th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="twelfthPercentage"
//                     name="twelfthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.twelfthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={() => handleSkip('twelfthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 3:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Area of Interest (Required)</CardTitle>
//                 <CardDescription>Select your primary area of interest</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <RadioGroup name="interest" onValueChange={(value) => handleInputChange({ target: { name: 'interest', value } })}>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Technology" id="technology" />
//                     <Label htmlFor="technology">Technology 💻</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Medicine" id="medicine" />
//                     <Label htmlFor="medicine">Medicine 🏥</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Business" id="business" />
//                     <Label htmlFor="business">Business 💼</Label>
//                   </div>
//                 </RadioGroup>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={handleNext} disabled={!formData.interest}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 4:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Your Biggest Strength (Required)</CardTitle>
//                 <CardDescription>What do you consider your biggest strength?</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <Select onValueChange={(value) => handleInputChange({ target: { name: 'strength', value } })}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Select your biggest strength" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {strengthOptions.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={handleNext} disabled={!formData.strength}>Submit <Sparkles className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 5:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Your Career Suggestions</CardTitle>
//                 <CardDescription>Based on your interest in {formData.interest} and strength in {formData.strength}</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {isLoading ? (
//                   <div className="flex flex-col items-center justify-center h-64">
//                     <Loader2 className="h-8 w-8 animate-spin" />
//                     <p className="mt-4 text-sm text-muted-foreground">AI is analyzing your profile...</p>
//                   </div>
//                 ) : (
//                   <ul className="space-y-4">
//                     {careerSuggestions.map((job, index) => (
//                       <li key={index}>
//                         <Dialog>
//                           <DialogTrigger asChild>
//                             <Button
//                               variant="outline"
//                               className="w-full justify-between text-left font-normal"
//                             >
//                               <span>{job.jobTitle}</span>
//                               <span>{job.averageSalary}</span>
//                             </Button>
//                           </DialogTrigger>
//                           <DialogContent className="sm:max-w-[425px]">
//                             <DialogHeader>
//                               <DialogTitle>{job.jobTitle}</DialogTitle>
//                               <DialogDescription>Average Salary: {job.averageSalary}</DialogDescription>
//                             </DialogHeader>
//                             <ScrollArea className="h-[400px] w-full rounded-md border p-4">
//                               <div className="space-y-4">
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><BookOpen className="mr-2 h-4 w-4" /> Description</h4>
//                                   <p className="text-sm">{job.description}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><Sparkles className="mr-2 h-4 w-4" /> Key Skills</h4>
//                                   <ul className="text-sm list-disc list-inside">
//                                     {job.skills.map((skill, index) => (
//                                       <li key={index}>{skill}</li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><Building className="mr-2 h-4 w-4" /> Top Companies</h4>
//                                   <p className="text-sm">{job.companies.join(', ')}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><GraduationCap className="mr-2 h-4 w-4" /> Education</h4>
//                                   <p className="text-sm">{Array.isArray(job.education) ? job.education.join(', ') : job.education}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><MapPinIcon className="mr-2 h-4 w-4" /> Work Environment</h4>
//                                   <p className="text-sm">{job.workEnvironment}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><TrendingUpIcon className="mr-2 h-4 w-4" /> Job Outlook</h4>
//                                   <p className="text-sm">{job.jobOutlook}</p>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><BriefcaseIcon className="mr-2 h-4 w-4" /> Challenges</h4>
//                                   <ul className="text-sm list-disc list-inside">
//                                     {job.challenges.map((challenge, index) => (
//                                       <li key={index}>{challenge}</li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-medium flex items-center"><HeartIcon className="mr-2 h-4 w-4" /> Rewards</h4>
//                                   <ul className="text-sm list-disc list-inside">
//                                     {job.rewards.map((reward, index) => (
//                                       <li key={index}>{reward}</li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                               </div>
//                             </ScrollArea>
//                           </DialogContent>
//                         </Dialog>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-background rounded-lg shadow-lg space-y-6">
//       <Progress value={(page / 5) * 100} className="w-full" />
//       <AnimatePresence mode="wait">
//         {renderPage()}
//       </AnimatePresence>
//     </div>
//   )
// }





// 'use client'

// import React, { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useNavigate } from 'react-router-dom'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Loader2, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react'

// const careerData = {
//     "Technology": {
//       "Problem Solving": [
//         {
//           jobTitle: "Software Engineer",
//           averageSalary: "$92,000",
//           description: "Design, develop, and maintain software systems and applications.",
//           skills: ["Programming", "Algorithms", "Data Structures", "Software Architecture"],
//           companies: ["Google", "Microsoft", "Amazon", "Apple", "Facebook"],
//           education: ["Computer Science", "Software Engineering", "Information Technology"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Excellent, with 22% growth expected over the next decade",
//           challenges: ["Keeping up with rapidly evolving technologies", "Debugging complex systems", "Meeting tight deadlines"],
//           rewards: ["Creating innovative solutions", "High earning potential", "Opportunities for career advancement"],
//           topColleges: [
//             { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
//             { name: "Stanford University", fees: "$55,473", duration: "4 years" },
//             { name: "Carnegie Mellon University", fees: "$57,560", duration: "4 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         },
//         {
//           jobTitle: "Data Scientist",
//           averageSalary: "$100,000",
//           description: "Analyze complex data to help companies make better decisions.",
//           skills: ["Machine Learning", "Statistics", "Python", "Data Visualization"],
//           companies: ["IBM", "Netflix", "Airbnb", "Uber", "LinkedIn"],
//           education: ["Data Science", "Statistics", "Computer Science", "Mathematics"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Very good, with 36% growth expected over the next decade",
//           challenges: ["Handling large datasets", "Communicating complex findings to non-technical stakeholders", "Ensuring data privacy and security"],
//           rewards: ["Solving real-world problems with data", "High demand across industries", "Intellectual stimulation"],
//           topColleges: [
//             { name: "Harvard University", fees: "$51,925", duration: "4 years" },
//             { name: "University of California, Berkeley", fees: "$44,007", duration: "4 years" },
//             { name: "Georgia Institute of Technology", fees: "$33,020", duration: "4 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         },
//         {
//           jobTitle: "Cybersecurity Analyst",
//           averageSalary: "$99,730",
//           description: "Protect computer networks and systems from cyber threats and attacks.",
//           skills: ["Network Security", "Ethical Hacking", "Risk Analysis", "Incident Response"],
//           companies: ["Cisco", "Palo Alto Networks", "FireEye", "CrowdStrike", "Symantec"],
//           education: ["Cybersecurity", "Information Security", "Computer Science"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Excellent, with 31% growth expected over the next decade",
//           challenges: ["Staying ahead of evolving cyber threats", "Managing security in cloud environments", "Balancing security with user accessibility"],
//           rewards: ["Protecting vital information and systems", "High demand and job security", "Continuous learning and growth"],
//           topColleges: [
//             { name: "Purdue University", fees: "$28,794", duration: "4 years" },
//             { name: "Rochester Institute of Technology", fees: "$45,890", duration: "4 years" },
//             { name: "University of Maryland", fees: "$36,891", duration: "4 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         }
//       ],
//       "Creativity": [
//         {
//           jobTitle: "UX/UI Designer",
//           averageSalary: "$85,000",
//           description: "Create intuitive and visually appealing user interfaces for digital products.",
//           skills: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
//           companies: ["Airbnb", "Uber", "Adobe", "Figma", "Spotify"],
//           education: ["Graphic Design", "Human-Computer Interaction", "Digital Media"],
//           workEnvironment: "Office or Remote",
//           jobOutlook: "Good, with 13% growth expected over the next decade",
//           challenges: ["Balancing aesthetics with functionality", "Keeping up with design trends and user expectations", "Collaborating with diverse teams"],
//           rewards: ["Seeing your designs come to life", "Improving user experiences", "Combining creativity with technology"],
//           topColleges: [
//             { name: "Rhode Island School of Design", fees: "$52,860", duration: "4 years" },
//             { name: "Parsons School of Design", fees: "$49,844", duration: "4 years" },
//             { name: "California Institute of the Arts", fees: "$51,466", duration: "4 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         },
//         {
//           jobTitle: "Game Developer",
//           averageSalary: "$79,000",
//           description: "Design and program video games for various platforms.",
//           skills: ["Game Engines (Unity, Unreal)", "3D Modeling", "Scripting", "Game Design"],
//           companies: ["Electronic Arts", "Ubisoft", "Blizzard", "Nintendo", "Rockstar Games"],
//           education: ["Game Development", "Computer Science", "Interactive Media"],
//           workEnvironment: "Office, with some remote opportunities",
//           jobOutlook: "Favorable, with 11% growth expected over the next decade",
//           challenges: ["Meeting tight deadlines in a fast-paced industry", "Balancing creativity with technical constraints", "Adapting to rapidly changing gaming trends"],
//           rewards: ["Bringing imaginative worlds to life", "Combining passion for gaming with career", "Potential for high-profile projects"],
//           topColleges: [
//             { name: "University of Southern California", fees: "$58,195", duration: "4 years" },
//             { name: "DigiPen Institute of Technology", fees: "$35,000", duration: "4 years" },
//             { name: "Rochester Institute of Technology", fees: "$45,890", duration: "4 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         },
//         {
//           jobTitle: "Digital Animator",
//           averageSalary: "$77,700",
//           description: "Create animated visual effects for films, TV shows, video games, and other media.",
//           skills: ["3D Animation Software", "Character Design", "Storyboarding", "Motion Graphics"],
//           companies: ["Pixar", "DreamWorks", "Walt Disney Animation Studios", "Weta Digital", "Industrial Light & Magic"],
//           education: ["Animation", "Fine Arts", "Computer Graphics"],
//           workEnvironment: "Studios, some remote work possible",
//           jobOutlook: "Good, with 16% growth expected over the next decade",
//           challenges: ["Mastering complex animation software", "Meeting tight production deadlines", "Staying current with evolving animation techniques"],
//           rewards: ["Bringing characters and stories to life", "Working on high-profile entertainment projects", "Combining artistic skills with technology"],
//           topColleges: [
//             { name: "California Institute of the Arts", fees: "$51,466", duration: "4 years" },
//             { name: "Ringling College of Art and Design", fees: "$45,130", duration: "4 years" },
//             { name: "Savannah College of Art and Design", fees: "$37,575", duration: "4 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         }
//       ],
//       "Innovation": [
//         {
//           jobTitle: "AI Research Scientist",
//           averageSalary: "$114,121",
//           description: "Develop and improve artificial intelligence algorithms and systems.",
//           skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"],
//           companies: ["Google AI", "OpenAI", "DeepMind", "Microsoft Research", "IBM Research"],
//           education: ["PhD in Computer Science", "AI", "Machine Learning"],
//           workEnvironment: "Research Labs, Universities, Tech Companies",
//           jobOutlook: "Excellent, with 22% growth expected over the next decade",
//           challenges: ["Pushing the boundaries of AI capabilities", "Ethical considerations in AI development", "Translating research into practical applications"],
//           rewards: ["Contributing to cutting-edge technology", "Potential for groundbreaking discoveries", "High intellectual stimulation"],
//           topColleges: [
//             { name: "Stanford University", fees: "$55,473", duration: "4-6 years (PhD)" },
//             { name: "Carnegie Mellon University", fees: "$57,560", duration: "4-6 years (PhD)" },
//             { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4-6 years (PhD)" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         },
//         {
//           jobTitle: "Robotics Engineer",
//           averageSalary: "$85,620",
//           description: "Design, build, and maintain robots for various applications.",
//           skills: ["Mechanical Engineering", "Programming", "Control Systems", "Machine Vision"],
//           companies: ["Boston Dynamics", "iRobot", "ABB", "FANUC", "Intuitive Surgical"],
//           education: ["Robotics Engineering", "Mechanical Engineering", "Electrical Engineering"],
//           workEnvironment: "Research Labs, Manufacturing Facilities, Tech Companies",
//           jobOutlook: "Very good, with 9% growth expected over the next decade",
//           challenges: ["Integrating complex systems", "Ensuring robot safety and reliability", "Adapting to diverse application environments"],
//           rewards: ["Creating tangible, interactive technologies", "Potential for significant societal impact", "Working at the forefront of automation"],
//           topColleges: [
//             { name: "Carnegie Mellon University", fees: "$57,560", duration: "4 years" },
//             { name: "Massachusetts Institute of Technology", fees: "$53,790", duration: "4 years" },
//             { name: "University of Michigan", fees: "$52,266", duration: "4 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         }
//       ]
//     },
//     "Medicine": {
//       "Empathy": [
//         {
//           jobTitle: "Pediatrician",
//           averageSalary: "$177,000",
//           description: "Provide medical care for infants, children, and adolescents.",
//           skills: ["Patient Care", "Diagnosis", "Communication", "Pediatric Medicine"],
//           companies: ["Children's Hospitals", "Private Practices", "Community Health Centers"],
//           education: ["Medical Degree (MD or DO)", "Pediatric Residency"],
//           workEnvironment: "Hospitals, Clinics, Private Practices",
//           jobOutlook: "Good, with 3% growth expected over the next decade",
//           challenges: ["Communicating with young patients and their families", "Staying updated on pediatric health trends", "Managing emotional stress"],
//           rewards: ["Making a difference in children's lives", "Building long-term relationships with families", "Diverse and rewarding patient interactions"],
//           topColleges: [
//             { name: "Harvard Medical School", fees: "$65,203", duration: "4 years" },
//             { name: "Johns Hopkins University School of Medicine", fees: "$54,900", duration: "4 years" },
//             { name: "University of Pennsylvania Perelman School of Medicine", fees: "$61,586", duration: "4 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         },
//         {
//           jobTitle: "Mental Health Counselor",
//           averageSalary: "$47,000",
//           description: "Help individuals, families, and groups manage mental health issues.",
//           skills: ["Active Listening", "Counseling Techniques", "Psychological Assessment", "Empathy"],
//           companies: ["Mental Health Clinics", "Schools", "Private Practices", "Community Organizations"],
//           education: ["Master's in Counseling or Psychology", "State Licensure"],
//           workEnvironment: "Offices, Clinics, Schools, or Remote (Teletherapy)",
//           jobOutlook: "Excellent, with 23% growth expected over the next decade",
//           challenges: ["Managing emotional boundaries", "Addressing diverse mental health needs", "Keeping up with evolving treatment methods"],
//           rewards: ["Helping people overcome challenges", "Promoting mental wellness", "Flexible career options"],
//           topColleges: [
//             { name: "Columbia University", fees: "$48,390", duration: "2 years" },
//             { name: "New York University", fees: "$45,426", duration: "2 years" },
//             { name: "University of California, Los Angeles", fees: "$28,000", duration: "2 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         },
//         {
//           jobTitle: "Nurse Practitioner",
//           averageSalary: "$111,680",
//           description: "Provide advanced nursing care and can prescribe medication in most states.",
//           skills: ["Patient Assessment", "Diagnosis", "Treatment Planning", "Health Education"],
//           companies: ["Hospitals", "Private Practices", "Community Health Centers", "Urgent Care Clinics"],
//           education: ["Master of Science in Nursing", "Nurse Practitioner Certification"],
//           workEnvironment: "Various Healthcare Settings",
//           jobOutlook: "Excellent, with 45% growth expected over the next decade",
//           challenges: ["Managing complex patient cases", "Staying updated with medical advancements", "Balancing autonomy and collaboration with physicians"],
//           rewards: ["High level of patient care autonomy", "Strong job security and growth", "Opportunity to specialize in various fields"],
//           topColleges: [
//             { name: "Johns Hopkins University", fees: "$54,900", duration: "2 years" },
//             { name: "University of Pennsylvania", fees: "$61,586", duration: "2 years" },
//             { name: "Duke University", fees: "$55,888", duration: "2 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         }
//       ],
//       "Analytical Thinking": [
//         {
//           jobTitle: "Medical Researcher",
//           averageSalary: "$88,000",
//           description: "Conduct research to improve human health and medical treatments.",
//           skills: ["Research Design", "Data Analysis", "Laboratory Techniques", "Scientific Writing"],
//           companies: ["Pharmaceutical Companies", "Research Institutions", "Universities", "Government Agencies"],
//           education: ["PhD in Biomedical Sciences or related field", "Medical Degree for some positions"],
//           workEnvironment: "Laboratories, Research Facilities",
//           jobOutlook: "Good, with 6% growth expected over the next decade",
//           challenges: ["Securing research funding", "Publishing in competitive journals", "Translating research into practical applications"],
//           rewards: ["Contributing to medical breakthroughs", "Intellectual stimulation", "Potential for global impact"],
//           topColleges: [
//             { name: "Stanford University School of Medicine", fees: "$56,229", duration: "4-6 years" },
//             { name: "University of California, San Francisco", fees: "$35,148", duration: "4-6 years" },
//             { name: "Washington University in St. Louis", fees: "$58,460", duration: "4-6 years" }
//           ],
//           hiringTrends: [
//             { year: 2023, hires: 150000 },
//             { year: 2022, hires: 145000 },
//             { year: 2021, hires: 140000 },
//             { year: 2020, hires: 135000 },
//             { year: 2019, hires: 130000 },
//             { year: 2018, hires: 125000 },
//             { year: 2017, hires: 120000 },
//             { year: 2016, hires: 115000 },
//             { year: 2015, hires: 110000 },
//             { year: 2014, hires: 105000 }
//           ],
//           salaryTrends: [
//             { year: 2023, salary: 92000 },
//             { year: 2022, salary: 90000 },
//             { year: 2021, salary: 88000 },
//             { year: 2020, salary: 86000 },
//             { year: 2019, salary: 84000 },
//             { year: 2018, salary: 82000 },
//             { year: 2017, salary: 80000 },
//             { year: 2016, salary: 78000 },
//             { year: 2015, salary: 76000 },
//             { year: 2014, salary: 74000 }
//           ]
//         },
//         {
//           jobTitle: "Biostatistician",
//           averageSalary: "$92,000",
//           description: "Apply statistical methods to analyze health-related data.",
//           skills: ["Statistical Analysis", "Data Modeling", "Programming (R, SAS, Python)", "Study Design"],
//           companies: ["Pharmaceutical Companies", "Research Institutions", "Government Health Agencies", "Hospitals"],
//           education: ["Master's or PhD in Biostatistics or Statistics"],
//           workEnvironment: "Offices, Research Centers",
//           jobOutlook: "Excellent, with 33% growth expected over the next decade",
//           challenges: ["Handling large and complex datasets", "Communicating statistical findings to non-experts", "Ensuring data integrity and validity"],
//           rewards: ["Contributing to evidence-based medicine", "Diverse application areas", "High demand across health sectors"],
//           topColleges: [
//             { name: "Harvard T.H. Chan School of Public Health", fees: "$63,440", duration: "2 years" },
//             { name: "Johns Hopkins Bloomberg School of Public Health", fees: "$62,592", duration: "2 years" },
//             { name: "University of Michigan School of Public Health", fees: "$47,006", duration: "2 years" }
//         ],
//         hiringTrends: [
//           { year: 2023, hires: 150000 },
//           { year: 2022, hires: 145000 },
//           { year: 2021, hires: 140000 },
//           { year: 2020, hires: 135000 },
//           { year: 2019, hires: 130000 },
//           { year: 2018, hires: 125000 },
//           { year: 2017, hires: 120000 },
//           { year: 2016, hires: 115000 },
//           { year: 2015, hires: 110000 },
//           { year: 2014, hires: 105000 }
//         ],
//         salaryTrends: [
//           { year: 2023, salary: 92000 },
//           { year: 2022, salary: 90000 },
//           { year: 2021, salary: 88000 },
//           { year: 2020, salary: 86000 },
//           { year: 2019, salary: 84000 },
//           { year: 2018, salary: 82000 },
//           { year: 2017, salary: 80000 },
//           { year: 2016, salary: 78000 },
//           { year: 2015, salary: 76000 },
//           { year: 2014, salary: 74000 }
//         ]
//       },
//       {
//         jobTitle: "Epidemiologist",
//         averageSalary: "$74,560",
//         description: "Study patterns and causes of diseases in human populations.",
//         skills: ["Data Analysis", "Research Methodology", "Public Health Knowledge", "Statistical Software"],
//         companies: ["Centers for Disease Control and Prevention", "World Health Organization", "Universities", "State Health Departments"],
//         education: ["Master's or PhD in Epidemiology or Public Health"],
//         workEnvironment: "Government Agencies, Research Institutions, Universities",
//         jobOutlook: "Good, with 30% growth expected over the next decade",
//         challenges: ["Analyzing complex health data", "Responding to public health emergencies", "Communicating findings to policymakers and the public"],
//         rewards: ["Contributing to disease prevention and control", "Potential for global impact", "Diverse research opportunities"],
//         topColleges: [
//           { name: "Johns Hopkins Bloomberg School of Public Health", fees: "$62,592", duration: "2 years" },
//           { name: "Harvard T.H. Chan School of Public Health", fees: "$63,440", duration: "2 years" },
//           { name: "Columbia University Mailman School of Public Health", fees: "$48,390", duration: "2 years" }
//         ],
//         hiringTrends: [
//           { year: 2023, hires: 150000 },
//           { year: 2022, hires: 145000 },
//           { year: 2021, hires: 140000 },
//           { year: 2020, hires: 135000 },
//           { year: 2019, hires: 130000 },
//           { year: 2018, hires: 125000 },
//           { year: 2017, hires: 120000 },
//           { year: 2016, hires: 115000 },
//           { year: 2015, hires: 110000 },
//           { year: 2014, hires: 105000 }
//         ],
//         salaryTrends: [
//           { year: 2023, salary: 92000 },
//           { year: 2022, salary: 90000 },
//           { year: 2021, salary: 88000 },
//           { year: 2020, salary: 86000 },
//           { year: 2019, salary: 84000 },
//           { year: 2018, salary: 82000 },
//           { year: 2017, salary: 80000 },
//           { year: 2016, salary: 78000 },
//           { year: 2015, salary: 76000 },
//           { year: 2014, salary: 74000 }
//         ]
//       }
//     ],
//     "Precision and Dexterity": [
//       {
//         jobTitle: "Surgeon",
//         averageSalary: "$409,665",
//         description: "Perform operations to treat injuries, diseases, and deformities.",
//         skills: ["Surgical Techniques", "Anatomy Knowledge", "Decision Making", "Hand-eye Coordination"],
//         companies: ["Hospitals", "Surgical Centers", "Private Practices"],
//         education: ["Medical Degree", "Surgical Residency", "Fellowship for Specialization"],
//         workEnvironment: "Hospitals, Operating Rooms",
//         jobOutlook: "Good, with 3% growth expected over the next decade",
//         challenges: ["High-stress environment", "Long and irregular hours", "Continuous learning of new surgical techniques"],
//         rewards: ["Directly saving and improving lives", "High earning potential", "Respect and prestige"],
//         topColleges: [
//           { name: "Johns Hopkins University School of Medicine", fees: "$54,900", duration: "4 years + 5-7 years residency" },
//           { name: "Harvard Medical School", fees: "$65,203", duration: "4 years + 5-7 years residency" },
//           { name: "Stanford University School of Medicine", fees: "$56,229", duration: "4 years + 5-7 years residency" }
//         ],
//         hiringTrends: [
//           { year: 2023, hires: 150000 },
//           { year: 2022, hires: 145000 },
//           { year: 2021, hires: 140000 },
//           { year: 2020, hires: 135000 },
//           { year: 2019, hires: 130000 },
//           { year: 2018, hires: 125000 },
//           { year: 2017, hires: 120000 },
//           { year: 2016, hires: 115000 },
//           { year: 2015, hires: 110000 },
//           { year: 2014, hires: 105000 }
//         ],
//         salaryTrends: [
//           { year: 2023, salary: 92000 },
//           { year: 2022, salary: 90000 },
//           { year: 2021, salary: 88000 },
//           { year: 2020, salary: 86000 },
//           { year: 2019, salary: 84000 },
//           { year: 2018, salary: 82000 },
//           { year: 2017, salary: 80000 },
//           { year: 2016, salary: 78000 },
//           { year: 2015, salary: 76000 },
//           { year: 2014, salary: 74000 }
//         ]
//       },
//       {
//         jobTitle: "Dentist",
//         averageSalary: "$164,010",
//         description: "Diagnose and treat problems with patients' teeth, gums, and related parts of the mouth.",
//         skills: ["Dental Procedures", "Patient Care", "Manual Dexterity", "Diagnostic Skills"],
//         companies: ["Private Practices", "Dental Clinics", "Hospitals"],
//         education: ["Doctor of Dental Surgery (DDS) or Doctor of Dental Medicine (DMD)"],
//         workEnvironment: "Dental Offices, Clinics",
//         jobOutlook: "Good, with 3% growth expected over the next decade",
//         challenges: ["Managing patient anxiety", "Staying updated with dental technologies", "Running a business (for private practice)"],
//         rewards: ["Improving oral health and smiles", "Potential for owning a practice", "Regular working hours"],
//         topColleges: [
//           { name: "University of Michigan School of Dentistry", fees: "$52,266", duration: "4 years" },
//           { name: "Harvard School of Dental Medicine", fees: "$65,203", duration: "4 years" },
//           { name: "University of California, San Francisco School of Dentistry", fees: "$35,148", duration: "4 years" }
//         ],
//         hiringTrends: [
//           { year: 2023, hires: 150000 },
//           { year: 2022, hires: 145000 },
//           { year: 2021, hires: 140000 },
//           { year: 2020, hires: 135000 },
//           { year: 2019, hires: 130000 },
//           { year: 2018, hires: 125000 },
//           { year: 2017, hires: 120000 },
//           { year: 2016, hires: 115000 },
//           { year: 2015, hires: 110000 },
//           { year: 2014, hires: 105000 }
//         ],
//         salaryTrends: [
//           { year: 2023, salary: 92000 },
//           { year: 2022, salary: 90000 },
//           { year: 2021, salary: 88000 },
//           { year: 2020, salary: 86000 },
//           { year: 2019, salary: 84000 },
//           { year: 2018, salary: 82000 },
//           { year: 2017, salary: 80000 },
//           { year: 2016, salary: 78000 },
//           { year: 2015, salary: 76000 },
//           { year: 2014, salary: 74000 }
//         ]
//       }
//     ]
//   },

// };

// const strengthOptions = [
//   { value: "Problem Solving", label: "Problem Solving 🧠", emoji: "🧠" },
//   { value: "Creativity", label: "Creativity 🎨", emoji: "🎨" },
//   { value: "Empathy", label: "Empathy 🤗", emoji: "🤗" },
//   { value: "Analytical Thinking", label: "Analytical Thinking 🔬", emoji: "🔬" },
//   { value: "Leadership", label: "Leadership 👑", emoji: "👑" },
//   { value: "Communication", label: "Communication 🗣️", emoji: "🗣️" },
// ]

// export default function CareerExplorer() {
//   const [page, setPage] = useState(1)
//   const [formData, setFormData] = useState({
//     tenthPercentage: '',
//     twelfthPercentage: '',
//     interest: '',
//     strength: ''
//   })
//   const [isLoading, setIsLoading] = useState(false)
//   const [careerSuggestions, setCareerSuggestions] = useState([])
//   const navigate = useNavigate()

//   const handleJobClick = (job) => {
//     navigate(`/job-details/${job.jobTitle}`, { state: { job } })
//   }


//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handleNext = () => {
//     if (page === 4) {
//       setIsLoading(true)
//       // Simulate AI prediction
//       setTimeout(() => {
//         setCareerSuggestions(careerData[formData.interest][formData.strength])
//         setIsLoading(false)
//         setPage(prevPage => prevPage + 1)
//       }, 2000)
//     } else {
//       setPage(prevPage => prevPage + 1)
//     }
//   }

//   const handleBack = () => {
//     setPage(prevPage => prevPage - 1)
//   }

//   const handleSkip = (field) => {
//     setFormData(prevData => ({
//       ...prevData,
//       [field]: 'Skipped'
//     }))
//     handleNext()
//   }

//   const renderPage = () => {
//     switch(page) {
//       case 1:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>10th Grade Percentage (Optional)</CardTitle>
//                 <CardDescription>Enter your 10th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="tenthPercentage"
//                     name="tenthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.tenthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={() => handleSkip('tenthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 2:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>12th Grade Percentage (Optional)</CardTitle>
//                 <CardDescription>Enter your 12th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="twelfthPercentage"
//                     name="twelfthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.twelfthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={() => handleSkip('twelfthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 3:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Area of Interest (Required)</CardTitle>
//                 <CardDescription>Select your primary area of interest</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <RadioGroup name="interest" onValueChange={(value) => handleInputChange({ target: { name: 'interest', value } })}>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Technology" id="technology" />
//                     <Label htmlFor="technology">Technology 💻</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Medicine" id="medicine" />
//                     <Label htmlFor="medicine">Medicine 🏥</Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="Business" id="business" />
//                     <Label htmlFor="business">Business 💼</Label>
//                   </div>
//                 </RadioGroup>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={handleNext} disabled={!formData.interest}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 4:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>Your Biggest Strength (Required)</CardTitle>
//                 <CardDescription>What do you consider your biggest strength?</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <Select onValueChange={(value) => handleInputChange({ target: { name: 'strength', value } })}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Select your biggest strength" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {strengthOptions.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={handleNext} disabled={!formData.strength}>Submit <Sparkles className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//         case 5:
//             return (
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -50 }}
//               >
//                 <Card className="w-full">
//                   <CardHeader>
//                     <CardTitle className="text-2xl">Your Career Suggestions</CardTitle>
//                     <CardDescription>Based on your interest in {formData.interest} and strength in {formData.strength}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     {isLoading ? (
//                       <div className="flex flex-col items-center justify-center h-64">
//                         <Loader2 className="h-8 w-8 animate-spin" />
//                         <p className="mt-4 text-sm text-muted-foreground">AI is analyzing your profile...</p>
//                       </div>
//                     ) : (
//                       <ul className="space-y-4">
//                         {careerSuggestions.map((job, index) => (
//                           <li key={index}>
//                             <Button
//                               variant="outline"
//                               className="w-full justify-between text-left font-normal"
//                               onClick={() => handleJobClick(job)}
//                             >
//                               <span>{job.jobTitle}</span>
//                               <span>{job.averageSalary}</span>
//                             </Button>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             )
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-6 bg-background rounded-lg shadow-lg space-y-6">
//       <Progress value={(page / 5) * 100} className="w-full" />
//       <AnimatePresence mode="wait">
//         {renderPage()}
//       </AnimatePresence>
//     </div>
//   )
// }


// 'use client'

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useNavigate } from 'react-router-dom'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Loader2, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react'
// import config from '../../config'

// export default function CareerExplorer() {
//   const [page, setPage] = useState(1)
//   const [formData, setFormData] = useState({
//     tenthPercentage: '',
//     twelfthPercentage: '',
//     interest: '',
//     strength: ''
//   })
//   const [isLoading, setIsLoading] = useState(false)
//   const [careerSuggestions, setCareerSuggestions] = useState([])
//   const [interests, setInterests] = useState([])
//   const [strengths, setStrengths] = useState([])
//   const navigate = useNavigate()

//   useEffect(() => {
//     fetchInterestsAndStrengths()
//   }, [])

//   const fetchInterestsAndStrengths = async () => {
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/careers/options`)
//       const data = await response.json()
//       setInterests(data.interests)
//       setStrengths(data.strengths)
//     } catch (error) {
//       console.error('Error fetching interests and strengths:', error)
//     }
//   }

  // const handleJobClick = (job) => {
  //   navigate(`/job-details/${job.jobTitle}`, { 
  //     state: { 
  //       job: {
  //         ...job,
  //         // Add any missing properties that JobDetails expects
  //         skills: job.skills || [],
  //         companies: job.companies || [],
  //         education: job.education || [],
  //         challenges: job.challenges || [],
  //         rewards: job.rewards || [],
  //         topColleges: job.topColleges || [],
  //         hiringTrends: job.hiringTrends || [],
  //         salaryTrends: job.salaryTrends || []
  //       } 
  //     } 
  //   })
  // }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handleNext = async () => {
//     if (page === 4) {
//       setIsLoading(true)
//       try {
//         const response = await fetch(`${config.API_BASE_URL}/careers/suggestions`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             interest: formData.interest,
//             strength: formData.strength
//           }),
//         })
//         const suggestions = await response.json()
//         setCareerSuggestions(suggestions)
//         setIsLoading(false)
//         setPage(prevPage => prevPage + 1)
//       } catch (error) {
//         console.error('Error fetching career suggestions:', error)
//         setIsLoading(false)
//       }
//     } else {
//       setPage(prevPage => prevPage + 1)
//     }
//   }

//   const handleBack = () => {
//     setPage(prevPage => prevPage - 1)
//   }

//   const handleSkip = (field) => {
//     setFormData(prevData => ({
//       ...prevData,
//       [field]: 'Skipped'
//     }))
//     handleNext()
//   }

//   const renderPage = () => {
//     switch(page) {
//       case 1:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>10th Grade Percentage (Optional)</CardTitle>
//                 <CardDescription>Enter your 10th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="tenthPercentage"
//                     name="tenthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.tenthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={() => handleSkip('tenthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//       case 2:
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//           >
//             <Card className="w-full">
//               <CardHeader>
//                 <CardTitle>12th Grade Percentage (Optional)</CardTitle>
//                 <CardDescription>Enter your 12th grade percentage or skip</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     id="twelfthPercentage"
//                     name="twelfthPercentage"
//                     type="number"
//                     min="0"
//                     max="100"
//                     value={formData.twelfthPercentage}
//                     onChange={handleInputChange}
//                     placeholder="Enter percentage"
//                     className="w-full"
//                   />
//                   <span>%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                   <Button onClick={() => handleSkip('twelfthPercentage')} variant="outline">Skip</Button>
//                   <Button onClick={handleNext}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )
//         case 3:
//           return (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//             >
//               <Card className="w-full">
//                 <CardHeader>
//                   <CardTitle>Area of Interest (Required)</CardTitle>
//                   <CardDescription>Select your primary area of interest</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <RadioGroup name="interest" onValueChange={(value) => handleInputChange({ target: { name: 'interest', value } })}>
//                     {interests.map((interest) => (
//                       <div key={interest} className="flex items-center space-x-2">
//                         <RadioGroupItem value={interest} id={interest.toLowerCase()} />
//                         <Label htmlFor={interest.toLowerCase()}>{interest}</Label>
//                       </div>
//                     ))}
//                   </RadioGroup>
//                   <div className="flex justify-between">
//                     <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                     <Button onClick={handleNext} disabled={!formData.interest}>Next <ChevronRight className="ml-2 h-4 w-4" /></Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           )
//         case 4:
//           return (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//             >
//               <Card className="w-full">
//                 <CardHeader>
//                   <CardTitle>Your Biggest Strength (Required)</CardTitle>
//                   <CardDescription>What do you consider your biggest strength?</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <Select onValueChange={(value) => handleInputChange({ target: { name: 'strength', value } })}>
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select your biggest strength" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {strengths.map((strength) => (
//                         <SelectItem key={strength} value={strength}>
//                           {strength}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <div className="flex justify-between">
//                     <Button onClick={handleBack} variant="outline"><ChevronLeft className="mr-2 h-4 w-4" /> Back</Button>
//                     <Button onClick={handleNext} disabled={!formData.strength}>Submit <Sparkles className="ml-2 h-4 w-4" /></Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           )
//         case 5:
//           return (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//             >
//               <Card className="w-full">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Your Career Suggestions</CardTitle>
//                   <CardDescription>Based on your interest in {formData.interest} and strength in {formData.strength}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   {isLoading ? (
//                     <div className="flex flex-col items-center justify-center h-64">
//                       <Loader2 className="h-8 w-8 animate-spin" />
//                       <p className="mt-4 text-sm text-muted-foreground">AI is analyzing your profile...</p>
//                     </div>
//                   ) : (
//                     <ul className="space-y-4">
//                       {careerSuggestions.map((job, index) => (
//                         <li key={index}>
//                           <Button
//                             variant="outline"
//                             className="w-full justify-between text-left font-normal"
//                             onClick={() => handleJobClick(job)}
//                           >
//                             <span>{job.jobTitle}</span>
//                             <span>{job.averageSalary}</span>
//                           </Button>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </CardContent>
//               </Card>
//             </motion.div>
//           )
//         default:
//           return null
//       }
//     }
  
//     return (
//       <div className="max-w-2xl mx-auto mt-10 p-6 bg-background rounded-lg shadow-lg space-y-6">
//         <Progress value={(page / 5) * 100} className="w-full" />
//         <AnimatePresence mode="wait">
//           {renderPage()}
//         </AnimatePresence>
//       </div>
//     )
//   }


//  Coool  

// import React, { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Loader2, Sparkles } from 'lucide-react'
// import config from '../../config'

// export default function CareerExplorerWithFilters() {
//   const [formData, setFormData] = useState({
//     tenthPercentage: '',
//     twelfthPercentage: '',
//     interest: '',
//     strength: ''
//   })
//   const [isLoading, setIsLoading] = useState(false)
//   const [careerSuggestions, setCareerSuggestions] = useState([])
//   const [interests, setInterests] = useState([])
//   const [strengths, setStrengths] = useState([])

//   useEffect(() => {
//     fetchInterestsAndStrengths()
//   }, [])

//   const fetchInterestsAndStrengths = async () => {
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/careers/options`)
//       const data = await response.json()
//       setInterests(data.interests)
//       setStrengths(data.strengths)
//     } catch (error) {
//       console.error('Error fetching interests and strengths:', error)
//     }
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handlePredict = async () => {
//     setIsLoading(true)
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/careers/suggestions`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })
//       const suggestions = await response.json()
//       setCareerSuggestions(suggestions)
//     } catch (error) {
//       console.error('Error fetching career suggestions:', error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 space-y-6">
//       <Card className="w-full bg-gradient-to-r from-blue-100 to-purple-100">
//         <CardHeader>
//           <CardTitle className="text-2xl">Career Explorer</CardTitle>
//           <CardDescription>Filter and find your ideal career path</CardDescription>
//         </CardHeader>
//         <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <Label htmlFor="tenthPercentage">10th Grade Percentage</Label>
//             <Input
//               id="tenthPercentage"
//               name="tenthPercentage"
//               type="number"
//               min="0"
//               max="100"
//               value={formData.tenthPercentage}
//               onChange={handleInputChange}
//               placeholder="Enter percentage"
//             />
//           </div>
//           <div>
//             <Label htmlFor="twelfthPercentage">12th Grade Percentage</Label>
//             <Input
//               id="twelfthPercentage"
//               name="twelfthPercentage"
//               type="number"
//               min="0"
//               max="100"
//               value={formData.twelfthPercentage}
//               onChange={handleInputChange}
//               placeholder="Enter percentage"
//             />
//           </div>
//           <div>
//             <Label htmlFor="interest">Area of Interest</Label>
//             <Select onValueChange={(value) => handleInputChange({ target: { name: 'interest', value } })}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select your interest" />
//               </SelectTrigger>
//               <SelectContent>
//                 {interests.map((interest) => (
//                   <SelectItem key={interest} value={interest}>
//                     {interest}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div>
//             <Label htmlFor="strength">Your Biggest Strength</Label>
//             <Select onValueChange={(value) => handleInputChange({ target: { name: 'strength', value } })}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select your strength" />
//               </SelectTrigger>
//               <SelectContent>
//                 {strengths.map((strength) => (
//                   <SelectItem key={strength} value={strength}>
//                     {strength}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </CardContent>
//       </Card>

//       <Button 
//         onClick={handlePredict} 
//         className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <>
//             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//             Predicting...
//           </>
//         ) : (
//           <>
//             <Sparkles className="mr-2 h-4 w-4" />
//             Predict Careers
//           </>
//         )}
//       </Button>

//       {careerSuggestions.length > 0 && (
//         <Card>
//           <CardHeader>
//             <CardTitle>Career Suggestions</CardTitle>
//             <CardDescription>Based on your filters and preferences</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-2">
//               {careerSuggestions.map((job, index) => (
//                 <li key={index} className="p-2 bg-gray-100 rounded-md flex justify-between items-center hover:bg-gray-200 transition-colors">
//                   <span className="font-medium">{job.jobTitle}</span>
//                   <span className="text-green-600">{job.averageSalary}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Sparkles } from 'lucide-react'
import config from '../../config'

export default function CareerExplorerWithFilters() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    tenthPercentage: '',
    twelfthPercentage: '',
    interest: '',
    strength: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [careerSuggestions, setCareerSuggestions] = useState([])
  const [interests, setInterests] = useState([])
  const [strengths, setStrengths] = useState([])

  useEffect(() => {
    fetchInterestsAndStrengths()
  }, [])

  const fetchInterestsAndStrengths = async () => {
    try {
      const response = await fetch(`${config.API_BASE_URL}/careers/options`)
      const data = await response.json()
      setInterests(data.interests)
      setStrengths(data.strengths)
    } catch (error) {
      console.error('Error fetching interests and strengths:', error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handlePredict = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${config.API_BASE_URL}/careers/suggestions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const suggestions = await response.json()
      setCareerSuggestions(suggestions)
    } catch (error) {
      console.error('Error fetching career suggestions:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleJobClick = (job) => {
    navigate(`/job-details/${job.jobTitle}`, { 
      state: { 
        job: {
          ...job,
          skills: job.skills || [],
          companies: job.companies || [],
          education: job.education || [],
          challenges: job.challenges || [],
          rewards: job.rewards || [],
          topColleges: job.topColleges || [],
          hiringTrends: job.hiringTrends || [],
          salaryTrends: job.salaryTrends || []
        } 
      } 
    })
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 space-y-6">
      <Card className="w-full bg-gradient-to-r from-blue-100 to-purple-100">
        <CardHeader>
          <CardTitle className="text-2xl">Career Explorer</CardTitle>
          <CardDescription>Filter and find your ideal career path</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="tenthPercentage">10th Grade Percentage</Label>
            <Input
              id="tenthPercentage"
              name="tenthPercentage"
              type="number"
              min="0"
              max="100"
              value={formData.tenthPercentage}
              onChange={handleInputChange}
              placeholder="Enter percentage"
            />
          </div>
          <div>
            <Label htmlFor="twelfthPercentage">12th Grade Percentage</Label>
            <Input
              id="twelfthPercentage"
              name="twelfthPercentage"
              type="number"
              min="0"
              max="100"
              value={formData.twelfthPercentage}
              onChange={handleInputChange}
              placeholder="Enter percentage"
            />
          </div>
          <div>
            <Label htmlFor="interest">Area of Interest</Label>
            <Select onValueChange={(value) => handleInputChange({ target: { name: 'interest', value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select your interest" />
              </SelectTrigger>
              <SelectContent>
                {interests.map((interest) => (
                  <SelectItem key={interest} value={interest}>
                    {interest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="strength">Your Biggest Strength</Label>
            <Select onValueChange={(value) => handleInputChange({ target: { name: 'strength', value } })}>
              <SelectTrigger>
                <SelectValue placeholder="Select your strength" />
              </SelectTrigger>
              <SelectContent>
                {strengths.map((strength) => (
                  <SelectItem key={strength} value={strength}>
                    {strength}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Button 
        onClick={handlePredict} 
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Predicting...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Predict Careers
          </>
        )}
      </Button>

      {careerSuggestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Career Suggestions</CardTitle>
            <CardDescription>Based on your filters and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {careerSuggestions.map((job, index) => (
                <li 
                  key={index} 
                  className="p-2 bg-gray-100 rounded-md flex justify-between items-center hover:bg-gray-200 transition-colors cursor-pointer"
                  onClick={() => handleJobClick(job)}
                >
                  <span className="font-medium text-blue-600 hover:underline">{job.jobTitle}</span>
                  <span className="text-green-600">{job.averageSalary}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// import React, { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Loader2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
// import config from '../../config'

// export default function CareerExplorer() {
//   const [formData, setFormData] = useState({
//     tenthPercentage: '',
//     twelfthPercentage: '',
//     interest: '',
//     strength: ''
//   })
//   const [isLoading, setIsLoading] = useState(false)
//   const [careerSuggestions, setCareerSuggestions] = useState([])
//   const [interests, setInterests] = useState([])
//   const [strengths, setStrengths] = useState([])
//   const [currentPage, setCurrentPage] = useState(1)
//   const [totalPages, setTotalPages] = useState(1)
//   const itemsPerPage = 20

//   useEffect(() => {
//     fetchInterestsAndStrengths()
//     fetchAllCareers()
//   }, [])

//   const fetchInterestsAndStrengths = async () => {
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/careers/options`)
//       const data = await response.json()
//       setInterests(data.interests)
//       setStrengths(data.strengths)
//     } catch (error) {
//       console.error('Error fetching interests and strengths:', error)
//     }
//   }

//   const fetchAllCareers = async (page = 1) => {
//     setIsLoading(true)
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/careers?page=${page}&limit=${itemsPerPage}`)
//       const data = await response.json()
//       setCareerSuggestions(data.careers)
//       setTotalPages(data.totalPages)
//       setCurrentPage(page)
//     } catch (error) {
//       console.error('Error fetching all careers:', error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handlePredict = async () => {
//     setIsLoading(true)
//     try {
//       const response = await fetch(`${config.API_BASE_URL}/careers/suggestions`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })
//       const suggestions = await response.json()
//       setCareerSuggestions(suggestions)
//       setTotalPages(1)
//       setCurrentPage(1)
//     } catch (error) {
//       console.error('Error fetching career suggestions:', error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       if (Object.values(formData).some(value => value !== '')) {
//         handlePredict()
//       } else {
//         fetchAllCareers(newPage)
//       }
//     }
//   }

//   const resetFilters = () => {
//     setFormData({
//       tenthPercentage: '',
//       twelfthPercentage: '',
//       interest: '',
//       strength: ''
//     })
//     fetchAllCareers()
//   }

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 space-y-6">
//       <Card className="w-full bg-gradient-to-r from-blue-100 to-purple-100">
//         <CardHeader>
//           <CardTitle className="text-2xl">Career Explorer</CardTitle>
//           <CardDescription>Filter and find your ideal career path</CardDescription>
//         </CardHeader>
//         <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <Label htmlFor="tenthPercentage">10th Grade Percentage</Label>
//             <Input
//               id="tenthPercentage"
//               name="tenthPercentage"
//               type="number"
//               min="0"
//               max="100"
//               value={formData.tenthPercentage}
//               onChange={handleInputChange}
//               placeholder="Enter percentage"
//             />
//           </div>
//           <div>
//             <Label htmlFor="twelfthPercentage">12th Grade Percentage</Label>
//             <Input
//               id="twelfthPercentage"
//               name="twelfthPercentage"
//               type="number"
//               min="0"
//               max="100"
//               value={formData.twelfthPercentage}
//               onChange={handleInputChange}
//               placeholder="Enter percentage"
//             />
//           </div>
//           <div>
//             <Label htmlFor="interest">Area of Interest</Label>
//             <Select onValueChange={(value) => handleInputChange({ target: { name: 'interest', value } })}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select your interest" />
//               </SelectTrigger>
//               <SelectContent>
//                 {interests.map((interest) => (
//                   <SelectItem key={interest} value={interest}>
//                     {interest}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div>
//             <Label htmlFor="strength">Your Biggest Strength</Label>
//             <Select onValueChange={(value) => handleInputChange({ target: { name: 'strength', value } })}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select your strength" />
//               </SelectTrigger>
//               <SelectContent>
//                 {strengths.map((strength) => (
//                   <SelectItem key={strength} value={strength}>
//                     {strength}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="flex space-x-4">
//         <Button 
//           onClick={handlePredict} 
//           className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               Predicting...
//             </>
//           ) : (
//             <>
//               <Sparkles className="mr-2 h-4 w-4" />
//               Predict Careers
//             </>
//           )}
//         </Button>
//         <Button 
//           onClick={resetFilters}
//           className="bg-gray-200 text-gray-800 hover:bg-gray-300"
//         >
//           Reset Filters
//         </Button>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Career Suggestions</CardTitle>
//           <CardDescription>
//             {Object.values(formData).some(value => value !== '') 
//               ? 'Based on your filters and preferences' 
//               : 'Showing all career options'}
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {isLoading ? (
//             <div className="flex justify-center items-center h-64">
//               <Loader2 className="h-8 w-8 animate-spin" />
//             </div>
//           ) : (
//             <>
//               <ul className="space-y-2">
//                 {careerSuggestions.map((job, index) => (
//                   <li key={index} className="p-2 bg-gray-100 rounded-md flex justify-between items-center hover:bg-gray-200 transition-colors">
//                     <span className="font-medium">{job.jobTitle}</span>
//                     <span className="text-green-600">{job.averageSalary}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex justify-between items-center mt-4">
//                 <Button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   variant="outline"
//                 >
//                   <ChevronLeft className="h-4 w-4 mr-2" />
//                   Previous
//                 </Button>
//                 <span>Page {currentPage} of {totalPages}</span>
//                 <Button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   variant="outline"
//                 >
//                   Next
//                   <ChevronRight className="h-4 w-4 ml-2" />
//                 </Button>
//               </div>
//             </>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }