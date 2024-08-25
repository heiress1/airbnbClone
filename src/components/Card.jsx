import React from "react";
import star from "../assets/star.png";


export default function Card(props) {

  let status;
    if (props.openSpots === 0) {
        status = "SOLD OUT";
    } else if (props.location === "Online") {
        status = "ONLINE";
    }

  return (
    <div className="cards">
        {(props.openSpots === 0 || props.location === "Online" ) && <div className="status">{status}</div>}
          <img className="card" src={props.portrait} alt={props.description} />

        <div className="rating">
          <img className="star" src={star} alt="star rating image" />
          <span> {props.stats.rating} </span>
          <span className="grey">
            ({props.stats.reviewCount}) • {props.location}
          </span>
        
        </div>

      <p>{props.title}</p>
      <p>
        <b> From ${props.price}</b> / person
      </p>
    </div>
  );
}
