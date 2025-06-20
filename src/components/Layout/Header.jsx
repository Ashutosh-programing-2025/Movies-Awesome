import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { ImTv } from "react-icons/im";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-custom-header-bg text-white shadow-md">
      <div className="flex justify-between items-center bg-custom-header-bg px-6 py-3 max-w-7xl mx-auto">
        <NavLink className="text-xl font-bold" to="/">
          vDoIT
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
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <NavLink
            to="/"
            className="block mb-2 px-4 py-2 rounded-md  transition-all duration-300 hover:bg-slate-700"
            onClick={() => setIsOpen(false)}
          >
            <IoHomeSharp className="inline-block mr-2" /> Home
          </NavLink>
          <NavLink
            to="/tvShows"
            className="block px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-700"
            onClick={() => setIsOpen(false)}
          >
            <ImTv className="inline-block mr-2" /> TV Shows
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
