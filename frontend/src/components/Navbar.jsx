import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'; // React Icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sticky, setsticky] = useState(false);

  

  useEffect(() => {
    const handleScroll =() => {
        if(window.scrollY > 0){
            setsticky(true)
        }
        else(
            setsticky(false)
        )
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
        window.addEventListener('scroll', handleScroll)
    }
  }, [])
  

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(savedTheme);
  }, []);

  return (
    <nav className={`bg-white border-b shadow-md fixed top-0 w-full z-50  ${sticky?"sticky-navbar shadow-md bg-base-200 duration-200 transition-all ease-in-out":""}` }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-gray-800">BookStore</a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-[50px] items-center">
            <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="/books" className="text-gray-600 hover:text-gray-800">Books</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>

            {/* Search Bar */}
            <div className="relative">
              <input type="text" className="border rounded-[5px] p-1" placeholder="Search" />
            </div>

            {/* Dark/Light Mode Toggle */}
            <button onClick={toggleTheme} className="focus:outline-none">
              {isDarkMode ? (
                <FiSun className="h-6 w-6 text-yellow-500" />
              ) : (
                <FiMoon className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Login Button (Always Visible) */}
          <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 hover:cursor-pointer">
            <a href="/login">Login</a>
          </button>

          {/* Mobile Icons */}
          <div className="flex items-center lg:hidden space-x-4">
            {/* Dark/Light Mode Toggle (Mobile) */}
            <button onClick={toggleTheme} className="focus:outline-none">
              {isDarkMode ? (
                <FiSun className="h-6 w-6 text-yellow-500" />
              ) : (
                <FiMoon className="h-6 w-6 text-gray-600" />
              )}
            </button>

            {/* Hamburger Menu Icon */}
            <button onClick={toggleMenu} className="focus:outline-none">
              <FiMenu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t shadow-md`}>
        <ul className="space-y-2 px-4 py-4">
          <li><a href="#" onClick={closeMenu} className="block text-gray-600 hover:text-gray-800">Home</a></li>
          <li><a href="#" onClick={closeMenu} className="block text-gray-600 hover:text-gray-800">Course</a></li>
          <li><a href="#" onClick={closeMenu} className="block text-gray-600 hover:text-gray-800">Contact Us</a></li>
          <li><a href="#" onClick={closeMenu} className="block text-gray-600 hover:text-gray-800">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
