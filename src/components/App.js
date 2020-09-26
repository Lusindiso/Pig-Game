import React, { Component } from 'react';
import Button from './Button';
import Dice from './Dice';
import GamePanel from './GamePanel';
import Header from './Header';
import Input from './Input';

import './App.css';

class App extends Component {
  state = {
    players: ['Player 1', 'Player 2'],
    activeClass: ['active', null],
    gameActive: false,
    player: 0,
    score: [37, 56],
    activePlayer: 0,
    currentScore: [13, 0],
    currentdice: 4,
    winnerClass: [null, null],
    finalScore: 100,
    displayDice: true,
  };

  roll = () => {
    if (this.state.gameActive) {
      let dice = Math.ceil(Math.random() * 6);
      if (dice === 1) {
        this.setState({
          currentdice: dice,
          player: this.state.player === 0 ? 1 : 0,
          currentScore: [0, 0],
          activeClass: this.state.activeClass.reverse(),
          displayDice: false,
        });
      } else {
        this.setState({
          currentScore:
            this.state.player === 0
              ? [this.state.currentScore[this.state.player] + dice, 0]
              : [0, this.state.currentScore[this.state.player] + dice],
          currentdice: dice,
          displayDice: true,
        });
      }
    }
  };

  newGame = () => {
    this.setState({
      gameActive: true,
      currentScore: [0, 0],
      score: [0, 0],
      winnerClass: [null, null],
      activeClass: ['active', null],
      displayDice: false,
    });
  };

  hold = () => {
    if (this.state.gameActive) {
      this.setState({ displayDice: false });
      if (
        this.state.score[this.state.player] +
          this.state.currentScore[this.state.player] >=
        this.state.finalScore
      ) {
        this.setState({
          score:
            this.state.player === 0
              ? [
                  this.state.currentScore[this.state.player] +
                    this.state.score[this.state.player],
                  this.state.score[1],
                ]
              : [
                  this.state.score[0],
                  this.state.currentScore[this.state.player] +
                    this.state.score[this.state.player],
                ],
          currentScore: [0, 0],
          activeClass: [null, null],
          winnerClass:
            this.state.player === 0 ? ['winner', null] : [null, 'winner'],
        });
      } else {
        this.setState({
          score:
            this.state.player === 0
              ? [
                  this.state.currentScore[this.state.player] +
                    this.state.score[this.state.player],
                  this.state.score[1],
                ]
              : [
                  this.state.score[0],
                  this.state.currentScore[this.state.player] +
                    this.state.score[this.state.player],
                ],
          player: this.state.player === 0 ? 1 : 0,
          currentScore: [0, 0],
          activeClass: this.state.activeClass.reverse(),
        });
      }
    }
  };

  handleChange = e => {
    this.setState({ finalScore: e.target.value });
  };
  render() {
    return (
      <div className='App'>
        <Header />
        <GamePanel
          list={{
            players: this.state.players,
            active: this.state.activeClass,
            score: this.state.score,
            current: this.state.currentScore,
            winner: this.state.winnerClass,
          }}
        />
        <Button
          className={['btn-new', 'ion-ios-plus-outline']}
          handleClick={this.newGame}
        >
          New game
        </Button>
        <Button
          className={['btn-roll', 'ion-ios-loop']}
          handleClick={this.roll}
        >
          Roll dice
        </Button>
        <Button
          className={['btn-hold', 'ion-ios-download-outline']}
          handleClick={this.hold}
        >
          Hold
        </Button>
        <Input
          handleChange={this.handleChange}
          finalScore={this.state.finalScore}
        />
        {this.state.displayDice ? (
          <Dice currentdice={this.state.currentdice} dice='dice' />
        ) : null}
      </div>
    );
  }
}

export default App;
