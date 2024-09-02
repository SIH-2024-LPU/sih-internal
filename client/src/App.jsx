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
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Recommendation from './Pages/Recommendation/Recommendation';
import JobDetails from './Pages/Recommendation/RecommDetails';
import CareerForm from './Pages/Forms/CareerForm';
import NotFound from './Pages/Error/NotFound';
import CoolNavbar from './Pages/Headers/Navbar';
import BookAppointment from './Pages/Mentor/List';
import LoginForm from './Pages/User/Login';
import SignupForm from './Pages/User/Signup';

function App() {
  return (
    <>
      <CoolNavbar /> {/* Add the new navbar component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/job-details/:jobTitle" element={<JobDetails />} />
        <Route path="/careerform" element={<CareerForm />} />
        <Route path="/bookappointment" element={<BookAppointment/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path ="/signup" element={<SignupForm/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

