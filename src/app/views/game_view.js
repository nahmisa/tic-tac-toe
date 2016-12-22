import _ from 'underscore';
import Backbone from 'backbone';

const GameView = Backbone.View.extend({
  initialize: function(options){
  },

  events: {
    'click': 'onClick'
  },

  onClick: function(e) {
    this.trigger('selectGame', this.model);

    // We return false to tell jQuery not to run any more event handlers.

    return false;
  },

  render: function() {
  }


});

export default GameView;
