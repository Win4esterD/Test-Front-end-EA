import React from "react";
import '../styles/footer.scss';

class Footer extends React.Component{

  constructor(props){
    super(props)
    this.formHandler = this.formHandler.bind(this);
  }

  async formHandler(event){
    event.preventDefault()
    
    const input = document.querySelector(".notification-form__input");
    const server = window.location.href;

    try{
      let response =  await fetch(server, {
        headers: {
          email: input.value
        }
      });
    }catch(err){
      console.log(err);
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