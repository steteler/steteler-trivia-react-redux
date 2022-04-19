import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Answers.css';
import { connect } from 'react-redux';
import Timer from './Timer';
import scoreCount from '../Redux/actions/score';

class Answers extends Component {
  constructor() {
    super();

    this.state = {
      randomAnswers: [],
      isDisabled: false,
      stopTimer: false,
    };

    this.sortAnswers = this.sortAnswers.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addClass = this.addClass.bind(this);
  }

  componentDidMount() {
    this.sortAnswers();
  }

  // Idéia retirada do https://flaviocopes.com/how-to-shuffle-array-javascript/
  sortAnswers() {
    const { correctAnswers, incorrectAnswers } = this.props;
    const magicNumber = 0.5;
    this.setState({
      randomAnswers: [correctAnswers, ...incorrectAnswers]
        .sort(() => Math.random() - magicNumber),
    });
  }

  handleClick({ target } = {}) {
    this.setState({ isDisabled: true, stopTimer: true }, () => {
      const { showNext } = this.props;
      this.sumScore(target);
      showNext();
    });
  }

  sumScore(target) {
    if (target && target.className.includes('correct')) {
      const { difficulty, dispatch, timer } = this.props;
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
    const { correctAnswers } = this.props;
    const { randomAnswers, isDisabled, stopTimer } = this.state;
    return (
      <div data-testid="answer-options" className="answer-options">
        {
          randomAnswers.length && (
            randomAnswers.map((answer, index) => (
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
          )
        }
        <Timer callback={ this.handleClick } stopTimer={ stopTimer } />
      </div>
    );
  }
}

Answers.propTypes = {
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswers: PropTypes.string.isRequired,
  showNext: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return { timer: state.timer };
}

export default connect(mapStateToProps)(Answers);
