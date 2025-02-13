import React from 'react';
import { IoMail } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="px-4 py-10 md:px-10 lg:px-20 mt-[60px]">
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Hello, welcome here to learn something 
            <span className="text-pink-500 block">new everyday!!!</span>
          </h1>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque magnam dolores distinctio a totam ipsam, voluptate iure alias harum hic quas architecto illo, illum deleniti delectus facilis nobis voluptatum doloremque.
          </p>
          
          {/* Email Input */}
          <div className="mt-8 relative">
            <input 
              type="email" 
              className="w-full border border-gray-300 rounded-md py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="Enter your email to login" 
            />
            <IoMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Button */}
          <button className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-md hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?cs=srgb&dl=book-stack-books-education-51342.jpg&fm=jpg" 
            className="w-full h-auto rounded-lg" 
            alt="Books"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
