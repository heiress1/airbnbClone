import React from "react"
import katie from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

export default function Card(){
    return (
        <div className="cards">
            <div className="katie">
                
                <img src={katie} alt="katie" />
                
                <div className="star">
                    <img src={star} alt="star" />
                    <span>5.0 <span className="grey">(6) • USA</span></span>
                </div>
                
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>


        </div>
    )
}