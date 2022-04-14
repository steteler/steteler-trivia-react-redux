import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      stopCount: 0,
    };

    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timer();
  }

  // stopWatch(timer) {
  //   clearInterval(timer);
  // }

  timer() {
    const { count, stopCount } = this.state;
    const ms = 1000;
    setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, ms);
    this.setState({ stopCount });
  }

  // stopWatch(prevState) {
  //   const { stopCount } = this.state;
  //   if (prevState.count === 30) {
  //     this.setState(
  //       (prevState) => ({ stopCount: prevState.stopCount === 0 }),
  //     );
  //   }
  // }

  render() {
    const { count } = this.state;

    return (
      <div>
        <p data-testid="question-category">
          { count }
        </p>
      </div>
    );
  }
}

export default Timer;
