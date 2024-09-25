// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
  //<!-- component -->
  <nav class="bg-gray-800">
      <div class="container flex items-center justify-center p-6 mx-auto text-gray-300 capitalize ">
          <a href="#" class="text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

          <a href="#" class="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">content</a>

          <a href="#" class="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">contributers</a>

          <a href="#" class="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">contribute</a>

          <a href="#" class="border-b-2 border-transparent hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            BBB
          </a>
      </div>
  </nav>
  );
};

export default Navbar;
