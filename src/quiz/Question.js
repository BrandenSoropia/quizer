import React from 'react';
import PropTypes from 'prop-types'
import Answer from './answer';

const Question = props => {
  const { text, answers, onAnswerClick } = props;

  return (
    <div className='Question'>
      <h2>{text}</h2>
      {answers.map(answer => (
        <Answer
          text={answer.text}
          handleClick={() => onAnswerClick(answer.is_correct)}
        />
      ))}
    </div>
  )
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  answer: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onAnswerClick: PropTypes.func.isRequired
}

export default Question;