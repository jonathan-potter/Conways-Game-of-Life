(function (root) {
  var GO = root.GO = (root.GO || {});

  GO.tickrate = 16;

  var createPixel = function (ctx) {
    var pixel = ctx.createImageData(1,1); // only do this once per page
    var data  = pixel.data;                    // only do this once per page
    data[0]   = 255; // r
    data[1]   = 0;   // g
    data[2]   = 0;   // b
    data[3]   = 255; // a

    return pixel;
  }

  var Game = GO.Game = function (width, height) {
    this.width = width;
    this.height = height;
    this.grid = GO.MatrixOps.createGrid(width, height);
    this.tickrate = GO.tickrate;
    GO.MatrixOps.randomizeContents(this.grid);
  };

  Game.prototype.rules = function (alive, neighbors) {

    if (alive === true) {
      if (neighbors === 2 || neighbors === 3) {
        alive = true;
      } else {
        alive = false;
      }
    } else {
      if (neighbors === 3) {
        alive = true;
      }
    }

    return alive;
  };

  Game.prototype.start = function () {
    this.intervalId = window.setInterval(game.step.bind(this), game.tickrate);
    game.active = true;
  };

  Game.prototype.stop = function () {
    window.clearInterval(this.intervalId);
    game.active = false;
  };

  Game.prototype.draw = function () {
    GO.MatrixOps.eachInsideBorder(this.width, this.height, function(x, y) {

      var neighbors = GO.MatrixOps.countNeighbors(x, y, game.grid);

      $cell = $("#x" + x + "y" + y);
      if (game.grid[x][y] == true) {
        $cell.addClass("alive");
      } else {
        $cell.removeClass("alive");
      }

    });
  };

  Game.prototype.step = function () {
    var oldGrid = GO.MatrixOps.dup2DGrid(game.grid);
    var newGrid = GO.MatrixOps.createGrid(game.width, game.height);

    GO.MatrixOps.eachInsideBorder(game.width, game.height, function(x, y) {
      var neighbors = GO.MatrixOps.countNeighbors(x, y, oldGrid);
      var alive = !!oldGrid[x][y];
      newGrid[x][y] = game.rules(alive, neighbors);
    });

    game.grid = newGrid;

    game.draw();
  };

  Game.prototype.placeObjectAtLocation = function(object, location) {
    object.forEach(function (element) {
      var dx = element["x"];
      var dy = element["y"];

      var x = location["x"] + dx;
      var y = location["y"] + dy;

      if (0 < x && 0 < y && x < this.width && y < this.height) {
        game.grid[x][y] = true;
      }
    });
  };

})(this);