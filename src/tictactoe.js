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
  //   - check the board for valid placement
  //     - return FALSE if not valid
  //     - return the placement if valid

  this.placement = placement;

  return (this.isValidPlacement(this.placement) ? this.placement : false);

};



TicTacToe.prototype.isValidPlacement = function(placement) {
  this.placement = placement;
  this.row = this.placement[0];
  this.column = this.placement[1];

  var boardPosition = this.board.grid[this.row][this.column];

  if ( boardPosition === null ) {
    return true;
  } else {
    return false;
  }

};

TicTacToe.prototype.updateBoard = function(boardPosition, marker) {
  this.marker = marker;

  this.boardPosition = boardPosition;
  this.row = this.boardPosition[0];
  this.column = this.boardPosition[1];

  this.board.grid[this.row][this.column] = this.marker;

  return this.board;
};

module.exports = TicTacToe;

// DO NOT REMOVE THIS
export default TicTacToe;
