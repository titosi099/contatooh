module.exports = {
  listaContatos: function(req, res){
    res.json([{_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@mail.com'},
                    {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@mail.com'},
                    {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@mail.com'}
                   ]);
  }
};
