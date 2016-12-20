import _ from 'underscore';
import Backbone from 'backbone';

const PlayerView = Backbone.View.extend({
  initialize: function(options){

    this.players = options.players;

    this.template = _.template(Backbone.$('#tmpl-player').html());

    // helper function to wrap ugly random
    // function sample(array) {
    //   var index = Math.floor ( Math.random() * array.length );
    //   return array[index];
    // }

    this.currentPlayerID = options.currentPlayer;

    // we re-render the player view when the player changes - not sure how this works yet!
    // this could listen for turn even from board_view?
    // this.listenTo(this.model, 'turn', this.render);

  },



  render: function() {

    const playerSection = Backbone.$('#players');

    this.currentPlayer = this.players[this.currentPlayerID];
    this.currentPlayerTmpl = this.template(this.currentPlayer);

    playerSection.html(this.currentPlayerTmpl);

    this.currentPlayerID = ((this.currentPlayerID === 0) ? 1 : 0);

    console.log(this.currentPlayerID);
    return this;
  }

});

export default PlayerView;
