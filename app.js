var cantStop = angular.module('cantStop',['ui.router']);

cantStop.config(function($stateProvider){
  $stateProvider.state('home',{
    url:'',
    templateUrl: 'partials/home.html',
    controller: 'homeCtrl'
  });

});
