import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./data/data.js"


export default function App() {
    const cards = data.map(x => 
                            <Card 
                                title = {x.title}
                                location = {x.location}
                                googleMapsUrl = {x.googleMapsUrl}
                                startDate = {x.startDate}
                                endDate = {x.endDate}
                                description = {x.description}
                                imageUrl = {x.imageUrl}
                            />
                        )
    return (
        <div className="main--container">
            <Header />
            <div className="content--container">
                {cards}
            </div>     
             
            <Footer />
        </div>
    )
}