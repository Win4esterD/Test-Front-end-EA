import React from "react";
import '../styles/header.scss';
import { useState, useEffect } from 'react';

class Header extends React.Component{
  state = {
      width: 0,
    };
  
  updateDimensions = () => {
    this.setState({ 
          width: window.innerWidth
          });
    };

  componentDidMount() {
    window.addEventListener('load', this.updateDimensions);
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('load', this.updateDimensions);
    window.removeEventListener('resize', this.updateDimensions);
  }

  leftVectorChanger(){
    if(this.state.width > 768){
      return './assets/IMG/Vector-left.png';
    }else if(this.state.width <= 768 && this.state.width > 360){
      return "./assets/IMG/Vector-left768.png";
    }
  }

  rightVectorChange(){
    if(this.state.width > 768){
      return './assets/IMG/Vector-right.png';
    }else if(this.state.width <= 768 && this.state.width > 360){
      return "./assets/IMG/Vector-right768.png";
    }
  }

  render(){
    return (
      <div>
        <img className="vector-left" src={this.leftVectorChanger()} alt="Left Vector"></img>
        <img className="vector-right" src={this.rightVectorChange()} alt="Right Vector"></img>
        <img className="logo" src="./assets/IMG/Group.svg" alt="logo"></img>
      </div>
    )
  }
}

export default Header;