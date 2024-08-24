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

        <div className="rating">
          <img className="star" src={star} alt="star rating image" />
          <span> {props.rating} </span>
          <span className="grey">
            ({props.reviewCount}) • {props.country}
          </span>
        
      </div>

      <p>{props.title}</p>
      <p>
        <b> From ${props.price}</b> / person
      </p>
    </div>
  );
}
