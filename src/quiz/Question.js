import React from "react";
import PropTypes from "prop-types";
import Answer from "./answer";

const Question = props => {
  const { text, answers, onAnswerClick } = props;

  return (
    <div className="Question">
      <h2>{text}</h2>
      {answers.map((answer, idx) => (
        <Answer
          key={`answer-${idx}`}
          text={answer.text}
          handleClick={() => onAnswerClick(answer.isCorrect)}
        />
      ))}
    </div>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isCorrect: PropTypes.bool
    })
  ).isRequired,
  onAnswerClick: PropTypes.func.isRequired
};

export default Question;
