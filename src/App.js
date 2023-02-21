import React from 'react';
import './styles/defaults.scss';
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
    console.log(element);

    setTimeout(() => {
      element.style.transition = `${duration}s`
      element.style.top = topBasicStyle;
      element.style.opacity = '1';
    }, animationDelay);
  }

  render(){
    return(
      <div>
        <PopUp />
        <Header animate={this.animateAppearance}/>
        <Main animate={this.animateAppearance}/>
        <Footer animate={this.animateAppearance}/>
      </div>
    )
  }
}

export default App;