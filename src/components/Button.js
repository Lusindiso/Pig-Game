import React from 'react';

const Button = props => {
  return (
    <button className={props.className[0]} onClick={props.handleClick}>
      <i className={props.className[1]}></i>
      {props.children}
    </button>
  );
};

export default Button;
