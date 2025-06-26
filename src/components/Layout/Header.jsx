import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { ImTv } from "react-icons/im";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from '../../assets/logo.png'
import { MdLocalMovies } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-custom-header-bg text-white shadow-md">
      <div className="flex justify-between items-center bg-custom-header-bg px-6 py-3 max-w-7xl mx-auto">
        <NavLink className="text-xl bg-custom-header-bg flex items-center justify-center gap-2 font-bold" to="/">
          Movies World <img className="h-5 w-5" src={logo} alt="" />
        </NavLink>
        <nav className="hidden bg-custom-header-bg md:flex gap-4">
<NavLink
  to="/"
  className={({ isActive }) =>
    `flex items-center px-4 py-2 rounded-md bg-custom-header-bg transition-all duration-300 ${
      isActive ? "bg-slate-700" : "hover:bg-slate-700"
    }`
  }
>
  <IoHomeSharp className="mr-2" />
  Home
</NavLink>
<NavLink
  to="/tvShows"
  className={({ isActive }) =>
    `flex items-center px-4 py-2 rounded-md bg-custom-header-bg transition-all duration-300 ${
      isActive ? "bg-slate-700" : "hover:bg-slate-700"
    }`
  }
>
  <ImTv className="mr-2" />
  TV Shows
</NavLink>
<NavLink
  to="/movies"
  className={({ isActive }) =>
    `flex items-center px-4 py-2 rounded-md bg-custom-header-bg transition-all duration-300 ${
      isActive ? "bg-slate-700" : "hover:bg-slate-700"
    }`
  }
>
  <MdLocalMovies className="mr-2" />
  Movies
</NavLink>
        </nav>
        <div className="md:hidden bg-custom-header-bg">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <NavLink
            to="/"
            className="block px-4 py-2 rounded-md  transition-all duration-300 hover:bg-slate-700"
            onClick={() => setIsOpen(false)}
          >
            <IoHomeSharp className="inline-block bg-custom-header-bg mr-2" /> Home
          </NavLink>
          
          <NavLink
            to="/tvShows"
            className="block px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-700"
            onClick={() => setIsOpen(false)}
          >
            <ImTv className="inline-block bg-custom-header-bg mr-2" /> TV Shows
          </NavLink>
                    <NavLink
            to="/movies"
            className="block px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-700"
            onClick={() => setIsOpen(false)}
          >
            <ImTv className="inline-block bg-custom-header-bg mr-2" /> Movies
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
