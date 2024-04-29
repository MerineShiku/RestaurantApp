import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Sunshine Restaurant</h2>
            <p className="text-sm">Hattesteiner Allee 1, Hannover</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-sm hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">Services</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="my-4 border-gray-600" />
        <p className="text-sm text-center">© 2024 Sunshine Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

