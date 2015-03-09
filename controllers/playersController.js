cantStop.controller('playersCtrl', function playersCtrl($scope, playersFactory) {
  $scope.players = playersFactory.players;
  $scope.playersFactory = playersFactory;
});
