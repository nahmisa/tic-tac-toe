import Board from 'app/models/board';
import ApplicationView from 'app/views/application_view';

var board = new Board({

});

var appView = new ApplicationView({
  el: '#application',
  model: board
});
