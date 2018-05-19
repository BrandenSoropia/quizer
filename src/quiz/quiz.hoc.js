import React, { Component } from "react";
import PropTypes from "prop-types";
import Question from "./question.presenter";
import _ from "lodash";
import { consolidateStreamedStyles } from "styled-components";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0
    };

    this.goToNextQuestion = this.goToNextQuestion.bind(this);
  }

  goToNextQuestion() {
    if ((this.state.currentQuestion + 1) >= this.props.questions.length) { // Quiz complete
      // TODO: Report quiz is completed
      console.log('quiz complete!')
    } else { // Move on to next question
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1
      }))
    }
  }

  render() {
    const { currentQuestion } = this.state;
    const { questions } = this.props;

    if (_.isEmpty(questions)) return null;

    return (
      <div className="Quiz">
        {
          <Question
            quizProgress={{
              currentQuestion: currentQuestion + 1,
              totalQuestions: questions.length
            }}
            text={questions[currentQuestion].text}
            answers={questions[currentQuestion].answers}
            onNextQuestionClick={this.goToNextQuestion}
          />
        }
      </div>
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
