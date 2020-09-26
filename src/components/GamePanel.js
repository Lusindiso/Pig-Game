import React from 'react';
import PlayerPanel from './PlayerPanel';

const GamePanel = ({ list }) => {
  return (
    <main>
      <div className='game-container'>
        <PlayerPanel list={list} num='0' />
        <PlayerPanel list={list} num='1' />
      </div>
    </main>
  );
};

export default GamePanel;
