import React from 'react';

class CountDown extends React.Component{
  targetDate = new Date(2023, 4, 31);

  state = {
    seconds: 0
  }


  componentDidMount(){
    const seconds = document.querySelector('#seconds');
    seconds.innerHTML = `${this.secondsNow()}`;
    setInterval(() => {
      this.setSeconds();
      seconds.innerHTML = `${this.state.seconds}`;
    }, 1000)
  }


  countDays(){
    const daysLeft = Math.floor(Math.abs(this.targetDate - new Date())/(1000*60*60*24));
    return daysLeft;
  }

  countHours(){
    const currentDate = new Date();
    let hours
    if(currentDate.getMinutes() === 0 && currentDate.getSeconds() === 0){
      hours = 24 - currentDate.getHours();
    }else{
      hours =  24 - currentDate.getHours() - 1;
    }

    if(hours > 9){
      return String(hours);
    }else{
      return `0${hours}`;
    }
  }

  getMinutes(){
    if(59 - new Date().getMinutes() > 9){
      return 59 - new Date().getMinutes();
    }else{
      return `0${59 - new Date().getMinutes()}`;
    }
    
  }

  secondsNow(){
    if(59 - new Date().getSeconds() > 9){
      return 59 - new Date().getSeconds();
    }else{
      return `0${59 - new Date().getSeconds()}`;
    }
  }

  setSeconds(){
    this.setState({seconds: this.secondsNow()})
  }


  render(){
    return (
      <div className="clock-wrapper">
        <span className="clock">{this.countDays()}</span>
        <span className="clock">:</span>
        <span className="clock">{this.countHours()}</span>
        <span className="clock">:</span>
        <span className="clock">{this.getMinutes()}</span>
        <span className="clock">:</span>
        <span id="seconds" className="clock"></span>
      </div>
    )
  }
}

export default CountDown;