import React from 'react';

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
  }
  componentWillUnmount() {
    window.removeEventListener('load', this.updateDimensions);
    window.removeEventListener('resize', this.updateDimensions);
  }
  render(){
    return(
      <div className="watch">
        <div className="clock-wrapper">
            <span className="clock">92</span>
            <span className="clock">:</span>
            <span className="clock">11</span>
            <span className="clock">:</span>
            <span className="clock">41</span>
            <span className="clock">:</span>
            <span className="clock">48</span>
          </div>
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