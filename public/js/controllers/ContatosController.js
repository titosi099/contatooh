angular.module('contatooh').controller('ContatosController', function($scope, Contato) {

  $scope.contatos = [];
  $scope.filtro = '';
  $scope.mensagem = {texto: ''};

  function buscaContatos() {
    Contato.query(
      function(contatos) {
        $scope.contatos = contatos;
        $scope.mensagem = {};
      },
      function(erro) {
        $scope.mensagem = {texto: "Não foi possível obter a lista de contatos"};
      }
    );
  }
  buscaContatos();

  $scope.remove = function(contato) {
    var promise = Contato.delete({id: contato._id}).$promise;
    promise
      .then(buscaContatos)
      .catch(function (erro) {
        $scope.mensagem = {text: "Não foi possível remover o contato"};
      })
  };
});
