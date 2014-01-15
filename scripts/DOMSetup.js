var width = 52;
var height = 52;

var main = document.getElementById("main");

for (var y = 1;y < (width - 1);y++) {
  var row = document.createElement("li");
  main.appendChild(row);
  var rowElements = document.createElement("ul");
  row.appendChild(rowElements);
  for (var x = 1;x < (height - 1);x++) {
    var element = document.createElement("li");
    element.setAttribute("x", x);
    element.setAttribute("y", y);
    element.setAttribute("id", "x" + x + "y" + y);
    element.classList.add("cell-pixel");
    rowElements.appendChild(element);
  }
}