import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, path, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={path} className="text-blue-500 hover:text-blue-700 font-medium">
      Go to {title}
    </Link>
  </div>
);

const Dashboard = () => {
  const cards = [
    { title: 'Home', path: '/', description: 'Main landing page' },
    { title: 'Recommendation', path: '/recommendation', description: 'Get personalized job recommendations' },
    { title: 'Career Form', path: '/careerform', description: 'Fill out your career information' },
    { title: 'Login', path: '/login', description: 'Log in to your account' },
    { title: 'Signup', path: '/signup', description: 'Create a new account' },
    { title: 'Job Titles Management', path: '/JobForm', description: 'Manage job titles' },
    { title: 'Companies Management', path: '/Companyform', description: 'Manage company information' },
    { title: 'Application Form', path: '/application', description: 'Submit a new application' },
    { title: 'Admin Applications', path: '/mentoapplication', description: 'View and manage applications' },
    { title: 'Application Tracker', path: '/tracker', description: 'Track your application status' },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Application Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;