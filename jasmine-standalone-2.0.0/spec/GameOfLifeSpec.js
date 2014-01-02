describe("Game of Life", function() {

  var game;

  beforeEach(function() {
    game = new GO.Game(5,5);
  });

  describe("instance", function () {

    it("should have a rules method", function () {
      expect(game.rules).toBeDefined();
    });

    it("should have a grid", function () {
      expect(game.grid).toBeDefined();
    });

  });

  describe("rules", function () {
    describe("living cell", function () {

      it("should continue living if it has two or three living neighbors", function () {
        expect(game.rules(true, 2)).toEqual(true);
        expect(game.rules(true, 3)).toEqual(true);
      });

      it("should die if it does not have two or three living neighbors", function () {
        expect(game.rules(true, 1)).toEqual(false);
        expect(game.rules(true, 4)).toEqual(false);
        expect(game.rules(true, 5)).toEqual(false);
        expect(game.rules(true, 6)).toEqual(false);
        expect(game.rules(true, 7)).toEqual(false);
        expect(game.rules(true, 8)).toEqual(false);
      });
    });

    describe("dead cell", function () {
      it("should become alive if it has exactly 3 living neighbors", function () {
        expect(game.rules(false, 3)).toEqual(true);
      });

      it("should stay dead if there are not exactly 3 living neighbors", function () {
        expect(game.rules(false, 1)).toEqual(false);
        expect(game.rules(false, 2)).toEqual(false);
        expect(game.rules(false, 4)).toEqual(false);
        expect(game.rules(false, 5)).toEqual(false);
        expect(game.rules(false, 6)).toEqual(false);
        expect(game.rules(false, 7)).toEqual(false);
        expect(game.rules(false, 8)).toEqual(false);
      });
    });
  });
});
