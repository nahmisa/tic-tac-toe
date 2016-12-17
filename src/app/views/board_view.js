import _ from 'underscore';
import Backbone from 'backbone';
import SquareView from 'app/views/square_view';

const BoardView = Backbone.View.extend({
  initialize: function(){

  // we re-render the board when the model is updated (a square has been filled)
  this.listenTo(this.model, 'update', this.render);

  // change the player when we update the board by triggering a 'turn' event
  this.listenTo(this.model, 'update', this.turn);


  },

  turn: function() {
  // triggers an event
  },


  render: function() {
    return this;
  }

});

export default BoardView;
