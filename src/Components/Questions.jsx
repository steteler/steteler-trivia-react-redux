import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Questions extends Component {
  render() {
    const { category, question } = this.props;
    return (
      <div>
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
