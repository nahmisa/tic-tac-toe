import _ from 'underscore';
import Backbone from 'backbone';

import GameView from 'app/views/game_view';

const GamesView = Backbone.View.extend({
  initialize: function(options){
    this.template = _.template(Backbone.$('#tmpl-results').html());
    this.render();
  },

  selectedGame: function(game) {
    console.log(game);
    game.destroy();
    this.render();
  },

  render: function() {
    const gamesSquares = Backbone.$('#played-games');
    gamesSquares.empty();


    var games = this.model.models;
    var length = games.length;

    for (var i = 0; i < length; i++) {
      var outcome = games[i].outcome;

      const result = new GameView( {
        outcome: outcome,
        tagName: 'li',
        model: games[i]
      } );

      this.listenTo(result, 'selectGame', this.selectedGame);

      gamesSquares.prepend(result.$el.append(this.template({ results : outcome })));

    }

  }

});

export default GamesView;
