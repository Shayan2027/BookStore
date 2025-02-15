import React from 'react'
import Home from './home/Home'

import Contact from './components/Contact'
import { Routes, Route, Navigate } from "react-router-dom";
import About from './components/About';
import BookNav from './book/BookNav';
import LoginNav from './login/LoginNav';
import SignNav from './login/SignNav';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';
import Jobs from './components/Jobs.jsx';


const App = () => {

 const [AuthUser, setAuthUser] = useAuth()
   console.log(AuthUser);
  
  return (
    <>
       
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={AuthUser?<About/>:<Navigate to="/sign"/>} />
         <Route path='/books' element={AuthUser?<BookNav/>:<Navigate to='/sign' />} />
         <Route path='/contact' element={AuthUser?<Contact/>:<Navigate to='/sign'/>} />
         <Route path='/login' element={<LoginNav/>} />
         <Route path='/sign' element={<SignNav/>} />
         <Route path='/jobs' element={AuthUser?<Jobs/>:<Navigate to="/sign"/>} />

      </Routes>
      <Toaster/>
    </>
  )
}

export default App