import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink activeclassname="active" to="/collections">
            Collections
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/men">
            Men
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/women">
            Women
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
