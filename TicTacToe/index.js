var Cell = /** @class */ (function () {
    function Cell(cell) {
        this.htmlELement = cell;
    }
    return Cell;
}());
var Board = /** @class */ (function () {
    function Board(size) {
        this.cells = new Array(size);
        var table = document.getElementById("tictactoe");
        var i = 0;
        for (var r = 0; r < size; r++) {
            var row = table.insertRow(r);
            for (var c = 0; c < size; c++) {
                var cell = row.insertCell(c);
                cell.className = 'cell';
                var newCell = new Cell(cell);
                this.cells[i] = newCell;
                cell.addEventListener("click", function () {
                    cell.innerHTML = "X";
                });
            }
        }
    }
    return Board;
}());

const t = new Board(3)