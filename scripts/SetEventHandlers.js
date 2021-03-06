var clearSelectedObject = function (selector) {
  $(selector).removeClass("selected-mode");
};

$(".cell-pixel").on("click", function (event) {
  $element = $(event.currentTarget);
  x = parseInt($element.attr("x"));
  y = parseInt($element.attr("y"));
  // game.grid[x][y] = !game.grid[x][y];

  var location = {x: x, y: y};
  game.placeObjectAtLocation(game.currentObject, location);
  game.draw();
});

$(".cell-pixel").on("mouseout", function (event) {
  $element = $(event.currentTarget);
  var x0 = parseInt($element.attr("x"));
  var y0 = parseInt($element.attr("y"));

  var location = {x: x, y: y};
  game.currentObject.forEach(function (cell) {
    var dx = cell["x"];
    var dy = cell["y"];

    var x = x0 + dx;
    var y = y0 + dy;

    $("#x" + x + "y" + y).removeClass("highlighted");

  });
});

$(".cell-pixel").on("mouseover", function (event) {
  $element = $(event.currentTarget);
  var x0 = parseInt($element.attr("x"));
  var y0 = parseInt($element.attr("y"));

  var location = {x: x, y: y};
  game.currentObject.forEach(function (cell) {
    var dx = cell["x"];
    var dy = cell["y"];

    var x = x0 + dx;
    var y = y0 + dy;

    $("#x" + x + "y" + y).addClass("highlighted");

  });
});

$("#speed-up-button").on("click", function (event) {
  game.tickrate = game.tickrate / 2;
  $("#tickrate-indicator").html("tick period (ms): " + game.tickrate);
  if (game.active) {
    game.stop();
    game.start();
  }

  console.log("tickrate: " + game.tickrate);
});

$("#speed-down-button").on("click", function (event) {
  game.tickrate = game.tickrate * 2;
  $("#tickrate-indicator").html("tick period (ms): " + game.tickrate);
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
  clearSelectedObject(".mode-list");

  $element = $(event.currentTarget);
  $element.addClass("selected-mode");
});

$("#step-button").on("click", function (event) {
  game.stop();
  clearSelectedObject(".mode-list");

  $element = $("#pause-button");
  $element.addClass("selected-mode");
  game.step();
});

$("#pause-button").on("click", function (event) {
  game.stop();
  clearSelectedObject(".mode-list");

  $element = $(event.currentTarget);
  $element.addClass("selected-mode");
});

$("#clear-button").on("click", function (event) {
  GO.MatrixOps.clearGrid(game.grid);
  game.draw();
});

$("#pixel-button").on("click", function (event) {
  game.currentObject = GO.Library.pixel();
  clearSelectedObject(".object-list");

  $element = $(event.currentTarget);
  $element.addClass("selected-mode");
});

$("#block-button").on("click", function (event) {
  game.currentObject = GO.Library.block();
  clearSelectedObject(".object-list");

  $element = $(event.currentTarget);
  $element.addClass("selected-mode");
});

$("#glider-button").on("click", function (event) {
  game.currentObject = GO.Library.glider();
  clearSelectedObject(".object-list");

  $element = $(event.currentTarget);
  $element.addClass("selected-mode");
});

$("#glider-gun-button").on("click", function (event) {
  game.currentObject = GO.Library.gliderGun();
  clearSelectedObject(".object-list");

  $element = $(event.currentTarget);
  $element.addClass("selected-mode");
});

$("#flip-lr").on("click", function (event) {
  GO.Library.Object.fliplr(game.currentObject);
});

$("#flip-ud").on("click", function () {
  GO.Library.Object.flipud(game.currentObject);
});

$("#rotate-button").on("click", function () {
  GO.Library.Object.rotate(game.currentObject);
});