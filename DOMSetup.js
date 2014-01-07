var width = 50;
var height = 50;

var main = document.getElementById("main");

for (var x = 0;x < width;x++) {
  for (var y = 0;y < height;y++) {
    var element = document.createElement("li");
    element.setAttribute("x", x);
    element.setAttribute("y", y);
    element.setAttribute("id", "x" + x + "y" + y);
    element.classList.add("cell-pixel")
    main.appendChild(element);
  }
}

$(".cell-pixel").on("click", function (event) {
  $element = $(event.currentTarget);
  $element.toggleClass("alive");
  x = $element.attr("x");
  y = $element.attr("y");
  game.grid[x][y] = !game.grid[x][y];
});

$("#speed-up-button").on("click", function (event) {
  game.tickrate = game.tickrate / 2;
  $("#tickrate-indicator").html("Tickrate: " + game.tickrate);
  if (game.active) {
    game.stop();
    game.start();
  }

  console.log("tickrate: " + game.tickrate);
});

$("#speed-down-button").on("click", function (event) {
  game.tickrate = game.tickrate * 2;
  $("#tickrate-indicator").html("Tickrate: " + game.tickrate);
  if (game.active) {
    game.stop();
    game.start();
  }

  console.log("tickrate: " + game.tickrate);
});

$("#randomize-button").on("click", function (event) {
  GO.MatrixOps.randomizeContents(game.grid);
});

$("#play-button").on("click", function (event) {
  game.start();
});

$("#pause-button").on("click", function (event) {
  game.stop();
});