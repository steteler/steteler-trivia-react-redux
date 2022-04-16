import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Questions.css';

class Questions extends Component {
  render() {
    const { category, question } = this.props;
    return (
      <div className="trivia-questions-category">
        <p data-testid="question-category">
          { category }
        </p>
        <p data-testid="question-text">
          { question }
        </p>
      </div>
    );
  }
}

Questions.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

export default Questions;
