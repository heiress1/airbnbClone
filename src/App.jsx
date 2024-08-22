import { useState } from 'react'
import React from "react"
import Navbar from "./components/Navbar"
import './App.css'
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data"


export default function App() {
  const cardElements = cardData.map(card => {
    return <Card id={card.id} title={card.title} description={card.description} price={card.price} coverImg={card.coverImg} rating={card.stats[rating]} reviewCount={card.stats[reviewCount]} location={card.location} openSpots={card.openSpots}/> 
  })

  return (
    <div>
      <Navbar/>
      <Hero/>
      {cardElements}
      {/* <Card
        portrait="katie"
        star="star"
        altText='Katie Zaferes'
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      /> */}
     
    
      
    </div>
  )
  
}


