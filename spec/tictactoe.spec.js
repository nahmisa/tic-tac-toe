// Do not remove
import TicTacToe from 'tictactoe';

describe('TicTacToe', function() {

  var testTicTacToe = new TicTacToe();
  var sarah = testTicTacToe.player1;
  var heather = testTicTacToe.player2;


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
      expect(testTicTacToe.move("1")).toBeTruthy();
    });

  });

});
