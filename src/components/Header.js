import React from "react";
import '../styles/header.scss';

class Header extends React.Component{
  render(){
    return (
      <div>
        <img className="vector-left" src="./assets/IMG/Vector-left.png" alt="Left Vector"></img>
        <img className="vector-right" src="./assets/IMG/Vector-right.png" alt="Right Vector"></img>
        <img className="logo" src="./assets/IMG/Group.svg" alt="logo"></img>
      </div>
    )
  }
}

export default Header;