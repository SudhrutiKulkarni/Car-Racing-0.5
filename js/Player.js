class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.distance = 0;
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" +this.index;
    database.ref(playerIndex).set({
      name: name,
      distance:this.distance
    });
  }
  static getPlayerinfo (){
    var player_info=database.ref("players") ;
    player_info.on("value",(data)=>{
   all_players=data.val
    })
   }
   
}
