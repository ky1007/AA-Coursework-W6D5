import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    this.intervalId.clearInterval();
  }


  tick() {
    this.setState( { date: new Date() });
  }

  render() {
    let hours = this.state.date.getHours();
    let minutes = this.state.date.getMinutes();
    let seconds = this.state.date.getSeconds();

    hours = (hours < 10) ?  `0${hours}` : hours;
    minutes = (minutes < 10) ?  `0${minutes}` : minutes;
    seconds = (seconds < 10) ?  `0${seconds}` : seconds;

    return (
      <div>
        <h1>Clock</h1>
        <ul>
          <li>Time : </li>
          <li>{ hours } : { minutes } : { seconds } </li>
        </ul>
      </div>

    );
  }

}

export default Clock;
