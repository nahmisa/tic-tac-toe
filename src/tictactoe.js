var TicTacToe = function() {
  this.board = new Board();
  this.player1 = new Player();
  this.player2 = new Player();
};

var Board = function() {
  this.grid = [[], [], []];
};

var Player = function(name = "Testy") {
  this.name = name;
};

module.exports = TicTacToe;

// DO NOT REMOVE THIS
export default TicTacToe;
