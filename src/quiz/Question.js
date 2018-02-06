import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display question given text.
 */
const Question = (question) => {
  return (
    <div className="Question">
      <h2>{question}</h2>
    </div>
  )
};

Question.propTypes = {
  question: PropTypes.string
};

export default Question;