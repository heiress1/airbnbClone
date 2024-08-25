import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";
// import { getData } from "./data";
// console.log(getData());
import { getImageURL } from "./image-util";

export default function App() {
  // const CardInfo = getData();
  // return (
  //   CardInfo.map (card => {
  //     <Card portrait={getImageURL(card.coverImg)}
  //           title={card.title}
  //           description={card.description}
  //           price={card.price}
  //           rating={card.stats.rating}
  //           reviewCount={card.stats.reviewCount}
  //           country={card.location}
  //           openSpots={card.openSpots}
  //     />
  //   })
  // )

  const cardElements = cardData.map((card) => {
    return (
      // <img src={getImageURL(card.coverImg)} alt={card.title} />
      <Card
        key={card.id}
        cards={card}
        // title={card.title}
        // description={card.description}
        // price={card.price}
        portrait={getImageURL(card.coverImg)}
        // rating={card.stats.rating}
        // reviewCount={card.stats.reviewCount}
        // country={card.location}
        // openSpots={card.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cardElementContainer">
        {cardElements}
      </div>
      
      
    </div>
  );
}
