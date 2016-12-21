import Backbone from 'backbone';

import TicTacToe from 'app/models/tictactoe';

var Games = Backbone.Collection.extend({
  model: TicTacToe,
  game: new TicTacToe({}),
  url: 'https://safe-mesa-21103.herokuapp.com/api/v1/games',
  parse: function(data) {
    return data.tasks;
  }

});

module.exports = Games;

// DO NOT REMOVE THIS
export default Games;
