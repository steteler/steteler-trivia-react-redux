import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Answers from '../Components/Answers';
import Header from '../Components/Header';
// import scoreCount from '../Redux/actions/score';
import Questions from '../Components/Questions';
import getQuestions from '../services/questionsApi';
import '../style/Game.css';
import Footer from '../Components/Footer';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayQuestions: [],
      numQuestion: 0,
      // score: 0,
    };

    this.loadQuestion = this.loadQuestion.bind(this);
    // this.questionScore = this.questionScore.bind(this);
  }

  componentDidMount() {
    this.loadQuestion();
    // this.questionScore();
  }

  async loadQuestion() {
    const { token } = this.props;
    const { results } = await getQuestions(token);
    this.setState({ arrayQuestions: results });
  }

  // questionScore() {
  //   const { score, arrayQuestions } = this.state;
  //   console.log(arrayQuestions);
  //   const { scoreDispatch } = this.props;
  //   const hard = 3;
  //   const medium = 2;
  //   const easy = 1;
  //   if (arrayQuestions[0].difficulty === 'hard') {
  //     scoreDispatch(hard);
  //     console.log(arrayQuestions[0].difficulty);
  //   }
  //   if (arrayQuestions[0].difficulty === 'medium') {
  //     scoreDispatch(medium);
  //   }
  //   if (arrayQuestions[0].difficulty === 'easy') {
  //     scoreDispatch(easy);
  //   }
  // }

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
                    <button type="button" className="trivia-next-button">
                      PRÓXIMA
                    </button>
                  </div>
                ))
              }
            </div>
          ) : <h2>Loading</h2>
        }
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

// const mapDispatchToProps = (dispatch) => ({
//   scoreDispatch: (score) => dispatch(scoreCount(score)),
// });

Game.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Game);
