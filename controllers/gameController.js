cantStop.controller('gameCtrl', function gameCtrl($scope, playersFactory, utilitiesFactory) {
  $scope.players = playersFactory.players;
  $scope.playersFactory = playersFactory;
  $scope.dice = {die1: null, die2: null, die3: null, die4: null}

  $scope.diceRoll = function() {
    $scope.dice = {die1: Math.ceil(6*Math.random()), die2: Math.ceil(6*Math.random()), die3: Math.ceil(6*Math.random()), die4: Math.ceil(6*Math.random())}
  };

});
