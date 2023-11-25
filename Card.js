import React from "react";

import star from '/Users/aadrikasrivastava/Desktop/travel/airbnb/src/star.png';
const Card = (props) => {
   let badgeText
   if(props.openSpots === 0){
    badgeText = "SOLD OUT"
   }
   else if(props.location === "ONLINE"){
    badgeText = "ONLINE"
   }
    return ( 
        <div className = "card">
        {badgeText && <div className = " card--badge">{badgeText}</div>}    
            <img src = {props.coverImg}  className = "card--img"/>
            <div className = "card-stats">
                <img src ={star} alt = "rating" className = "card--star"/>
                <span className = "gray">
                    {props.stats.rating}
                </span>
                <span>
                   ({props.stats.reviewCount})
                </span>
                <span className = "gray">
                    {props.location}
                </span>
            </div>
            <p>
                {props.title}
            </p>
            <p>
              <span className="bold">{props.price}</span>  
            </p>
        </div>
     );
}
 
export default Card;