import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => 
<span> 
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
  return <span>{days} d {hours}:{minutes}:{seconds}</span>;
  }
};

export const MarriageData = function MarriageData() {
    return (
      <div>
      <Countdown

      //gmt time and calculate time accordingly to country.
      //here israel is 3 after. so i put 3 before gmt.
      date={new Date("2020-09-07T17:00:00Z")}
      
      renderer={renderer}
    />
    </div>
      
    )
}
