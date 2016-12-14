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

  this.prompt = require('prompt');

};

// helper function to wrap ugly random
function sample(array) {
  var index = Math.floor ( Math.random() * array.length );
  return array[index];
}

TicTacToe.prototype.playTurn = function(prompt) {
  // A turn will:

  //   - know who the current player is

  var player = this.players[this.currentPlayer];

  while (true) {
    //   - prompt for placement
    var placement = prompt;

    //   - check that the placement is valid
    //     - will return FALSE or valid placement position
    if (this.isValidPlacement(placement)) {

      //   - update the board with a valid placement and players marker
      this.updateBoard(placement, player.marker);


        break;
    }
    //     - if FALSE, reprompt
  }

  //   - end the move
  this.endMove();

  // if outputResult is FALSE, the game continues.  Otherwise, we can eventually display the result of the game.
  return this.outputResult();

};

TicTacToe.prototype.outputResult = function() {
  //   - check if has won or if tie and report information
  var player = this.players[this.currentPlayer];

  var result = "";
  if (this.hasWon() || this.turns == 9) {
    result += "The Game is Over. ";
    if(this.hasWon()) {
      result += player + " has won!";
    } else {
      result += "You have tied.";
    }
    return result;
  }

  return false;
};



TicTacToe.prototype.isValidPlacement = function(placement) {
  // To be valid:
  //   - get the placement
  //      format of placement argument: [rowIndex, columnIndex]
  //   - check the board for valid placement
  //     - return FALSE if not valid
  //     - return the placement if valid

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
  if (this.turns >= 5 && !this.hasWon()) {
    // only change players if hasWon is false after 5 turns
    this.changePlayers();
  } else if (this.turns < 5) {
    // for the first 4 turns, always changePlayers because there is no chance of victory
    this.changePlayers();
  }

};

TicTacToe.prototype.addTurn = function() {
  this.turns += 1;
};

TicTacToe.prototype.hasWon = function() {
  // grid[row][column]
  var grid = this.board.grid;

  // A horizontal match victory - all columns in same row are equal and none is null
  for (var i = 0; i < 3; i++) {
    if(grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2] && grid[i][0] !== null){
      return true;
    }
  }

  // A vertical match victory - all rows in same column are equal and none is null
  for (var j = 0; j < 3; j++) {
    if(grid[0][j] == grid[1][j] && grid[0][j] == grid[2][j] && grid[0][j] !== null){
      return true;
    }
  }

  // A diagonal match victory - need to validate two cases:
    // - starting in the bottom left
  if(grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2] && grid[2][0] !== null){
    return true;
  }
    // - starting in the top left
  if(grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2] && grid[0][0] !== null){
    return true;
  }

  return false;
};

TicTacToe.prototype.changePlayers = function() {
  this.currentPlayer = ((this.currentPlayer === 0) ? 1 : 0);

};

module.exports = TicTacToe;

// DO NOT REMOVE THIS
export default TicTacToe;
