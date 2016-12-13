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

});
