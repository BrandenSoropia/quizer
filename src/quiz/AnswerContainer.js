import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer'

/**
 * Display all answer options and handle user's answer selection.
 */
class AnswerContainer extends Component {
  handleAnswerSelection = (isAnswer) => {
    if (isAnswer) {
      console.log('Correct!');
    } else {
      console.log('Incorrect!');
    }
  };

  render() {
    const {answers} = this.props;
    const answerElements = [];

    // Iterate through given answers and create a new element for each
    answers.forEach(answerData => {
      answerElements.push(Answer(answerData, this.handleAnswerSelection));
    });

    return (
      <div className="AnswerContainer">
        {answerElements}
      </div>
    )
  }
}

AnswerContainer.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default AnswerContainer;