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
      numQuest: 0,
    };
  }

  componentDidMount() {
    this.apiQuestion();
    // this.shuffleAnswers();
  }

  apiQuestion = async () => {
    const { Apiquestions } = this.props;
    // const { arrayAnswers } = this.state;
    const { results } = await getQuestions(Apiquestions);
    this.setState({
      arrayQuestions: results,
      // arrayAnswers: await getQuestions(Apiquestions),
    });
  }

  render() {
    const { arrayQuestions, numQuest } = this.state;
    return (
      <>
        <Header />
        <div>
          {
            arrayQuestions.length && (
              [arrayQuestions[numQuest]].map((result, index) => (
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
  Apiquestions: state.token,
});

Game.propTypes = {
  Apiquestions: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Game);
