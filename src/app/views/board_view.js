import _ from 'underscore';
import Backbone from 'backbone';
import SquareView from 'app/views/square_view';

const BoardView = Backbone.View.extend({
  initialize: function(){

  // we re-render the board when the model is updated (a square has been filled)
  this.listenTo(this.model, 'update', this.render);


  },



  render: function() {
    return this;
  }

});

export default BoardView;
