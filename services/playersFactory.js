cantStop.factory('playersFactory', function playersFactory(){
  var factory ={}
  factory.players = [ ];

  factory.createPlayers = function() {
    for(var i=0; i< factory.numberOfPlayers; i++) {
      factory.players.push({id: factory.players.length + 1, column2: null, column3: null, column4: null,
      column5: null, column6: null, column7: null, column8: null, column9: null, column10: null,
      column11:null, coulumn12: null
      });
    };
  };

  return factory;

});
