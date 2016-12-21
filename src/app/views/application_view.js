import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import PlayerView from 'app/views/player_view';
import SquareView from 'app/views/square_view';

// models
import Board from 'app/models/board';
import Player from 'app/models/player';
import TicTacToe from 'app/models/tictactoe';

const ApplicationView = Backbone.View.extend({
  initialize: function() {

    this.players = this.model.get('players');

    this.board = this.model.get('board');

    this.listenTo(this, 'change', this.render);

  },

  playTurn: function(marker) {
    var isPlayable = this.model.isValidPlacement(marker.position);
    var lastTurn = this.model.playTurn(marker.position);

    if ( !isPlayable ) {
      alert("Invalid move! Pls try again.");
    } else if ( isPlayable && !lastTurn) {
      this.trigger('change');
    } else if ( lastTurn ) {
      alert( lastTurn );
      // send competeled game to the api
      // create a new game (blank board)
    }

    this.trigger('change');
  },

  render: function() {
    const playerView = new PlayerView({
      players: this.players,
      el: this.$('#players'),
      currentPlayer: this.model.get('currentPlayer')
    });

    const boardView = new BoardView({
      model: this.board,
      el: this.$('main')
    });

    this.listenTo(boardView, 'squareSelected', this.playTurn);

    playerView.render();
    boardView.render();

    return this;
  }
});

export default ApplicationView;
