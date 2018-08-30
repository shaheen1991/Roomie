import React, {Component} from "react";
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component{ 
  showSettings (event) {
    event.preventDefault();
  }

  render(){
    return(
      <Menu>
  <nav className="navbar navbar-expand-lg navbar-light" >

    <div>
      <img id= "roomieIconNav" src="/img/roomieIconWhite.png"/>
    </div>
    
    <div className="navbar-brand">
      Roomie
    </div>

    <div>
        <a
          className={
            window.location.pathname === "/calendar"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/calendar" className="nav-link">
            Calendar
          </Link>
        </a>
        <a
          className={
            window.location.pathname === "/smacktalk"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/smacktalk" className="nav-link">
            SmackTalk
          </Link>
        </a>
        <a
          className={
            window.location.pathname === "/choreform"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/choreform" className="nav-link">
            Chores
          </Link>

        </a>
    </div>
  </nav>
      </Menu>





    )
  }








  
};

export default Navbar;
