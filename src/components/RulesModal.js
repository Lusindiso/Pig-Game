import React, { useState } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import './RulesModal.scss';

const RulesModal = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='Modal'>
      <h2 className='button' onClick={toggle}>
        Rules
      </h2>
      <Modal isOpen={modal} toggle={toggle} align-right>
        <ModalHeader toggle={toggle} center>
          <h3 className='topic'>Rules</h3>
        </ModalHeader>

        <ul className='popup-content'>
          <li> The game has 2 players, playing in rounds</li>
          <li>
            In each turn, a player rolls a dice as many times as he whishes.
            Each result get added to his ROUND score.
          </li>
          <li>
            BUT, if the player rolls a 1, all his ROUND score gets lost. After
            that, it's the next player's turn.
          </li>
          <li>
            The player can choose to 'Hold', which means that his ROUND score
            gets added to his GLOBAL score. After that, it's the next player's
            turn.
          </li>

          <li>
            The first player to reach 100 points on GLOBAL score wins the game.
          </li>
          <li>
            Or players can choose their own final score by changing the Final
            score on the input Field.
          </li>
          <li>
            The first player to reach The new points on GLOBAL score wins the
            game.
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default RulesModal;
