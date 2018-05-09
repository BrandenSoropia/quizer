import React, { Component } from 'react';
import Question from './question';
import getCurrentActiveQuiz from '../services/get-quiz';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: null
    }

    this.onAnswerClick = this.onAnswerClick.bind(this);
  }

  componentDidMount() {
    const params = {
      current_date: new Date()
    };

    getCurrentActiveQuiz(params)
      .then(quiz => {
        this.setState((prevState) => {
          return { quiz };
        });
      })
  }

  // TODO: Handle answer
  onAnswerClick(isCorrect) {
    console.log(isCorrect)
  }

  render() {
    const { quiz } = this.state;

    if (!quiz) return null

    return (
      <div className='Quiz'>
        {quiz.questions.map(question => {
          return (
            <Question
              text={question.text}
              answers={question.answers}
              onAnswerClick={this.onAnswerClick}
            />
          )
        })
        }
      </div>
    )
  }
}

Quiz.propTypes = {
  // TODO: proptypes
}

export default Quiz;