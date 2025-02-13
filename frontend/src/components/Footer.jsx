import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-6 mt-[30px]">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-xl hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer