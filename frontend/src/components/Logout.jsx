import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';
import {  useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

const [AuthUser, setAuthUser] = useAuth();

const handleLogout =() =>{
    try {
        setAuthUser({
            ...AuthUser,
            user:null
        })
        localStorage.removeItem('Users')
        toast.success("Logout Successfully")
        navigate(from, {replace: true});
        //window.location.reload();   // Reload the page after logout automatically
    } catch (error) {
        toast.error("Error: " + error.message)
    }
}



  return (
    <div>
        <button className='px-[10px] py-[5px] bg-red-500 hover:bg-red-700 text-white rounded-[5px] cursor-pointer'
        onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout