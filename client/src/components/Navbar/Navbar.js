import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-brand">
      Roomie
    </div>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/calendar"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/calendar" className="nav-link">
            Calendar
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/smacktalk"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/smacktalk" className="nav-link">
            SmackTalk
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/choreform"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/choreform" className="nav-link">
            Chores
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
