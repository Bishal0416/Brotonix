import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex-no-wrap fixed top-0 z-5 flex w-full items-center justify-between p-5 px-5 bg-gradient-to-b to-green-100 from-green-200 shadow-xl">
        <div>
          <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer text-green-950">
            Brotonix
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
          <Link
            to="/"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>


        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>


      <div
        className={` ${menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="/"
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;