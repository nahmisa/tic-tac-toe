import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import PlayerView from 'app/views/player_view';
import SquareView from 'app/views/square_view';

// models
import Board from 'app/models/board';
import Player from 'app/models/player';


const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.players_hash = [{
      name: "Sarah",
      marker: "X",
    },
    {
      name: "Heather",
      marker: "O",
    }];

    this.players = new Player(this.players_hash);

    this.board = new Board();

    console.log(this.players);
    console.log(this.board);

    this.render();
  },

  events: {

  },


  render: function() {
    const playerView = new PlayerView({
      model: this.players,
      el: this.$('#players')
    });

    const boardView = new BoardView({

      model: this.board,
      el: this.$('main')
    });

    console.log(this.board);

    playerView.render();
    boardView.render();

    return this;
  }
});

export default ApplicationView;
