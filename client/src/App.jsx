// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import Recommendation from './Pages/Recommendation/Recommendation';
// import JobDetails from './Pages/Recommendation/RecommDetails';
// import CareerForm from './Pages/Forms/CareerForm';
// import NotFound from './Pages/Error/NotFound';
// import CoolNavbar from './Pages/Headers/Navbar';

// function App() {
//   return (
//     <CoolNavbar/>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/recommendation" element={<Recommendation />} />
//       <Route path="/job-details/:jobTitle" element={<JobDetails />} />
//       <Route path="/careerform" element={<CareerForm/>} />
//       <Route path="*" element={<NotFound/>}/>
//     </Routes>
//   );
// }

// export default App;
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home';
// import Recommendation from './Pages/Recommendation/Recommendation';
// import JobDetails from './Pages/Recommendation/RecommDetails';
// import CareerForm from './Pages/Forms/CareerForm';
// import NotFound from './Pages/Error/NotFound';
// import CoolNavbar from './Pages/Headers/Navbar';

// import LoginForm from './Pages/User/Login';
// import SignupForm from './Pages/User/Signup';
// import JobTitlesManagement from './Pages/Forms/JobTitles';
// import CompaniesManagement from './Pages/Forms/CompaniesManagement';
// import CreativeApplicationForm from './Pages/MentorShip/Form';
// import AdminApplicationsPage from './Pages/MentorShip/List';
// import ApplicationTracker from './Pages/MentorShip/Tracker';
// import Dashboard from './Pages/DashBoard';
// import MentorRegistrationForm from './Pages/MentorShip/Registor';
// import MentorList from './Pages/MentorShip/MentorList';
// import MentorAppointments from './Pages/MentorShip/MentorAppointments';
// import UserAppointments from './Pages/MentorShip/UserAppointment';

// function App() {
//   return (
//     <>
//       <CoolNavbar /> {/* Add the new navbar component here */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/recommendation" element={<Recommendation />} />
//         <Route path="/job-details/:jobTitle" element={<JobDetails />} />
//         <Route path="/careerform" element={<CareerForm />} />
    
//         <Route path='/login' element={<LoginForm/>}/>
//         <Route path ="/signup" element={<SignupForm/>}/>
//         <Route path='/JobForm' element={<JobTitlesManagement/>}/>
//         <Route path='/Companyform' element={<CompaniesManagement/>}/>
//         <Route path='/application' element={<CreativeApplicationForm/>}/>
//         <Route path="/mentoapplication" element={<AdminApplicationsPage/>}/>
//         <Route path='/tracker' element={<ApplicationTracker/>}/>
//         <Route path='/dashboard' element={<Dashboard/>}/>
//         <Route path='/addmentor' element={<MentorRegistrationForm/>}/>
//         <Route path = "/mentorship" element={<MentorList/>}/>
//         <Route path='/appointment' element={<MentorAppointments/>}/>
//         <Route path="/scheduleappointment" element={<UserAppointments/>}/>
//         {/* <Route path="/mentor-appointments/:mentorId" component={MentorAppointments} /> */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

// export default App;




import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Recommendation from './Pages/Recommendation/Recommendation';
import JobDetails from './Pages/Recommendation/RecommDetails';
import CareerForm from './Pages/Forms/CareerForm';
import NotFound from './Pages/Error/NotFound';
import CoolNavbar from './Pages/Headers/Navbar';

import LoginForm from './Pages/User/Login';
import SignupForm from './Pages/User/Signup';
import JobTitlesManagement from './Pages/Forms/JobTitles';
import CompaniesManagement from './Pages/Forms/CompaniesManagement';
import CreativeApplicationForm from './Pages/MentorShip/Form';
import AdminApplicationsPage from './Pages/MentorShip/List';
import ApplicationTracker from './Pages/MentorShip/Tracker';
import Dashboard from './Pages/DashBoard';
import MentorRegistrationForm from './Pages/MentorShip/Registor';
import MentorList from './Pages/MentorShip/MentorList';
import MentorAppointments from './Pages/MentorShip/MentorAppointments';
import UserAppointments from './Pages/MentorShip/UserAppointment';
import ProtectedRoute from '../src/Pages/Protection/ProtectedRoute';
import VideoForm from './Pages/Educate/VideoForm';
import VideoList from './Pages/Educate/VideoList';
import LoadingSpinner from './Pages/Loader/Loader';
import InterestManagement from './Pages/Forms/InterestManagement';
import StrengthManagement from './Pages/Forms/StrengthManagement';
import SkillsManagement from './Pages/Forms/SkillsManagement';
import CollegesManagement from './Pages/Forms/CollegesManagement';
import RecommendationForm from './Pages/Forms/Recommendation';
import Button from "./Pages/Button"
import CareerRecommendationForm from './Pages/Forms/Questions';
import AddWorkshop from './Pages/Forms/AddWorkshop';
import AvailableWorkshops from './Pages/Workshops/AvailableWorkshops';
import AdminDashboard from './Admin/DashBoard';

function App() {
  return (
    <>
    
      <CoolNavbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/job-details/:jobTitle" element={<JobDetails />} />
        <Route path='/Learn' element={<VideoForm/>}/>
        <Route path ="/learnlist" element={<VideoList/>}/>
        <Route path="/mentorship" element={<MentorList />} />
        <Route path='/question' element={<CareerRecommendationForm/>}/>
        <Route path='/button' element={<Button/>}/>   
        <Route path='/workshopAdd'element={<AddWorkshop/>}/> {/*Admin*/}
        <Route path="/workshops"element={<AvailableWorkshops/>}/>
        <Route path='/dashboardAdmin' element={<AdminDashboard/>}/>   {/*Admin*/}
        {/* User protected routes */}
        <Route element={<ProtectedRoute allowedRoles={['User', 'Mentor', 'Admin']} />}>
          <Route path="/careerform" element={<CareerForm />} />
          <Route path="/application" element={<CreativeApplicationForm />} />
          <Route path="/tracker" element={<ApplicationTracker />} />
          <Route path="/dashboard" element={<Dashboard />} />
         
          <Route path="/scheduleappointment" element={<UserAppointments />} />
        </Route>

        {/* Mentor protected routes */}
        <Route element={<ProtectedRoute allowedRoles={['Mentor', 'Admin']} />}>
          <Route path="/appointment" element={<MentorAppointments />} />
          <Route path="/interestForm" element={<InterestManagement/>}/>
          <Route path='/StrengthForm' element={<StrengthManagement/>}/>
          <Route path='/skillform' element={<SkillsManagement/>}/>
          <Route path='/collegeform'element={<CollegesManagement/>}/>
          <Route path ="/recommendationForm"element={<RecommendationForm/>}/>
        </Route>

        {/* Admin protected routes */}
        <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
          <Route path="/JobForm" element={<JobTitlesManagement />} />
          <Route path="/Companyform" element={<CompaniesManagement />} />
          <Route path="/mentoapplication" element={<AdminApplicationsPage />} />
          <Route path="/addmentor" element={<MentorRegistrationForm />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;