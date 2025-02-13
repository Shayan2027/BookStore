import React from 'react';
import BookList from '../../public/BookList.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBook = () => {

  const filterData = BookList.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='px-4 md:px-8 lg:px-16 py-6 mx-auto'>
      <div className='mb-6'>
        <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-left'>Free Offered Courses</p>
        <p className='mt-2 text-sm md:text-base text-gray-600 text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis? 
          Quam nam ab veniam, architecto, ut nobis laborum sapiente necessitatibus.
        </p>
      </div>

      <div className='mt-8 mx-auto'>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default FreeBook;
