import React, {Component} from 'react';

import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswerContainer';

// For dev testing only
const answers = [
  {optionNumber: 1, text: 'California land was fertile, plentiful, and inexpensive.', isAnswer: false},
  {optionNumber: 2, text: 'Gold was discovered in central California.', isAnswer: true},
  {optionNumber: 3, text: 'The east was preparing for a civil war.', isAnswer: false},
  {optionNumber: 4, text: 'They wanted to establish religious settlements.', isAnswer: false}
];

/**
 * Gather questions and answers and manage the stats/flow through the quiz.
 */
class Quiz extends Component {
  render() {
    return (
      <div className="Quiz">
        <QuestionContainer />
        <AnswerContainer answers={answers}/>
      </div>
    )
  }
}

export default Quiz;