import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container bg-dark ">
      <div className=" anchor-style">
        <a className=" text-white fs-3" href="/home">
          Programming-School
        </a>
      </div>
      <div className=" anchor-style">
        <NavLink className=" text-white" to="/home">
          Home
        </NavLink>
        <NavLink className=" text-white" to="/about">
          About
        </NavLink>
        <NavLink className=" text-white" to="/course">
          Course
        </NavLink>
        <NavLink className=" text-white" to="/nf">
          NF
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
