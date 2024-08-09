import React from "react";
import grid from "../assets/photo-grid.png";



export default function Hero(){
    return(
        <div className="grid" >
            <img src={grid}/>
            <h1>PhotoGrid</h1>
            
        </div>
    )
}