import Board from 'board';
import Player from 'player';

var TicTacToe = function() {
  this.board = new Board();
  this.player1 = new Player();
  this.player2 = new Player();
};

module.exports = TicTacToe;

// DO NOT REMOVE THIS
export default TicTacToe;
