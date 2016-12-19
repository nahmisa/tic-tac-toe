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

  addMarker: function() {
  // triggers an event
  console.log('trying to add a marker');
  },


  render: function() {

    const boardSquares = Backbone.$('#board-squares');
    // boardSquares.empty();
    const self = this;

    this.model.forEach(function(row) {
      // console.log(row);
      var length = row.length;
      for (var i = 0; i < length; i++) {
        const square = new SquareView({
          model: row[i],
          el: Backbone.$('#board-squares')

        });
        self.listenTo(square, 'select', self.addMarker);
        // console.log(square);
        boardSquares.append(square.el);
      }

    });
    return this;
  }

});

export default BoardView;
