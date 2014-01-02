describe("MatrixOps", function() {

  describe("#createGrid", function () {

    it("creates a grid with correct length and width", function () {
      var grid = GO.MatrixOps.createGrid(5,10);

      expect(grid.length).toEqual(5);
      expect(grid[0].length).toEqual(10);
    });

  });

  describe("#clearBorder", function () {

    it("clears all cells on the outer edge of the grid", function () {
      var grid =        [[true, true, true],[true, true, true],[true, true, true]];
      var clearedGrid = [[false, false, false],[false, true, false],[false, false, false]];

      expect(GO.MatrixOps.clearBorder(grid)).toEqual(clearedGrid);
    });

  });

  describe("#countNeighbors", function () {

    it("clears all cells on the outer edge of the grid", function () {
      var one =   [[true, false, false],[false, false, false],[false, false, false]];
      var two =   [[true, true, false],[false, false, false],[false, false, false]];
      var three = [[true, true, true],[false, false, false],[false, false, false]];
      var four =  [[true, true, true],[true, false, false],[false, false, false]];
      var five =  [[true, true, true],[true, true, true],[false, false, false]];
      var six =   [[true, true, true],[true, true, true],[true, false, false]];
      var seven = [[true, true, true],[true, true, true],[true, true, false]];
      var eight = [[true, true, true],[true, true, true],[true, true, true]];

      expect(GO.MatrixOps.countNeighbors(1,1,one)).toEqual(1);
      expect(GO.MatrixOps.countNeighbors(1,1,two)).toEqual(2);
      expect(GO.MatrixOps.countNeighbors(1,1,three)).toEqual(3);
      expect(GO.MatrixOps.countNeighbors(1,1,four)).toEqual(4);
      expect(GO.MatrixOps.countNeighbors(1,1,five)).toEqual(5);
      expect(GO.MatrixOps.countNeighbors(1,1,six)).toEqual(6);
      expect(GO.MatrixOps.countNeighbors(1,1,seven)).toEqual(7);
      expect(GO.MatrixOps.countNeighbors(1,1,eight)).toEqual(8);
    });

  });

  describe("#dup2DGrid", function () {

    it("copies an array two layers deep", function () {
      var grid = GO.MatrixOps.createGrid(3,3);
      var copy = GO.MatrixOps.dup2DGrid(grid);
      console.log(grid);
      console.log(copy);

      expect(grid).toEqual(copy);
      grid[1][1] = !grid[1][1];
      expect(grid).not.toEqual(copy);
      grid[1][1] = !grid[1][1];
    });

  });

});
