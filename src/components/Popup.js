import React from 'react';
import '../styles/popup.scss';

class PopUp extends React.Component{
  constructor(props){
    super(props)
    this.closePopUp = this.closePopUp.bind(this);
  }


  

  closePopUp(event){
    const popupBackground = document.querySelector('.popup-bg');
    popupBackground.style.display = "none";

  }

  render(){
    return (
      <div className="popup-bg" onClick={this.closePopUp}>
        <div className="popup" onClick={(event) => event.stopPropagation()}>
          <div className="popup-elements-wrapper" onClick={(event) => event.stopPropagation()}>
            <img className="cross" src="./assets/IMG/cross.png" onClick={this.closePopUp}></img>
            <p className="message-header"></p>
            <p className="message-body"></p>
            <button className="popup-btn" onClick={this.closePopUp}><span className="popup-btn-text">Close</span></button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopUp;