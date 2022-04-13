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
    this.shuffleAnswers();
  }

  // Idéia retirada do https://flaviocopes.com/how-to-shuffle-array-javascript/
  shuffleAnswers = () => {
    const { correct_answer, incorrect_answers } = this.props;
    const magicNumber = 0.5;
    this.setState({
      randomAnswers: [correct_answer, ...incorrect_answers]
        .sort(() => Math.random() - magicNumber),
    });
  }

  render() {
    const { correct_answer} = this.props;
    const { randomAnswers } = this.state;
    return (
      <div data-testid="answer-options">
        {randomAnswers.length > 0 ? (
          randomAnswers.map((element, index) => (
            <button
              key={ index }
              type="button"
              data-testid={ element.includes(correct_answer)
                ? 'correct-answer'
                : `wrong-answer-${index}` }
            >
              {element}
            </button>
          ))
        ) : (<h1>Erro</h1>) }
      </div>
    );
  }
}

Answers.propTypes = {
  incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correct_answer: PropTypes.number.isRequired,
};

export default Answers;
