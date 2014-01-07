(function (root) {
  var GO = root.GO = (root.GO || {});

  var MatrixOps = GO.MatrixOps = {};

  MatrixOps.createGrid = function (width, height) {
    grid = [];

    for (var x = 0;x < width;x++) {
      grid.push([]);
      for (var y = 0;y < height;y++) {
        grid[x][y] = false;
      }
    }

    return grid;
  };

  MatrixOps.clearGrid = function (grid) {
    var width = grid.length;
    var height = grid[0].length;

    MatrixOps.eachInsideBorder(width, height, function (x, y) {
      grid[x][y] = false;
    });

    return grid;
  };

  MatrixOps.randomizeContents = function (grid) {
    var width = grid.length;
    var height = grid[0].length;

    MatrixOps.eachInsideBorder(width, height, function (x, y) {
      grid[x][y] = Math.round(Math.random());
    });

    return grid;
  };

  MatrixOps.clearBorder = function (grid) {
    var width = grid.length;
    var height = grid[0].length;

    for (var x = 0;x < width;x += (width - 1)) {
      for (var y = 0;y < height; y++) {
        grid[x][y] = false;
      }
    }

    for (var y = 0;y < height;y += (height - 1)) {
      for (var x = 0;x < width; x++) {
        grid[x][y] = false;
      }
    }

    return grid;
  };

  MatrixOps.eachInsideBorder = function (width, height, callback) {
    for (var x = 1; x < (width - 1);x++) {
      for (var y = 1; y < (height - 1);y++) {
        callback(x, y);
      }
    }
  };

  MatrixOps.eachElement = function (width, height, callback) {
    for (var x = 0;x < width;x++) {
      for (var y = 0; y < height;y++) {
        callback(x, y);
      }
    }
  };

  MatrixOps.countNeighbors = function (x, y, grid) {
    var neighborTotal = 0;
    for (var dx = -1;dx <= 1;dx += 1) {
      for (var dy = -1;dy <= 1;dy += 1) {
        if ( grid[x + dx][y + dy] == true && !(dx === 0 && dy === 0) ) {
          neighborTotal += 1;
        }
      }
    }

    return neighborTotal;
  };

  MatrixOps.dup2DGrid = function (grid) {
    var newGrid = []

    for (var x = 0;x < grid.length;x++) {
      newGrid.push([]);
      for (var y = 0;y < grid[0].length;y++) {
        newGrid[x][y] = grid[x][y];
      }
    }

    return newGrid;
  };

})(this);