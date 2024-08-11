import React from "react";
import grid from "../assets/photo-grid.png";



export default function Hero(){
    return(
        <div>
            <div className="grid" >
                <img src={grid}/>
                
                
            </div>

            <h1 className="title">Online Experience</h1>
                <p className="subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
        </div>
    )
}