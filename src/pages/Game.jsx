import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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
      numQuestion: 0,
      isVisible: false,
    };

    this.loadQuestion = this.loadQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.showNext = this.showNext.bind(this);
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
      { numQuestion: prevState.numQuestion + 1, isVisible: false }
    ));
    // const { history } = this.props;
    // const { numQuestion } = this.state;
    // console.log('passei aqui');
  //   if (numQuestion > 4) {
  //     history.push('/feedback');
  //   }
  }

  showNext() {
    this.setState({ isVisible: true });
  }

  render() {
    const magicNum = 4;
    const { arrayQuestions, numQuestion, isVisible } = this.state;
    if (numQuestion > magicNum) return <Redirect to="/feedback" />;
    return (
      <>
        <Header />
        {
          arrayQuestions.length ? (
            <main className="main-container">
              <div className="trivia-content">
                <Questions
                  category={ arrayQuestions[numQuestion].category }
                  question={ arrayQuestions[numQuestion].question }
                />
                <Answers
                  key={ arrayQuestions[numQuestion].question }
                  correctAnswers={ arrayQuestions[numQuestion].correct_answer }
                  incorrectAnswers={ arrayQuestions[numQuestion].incorrect_answers }
                  difficulty={ arrayQuestions[numQuestion].difficulty }
                  showNext={ this.showNext }
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
            </main>
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
