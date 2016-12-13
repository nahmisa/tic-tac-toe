// Do not remove
import TicTacToe from 'tictactoe';

describe('TicTacToe', function() {

  var testTicTacToe = new TicTacToe();
  var occupiedTicTacToe = new TicTacToe();

  describe('TicTacToe', function() {
    it('should be defined', function() {
      expect(testTicTacToe).toBeDefined();
    });

    it('should have a board', function() {
      expect(testTicTacToe.board).toBeDefined();
    });

    it('should have two players', function() {
      expect(testTicTacToe.player1).toBeDefined();
      expect(testTicTacToe.player2).toBeDefined();
    });

    it('should have turns', function() {
      expect(testTicTacToe.turns).toBeDefined();
    });

  });

  describe('move', function() {

    it('should return the placement', function() {
      expect(testTicTacToe.move([0,0])).toBeTruthy();
    });

  });

  describe('isValidPlacement', function() {

    it('should return false if the placement on the board does not exist', function() {
      expect(testTicTacToe.isValidPlacement([0, 1000])).toBeFalsy();
    });

    it('should return false if the placement on the board is already occupied', function() {

      var occupiedGrid = [
        ['X', 'O', null],
        [null, null, null],
        [null, null, null]
      ];

      occupiedTicTacToe.board.grid = occupiedGrid;

      expect(occupiedTicTacToe.isValidPlacement([0,0])).toBeFalsy();
    });

    it('should return true if the placement on the board is not occupied', function() {
      expect(testTicTacToe.isValidPlacement([0, 1])).toBeTruthy();
    });

  });

  describe('updateBoard', function() {

    it('should change the boards current value to the given marker', function() {
      var boardPosition = [0,0];
      var row = boardPosition[0];
      var column = boardPosition[1];

      var boardValue = testTicTacToe.board.grid[row][column];

      expect(boardValue).toBeNull();

      testTicTacToe.updateBoard(boardPosition, "X");

      var boardValueUpdate = testTicTacToe.board.grid[row][column];

      expect(boardValueUpdate).toEqual("X");

    });

  });

  describe('endMove', function() {

    it('should increment the games turns by 1 AND change the current player', function() {
      var gameTurns = testTicTacToe.turns;
      var originalPlayer = testTicTacToe.currentPlayer;

      testTicTacToe.endMove();

      expect(testTicTacToe.turns).toEqual(gameTurns + 1);
      expect(testTicTacToe.currentPlayer).not.toEqual(originalPlayer);

    });

  });

  describe('addTurn', function() {

    it('should increment the games turns by 1', function() {
      var gameTurns = testTicTacToe.turns;

      testTicTacToe.addTurn();

      expect(testTicTacToe.turns).toEqual(gameTurns + 1);
    });

  });

  describe('changePlayers', function() {

    it('change the current player to next player and back again', function() {
      var originalPlayer = testTicTacToe.currentPlayer;

      testTicTacToe.changePlayers();
      expect(testTicTacToe.currentPlayer).not.toEqual(originalPlayer);

      testTicTacToe.changePlayers();
      expect(testTicTacToe.currentPlayer).toEqual(originalPlayer);


    });

  });

});
