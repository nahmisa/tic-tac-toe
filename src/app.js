import $ from 'jquery';

import ApplicationView from 'app/views/application_view';
import TicTacToe from 'app/models/tictactoe';

$(document).ready(function() {
  var ticTacToe = new TicTacToe({
  });

  ticTacToe.fetch();

  var appView = new ApplicationView({
    el: '#application',
    model: ticTacToe
  });
});
