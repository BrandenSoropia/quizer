import React, { Component } from 'react';
import Question from './question';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.onAnswerClick = this.onAnswerClick.bind(this);
  }


  // TODO: Handle answer
  onAnswerClick(isCorrect) {
    console.log(isCorrect)
  }

  render() {
    return (
      <div className='Quiz'>
        {
          <Question
            text={'hello'}
            answers={[{text: 'hello', isCorrect: true}]}
            onAnswerClick={this.onAnswerClick}
          />
        }
      </div>
    )
  }
}

Quiz.propTypes = {
  // TODO: proptypes
}

export default Quiz;