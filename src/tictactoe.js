import Board from 'board';
import Player from 'player';

var TicTacToe = function() {
  this.board = new Board();
  this.player1 = new Player("Sarah", "X");
  this.player2 = new Player("Heather", "O");
};

TicTacToe.prototype.move = function(placement) {
  // A move will:
  //   - get the placement
  //   - check the board for availability
  //     - return FALSE if not available
  //     - return the placement if available



  this.placement = placement;

  return this.placement;


};

TicTacToe.prototype.isValidPlacement = function(placement) {
  this.placement = placement;

  return false;


};

module.exports = TicTacToe;

// DO NOT REMOVE THIS
export default TicTacToe;
