import React from 'react';

class Watch extends React.Component{
  render(){
    return(
      <div className="watch">
        <div className="clock-wrapper">
            <span className="clock">92</span>
            <span className="clock">:</span>
            <span className="clock">11</span>
            <span className="clock">:</span>
            <span className="clock">41</span>
            <span className="clock">:</span>
            <span className="clock">48</span>
          </div>
          <div className="clock-description">
            <div className="clock-description__div">
              <span className="time-units days">Days</span>
            </div>
            <div className="clock-description__div">
              <span className="time-units hours">Hours</span>
            </div>
            <div className="clock-description__div">
              <span className="time-units mins">Minutes</span>
            </div>
            <div className="clock-description__div">
              <span className="time-units secs">Seconds</span>
            </div>
          </div>
      </div>
    )
  }
}

export default Watch;