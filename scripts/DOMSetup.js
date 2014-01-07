var width = 50;
var height = 50;

var main = document.getElementById("main");

for (var y = 0;y < width;y++) {
  var row = document.createElement("li");
  main.appendChild(row);
  var rowElements = document.createElement("ul");
  row.appendChild(rowElements);
  for (var x = 0;x < height;x++) {
    var element = document.createElement("li");
    element.setAttribute("x", x);
    element.setAttribute("y", y);
    element.setAttribute("id", "x" + x + "y" + y);
    element.classList.add("cell-pixel");
    rowElements.appendChild(element);
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

  game.draw();
});

$("#play-button").on("click", function (event) {
  game.start();
});

$("#step-button").on("click", function (event) {
  game.stop();
  game.step();
});

$("#pause-button").on("click", function (event) {
  game.stop();
});

$("#clear-button").on("click", function (event) {
  GO.MatrixOps.clearGrid(game.grid);
  game.draw();
});

$("#glider-button").on("click", function (event) {
  var location = {x: 24, y: 24};
  var object = GO.Library.glider;

  GO.MatrixOps.clearGrid(game.grid);
  game.placeObjectAtLocation(object, location);
  game.draw();
});

$("#glider-gun-button").on("click", function (event) {
  var location = {x: 24, y: 24};
  var object = GO.Library.gliderGun;

  GO.MatrixOps.clearGrid(game.grid);
  game.placeObjectAtLocation(object, location);
  game.draw();
});