import React from "react";
import "./landing.css";

const Landing = () => (
    <div id = "landing">
        <div id= "landingLeft">
        <h1 id="welcomeText">Welcome to Roomie</h1>
        <img id="side2" src="/img/side2.png"/>
        </div>
        <div id="landingRight">
       <img id="rightPic" alt="main pic"/>
       </div>
       <div id="icon">

       <img id="roomieIcon" alt="roomie icon" src="/img/roomieIconTrans.png"/>
       <img id="side" alt="side" src="/img/side.png"/>

      </div>
    </div>
);

export default Landing;