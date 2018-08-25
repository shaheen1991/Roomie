import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import "./Navbar.css";
import LoginButton from '../LoginButton';
import LoginMenu from '../LoginMenu';

import axios from 'axios';
import { update } from '../../services/withUser';
// import AppBar from "../../../node_modules/material-ui/AppBar";

const Navbar = props => 

  {
    const { user } = props;
    const username = user ? user.username : null;
    const handleLogIn = () => {
      props.history.push('/login');
    };
    const handleLogOut = () => {
      axios.delete('/api/auth')
        .then(() => {
          // unsets the currently logged in user. all components wrapped in withUser
          // will be updated with a null user and rerender accordingly
          update(null);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Roomie
    </Link>
    <div>
      <ul className="navbar-nav">
      <li
          className={
            window.location.pathname === "/calendar"
              ? "nav-item active"
              : "nav-item"
          }
        >
        {user ?
          <Link to="/calendar" className="nav-link">
            Calendar
          </Link>
          : <div/>}
        </li>
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
        {user ?
          <Link to="/choreform" className="nav-link">
           Chore Form
          </Link>
          : <div/>}
        </li>
        <li
          className={
            window.location.pathname === "/smacktalk"
              ? "nav-item active"
              : "nav-item"
          }
        >
        {user ?
          <Link to="/smacktalk" className="nav-link">
            Smack Talk
          </Link>
          : <div/>}
        </li>
      </ul>
    </div>

      {user ?
       <LoginMenu username={username} onLogOut={handleLogOut} />
       : <LoginButton onClick={handleLogIn} />}
  
        
  </nav>)
  }


export default withRouter(Navbar);
