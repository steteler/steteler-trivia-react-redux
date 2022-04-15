import React, { Component } from 'react';
import '../style/Timer.css';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      count: 30,
    };

    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timer();
  }

  timer() {
    const ms = 1000;
    const interval = (
      setInterval(() => {
        const { count } = this.state;
        if (count === 0) {
          return clearInterval(interval);
        }
        this.setState((prevState) => ({
          count: prevState.count - 1,
        }));
      }, ms)
    );
  }

  render() {
    const { count } = this.state;

    return (
      <p data-testid="question-category" className="trivia-timer">
        { count }
      </p>
    );
  }
}

export default Timer;
