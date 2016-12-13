// Do not remove
import TicTacToe from 'tictactoe';
import Board from 'tictactoe';
import Player from 'tictactoe';


describe('TicTacToe', function() {
  var testTicTacToe = new TicTacToe();

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

});

describe('Board', function() {

  var testBoard = new Board();
  console.log(testBoard);


  describe('Board', function() {
    it('should be defined', function() {
      expect(testBoard).toBeDefined();
    });

    it('should have a grid', function() {
      expect(testBoard.grid).toBeDefined();
    });

  });
});

describe('Player', function() {
  var testPlayer = new Player();
  console.log(testPlayer);
  console.log(testPlayer.name);

  describe('Player', function() {
    it('should be defined', function() {
      expect(testPlayer).toBeDefined();
    });

    it('should have a name', function() {
      expect(testPlayer.name).toEqual("Testy");
    });

  });
});
