import React from 'react';

const Input = ({ handleChange, finalScore }) => {
  return (
    <input
      type='text'
      placeholder='Final score'
      className='final-score'
      onChange={handleChange}
      value={finalScore}
    />
  );
};

export default Input;
