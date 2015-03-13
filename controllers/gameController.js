cantStop.controller('gameCtrl', function gameCtrl($scope, playersFactory, utilitiesFactory) {
  $scope.players = playersFactory.players;
  $scope.playersFactory = playersFactory;
  $scope.dice = [ ];
  $scope.pairSets = [ ];
  $scope.currentPlayer = utilitiesFactory.findById(playersFactory.players, 1);
  $scope.currentDiceRollChoices = [ ]
  $scope.currentRollScore = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  $scope.choiceMade = false;


  $scope.diceRoll = function() {
    $scope.dice = [ ]
    $scope.pairSets = [ ]
    for(i=0; i< 4; i++) {
      $scope.dice.push(Math.ceil(6*Math.random()));
    }
    $scope.rollPairs();
    $scope.choiceMade = false;
  };

  $scope.rollPairs = function() {

    $scope.pairSets.push({set: [{pair: ($scope.dice[0] + $scope.dice[1]), selectable:false}, {pair: ($scope.dice[2] + $scope.dice[3]), selectable:false}], entry:'invalid'});
    $scope.pairSets.push({set: [{pair: ($scope.dice[0] + $scope.dice[2]), selectable:false}, {pair: ($scope.dice[1] + $scope.dice[3]), selectable:false}], entry:'invalid'});
    $scope.pairSets.push({set: [{pair: ($scope.dice[0] + $scope.dice[3]), selectable:false}, {pair: ($scope.dice[1] + $scope.dice[2]), selectable:false}], entry:'invalid'});
    $scope.isSelectable();
  };

  $scope.isSelectable = function() {
    switch($scope.currentDiceRollChoices.length) {
      case 0:
      case 1:
        for(var set in $scope.pairSets) {
          var currentSet= $scope.pairSets[set[0]];
          currentSet.entry = 'pair';
          var pairCounter=0;
          for(var pair in currentSet.set) {
            var currentPair = currentSet.set[pairCounter];
            currentPair.selectable = true;
            pairCounter +=1;
          }
        }
        break;

      case 2:
        for(var set in $scope.pairSets) {
          var currentSet= $scope.pairSets[set[0]];
          var pairCounter=0;
          for(var pair in currentSet.set) {
            var currentPair = currentSet.set[pairCounter];
            currentPair.selectable = true;
            pairCounter +=1;
          }
          if (($scope.currentDiceRollChoices.indexOf(currentSet.set[0].pair) > -1) || ($scope.currentDiceRollChoices.indexOf(currentSet.set[1].pair) > -1)) {
            currentSet.entry = 'pair';
          } else {
            currentSet.entry = 'solo';
          }
        }
        break;

      case 3:
        for(var set in $scope.pairSets) {
          var currentSet= $scope.pairSets[set[0]];
          var pairCounter=0;
          for(var pair in currentSet.set) {
            var currentPair = currentSet.set[pairCounter];
            if($scope.currentDiceRollChoices.indexOf(currentPair.pair) > -1) {
              currentPair.selectable = true;
            }
            pairCounter +=1;
          }
          if (($scope.currentDiceRollChoices.indexOf(currentSet.set[0].pair) > -1) && ($scope.currentDiceRollChoices.indexOf(currentSet.set[1].pair) > -1)) {
            currentSet.entry = 'pair';
          } else if (($scope.currentDiceRollChoices.indexOf(currentSet.set[0].pair) > -1) || ($scope.currentDiceRollChoices.indexOf(currentSet.set[1].pair) > -1)) {
            currentSet.entry = 'solo';
          }
        }
        break;
    }
  };

  $scope.chooseDiceRolls = function(combo) {

    for(var pair in combo) {
      if (typeof combo[pair] == 'number') {
        var number = combo[pair]
        if ($scope.currentDiceRollChoices.indexOf(number) != -1){
          $scope.currentRollScore[number - 2] += 1;
        } else if ($scope.currentDiceRollChoices.length < 3) {
          $scope.currentDiceRollChoices.push(number);
          $scope.currentRollScore[number - 2] += 1;
        }
        $scope.choiceMadeToggle
      }
    };
  };

  $scope.choiceMadeToggle= function(){
    if ($scope.choiceMade === true) {
      $scope.choiceMade = false;
    } else {
      $scope.choiceMade = true;
    }
  };

  $scope.stopTurn = function(){
    utilitiesFactory.findById(playersFactory.players, $scope.currentPlayer.id);
    for (i = 0; i< $scope.currentRollScore.length; i++) {
      if ($scope.currentRollScore[i] > 0) {
        $scope.currentPlayer.playerScore[i] += $scope.currentRollScore[i];
      }
    };
    $scope.endOfTurn();
  };

  $scope.endOfTurn = function() {
    if ($scope.currentPlayer.id < $scope.players.length) {
        $scope.currentPlayer = utilitiesFactory.findById(playersFactory.players, ($scope.currentPlayer.id + 1))
    } else {
        $scope.currentPlayer = utilitiesFactory.findById(playersFactory.players, 1)
    }
    $scope.currentDiceRollChoices = [ ]
    $scope.currentRollScore = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  };

});
