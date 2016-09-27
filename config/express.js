var express = require('express');
var home = require('../app/routes/home');
var load = require('express-load');

module.exports = function() {
  var app = express();
  app.set('port', 3000);
  app.set('view engine', 'ejs');
  app.set('views', './app/views');
  app.use(express.static('./public'));

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
}
