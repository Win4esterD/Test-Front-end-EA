import React from 'react';
import CountDown from './CountDown';

class Watch extends React.Component{

  state = {
    width: 0
  }

  updateDimensions = () => {
    this.setState({ 
          width: window.innerWidth
          });
    };

  componentDidMount() {
    window.addEventListener('load', this.updateDimensions);
    window.addEventListener('resize', this.updateDimensions);
    const watch = document.querySelector('.watch');
    this.props.animate(watch, 1.3, 15, 1300)
  }
  componentWillUnmount() {
    window.removeEventListener('load', this.updateDimensions);
    window.removeEventListener('resize', this.updateDimensions);
  }
  render(){
    return(
      <div className="watch">
          <CountDown animate={this.props.animate}/>
          <div className="clock-description">
            <div className="clock-description__div">
              <span className="time-units days">{this.state.width > 768 ? "Days" : 'DD'}</span>
            </div>
            <div className="clock-description__div">
              <span className="time-units hours">{this.state.width > 768 ? "Hours" : 'HH'}</span>
            </div>
            <div className="clock-description__div">
              <span className="time-units mins">{this.state.width > 768 ? "Minutes" : 'MM'}</span>
            </div>
            <div className="clock-description__div">
              <span className="time-units secs">{this.state.width > 768 ? "Seconds" : 'SS'}</span>
            </div>
          </div>
      </div>
    )
  }
}

export default Watch;