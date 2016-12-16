import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import PlayerView from 'app/views/player_view';
import SquareView from 'app/views/square_view';


const ApplicationView = Backbone.View.extend({
  initialize: function() {

    this.render();
  },

  events: {

  },


  render: function() {


    return this;
  }
});

export default ApplicationView;
