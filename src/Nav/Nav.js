import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/Youtobe" activeclassname="active">
          Youtobe Search
        </NavLink>
        <NavLink to="/blog" activeclassname="active">
          Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
