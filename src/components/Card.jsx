import React from "react";
// import img from "../assets/katie-zaferes.png"
import star from "../assets/star.png";
import * as images from "../assets/images.jsx";

export default function Card(props) {
  return (
    <div className="cards">

      <div className="cardContainer">
        <img className="card" src={props.portrait} alt={props.altText} />
      </div>
      
      {/* <img className="card" src={props.portrait} alt={props.altText} /> */}
      <div className="rating">
        <img className="star" src={star} alt="star rating image" />
        <span> {props.rating} </span>
        <span className="grey">
          ({props.reviewCount}) • {props.country}
        </span>

        {/* <div className="rating">
                        <img src={star} alt="star icon" />
                        <span>5.0 <span className="grey">(6) • USA</span></span>
                    </div>
                    
                    <h2>Life lessons with Katie Zaferes</h2>
                    <p><span className="bold">From $136</span> / person</p> */}
      </div>

      <p>{props.title}</p>
      <p>
        <b> From ${props.price}</b> / person
      </p>
    </div>
  );
}
