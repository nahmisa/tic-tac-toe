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

  describe('grid', function() {

    var grid = testBoard.grid;

    it('should be an array', function() {
      expect(Array.isArray(grid)).toBe(true);
    });

    it('should be made of sub-arrays', function() {
      grid.forEach(function(array) {
        expect(Array.isArray(array)).toBe(true);
      });
    });

    it('should be an 3 arrays long', function() {
      expect(grid.length).toEqual(3);
    });

  });
});
