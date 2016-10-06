var contatos = [{_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@mail.com'},
                {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@mail.com'},
                {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@mail.com'}];

module.exports = function() {

  var controller = {};
  var ID_CONTATO_INC = 3;

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

  controller.salvaContato = function(req, res) {
    var contato = req.body;
    console.log('contato == '+contato);
    console.log('contatos._id == '+contato._id);
    contato = contato._id ?
      atualiza(contato) :
      adiciona(contato);
      res.json(contato);
      //res.end();
  };

  function adiciona(contatoNovo) {
    contatoNovo._id = ++ID_CONTATO_INC;;
    contatos.push(contatoNovo);
    return contatoNovo;
  }

  function atualiza(contatoAlterar) {
    contatos = contatos.map(function(contato) {
      if (contato._id == contatoAlterar._id) {
        contato = contatoAlterar;
      }
      return contato;
    });
    return contatoAlterar;
  }

  controller.removeContato = function(req, res) {
    var idContato = req.params.id;
    contatos = contatos.filter(function(contato) {
      return contato._id != idContato;
    });
    res.status(204).end();
  };
  return controller;
};
