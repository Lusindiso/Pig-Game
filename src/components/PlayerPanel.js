import React from 'react';

const PlayerPanel = ({ list, num }) => {
  return (
    <div className={`${list.active[num]} ${list.winner[num]}`}>
      <div className={`player-name`}>
        {list.winner[num] === 'winner' ? 'Winner' : list.players[num]}
      </div>
      <div className='player-score'>{list.score[num]}</div>
      <div className='player-current-box'>
        <div className='player-current-label'>Current</div>
        <div className='player-current-score'>{list.current[num]}</div>
      </div>
    </div>
  );
};

export default PlayerPanel;
