import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Answers.css';

class Answers extends Component {
  constructor() {
    super();

    this.state = {
      randomAnswers: [],
      isDisabled: false,
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

  handleClick() {
    this.setState({ isDisabled: true });
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
    const { randomAnswers, isDisabled } = this.state;

    return (
      <div data-testid="answer-options" className="answer-options">
        {
          randomAnswers.length && (
            randomAnswers.map((answer, index) => (
              <button
                key={ index }
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
      </div>
    );
  }
}

Answers.propTypes = {
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswers: PropTypes.string.isRequired,
};

export default Answers;
