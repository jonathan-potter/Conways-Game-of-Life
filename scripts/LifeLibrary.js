(function (root) {
  var GO = root.GO = (root.GO || {});

  var Library = GO.Library = {};

  Library.pixel = [
    {x: 0, y: 0}
  ];

  Library.glider = [
    {x: -1, y: 0},
    {x: 0, y: 1},
    {x: 1, y: -1},
    {x: 1, y: 0},
    {x: 1, y: 1}
  ];

  Library.gliderGun = [
    {x: -18, y: 1},
    {x: -18, y: 2},

    {x: -17, y: 1},
    {x: -17, y: 2},

    {x: -8, y: 1},
    {x: -8, y: 2},
    {x: -8, y: 3},

    {x: -7, y: 0},
    {x: -7, y: 4},

    {x: -6, y: -1},
    {x: -6, y: 5},

    {x: -5, y: -1},
    {x: -5, y: 5},

    {x: -4, y: 2},

    {x: -3, y: 0},
    {x: -3, y: 4},

    {x: -2, y: 1},
    {x: -2, y: 2},
    {x: -2, y: 3},

    {x: -1, y: 2},

    {x: 2, y: -1},
    {x: 2, y: 0},
    {x: 2, y: 1},

    {x: 3, y: -1},
    {x: 3, y: 0},
    {x: 3, y: 1},

    {x: 4, y: -2},
    {x: 4, y: 2},

    {x: 6, y: -3},
    {x: 6, y: -2},
    {x: 6, y: 2},
    {x: 6, y: 3},

    {x: 16, y: -1},
    {x: 16, y: 0},
    {x: 17, y: -1},
    {x: 17, y: 0}
  ];

})(this);