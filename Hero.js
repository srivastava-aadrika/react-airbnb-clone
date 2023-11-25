import React from "react";
import photo from '/Users/aadrikasrivastava/Desktop/travel/airbnb/src/trips_grid-1.webp';
import './App.css';
const Hero = () => {
    return ( 
        <section className = "hero">
            <img src = {photo} alt = "describe" className = "hero-image"/>
            <h1 className = "hero--header">Online Experiences</h1>
            <p className = "hero--para">We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</p>
        </section>
     );
}
 
export default Hero;