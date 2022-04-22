import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Answers.css';
import { connect } from 'react-redux';
import Timer from './Timer';
import scoreCount from '../Redux/actions/score';
import assertionsCount from '../Redux/actions/assertions';

class Answers extends Component {
  constructor() {
    super();

    this.state = {
      isDisabled: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.addClass = this.addClass.bind(this);
  }

  handleClick({ target } = {}) {
    this.setState({ isDisabled: true }, () => {
      const { showNext } = this.props;
      this.sumScore(target);
      showNext();
    });
  }

  sumScore(target) {
    if (target && target.className.includes('correct')) {
      const { difficulty, dispatch, timer } = this.props;
      dispatch(assertionsCount(1));
      const hard = 3;
      const medium = 2;
      const easy = 1;
      const points = 10;
      let score = 0;
      if (difficulty === 'hard') {
        score = points + (timer * hard);
      } else if (difficulty === 'medium') {
        score = points + (timer * medium);
      } else {
        score = points + (timer * easy);
      }
      dispatch(scoreCount(score));
    }
  }

  addClass(answer, isDisabled, correctAnswers) {
    if (isDisabled) {
      if (answer.includes(correctAnswers)) {
        return 'correct ';
      }
      return 'wrong ';
    }
    return '';
  }

  render() {
    const { sortedAnswers, correctAnswers } = this.props;
    const { isDisabled, stopTimer } = this.state;
    return (
      <div data-testid="answer-options" className="answer-options">
        {
          sortedAnswers.map((answer, index) => (
            <button
              key={ answer }
              type="button"
              disabled={ isDisabled }
              className={ `${this.addClass(answer, isDisabled, correctAnswers)}answer` }
              onClick={ this.handleClick }
              data-testid={
                answer.includes(correctAnswers)
                  ? 'correct-answer'
                  : `wrong-answer-${index}`
              }
            >
              { answer }
            </button>
          ))
        }
        <Timer callback={ this.handleClick } stopTimer={ stopTimer } />
      </div>
    );
  }
}

Answers.propTypes = {
  showNext: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  sortedAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswers: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return { timer: state.timer };
}

export default connect(mapStateToProps)(Answers);
