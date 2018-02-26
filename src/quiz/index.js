import React, {Component} from 'react';

import Question from './Question';
import AnswerContainer from './AnswerContainer';
import api from '../integrations/api';

/**
 * Gather questions and answers and manage the stats/flow through the quiz.
 */
class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionElements: [], // Populate this once questions received
      quizId: '5a9317032cefa576036b66bd', // TODO: Decide how to get quiz id
      currentQuestion: 0, // Defines which question to render
    }
  }

  componentDidMount() {
    api.post('/quizzes/find_by_id', {id: this.state.quizId})
      .then(quiz => {
        const temp = quiz[0]; // TODO: Fix backend to send object instead of list!
        this.setState(() => {
          return temp;
        })
      })
  }

  render() {
    const {questionElements, questions, currentQuestion} = this.state;
    const answers = questions ? questions[currentQuestion].answers : [];

    if (questions && (questionElements.length === 0)) { // Generate questions once
      questions.forEach(question => {
        return questionElements.push(Question(question.text));
      });
    }

    return (
      <div className="Quiz">
        {questionElements[currentQuestion]}
        <AnswerContainer answers={answers}/>
      </div>
    )
  }
}

export default Quiz;