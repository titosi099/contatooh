module.exports = function(app) {
  var controller = app.controllers.contato;

  app.route('/contatos')
    .get(controller.listaTodos);

  app.route('/contatos/:id')
    .get(controller.obtemContato)
    .post(controller.salvaContato)
    .delete(controller.removeContato);
}
