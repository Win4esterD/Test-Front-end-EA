import React from "react";
import '../styles/footer.scss';

class Footer extends React.Component{
  render(){
    return (
      <footer>
        <form className="notification-form" action="index.html">
          <input className="notification-form__input" type="email" placeholder="Enter your Email and get notified"></input>
          <button className="form-button">
            <img src="./assets/IMG/white-arrow.png"></img>
          </button>
        </form>
    </footer>
    )
  }
}

export default Footer;