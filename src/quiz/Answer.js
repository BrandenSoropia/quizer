import React from 'react';
import PropTypes from 'prop-types';

const Answer = props => {
  const { text, handleClick } = props
  return (
    <div className='Answer' onClick={handleClick}>
      <span>{text}</span>
    </div>
  )
}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Answer;