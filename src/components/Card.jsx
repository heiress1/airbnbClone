import React from "react";
// import img from "../assets/katie-zaferes.png"
import star from "../assets/star.png";
import * as images from "../assets/images.jsx";
import { getImageURL } from "/src/image-util";

export default function Card(props) {

  let status;
    if (props.cards.openSpots === 0) {
        status = "SOLD OUT";
    } else if (props.cards.location === "Online") {
        status = "ONLINE";
    }

  return (
    <div className="cards">
        {(props.cards.openSpots === 0 || props.cards.location === "Online" ) && <div className="status">{status}</div>}
        {/* <div className="cardContainer"> */}
          <img className="card" src={props.portrait} alt={props.altText} />
        {/* </div> */}

        <div className="rating">
          <img className="star" src={star} alt="star rating image" />
          <span> {props.cards.stats.rating} </span>
          <span className="grey">
            ({props.cards.stats.reviewCount}) • {props.cards.location}
          </span>
        
        </div>

      <p>{props.title}</p>
      <p>
        <b> From ${props.price}</b> / person
      </p>
    </div>
  );
}
