var MongoClient = require('mongodb');
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('57fd4de1ab701e05a68ed571');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', function(erro, db) {
  if(erro, db) {
    console.log('ronaldo');
    if (erro) throw err;
    db.collection('contatos').findOne({_id : _idProcurado}, function (erro, contato) {
      if (erro) throw err;
      console.log('ronaldo');
      console.log(contato);
    });
  }
});
