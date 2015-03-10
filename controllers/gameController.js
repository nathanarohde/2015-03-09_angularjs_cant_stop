cantStop.controller('gameCtrl', function gameCtrl($scope, playersFactory, utilitiesFactory) {
  $scope.players = playersFactory.players;
  $scope.playersFactory = playersFactory;
  $scope.dice = {die1: null, die2: null, die3: null, die4: null};
  $scope.pairs = [ ];
  $scope.currentPlayer = utilitiesFactory.findById(playersFactory.players, 1);
  $scope.currentDiceRollChoices = [ ]

  $scope.diceRoll = function() {
    $scope.pairs = [ ]
    $scope.dice = {die1: Math.ceil(6*Math.random()), die2: Math.ceil(6*Math.random()), die3: Math.ceil(6*Math.random()), die4: Math.ceil(6*Math.random())};
    $scope.rollPairs();
  };

  $scope.rollPairs = function() {
    $scope.pairs.push({pair1: ($scope.dice.die1 + $scope.dice.die2), pair2: ($scope.dice.die3 + $scope.dice.die4)});
    $scope.pairs.push({pair1: ($scope.dice.die1 + $scope.dice.die3), pair2: ($scope.dice.die2 + $scope.dice.die4)});
    $scope.pairs.push({pair1: ($scope.dice.die1 + $scope.dice.die4), pair2: ($scope.dice.die2 + $scope.dice.die3)});
  };

  $scope.chooseDiceRolls = function(combo) {
debugger;
    if ($scope.currentDiceRollChoices.length <= 3) {
      $scope.currentDiceRollChoices.push(combo.pair1);
      $scope.currentDiceRollChoices.push(combo.pair2);
      $scope.diceRoll();
    } else {
      $scope.currentDiceRollChoices = [ ]
      $scope.endOfTurn();
    }
  };

  $scope.endOfTurn = function() {
    if ($scope.currentPlayer.id < $scope.players.length) {
        $scope.currentPlayer = utilitiesFactory.findById(playersFactory.players, ($scope.currentPlayer.id + 1))
    } else {
        $scope.currentPlayer = utilitiesFactory.findById(playersFactory.players, 1)
    }
  };

});
