import React from "react";
import '../styles/footer.scss';

class Footer extends React.Component{

  constructor(props){
    super(props)
    this.formHandler = this.formHandler.bind(this);
  }

  componentDidMount(){
    const footer = document.querySelector('footer');
    // this.props.animate(footer, 0, 0, 1800)
  }

  requestSent(popUpSelector, messageHeaderSelector, messageBodySelector){
    popUpSelector.style.display = 'block';
    messageHeaderSelector.innerHTML = "SUCCESS!";
    messageHeaderSelector.style.color = "#162C4E";
    messageBodySelector.innerHTML = "You have successfully subscribed to the email newsletter";
  }

  requestFailed(popUpSelector, messageHeaderSelector, messageBodySelector, err){
    popUpSelector.style.display = 'block';
    messageHeaderSelector.innerHTML = "ERROR!";
    messageHeaderSelector.style.color = "red";
    messageBodySelector.innerHTML = `${err}`;
  }

  async formHandler(event){
    event.preventDefault()
    
    const input = document.querySelector(".notification-form__input");
    const server = window.location.href;

    try{
      await fetch(server, {
        headers: {
          email: input.value
        }
      });

      const popUpSelector = document.querySelector('.popup-bg');
      const messageHeaderSelector = document.querySelector('.message-header');
      const messageBody = document.querySelector('.message-body');
      this.requestSent(popUpSelector, messageHeaderSelector, messageBody);

    }catch(err){
      const popUpSelector = document.querySelector('.popup-bg');
      const messageHeaderSelector = document.querySelector('.message-header');
      const messageBodySelector = document.querySelector('.message-body');
      this.requestFailed(popUpSelector, messageHeaderSelector, messageBodySelector, err)
    }

  }

  render(){
    return (
      <footer>
        <form onSubmit={this.formHandler}  className="notification-form" action="index.html">
          <input required className="notification-form__input" type="email" placeholder="Enter your Email and get notified"></input>
          <button className="form-button">
            <img src="./assets/IMG/white-arrow.png"></img>
          </button>
        </form>
    </footer>
    )
  }
}

export default Footer;