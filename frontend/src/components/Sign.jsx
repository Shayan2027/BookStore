import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from 'react-hot-toast';
import {  useLocation, useNavigate } from 'react-router-dom';

const Sign = () => {

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
     const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
    
          const onSubmit = async (data) => {
            console.log("Form Data:", data);
            const userInfo = {
              fullname : data.fullname,
              email: data.email,
              password: data.password,
              mobile: data.mobile
            }

            await axios.post("http://localhost:3001/user/sign", userInfo )
            .then((res) =>{
              console.log(res.data)
              if(res.data){
                toast.success("SignUp successfully")
                navigate(from, {replace: true});
              }
              localStorage.setItem("Users", JSON.stringify(res.data.User));
            })
            .catch((err) =>{
              if(err.response){
                toast.error("Error: " + err.response.data.message);
              }
            })
          }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-[50px]">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 ">Sign UP</h2>
        
        {/* Name Input */}
        <p className='text-[17px] font-semibold text-gray-600'>Enter Your Name</p>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none  focus:border-blue-400 mt-[5px]"
          {...register("fullname", { required: true })}
        />
        {errors.fullname && <span className='text-red-600'>This field is required</span>}


        {/* Mobile Input */}
        <p className='text-[17px] font-semibold mt-[12px] text-gray-600'>Enter Mobile No.</p>
        <input
          type="number"
          placeholder="Mobile No."
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-400 mt-[5px]"
          {...register("mobile", { required: true })}
        />
        {errors.mobile && <span className='text-red-600'>This field is required</span>}


        {/* Email Input */}
        <p className='text-[17px] font-semibold text-gray-600 mt-[12px]'>Enter Email id</p>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none  focus:border-blue-400 mt-[5px] "
          {...register("email", { required: true })}
        />
        {errors.email && <span className='text-red-600'>This field is required</span>}
        

        {/* Password Input */}
        <p className='text-[17px] font-semibold mt-[12px] text-gray-600'>Enter Password</p>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-400 mt-[5px]"
          {...register("password", { required: true })}
        />
        {errors.password && <span className='text-red-600'>This field is required</span>}
        
        
        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer mt-[20px]">
          Submit
        </button>
        <p className="text-center text-gray-600 mt-4">
          Already Have an account? 
          <a href="/login" className="text-blue-600 hover:underline ml-1">Log in</a>
        </p>

        
      </form>
    </div>
  )
}

export default Sign