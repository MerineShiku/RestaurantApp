import React from 'react';
import logo from "./assets/img/logo-restaurant.png"

const Menu = () => {
  return (
    <nav className="flex items-center justify-between px-3 py-6 bg-gray-800">
    <div>
      <img src={logo} alt="Logo" className="h-8  w-auto mr-4 filter invert " />

    </div>
      <div className="flex justify-center flex-grow flex space-x-5 text-white">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">Events</a>
        <a href="#" className="hover:text-gray-400">Gallery</a>
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
      </div>
    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex flex-end">Book a Table</button>
  </nav>
  );
};
  	
export default Menu;