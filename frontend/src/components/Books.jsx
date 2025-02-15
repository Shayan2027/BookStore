import React from 'react';
// import BookList from "../../public/BookList.json";
import Cards from './Cards';
import { useState, useEffect } from 'react';
import axios from "axios"

const Books = () => {

const [Booklist, setBooklist] = useState([])
useEffect(() => {

  const getBook = async() =>{
    try {
      const res = await axios.get('http://localhost:3001/book')
      console.log(res);
      setBooklist(res.data)
      
    } catch (error) {
      console.log("Error", error);
      
    }
  }

  getBook();
}, [])


  return (
    <div className='mt-[80px] px-4 sm:px-6 md:px-10 lg:px-16 py-[30px]'>

      {/* Heading Section */}
      <div className='div1 text-center'>
        <p className='text-[24px] sm:text-[28px] md:text-[30px] font-semibold'>
          We're delighted to have you here!
        </p>
        <p className='mt-[20px] text-[14px] sm:text-[16px] text-gray-600 leading-relaxed'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aperiam molestiae nihil earum itaque sapiente 
          officiis cupiditate? Similique labore soluta saepe explicabo neque, tenetur corporis, laboriosam culpa eius minima
          delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque numquam animi, provident quis deleniti
          ea corporis suscipit expedita similique porro voluptatem laboriosam iusto, placeat, dolores voluptatibus saepe nisi fuga.
        </p>
        <button className='mt-[20px] px-[12px] py-[7px] rounded-[5px] bg-gray-500 hover:bg-gray-600 text-white cursor-pointer'>
          <a href="/">Back</a>
        </button>
      </div>

      {/* Cards Section */}
      <div className='div2 mt-[50px] px-[10px] sm:px-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
        {Booklist.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Books;
