import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Answers from '../Components/Answers';
import Header from '../Components/Header';
import Questions from '../Components/Questions';
import getQuestions from '../services/getQuestions';
import '../style/Game.css';
import Footer from '../Components/Footer';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      arrayQuestions: [],
      question: 0,
      isVisible: false,
    };

    this.loadQuestion = this.loadQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.openNext = this.openNext.bind(this);
  }

  componentDidMount() {
    this.loadQuestion();
  }

  async loadQuestion() {
    const { token } = this.props;
    this.setState({ arrayQuestions: await getQuestions(token) });
  }

  nextQuestion() {
    this.setState((prevState) => (
      { question: prevState.question + 1, isVisible: false }
    ));
  }

  openNext() {
    this.setState({ isVisible: true });
  }

  render() {
    const { arrayQuestions, question, isVisible } = this.state;
    return (
      <>
        <Header />
        {
          arrayQuestions.length ? (
            <div className="trivia-container">
              <div className="trivia-content">
                <Questions
                  category={ arrayQuestions[question].category }
                  question={ arrayQuestions[question].question }
                />
                <Answers
                  key={ question }
                  correctAnswers={ arrayQuestions[question].correct_answer }
                  incorrectAnswers={ arrayQuestions[question].incorrect_answers }
                  difficulty={ arrayQuestions[question].difficulty }
                  openNext={ this.openNext }
                />
                <button
                  type="button"
                  style={ { visibility: isVisible ? 'visible' : 'hidden' } }
                  className="trivia-next-button"
                  onClick={ this.nextQuestion }
                  data-testid="btn-next"
                >
                  PRÓXIMA
                </button>
              </div>
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

Game.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Game);
