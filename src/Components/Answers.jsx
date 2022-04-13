import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Answers extends Component {
  constructor() {
    super();

    this.state = {
      randomAnswers: [],
    };
  }

  componentDidMount() {
    this.sortAnswers();
  }

  // Idéia retirada do https://flaviocopes.com/how-to-shuffle-array-javascript/
  sortAnswers = () => {
    const { correctAnswers, incorrectAnswers } = this.props;
    console.log(correctAnswers);
    console.log(incorrectAnswers);
    const magicNumber = 0.5;
    this.setState({
      randomAnswers: [correctAnswers, ...incorrectAnswers]
        .sort(() => Math.random() - magicNumber),
    });
  }

  render() {
    const { correctAnswers } = this.props;
    const { randomAnswers } = this.state;
    return (
      <div data-testid="answer-options">
        {randomAnswers.length && (
          randomAnswers.map((element, index) => (
            <button
              key={ index }
              type="button"
              data-testid={ element.includes(correctAnswers)
                ? 'correct-answer'
                : `wrong-answer-${index}` }
            >
              {element}
            </button>
          ))
        ) }
      </div>
    );
  }
}

Answers.propTypes = {
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswers: PropTypes.string.isRequired,
};

export default Answers;
