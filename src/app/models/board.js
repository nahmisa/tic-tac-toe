import Backbone from 'backbone';

const Board = Backbone.Model.extend({

    defaults: {
        grid : [
          ['X', null, null],
          ['O', null, null],
          [null, 'X', null]
        ]
    }

});

export default Board;
