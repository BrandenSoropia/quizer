import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './question';
import Welcome from './welcome';
import _ from 'lodash';

import Carrot from '../static/carrot-welcome.png';
import CarrotFlipped from '../static/carrot-welcome-flipped.png';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0,
      showQuiz: false
    };

    this.onBeginClick = this.onBeginClick.bind(this);

    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    console.log(this.props.start_date);
  }

  onBeginClick(){
    this.setState({
        showQuiz: true
    });
  }
  goToNextQuestion() {
    if (this.state.currentQuestion + 1 >= this.props.questions.length) {
      // Quiz complete
      // TODO: Report quiz is completed
      console.log('quiz complete!');
    } else {
      // Move on to next question
      this.setState(prevState => ({
        currentQuestion: prevState.currentQuestion + 1
      }));
    }
  }

  render() {
    const { currentQuestion } = this.state;
    const { name, questions } = this.props;

    if (_.isEmpty(questions)) return null;

    return (
      <React.Fragment>

        {this.state.showQuiz ? (<Question
                                           quizProgress={{
                                             currentQuestion: currentQuestion + 1,
                                             totalQuestions: questions.length
                                           }}
                                           explanation={questions[currentQuestion].explanation}
                                           text={questions[currentQuestion].text}
                                           answers={questions[currentQuestion].answers}
                                           onNextQuestionClick={this.goToNextQuestion}
                                         />)
                                         : (<div>
                                         Welcome to {name} of our 12 week Learn-&-Earn journey, reducing food waste
                                         from field to fork. Try all of our quizzes and win an opportunity to earn
                                         $50 President's Choice gift card. Learn more by following the link at the end
                                         of today's {questions.length} questions.<p/>
                                         <button onClick={this.onBeginClick}>{'Begin'}</button><br/>
                                         <img src={Carrot} />
                                         <img src={CarrotFlipped} />
                                         </div>)}

      </React.Fragment>
    );
  }
}

Quiz.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          isCorrect: PropTypes.bool
        })
      )
    })
  ).isRequired
};

export default Quiz;
