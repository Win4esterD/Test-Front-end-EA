import React from "react";
import '../styles/header.scss';
import { useState, useEffect } from 'react';

class Header extends React.Component{
  state = {
      width: window.innerWidth,
    };

  imageFolder = "./assets/IMG/";

  constructor(props){
    super(props)
    this.animateLeftVector = this.animateLeftVector.bind(this);
    this.animateRightVector = this.animateRightVector.bind(this);
    this.leftVectorChange = this.leftVectorChange.bind(this);
  }
  
  updateDimensions = () => {
    this.setState({ 
          width: window.innerWidth
          });
    };

  componentDidMount() {
    window.addEventListener('load', this.updateDimensions);
    window.addEventListener('resize', this.updateDimensions);
    const logo = document.querySelector('.logo');
    this.props.animate(logo, 1.3, 15, 300);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.updateDimensions);
    window.removeEventListener('resize', this.updateDimensions);
  }

  leftVectorChange(){
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
  
  
  animateLeftVector(){
    const leftVector = document.querySelector('.vector-left');
    leftVector.style.left = '0em';
  }

  animateRightVector(){
    const rightVector = document.querySelector('.vector-right');
    rightVector.style.right = '0em';
    rightVector.style.top = '0em';
  }


  render(){
    return (
      <div className="head-element">
        <div><img className="vector-left" onLoad={this.animateLeftVector} src={this.leftVectorChange()} alt="Left Vector"></img></div>
        <div><img className="vector-right" onLoad={this.animateRightVector} src={this.rightVectorChange()} alt="Right Vector"></img></div>
        <a href="index.html"><img className="logo" src="./assets/IMG/Group.svg" alt="logo"></img></a>
      </div>
    )
  }
}

export default Header;