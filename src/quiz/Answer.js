import React from 'react';
import PropTypes from 'prop-types';

// Return element displaying option number, if given one.
const renderOptionNumberIfGiven = (optionNumber) => {
  return optionNumber ? <span>{optionNumber.toString()}</span> : null;
};

/**
 * Display answer text and activate handler on user's answer selection.
 */
const Answer = (answerData, handler) => {
  const {optionNumber, text, isAnswer} = answerData;
  return (
    <div className="Answer" key={`Answer-${optionNumber}`}>
      {renderOptionNumberIfGiven(optionNumber)}
      <button onClick={() => handler(isAnswer)}>{text}</button>
    </div>
  )
};

Answer.propTypes = {
  answerData: PropTypes.shape({
    optionNumber: PropTypes.number,
    text: PropTypes.string,
    isAnswer: PropTypes.bool
  }).isRequired
};

export default Answer;