import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

import { getImageURL } from "./image-util";

export default function App() {


  const cardElements = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        {...card}

        portrait={getImageURL(card.coverImg)}

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
