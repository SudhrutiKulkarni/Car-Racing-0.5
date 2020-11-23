class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play() {
    form.hide();
    textSize(20);
    text("Game Start", 120, 100);
    Player.getPlayerinfo()
    if (all_players !== undefined) {
      var display_pos = 130;
      for (var plr in all_players) {
        if (plr === "player" + player.index) {
          fill("red");
        }
        else {
          fill("black");
        }
        display_pos += 20
        textSize(15)
        text(all_players[plr].name = ": ", all_players[plr].distance, 120, display_pos);

      }
    }
    if (keyDown(UP_ARROW) && player.index !== null) {
      player.distance += 50
      player.update();
    }

  }

}
