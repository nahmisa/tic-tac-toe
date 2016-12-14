// Do not remove
import TicTacToe from 'tictactoe';

describe('TicTacToe', function() {

  var testTicTacToe = new TicTacToe();
  var occupiedTicTacToe = new TicTacToe();

  // Boards to check that we can win in various ways
  var verticalTicTacToe = new TicTacToe();
  var horizontalTicTacToe = new TicTacToe();
  var diagonalBottomTicTacToe = new TicTacToe();
  var diagonalTopTicTacToe = new TicTacToe();
  var tieTicTacToe = new TicTacToe();

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

    it('should increment the games turns by 1 AND change the current player when turns are less than 5', function() {
      var gameTurns = testTicTacToe.turns;
      var originalPlayer = testTicTacToe.currentPlayer;

      testTicTacToe.endMove();

      expect(testTicTacToe.turns).toEqual(gameTurns + 1);
      expect(testTicTacToe.currentPlayer).not.toEqual(originalPlayer);

    });

    it('should increment the games turns by 1 AND change the current player when turns are equal to or more than 5 and no one has won', function() {
      occupiedTicTacToe.turns = 5;
      var gameTurns = occupiedTicTacToe.turns;
      var originalPlayer = occupiedTicTacToe.currentPlayer;

      occupiedTicTacToe.endMove();

      expect(occupiedTicTacToe.turns).toEqual(gameTurns + 1);
      expect(occupiedTicTacToe.currentPlayer).not.toEqual(originalPlayer);

      // turns are now greater than 5 because of endMove increment
      var gameTurns2 = occupiedTicTacToe.turns;
      var originalPlayer2 = occupiedTicTacToe.currentPlayer;

      occupiedTicTacToe.endMove();

      expect(occupiedTicTacToe.turns).toEqual(gameTurns2 + 1);
      expect(occupiedTicTacToe.currentPlayer).not.toEqual(originalPlayer2);

    });

    it('should increment the games turns by 1 AND NOT change the current player when turns are equal to or more than 5 AND someone has won', function() {
      horizontalTicTacToe.turns = 5;
      var horizontalGrid = [
        ['X', 'X', 'X'],
        ['O', null, 'O'],
        [null, null, null]
      ];

      horizontalTicTacToe.board.grid = horizontalGrid;

      var gameTurns = horizontalTicTacToe.turns;
      var originalPlayer = horizontalTicTacToe.currentPlayer;

      horizontalTicTacToe.endMove();

      expect(horizontalTicTacToe.turns).toEqual(gameTurns + 1);
      expect(horizontalTicTacToe.currentPlayer).toEqual(originalPlayer);

    });

  });

  describe('addTurn', function() {

    it('should increment the games turns by 1', function() {
      var gameTurns = testTicTacToe.turns;

      testTicTacToe.addTurn();

      expect(testTicTacToe.turns).toEqual(gameTurns + 1);
    });

  });

  describe('hasWon', function() {

    var tieGrid = [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['O', 'X', 'O']
    ];

    tieTicTacToe.board.grid = tieGrid;

    var horizontalGrid = [
      ['X', 'X', 'X'],
      ['O', null, 'O'],
      [null, null, null]
    ];

    horizontalTicTacToe.board.grid = horizontalGrid;

    var verticalGrid = [
      ['X', 'O', 'X'],
      ['X', 'O', 'O'],
      ['X', null, null]
    ];

    verticalTicTacToe.board.grid = verticalGrid;

    var diagonalBottomGrid = [
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['X', null, null]
    ];

    diagonalBottomTicTacToe.board.grid = diagonalBottomGrid;

    var diagonalTopGrid = [
      ['X', 'O', 'X'],
      ['O', 'X', null],
      ['O', null, 'X']
    ];

    diagonalTopTicTacToe.board.grid = diagonalTopGrid;

    it('should return FALSE if no one has won', function() {
      // incomplete board (contains null)
      expect(testTicTacToe.hasWon()).toBeFalsy();
      // complete board (tie)
      expect(tieTicTacToe.hasWon()).toBeFalsy();
    });

    it('should not match nulls when evaluating markers for matches', function() {
      expect(testTicTacToe.hasWon()).toBeFalsy();
    });

    it('should return TRUE if 3 markers match horizontally', function() {
      expect(horizontalTicTacToe.hasWon()).toBeTruthy();
    });

    it('should return TRUE if 3 markers match vertically', function() {
      expect(verticalTicTacToe.hasWon()).toBeTruthy();
    });

    it('should return TRUE if 3 markers match diagonally', function() {
      expect(diagonalBottomTicTacToe.hasWon()).toBeTruthy();
      expect(diagonalTopTicTacToe.hasWon()).toBeTruthy();
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
