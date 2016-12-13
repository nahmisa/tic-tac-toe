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
  //      format of placement argument: [rowIndex, columnIndex]
  //   - check the board for availability
  //     - return FALSE if not available
  //     - return the placement if available



  this.placement = placement;

  return this.placement;


};

TicTacToe.prototype.isValidPlacement = function(placement) {
  this.placement = placement;
  this.row = this.placement[0];
  this.column = this.placement[1];

  var boardPosition = this.board.grid[this.row][this.column];

  if ( boardPosition === null) {
    return true;
  } else {
    return false;
  }



};

module.exports = TicTacToe;

// DO NOT REMOVE THIS
export default TicTacToe;
