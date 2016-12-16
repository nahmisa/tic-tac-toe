import Backbone from 'backbone';

const Board = Backbone.Model.extend({

    defaults: {
        grid : [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ]
    }

});

export default Board;
