import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import PlayerView from 'app/views/player_view';
import SquareView from 'app/views/square_view';
import GamesView from 'app/views/games_view';

// models
import Board from 'app/models/board';
import Player from 'app/models/player';
import TicTacToe from 'app/models/tictactoe';

const ApplicationView = Backbone.View.extend({
  initialize: function() {

    this.ticTacToe = this.model.game;

    this.board = this.ticTacToe.get('board');
    this.players = this.ticTacToe.get('players');

    this.listenTo(this, 'change', this.render);

  },

  playTurn: function(marker) {
    var isPlayable = this.ticTacToe.isValidPlacement(marker.position);
    var lastTurn = this.ticTacToe.playTurn(marker.position);

    if ( !isPlayable ) {
      alert("Invalid move! Pls try again.");
    } else if ( isPlayable && !lastTurn) {
      this.trigger('change');
    } else if ( lastTurn ) {
      alert( lastTurn );
      // send competeled game to the api
      // create a new game

      this.model.create(this.ticTacToe.getJson());
      this.trigger('change');

    }

      this.trigger('change');
  },

  render: function() {
    // we need to fetch up here for updates to show - idk why?
    this.model.fetch();


    const playerView = new PlayerView({
      players: this.players,
      el: this.$('#players'),
      currentPlayer: this.ticTacToe.get('currentPlayer')
    });

    const boardView = new BoardView({
      model: this.board,
      el: this.$('main')
    });

    this.listenTo(boardView, 'squareSelected', this.playTurn);

    playerView.render();
    boardView.render();


    const self = this;

    this.model.fetch().done(function() {
      const gamesView = new GamesView({
        model: self.model,
        el: self.$('body')
      });

      // gamesView.render();

    });

    return this;
  }
});

export default ApplicationView;
