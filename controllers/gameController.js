cantStop.controller('gameCtrl', function gameCtrl($scope, playersFactory, utilitiesFactory) {
  $scope.players = playersFactory.players;
  $scope.playersFactory = playersFactory;
  $scope.dice = [ ];
  $scope.pairs = [ ];
  $scope.currentPlayer = utilitiesFactory.findById(playersFactory.players, 1);
  $scope.currentDiceRollChoices = [ ]
  $scope.currentRollScore = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]


  $scope.diceRoll = function() {
    $scope.dice = [ ]
    $scope.pairs = [ ]
    for(i=0; i< 4; i++) {
      $scope.dice.push(Math.ceil(6*Math.random()));
    }
    $scope.rollPairs();
  };

  $scope.rollPairs = function() {

    $scope.pairs.push({pair1: ($scope.dice[0] + $scope.dice[1]), pair2: ($scope.dice[2] + $scope.dice[3])});
    $scope.pairs.push({pair1: ($scope.dice[0] + $scope.dice[2]), pair2: ($scope.dice[1] + $scope.dice[3])});
    $scope.pairs.push({pair1: ($scope.dice[0] + $scope.dice[3]), pair2: ($scope.dice[1] + $scope.dice[2])});
  };

//   $scope.isValidRoll = function() {
//     if ($scope.currentDiceRollChoices.length < 3) {
//       return true;
//     } else if ($scope.compareChoicetoRoll() ) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//
//   $scope.compareChoicetoRoll = function() {
//     for (number in $scope.currentDiceRollChoices) {
//       for (pair in $scope.pairs) {
//         if ($scope.currentDiceRollChoices(number) === $scope.pairs(pair)){
//
// debugger;
//           return true;
//         }
//       }
//
//     }
//     return false;
//   };

  $scope.chooseDiceRolls = function(combo) {

    // if ($scope.isValidRoll()) {
    // combo.forEach(function(pair) {
    for(var pair in combo) {
      if (typeof combo[pair] == 'number') {
        var number = combo[pair]
        if ($scope.currentDiceRollChoices.indexOf(number) != -1){
          $scope.currentRollScore[number - 2] += 1;
          $scope.diceRoll();
        } else if ($scope.currentDiceRollChoices.length < 3) {
          $scope.currentDiceRollChoices.push(number);
          $scope.currentRollScore[number - 2] += 1;
          $scope.diceRoll();
        } else {
        $scope.endOfTurn();
        }
      }
    };
  };

    // if ($scope.currentDiceRollChoices.length < 3) {
    //   if (combo.pair1)
    //   $scope.currentDiceRollChoices.push(combo.pair1);
    //   $scope.currentDiceRollChoices.push(combo.pair2);
    //   $scope.diceRoll();

  $scope.endOfTurn = function() {
    $scope.currentDiceRollChoices = [ ]
    if ($scope.currentPlayer.id < $scope.players.length) {
        $scope.currentPlayer = utilitiesFactory.findById(playersFactory.players, ($scope.currentPlayer.id + 1))
        $scope.currentRollScore = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

    } else {
        $scope.currentPlayer = utilitiesFactory.findById(playersFactory.players, 1)
        $scope.currentRollScore = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    }
  };

});
