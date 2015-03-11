cantStop.factory('playersFactory', function playersFactory(){
  var factory ={}
  factory.players = [ ];

  factory.createPlayers = function() {
    for(var i=0; i< factory.numberOfPlayers; i++) {
      factory.players.push({ id: factory.players.length + 1,
      playerScore:[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
      });
    };
  };

  return factory;

});
