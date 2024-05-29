import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { authcontext } from '../../utils/useContext';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const{isAuth,Username}=useContext(authcontext);
  return (
    <nav className="bg-white shadow-md flex items-center">
      <Link to="/">
        <img
          src="https://cdn.dribbble.com/userupload/9781333/file/original-020472ecdda18c6418862b973b0110de.jpg"
          alt="Mr.Burger"
          className="h-10 w-auto"
        />
      </Link>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <form className="flex items-center mt-4 md:mt-0 md:ml-6">
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none hover:bg-blue-600"
          >
            Search
          </button>
        </form>
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          aria-controls="navbarScroll"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className="hidden md:flex md:items-center w-full md:w-auto" id="navbarScroll">
          <ul className="md:flex md:space-x-6 mt-4 md:mt-0">
            <li>
              <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                Menu
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 focus:outline-none"
                id="navbarScrollingDropdown"
                aria-expanded={isDropdownOpen}
              >
                More
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <button className=' w-full' onClick={() => setIsDropdownOpen(!isDropdownOpen)}> About us</button> 
                  </Link>
                  <Link to="/contact-us" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <button className=' w-full' onClick={() => setIsDropdownOpen(!isDropdownOpen)}> Contact-us</button> 
                    
                  </Link>

                  <div className="border-t my-1"></div>
                  {isAuth?<div className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  {Username}
                  </div>:<></>}
                </div>
              )}
            </li>
            <li>
              <Link to="/cart" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
               Cart
              </Link>
            </li>
            
            <li>
              {!isAuth?
              <Link to="/login" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                Login
              </Link>:<button>logout</button>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
