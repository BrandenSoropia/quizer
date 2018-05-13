import React, { Component } from "react";
import PropTypes from "prop-types";
import Question from "./question";
import _ from "lodash";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0
    };

    this.onAnswerClick = this.onAnswerClick.bind(this);
  }

  // TODO: Handle answer
  onAnswerClick(isCorrect) {
    console.log(isCorrect);
  }

  render() {
    const { currentQuestion } = this.state;
    const { questions } = this.props;

    if (_.isEmpty(questions)) return null;

    return (
      <div className="Quiz">
        {
          <Question
            text={questions[currentQuestion].text}
            answers={questions[currentQuestion].answers}
            onAnswerClick={this.onAnswerClick}
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
