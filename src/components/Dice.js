import React from 'react';

const Dice = props => {
  return (
    <img
      src={require(`../assets/dice-${props.currentdice}.png`)}
      alt='Dice'
      className={props.dice}
    />
  );
};

export default Dice;
