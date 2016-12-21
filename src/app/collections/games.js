import TicTacToe from 'app/models/tictactoe';

var Games = Backbone.Collection.extend({
  model: TicTacToe,
    url: 'https://safe-mesa-21103.herokuapp.com/api/v1/games',
  parse: function(data) {
    return data.tasks;
  }
});
