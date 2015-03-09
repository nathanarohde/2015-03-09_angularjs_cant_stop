var cantStop = angular.module('cantStop',['ui.router']);

cantStop.config(function($stateProvider){

  $stateProvider.state('players',{
    url:'',
    templateUrl: 'partials/players.html',
    controller: 'playersCtrl'
  });

  $stateProvider.state('game', {
    url:'/game',
    templateUrl: 'partials/game.html',
    controller: 'gameCtrl'
  });

});
