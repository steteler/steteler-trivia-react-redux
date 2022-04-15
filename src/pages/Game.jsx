import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Answers from '../Components/Answers';
import Timer from '../Components/Timer';
import Header from '../Components/Header';
import Questions from '../Components/Questions';
import getQuestions from '../services/questionsApi';
import '../style/Game.css';

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
        {
          arrayQuestions.length ? (
            <div className="trivia-container">
              {
                [arrayQuestions[numQuestion]].map((result, index) => (
                  <div key={ index } className="trivia-content">
                    <Questions
                      category={ result.category }
                      question={ result.question }
                    />
                    <Answers
                      correctAnswers={ result.correct_answer }
                      incorrectAnswers={ result.incorrect_answers }
                    />
                    <Timer />
                    <button type="button" className="trivia-next-button">
                      PRÓXIMA
                    </button>
                  </div>
                ))
              }
            </div>
          ) : <h2>Loading</h2>
        }
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
