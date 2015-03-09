cantStop.controller('playersCtrl', function playersCtrl($scope, $state, playersFactory) {
  $scope.players = playersFactory.players;
  $scope.playersFactory = playersFactory;

  $scope.createPlayers = function() {
    $scope.playersFactory.createPlayers();
    $state.go('game');
  }
});
