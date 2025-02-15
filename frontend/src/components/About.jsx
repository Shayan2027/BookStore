import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-[100px] px-[50px]'>
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1512820790803-83ca734da794')] bg-cover bg-center bg-no-repeat h-[70vh] flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Book Haven</h1>
          <p className="text-xl">Your gateway to imagination, knowledge, and adventure.</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Book Haven, we are dedicated to creating a community of readers by offering a diverse collection of books that inspire, entertain, and educate. Our mission is to ignite a love for reading and provide a space where every book lover feels at home.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://tse2.mm.bing.net/th?id=OIP.7stwxZm-L1BqyYwVuRKYNgHaE7&w=315&h=315&c=7" alt="Lionel Messi" className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl text-gray-800">Lionel Messi</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://tse1.mm.bing.net/th?id=OIF.wGeftJ1K%2BnSYyKbrEWLdkA&w=266&h=266&c=7" alt="Cristiano Ronaldo" className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl text-gray-800">Cristiano Ronaldo</h3>
                <p className="text-gray-600">Chief Curator</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src="https://tse1.mm.bing.net/th?id=OIP.k8sJ48uX6b59NbQZvHr-kAHaK7&w=474&h=474&c=7" alt="Zinedine Zidane" className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl text-gray-800">Zinedine Zidane</h3>
                <p className="text-gray-600">Customer Relations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl p-6 shadow-md">
              <p className="text-gray-600 mb-4">
                "Book Haven is my go-to place for discovering new authors and genres. The atmosphere is so warm and welcoming!"
              </p>
              <h3 className="font-bold text-lg text-gray-800">- Emily Rose</h3>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 shadow-md">
              <p className="text-gray-600 mb-4">
                "The team is incredibly helpful and knowledgeable. I always leave with more books than I planned!"
              </p>
              <h3 className="font-bold text-lg text-gray-800">- Michael Lee</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Community of Book Lovers</h2>
        <p className="text-lg mb-6">
          Visit us today or explore our collection online. Your next great read awaits!
        </p>
        <a 
          href="/books"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Shop Now
        </a>
      </section>
    </div>

    </div>
    <Footer/>
    </>
  )
}

export default About