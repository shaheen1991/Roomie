import React from "react";
import "./landing.css";

const Landing = () => (
    <div id = "landing">
        <div id= "landingLeft">
        <h1 id="welcomeText">Welcome to Roomie</h1>
        </div>
        <div id="landingRight">
       <img id="rightPic" alt="main pic"/>
       </div>
       <div id="icon">
       <img id="roomieIcon" alt="main logo" src="/img/roomieIconTrans.png"/>
       </div>
    </div>
);

export default Landing;