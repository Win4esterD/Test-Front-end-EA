import React from "react";
import '../styles/header.scss';
import { useState, useEffect } from 'react';

class Header extends React.Component{
  state = {
      width: 0,
    };

  imageFolder = "./assets/IMG/";
  
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
      return `${this.imageFolder}Vector-left.png`;
    }else if(this.state.width <= 768 && this.state.width > 495){
      return `${this.imageFolder}Vector-left768.png`;
    }else if(this.state.width <= 495){
      return `${this.imageFolder}Vector-left360.png`
    }
  }

  rightVectorChange(){
    if(this.state.width > 768){
      return `${this.imageFolder}Vector-right.png`;
    }else if(this.state.width <= 768 && this.state.width > 495){
      return `${this.imageFolder}Vector-right768.png`;
    }else if(this.state.width <= 495){
      return `${this.imageFolder}Vector-right360.png`
    }
  }

  render(){
    return (
      <div>
        <img className="vector-left" src={this.leftVectorChanger()} alt="Left Vector"></img>
        <img className="vector-right" src={this.rightVectorChange()} alt="Right Vector"></img>
        <a href="index.html"><img className="logo" src="./assets/IMG/Group.svg" alt="logo"></img></a>
      </div>
    )
  }
}

export default Header;