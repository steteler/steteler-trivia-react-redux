import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../Components/Header';

class Feedback extends Component {
  //  feedbackQuote = () => {
  //    const { rightOnes } = this.props;
  //    const questValidation = 3;
  //    switch (true) {
  //    case rightOnes >= questValidation:
  //      return 'Well Done!';
  //    default:
  //      return 'Could be better...';
  //    }
  //  }

  //  homeRedirect = (event) => {
  //    event.preventDefault();
  //    const { history } = this.props;
  //    history.push('/');
  //  }

  //  rankingRedirect = (event) => {
  //    event.preventDefault();
  //    const { history } = this.props;
  //    history.push('/Ranking');
  //  }

  render() {
    //  const { rightOnes, score } = this.props;
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">Text FeedBack</h1>
        {/* <section>
          <h2 data-testid="feedback-text">{ this.feedbackQuote() }</h2>
          <h3
            data-testid="feedback-total-question"
          >
            {`Você acertou ${rightOnes} questões!`}
          </h3>
          <h3
            data-testid="feedback-total-score"
          >
            {`Um total de ${score} pontos.`}
          </h3>
          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ this.homeRedirect }
          >
            Play Again
          </button>
          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ this.rankingRedirect }
          >
            Ranking
          </button>

        </section> */}
      </div>
    );
  }
}

// Feedback.propTypes = {
//   rightOnes: PropTypes.number,
//   score: PropTypes.number,
// }.isRequired;

// const mapStateToProps = (state) => ({
//   rightOnes: state.player.rightOnes,
//   score: state.player.score,
// });

export default Feedback;