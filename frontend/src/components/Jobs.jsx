import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Jobs = () => {
  const jobList = [
    {
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-Time',
      description: 'We are looking for a talented Frontend Developer with experience in React and Tailwind CSS to join our team.',
    },
    {
      title: 'Backend Developer',
      location: 'New York, USA',
      type: 'Full-Time',
      description: 'Join our backend team to build scalable and robust APIs using Node.js and MongoDB.',
    },
    {
      title: 'UI/UX Designer',
      location: 'Remote',
      type: 'Part-Time',
      description: 'We need a creative UI/UX Designer to design intuitive and beautiful user interfaces.',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c')] bg-cover bg-center bg-no-repeat h-[50vh] flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl">We are always looking for passionate and talented individuals.</p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Current Job Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobList.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <p className="text-gray-500"><strong>Location:</strong> {job.location}</p>
                  <p className="text-gray-500 mb-4"><strong>Type:</strong> {job.type}</p>
                  <a 
                    href="#apply" 
                    className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

    <Footer/>
    </>
  );
};

export default Jobs;
