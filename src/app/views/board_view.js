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

  addMarker: function(marker) {
  // triggers an event
  console.log('trying to add a marker ' + marker.model + ' at ' + marker.position);
  },


  render: function() {

    const boardSquares = Backbone.$('#board-squares');
    // boardSquares.empty();
    const self = this;

    this.model.forEach(function(row, index) {
      // var rowPosition = 0;
      var length = row.length;
      for (var i = 0; i < length; i++) {
        var column = i;
        const square = new SquareView({
          model: row[i],
          position: [index, column]
          // el: Backbone.$('#board-squares')

        });
        console.log(square);
        self.listenTo(square, 'select', self.addMarker);
        // console.log(square);
        boardSquares.append(square.el);
      }

      // rowPosition++;

    });
    return this;
  }

});

export default BoardView;
