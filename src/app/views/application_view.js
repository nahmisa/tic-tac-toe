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
      id: "1"
    },
    {
      name: "Heather",
      marker: "O",
      id: "0"
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


    return this;
  }
});

export default ApplicationView;
