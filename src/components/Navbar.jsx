import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="fixed w-full bg-[#1c1c2c] text-white shadow-md z-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <h2 className="text-xl font-bold"><span className="bg-custom-gradient inline-block text-transparent bg-clip-text leading-normal">VICHET</span> CHIM</h2>
        </div>
        <div className="hidden md:flex items-center space-x-4 font-semibold">
          <li onClick={() => handleScroll('home')} className="nav-link">HOME </li>
          <li onClick={() => handleScroll('about')} className="nav-link">ABOUT</li>
          <li onClick={() => handleScroll('projects')} className="nav-link">PROJECTS</li>
          <li onClick={() => handleScroll('contact')} className="nav-link">CONTACT</li>

          
        </div>
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center font-semibold">
            <li onClick={() => handleScroll('home')} className="nav-link py-2">HOME</li>
            <li onClick={() => handleScroll('about')} className="nav-link py-2">ABOUT</li>
            <li onClick={() => handleScroll('projects')} className="nav-link py-2">PROJECTS</li>
            <li onClick={() => handleScroll('contact')} className="nav-link py-2">CONTACT</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
