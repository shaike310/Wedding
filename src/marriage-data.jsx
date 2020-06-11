import React from 'react';
import Countdown from 'react-countdown';


const Completionist = () => 
<span> 
  <p>! שי ורותם נ ש ו א י ם </p>
  <p>בררררוור שהחתונה הייתה מהממת </p>
  <p> מאחל לנו אהבה ואושר במשך כל החיים </p>
</span>;
 
// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};


export const MarriageData = function MarriageData() {
    return (
      <Countdown
      date={Date.now() + 5000}
      renderer={renderer}
    />
      
    )
}
