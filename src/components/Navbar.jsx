import React from "react";

import logo from "../assets/airbnb-logo.png";





// src\images\airbnb-logo.png
export default function Navbar(){
    return(
        <div>
            <img src={logo} alt="logo" className="logo"/>
            
        </div>
    )
}