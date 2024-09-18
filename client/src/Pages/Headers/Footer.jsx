import React from 'react';
import { Link } from 'react-router-dom';  // Use Link from react-router-dom
import { Youtube, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">preplaced</h2>
            <p className="text-sm text-gray-600">
              Get started by booking a free trial session with the mentor of your choice.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-2">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <p>Copyright © 2024 Preplaced.in</p>
            <p>mentee-support@preplaced.in</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <p>Preplaced Education Private Limited</p>
              <p>Ibblur Village, Bangalore - 560103</p>
              <p>GSTIN- 29AAKCP9555E1ZV</p>
            </div>
            <div className="space-x-4 mt-4 md:mt-0">
              <Link to="#" className="hover:underline">Privacy Policy</Link>
              <Link to="#" className="hover:underline">Refund Policy</Link>
              <Link to="#" className="hover:underline">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    title: 'Engineering',
    links: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'DevOps / SRE', 'Cybersecurity', 'QA / Automation'],
  },
  {
    title: 'Data Science',
    links: ['Data Engineer', 'Data Scientist', 'Data Analyst', 'Big Data', 'AI / ML'],
  },
  {
    title: 'Business',
    links: ['Sales', 'Marketing', 'Business Analyst', 'Finance', 'HR / Behavioural'],
  },
  {
    title: 'Product',
    links: ['Product Manager', 'UI/UX Designer', 'Project Manager', 'Program Manager'],
  },
  {
    title: 'Resources',
    links: ['Live Events', 'Stories', 'Ask Mentor', 'Support'],
  },
];
