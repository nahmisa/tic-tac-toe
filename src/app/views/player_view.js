import _ from 'underscore';
import Backbone from 'backbone';

const PlayerView = Backbone.View.extend({
  initialize: function(){

    this.template = _.template(Backbone.$('#tmpl-player').html());

    // helper function to wrap ugly random
    function sample(array) {
      var index = Math.floor ( Math.random() * array.length );
      return array[index];
    }

    this.currentPlayerID = sample([0,1]);

    // we re-render the player view when the player changes - not sure how this works yet!
    // this could listen for turn even from board_view?
    // this.listenTo(this.model, 'turn', this.render);

  },



  render: function() {

    const playerSection = Backbone.$('#players');

    this.currentPlayer = this.model.attributes[this.currentPlayerID];
    this.currentPlayerTmpl = this.template(this.currentPlayer);

// { 'name': this.currentPlayer.name, 'marker': this.currentPlayer.marker }



    // this.currentPlayer = null;

    // this.players[0].name = "Kate";

    console.log(this.currentPlayer);



    // console.log(this.currentPlayer);

    playerSection.html(this.currentPlayerTmpl);

    this.currentPlayer = ((this.currentPlayer === 0) ? 1 : 0);

    console.log(this.currentPlayer);
    return this;
  }

});

export default PlayerView;
