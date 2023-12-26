import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <img
        className="relative w-[100%] h-[100vh]"
        src="/images/background.jpg"
        alt=""
      />
      <div className=" absolute top-0 left-0 mt-[2.5rem] mx-20">
        <div className=" flex items-center justify-between">
          <img className="w-[10%]" src="/images/Logo.png" alt="" />
          <div>
            <NavLink
              to="/"
              className="font-medium text-[1.25rem] text-white pr-[3.125rem]  hover:text-orange-500 focus:text-orange-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="font-medium text-[1.25rem] text-white pr-[3.125rem]  hover:text-orange-500 focus:text-orange-500"
            >
              About
            </NavLink>
            <NavLink
              to="/menu"
              className="font-medium text-[1.25rem] text-white pr-[3.125rem]  hover:text-orange-500 focus:text-orange-500"
            >
              Menu
            </NavLink>
            <NavLink className="font-medium text-[20px] text-white  hover:text-orange-500 focus:text-orange-500">
              Contact
            </NavLink>
          </div>
          <div>
            <i className="fa-brands fa-instagram text-white text-[30px] pr-[30px] hover:text-orange-500"></i>
            <i className="fa-brands fa-facebook text-white text-[30px] hover:text-orange-500"></i>
            <NavLink to="/addmin">
              <i className="fa-solid fa-file-circle-plus pl-[30px] text-white text-[30px] hover:text-orange-500"></i>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="absolute top-[30%] left-[30%]">
        <p className="font-bold 2xl:text-[5rem] md:text-[50px] text-[#f7f4f2]">
          SCRATCH BAKERY
        </p>
        <p className="font-bold text-center 2xl:text-[5rem] md:text-[50px] text-[#f7f4f2]">
          + KITCHEN
        </p>
      </div>
      <div className="absolute 2xl:top-[70%] md:top-[60%] left-[45%]">
        <p className="font-bold 2xl:text-[1.875rem] md:text-[20px] text-[#f7f4f2] text-center">
          OPEN 7am - 2pm
        </p>
        <p className="font-bold 2xl:text-[1.875rem] md:text-[20px] text-[#f7f4f2]">
          CLOSED TUES/WEDS
        </p>
      </div>
    </div>
  );
};

export default Header;
