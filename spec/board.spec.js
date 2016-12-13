// Do not remove
import Board from 'board';

describe('Board', function() {

  var testBoard = new Board();

  describe('Board', function() {
    it('should be defined', function() {
      expect(testBoard).toBeDefined();
    });

    it('should have a grid', function() {
      expect(testBoard.grid).toBeDefined();
    });

  });
});
