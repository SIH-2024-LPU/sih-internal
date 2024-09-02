// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card, CardContent } from "@/components/ui/card"
// import Image from 'next/image'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// // Dummy data for mentors (expanded to 30 for pagination demo)
// const mentors = Array(30).fill(null).map((_, index) => ({
//   id: index + 1,
//   name: `Mentor ${index + 1}`,
//   jobTitle: ["Software Engineer", "Product Manager", "Data Scientist", "UX Designer"][index % 4],
//   experience: Math.floor(Math.random() * 10) + 1,
//   companiesJoined: ["Google", "Facebook", "Amazon", "Microsoft", "Apple"].slice(0, Math.floor(Math.random() * 3) + 1),
//   image: `/placeholder.svg?height=200&width=200&text=Mentor+${index + 1}`
// }))

// const jobTitles = Array.from(new Set(mentors.map(mentor => mentor.jobTitle)))
// const experienceLevels = Array.from(new Set(mentors.map(mentor => mentor.experience))).sort((a, b) => a - b)

// export default function BookAppointment() {
//   const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null)
//   const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
//   const [currentPage, setCurrentPage] = useState(1)
//   const mentorsPerPage = 10

//   const filteredMentors = mentors.filter(mentor => 
//     (!selectedJobTitle || mentor.jobTitle === selectedJobTitle) &&
//     (!selectedExperience || mentor.experience === selectedExperience)
//   )

//   const totalPages = Math.ceil(filteredMentors.length / mentorsPerPage)
//   const currentMentors = filteredMentors.slice(
//     (currentPage - 1) * mentorsPerPage,
//     currentPage * mentorsPerPage
//   )

//   return (
//     <div className="container mx-auto p-4 space-y-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Find Your Mentor</h1>
      
//       <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//         <Select onValueChange={(value) => setSelectedJobTitle(value)}>
//           <SelectTrigger className="w-full sm:w-[180px]">
//             <SelectValue placeholder="Select Job Title" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="">All Job Titles</SelectItem>
//             {jobTitles.map(title => (
//               <SelectItem key={title} value={title}>{title}</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>

//         <Select onValueChange={(value) => setSelectedExperience(value ? parseInt(value) : null)}>
//           <SelectTrigger className="w-full sm:w-[180px]">
//             <SelectValue placeholder="Select Experience" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="">All Experience Levels</SelectItem>
//             {experienceLevels.map(level => (
//               <SelectItem key={level} value={level.toString()}>{level}+ years</SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {currentMentors.map(mentor => (
//           <Card key={mentor.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
//             <CardContent className="p-0">
//               <Image
//                 src={mentor.image}
//                 alt={mentor.name}
//                 width={400}
//                 height={200}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 space-y-2">
//                 <h3 className="font-semibold text-lg">{mentor.name}</h3>
//                 <p className="text-sm text-muted-foreground">{mentor.jobTitle}</p>
//                 <p className="text-sm text-muted-foreground">{mentor.experience} years experience</p>
//                 <p className="text-sm text-muted-foreground">
//                   {mentor.companiesJoined.join(", ")}
//                 </p>
//                 <Button className="w-full mt-2">Book Appointment</Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div className="flex justify-center items-center space-x-2 mt-6">
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           <ChevronLeft className="h-4 w-4" />
//         </Button>
//         <span className="text-sm font-medium">
//           Page {currentPage} of {totalPages}
//         </span>
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//         >
//           <ChevronRight className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mentors = Array(30).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Mentor ${index + 1}`,
  jobTitle: ["Software Engineer", "Product Manager", "Data Scientist", "UX Designer"][index % 4],
  experience: Math.floor(Math.random() * 10) + 1,
  companiesJoined: ["Google", "Facebook", "Amazon", "Microsoft", "Apple"].slice(0, Math.floor(Math.random() * 3) + 1),
  image: `https://via.placeholder.com/400x200?text=Mentor+${index + 1}`
}));

const jobTitles = Array.from(new Set(mentors.map(mentor => mentor.jobTitle)));
const experienceLevels = Array.from(new Set(mentors.map(mentor => mentor.experience))).sort((a, b) => a - b);

export default function BookAppointment() {
  const [selectedJobTitle, setSelectedJobTitle] = useState<string | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const mentorsPerPage = 10;

  // Filter mentors based on selected job title and experience level
  const filteredMentors = mentors.filter(mentor =>
    (!selectedJobTitle || mentor.jobTitle === selectedJobTitle) &&
    (!selectedExperience || mentor.experience === selectedExperience)
  );

  // Calculate total pages and slice mentors for current page
  const totalPages = Math.ceil(filteredMentors.length / mentorsPerPage);
  const currentMentors = filteredMentors.slice(
    (currentPage - 1) * mentorsPerPage,
    currentPage * mentorsPerPage
  );

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Find Your Mentor</h1>

      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Select onValueChange={(value) => setSelectedJobTitle(value || null)}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select Job Title" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Job Titles</SelectItem>
            {jobTitles.map(title => (
              <SelectItem key={title} value={title}>{title}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setSelectedExperience(value ? parseInt(value, 10) : null)}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Experience Levels</SelectItem>
            {experienceLevels.map(level => (
              <SelectItem key={level} value={level.toString()}>{level}+ years</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentMentors.map(mentor => (
          <Card key={mentor.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-0">
              <img
                src={mentor.image}
                alt={mentor.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground">{mentor.jobTitle}</p>
                <p className="text-sm text-muted-foreground">{mentor.experience} years experience</p>
                <p className="text-sm text-muted-foreground">
                  {mentor.companiesJoined.join(", ")}
                </p>
                <Button className="w-full mt-2">Book Appointment</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
