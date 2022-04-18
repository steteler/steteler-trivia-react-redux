import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import timerCount from '../Redux/actions/timer';
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
    const { callback, dispatch } = this.props;

    const interval = (
      setInterval(() => {
        const { count } = this.state;
        const { stopTimer } = this.props;
        if (stopTimer) {
          dispatch(timerCount(count));
          return clearInterval(interval);
        }
        if (count === 0) {
          callback();
          dispatch(timerCount(count));
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

Timer.propTypes = {
  callback: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  stopTimer: PropTypes.number.isRequired,
};

export default connect()(Timer);
