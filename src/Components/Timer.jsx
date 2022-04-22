// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import timerCount from '../Redux/actions/timer';
import '../style/Timer.css';

class Timer2 extends Component {
  componentDidMount() {
    this.timerSla();
  }

  timerSla() {
    const magicNumber = 1000;
    const interval = (
      setInterval(() => {
        const { timer, dispatch, stopTimer, callback } = this.props;
        if (stopTimer) {
          return clearInterval(interval);
        }
        if (timer === 0) {
          callback();
          return clearInterval(interval);
        }
        dispatch(timerCount(timer - 1));
      }, magicNumber)
    );
  }

  render() {
    const { timer } = this.props;
    return (
      <p data-testid="question-category" className="trivia-timer">
        { timer }
      </p>
    );
  }
}

Timer2.propTypes = {
  timer: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  stopTimer: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    timer: state.timer,
  };
}

export default connect(mapStateToProps)(Timer2);
