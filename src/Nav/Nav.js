import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div className="topnav">
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/Covid" activeclassname="active">
          Covid
        </NavLink>
        <NavLink to="/About" activeclassname="active">
          About
        </NavLink>
        <NavLink to="/blog" activeclassname="active">
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
