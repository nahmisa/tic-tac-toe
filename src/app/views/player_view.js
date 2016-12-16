import _ from 'underscore';
import Backbone from 'backbone';

const PlayerView = Backbone.View.extend({
  initialize: function(){

    // we re-render the player view when the player changes - not sure how this works yet!
    this.listenTo(this.model, 'update', this.render);


  },



  render: function() {
    return this;
  }

});

export default PlayerView;
