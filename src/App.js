import React from 'react';
import './styles/defaults.scss';
import './styles/structure.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopUp from './components/Popup';

class App extends React.Component{
  constructor(props){
    super(props);
    this.animateAppearance = this.animateAppearance.bind(this);
  }


  animateAppearance(element, duration, upShift, animationDelay){
    const styles = window.getComputedStyle(element);
    const topBasicStyle = styles.top;
    element.style.top = `${parseInt(topBasicStyle) - upShift}px`;
    element.style.opacity = '0';

    setTimeout(() => {
      element.style.transition = `${duration}s`
      element.style.top = topBasicStyle;
      element.style.opacity = '1';
    }, animationDelay);

    setTimeout(() => {
      element.style.transition = 'none';
    }, animationDelay * 1.6);
  }

  render(){
    return(
      <div className="application">
        <Header animate={this.animateAppearance}/>
        <Main animate={this.animateAppearance}/>
        <Footer/>
        <PopUp />
      </div>
    )
  }
}

export default App;