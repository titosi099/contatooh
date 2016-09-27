module.exports = function() {

  var contatos = [{_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@mail.com'},
                  {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@mail.com'},
                  {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@mail.com'}];

  var controller = {};

  controller.listaContatos = function(req, res) {
    res.json(contatos);
  };

  controller.obtemContato = function(req, res) {
    var contato = contatos.filter(function(contato) {
      return contato._id == req.params.id;
    })[0];
    contato ?
      res.json(contato) :
      res.status(404).send('Contato não encontrado');
  };

  return controller;
};
