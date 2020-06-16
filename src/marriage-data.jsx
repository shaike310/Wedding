import React from 'react';
import Countdown from 'react-countdown';
import {MarriageInfo} from './Marriage-Info'
import './marriage-data.css';

const Completionist = () => 
<span className="text-after"> 
  <p>! שי ורותם נ ש ו א י ם </p>
  <p>בררררוור שהחתונה הייתה מהממת </p>
  <p> מאחל לנו אהבה ואושר במשך כל החיים </p>
</span>;
 
// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
  return <div className= "conuntdown-timer" > {days} DAYS, {hours}:{minutes}:{seconds}
  
   <span className="conuntdown-text-before">
     רק עוד
     </span> </div> ;
  }
};

export const MarriageData = function MarriageData() {
    return (
      <div >
      <Countdown


      //gmt time and calculate time accordingly to country.
      //here israel is 3 after. so i put 3 before gmt.
      date={new Date("2020-09-07T17:00:00Z")}
      
      renderer={renderer}
    />
    <MarriageInfo/>
    
    </div>
      
    )
}
