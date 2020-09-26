import React from 'react';
import RulesModal from './RulesModal';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='button'>Pig Game</h1>
      <div className='margin'>
        <RulesModal buttonLabel='Rules' />
      </div>
    </header>
  );
};

export default Header;
