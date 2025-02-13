import React from 'react'
import Home from './home/Home'

import Contact from './components/Contact'
import { Routes, Route } from "react-router-dom";
import About from './components/About';
import BookNav from './book/BookNav';

import LoginNav from './login/LoginNav';
import SignNav from './login/SignNav';

const App = () => {
  return (
    <>
       
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/books' element={<BookNav/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/login' element={<LoginNav/>} />
         <Route path='/sign' element={<SignNav/>} />

      </Routes>
    </>
  )
}

export default App