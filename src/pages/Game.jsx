import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Answers from '../Components/Answers';
import Header from '../Components/Header';
import Questions from '../Components/Questions';
import getQuestions from '../services/questionsApi';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayQuestions: [],
      numQuestion: 0,
    };

    this.loadQuestion = this.loadQuestion.bind(this);
  }

  componentDidMount() {
    this.loadQuestion();
  }

  async loadQuestion() {
    const { token } = this.props;
    const { results } = await getQuestions(token);
    this.setState({ arrayQuestions: results });
  }

  render() {
    const { arrayQuestions, numQuestion } = this.state;
    return (
      <>
        <Header />
        <div>
          {
            arrayQuestions.length && (
              [arrayQuestions[numQuestion]].map((result, index) => (
                <div key={ index }>
                  <Questions
                    category={ result.category }
                    question={ result.question }
                  />
                  <Answers
                    correctAnswers={ result.correct_answer }
                    incorrectAnswers={ result.incorrect_answers }
                  />
                </div>
              )))
          }
          <button type="button">
            PRÓXIMA
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

Game.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Game);
