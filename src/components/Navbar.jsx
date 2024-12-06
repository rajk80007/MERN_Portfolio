// src/components/Navbar.js

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link to="/">
          RK
          </Link>
          </div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
