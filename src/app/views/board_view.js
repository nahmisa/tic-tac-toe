import _ from 'underscore';
import Backbone from 'backbone';
import SquareView from 'app/views/square_view';

const BoardView = Backbone.View.extend({
  initialize: function(){

    // we re-render the board when the model is updated (a square has been filled)
    // this.listenTo(this.model, 'update', this.render);

    // change the player when we update the board by triggering a 'turn' event
    // this.listenTo(this.model, 'update', this.turn);
  },

  turn: function() {
  // triggers an event
  },

  addMarker: function(marker) {
  // triggers an event
    console.log('trying to add a marker ' + marker.model + ' at ' + marker.position);
    this.row = marker.position[0];
    this.column = marker.position[1];

    this.grid = this.model.get('grid');

    var boardPosition = this.grid[this.row][this.column];

    if(boardPosition === null) {
      this.grid[this.row][this.column] = 'X';

      this.model.set('grid', this.grid);
    }

    console.log(this.model);

  this.render();
  },


  render: function() {

    const boardSquares = Backbone.$('#board-squares');
    boardSquares.empty();
    // loop within a loop - we need to have access to the larger this

    console.log('render' + this.model);
    const self = this;
    this.grid = this.model.get('grid');

    this.grid.forEach(function(row, index) {

      var length = row.length;
      for (var i = 0; i < length; i++) {
        var column = i;
        const square = new SquareView({
          model: row[i],
          position: [index, column]
        });

        self.listenTo(square, 'select', self.addMarker);
        boardSquares.append(square.el).addClass('row small-up-3');
      }

    });

    return this;
  }

});

export default BoardView;
