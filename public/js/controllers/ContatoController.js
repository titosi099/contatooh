angular.module('contatooh').controller('ContatoController', function ($scope, $routeParams, Contato) {

  if($routeParams.contatoId) {
    var promise = Contato.get({id: $routeParams.contatoId}).$promise;
    promise
      .then(function(contato) {
        $scope.contato = contato;
      })
      .catch(function(erro) {
        $scope.mensagem = {texto: 'Não foi possível obter o contato'};
        console.log(erro);
      });
  } else {
    $scope.contato = new Contato();
  }

  $scope.salva = function() {
    var contatoID = $routeParams.contatoId;
    if (!contatoID) {
      contatoID = 1;
    };
    $scope.contato.$save({id: contatoID})
      .then(function() {
        $scope.mensagem = {texto: 'Salvo com sucesso'};
        $scope.contato = new Contato();
      })
      .catch(function(erro) {
        $scope.mensagem = {texto: 'Não foi possível salvar o contato'};
        console.log(erro);
      });
  };
  Contato.query(function (contatos) {
    console.log(contatos);
    $scope.contatos = contatos;
  });
});
