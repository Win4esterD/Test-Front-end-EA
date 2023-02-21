import React from 'react';

class Check extends React.Component{
  componentDidMount(){
    const checkWrapper = document.querySelector('.check-wrapper');
    this.props.animate(checkWrapper, 1, 10, 1800)
  }
  render(){
    return (
      <div className="check-wrapper">
        <p className="call-to-action">Check our event page when you wait:</p>
        <a href="https://github.com/Win4esterD/Test-Front-end-EA/tree/develop"><button className="go-to-event-btn"><span href="https://github.com/Win4esterD/Test-Front-end-EA/tree/develop" className="btn-text">Go to the event</span> <img className="btn-arrow" src="./assets/IMG/white-arrow.png"></img></button></a>
      </div>
    )
  }
}

export default Check;