var http = require("http");
var app = require("./config/express")();
require('./config/database.js')('mongodb://127.0.0.1:27017/contatooh');

http.createServer(app).listen(app.get('port'), function() {
  console.log("Rodando na porta "+app.get('port'));
})
