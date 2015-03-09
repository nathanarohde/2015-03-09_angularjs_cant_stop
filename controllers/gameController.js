cantStop.controller('gameCtrl', function gameCtrl($scope, playersFactory, utilitiesFactory) {
  $scope.players = playersFactory.players;
  $scope.playersFactory = playersFactory;

  roll = function() {
    dice1 = Math.ceil(6*Math.random());
    return dice1;
  };

});
