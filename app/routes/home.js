module.exports = function(app) {
  var controller = app.controllers.home;
  app.get('/', controller.home);
  app.get('/index', controller.index);
}
