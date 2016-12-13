// Do not remove
import Player from 'player';

describe('Player', function() {

  var testPlayer = new Player("Testy");

  describe('Player', function() {
    it('should be defined', function() {
      expect(testPlayer).toBeDefined();
    });

    it('should have a name', function() {
      expect(testPlayer.name).toEqual("Testy");
    });

  });
});
