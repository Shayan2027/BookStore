import React from 'react'

const Cards = ({ item }) => {
  console.log(item);

  return (
    <>
      <div className="max-w-sm w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-slate-200 m-4 hover:scale-105 duration-200">
        <img
          className="w-full h-48 object-cover"
          src={item.image}
          alt="Card Image"
        />
        <div className="p-4">
          <h2 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-sm md:text-base">
              ${item.price}
            </button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300 cursor-pointer text-sm md:text-base">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
