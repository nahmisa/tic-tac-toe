import Board from 'board';
import Player from 'player';

var TicTacToe = function() {
  this.board = new Board();
  this.player1 = new Player("Sarah", "X");
  this.player2 = new Player("Heather", "O");
  this.players = [this.player1, this.player2];
  // pick randomly between 2 players: array of 0 and 1
  this.currentPlayer = sample([0,1]);

  this.turns = 0;

};

// helper function to wrap ugly random
function sample(array) {
  var index = Math.floor ( Math.random() * array.length );
  return array[index];
}

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

TicTacToe.prototype.endMove = function() {
  // Ending the move will:
  //   - increment the turns counter by 1
  //   - check if the game has been won
  //   - switch current player

  this.addTurn();
  // this.hasWon();
  this.changePlayers();
};

TicTacToe.prototype.addTurn = function() {
  this.turns += 1;
};

TicTacToe.prototype.hasWon = function() {
  // grid[row][column]
  var grid = this.board.grid;

  // A horizaontal match victory - all columns in same row are equal and none is null
  for (var i = 0; i < 3; i++) {
    if(grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2] && grid[i][0] !== null){
      return true;
    }
  }


  return false;
};

TicTacToe.prototype.changePlayers = function() {
  this.currentPlayer = ((this.currentPlayer === 0) ? 1 : 0);

};

module.exports = TicTacToe;

// DO NOT REMOVE THIS
export default TicTacToe;
