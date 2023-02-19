import React from 'react';

class Check extends React.Component{
  render(){
    return (
      <div className="check-wrapper">
        <p className="call-to-action">Check our event page when you wait:</p>
        <button className="go-to-event-btn"><span className="btn-text">Go to the event</span> <img className="btn-arrow" src="./assets/IMG/white-arrow.png"></img></button>
      </div>
    )
  }
}

export default Check;