import React, {Component} from 'react';

import Question from './Question'

/**
 * Collects question data and controls the flow from question to question.
 */
class QuestionContainer extends Component {
  render() {
    return (
      <div className="QuestionContainer">
        {Question('What is the main reason so many people moved to California in 1849?')}
      </div>
    );
  }
}

export default QuestionContainer;