import React from 'react';
import "../styles/main.scss";
import Watch from "./Watch";
import Check from './Check'

class Main extends React.Component{
  render(){
    return(
      <section className="main-section">
        <div className="main-section-wrapper">
          <h1 className="caption">UNDER CONSTRUCTION</h1>
          <p className="announcement">We're making lots of improvements and will be back soon</p>
          <Watch />
          <Check />
        </div>
      </section>
    )
  }
}

export default Main;