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
    this.setState({
      randomAnswers: [correct_answer, ...incorrect_answers].sort(() => Math.random() - +'0.5') 
    });
  }

  render() {
    const { correct_answer, incorrect_answers } = this.props;
    return (
      <div>
        <div>
          <button
            type="button"
            data-testid="correct-answer"
          >
            { correct_answer }
          </button>
          <div>
            {
              incorrect_answers.map((answer) => (
                <button
                  type="button"
                  key={ answer }
                >
                  { answer }
                </button>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

Answers.propTypes = {
  incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Answers;
