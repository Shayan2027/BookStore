import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-[100px] px-[50px] flex justify-center'>
    <form className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md" >
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 ">Contact Us</h2>
        
        <p className='text-[17px] font-semibold text-gray-600'>Enter Your Name</p>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none  focus:border-blue-400 mt-[5px]"
         
        />
        
       

        {/* Email Input */}
        <p className='text-[17px] font-semibold text-gray-600 mt-[12px]'>Enter Email id</p>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none  focus:border-blue-400 mt-[5px] "
          
        />
       
        
        {/* Password Input */}
        <p className='text-[17px] font-semibold mt-[12px] text-gray-600'>Message</p>
        <input
          type="text"
          placeholder="Type Your Meaasage"
          className="w-full h-[60px] p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-400 mt-[5px]"
          
        />
        
        
        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer mt-[20px]">
          Submit
        </button>
       

        
      </form>

    </div>
    <Footer/>
    </>
  )
}

export default Contact