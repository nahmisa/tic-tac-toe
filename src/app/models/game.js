import Backbone from 'backbone';

const Game = Backbone.Model.extend({
// this model is a wrapper for the API that is formatted like the API is
  initialize: function(options) {
    this.board = options.board;
    this.players = options.players;
    this.marker = options.outcome;

    switch (this.marker) {
      case 'X':
        this.outcome = 'Player1';
        break;
      case 'O':
        this.outcome = 'Player2';
        break;
      case 'draw':
        this.outcome = 'No one';
        break;
      default:
        this.outcome = 'Unknown person';
        break;
    }

    this.playet_at = options.played_at;

  }

});

module.exports = Game;

// DO NOT REMOVE THIS
export default Game;
