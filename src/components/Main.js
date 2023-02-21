import React from 'react';
import "../styles/main.scss";
import Watch from "./Watch";
import Check from './Check'

class Main extends React.Component{
  componentDidMount(){
    const message = document.querySelector('.message-wrapper');
    this.props.animate(message, 1.3, 40, 800);
  }
  render(){
    return(
      <section className="main-section">
        <div className="main-section-wrapper">
          <div className="message-wrapper">
            <h1 className="caption">UNDER CONSTRUCTION</h1>
            <p className="announcement">We're making lots of improvements and will be back soon</p>
          </div>
          <Watch animate={this.props.animate}/>
          <Check animate={this.props.animate}/>
        </div>
      </section>
    )
  }
}

export default Main;