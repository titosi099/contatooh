angular.module('contatooh').controller('ContatosController', function($scope) {
  $scope.total = 0;
  $scope.incrementa = function() {
    $scope.total++;
  };
  $scope.contatos = [
    {
      "_id": 1,
      "nome": "contato 1",
      "email": "contato1@mail.com"
    },
    {
      "_id": 2,
      "nome": "contato 2",
      "email": "contato2@mail.com"
    },
    {
      "_id": 3,
      "nome": "contato 3",
      "email": "contato3@mail.com"
    },
    {
      "_id": 4,
      "nome": "contato 4",
      "email": "contato4@mail.com"
    }
  ];
});
