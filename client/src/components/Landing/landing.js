import React from "react";
import "./landing.css";
import Navbar from "../Navbar/Navbar";
// import { withRouter } from 'react-router-dom';
import { withUser } from '../../services/withUser';

const Landing = () => (
    
    <div id = "landing">
    
        <div id= "landingLeft">
        {/* <Navbar /> */}
        <h1 id="welcomeText">Welcome to Roomie</h1>
        </div>
        <div id="landingRight">
       <img id="rightPic"/>
       </div>
       <div id="icon">
       <img id="roomieIcon" src="/img/roomieIconTrans.png"/>
       </div>
    </div>
);

export default withUser(Landing);