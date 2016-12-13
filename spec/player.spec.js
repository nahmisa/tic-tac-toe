// Do not remove
import Player from 'player';

describe('Player', function() {

  var testPlayerX = new Player("Testy", "X");
  var testPlayerO = new Player("Crabby", "O");

  describe('Player', function() {
    it('should be defined', function() {
      expect(testPlayerX).toBeDefined();
    });

    it('should have a name', function() {
      expect(testPlayerX.name).toEqual("Testy");
    });

    it('should be assigned a marker', function() {
      expect(testPlayerX.marker).toEqual("X");
      expect(testPlayerO.marker).toEqual("O");
    });

  });

});
