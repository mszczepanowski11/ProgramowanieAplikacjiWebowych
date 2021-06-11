"use strict";
exports.__esModule = true;
exports.Board = exports.Cell = void 0;
var currentPlayer = 'X';
var gameRunning = true;
var Cell = /** @class */ (function () {
    function Cell(cell) {
        this.htmlELement = cell;
        this.cellValue = 0;
    }
    Cell.prototype.setCellValue = function (value) {
        var PlayerX = new Image(50);
        var PlayerO = new Image(50);
        PlayerX.src = 'x_sign.png';
        PlayerO.src = 'o_sign.png';
        PlayerX.classList.add('img');
        PlayerO.classList.add('img');
        if (value == 1 && this.cellValue == 0) {
            this.htmlELement.appendChild(PlayerX);
        }
        else if (value == -1 && this.cellValue == 0) {
            this.htmlELement.appendChild(PlayerO);
        }
    };
    return Cell;
}());
exports.Cell = Cell;
var Board = /** @class */ (function () {
    function Board(size) {
        var _this = this;
        this.cells = new Array(size);
        this.currentSymbol = 1;
        var table = document.getElementById("tictactoe");
        var i = 0;
        for (var r = 0; r < size; r++) {
            var row = table.insertRow(r);
            var _loop_1 = function (c) {
                var cell = row.insertCell(c);
                cell.className = 'cell';
                var newCell = new Cell(cell);
                this_1.cells[i] = newCell;
                gameRunning ?
                    cell.addEventListener("click", function () {
                        return _this.makeMove(newCell);
                    }, true)
                    :
                        cell.removeEventListener("click", function () {
                            return _this.makeMove(newCell);
                        }, false);
                i++;
            };
            var this_1 = this;
            for (var c = 0; c < size; c++) {
                _loop_1(c);
            }
        }
    }
    Board.prototype.boardIsFull = function () {
        for (var i = 0; i < this.cells.length; i++) {
            if (this.cells[i].cellValue == 0)
                return false;
        }
        return true;
    };
    Board.prototype.makeMove = function (cell) {
        currentPlayer = this.currentSymbol === 1 ? 'X' : 'O';
        var statusDisplay = document.querySelector('.game-status');
        cell.setCellValue(this.currentSymbol);
        if (cell.cellValue == 0) {
            if (this.currentSymbol == 1) {
                cell.cellValue = -1;
                this.currentSymbol = -1;
                statusDisplay.innerHTML = 'Turn:O';
            }
            else if (this.currentSymbol == -1) {
                cell.cellValue = 1;
                this.currentSymbol = 1;
                statusDisplay.innerHTML = 'Turn:X';
            }
        }
        //DRAW
        if (this.boardIsFull()) {
            console.log(this.boardIsFull());
            statusDisplay.innerHTML = 'Draw!';
        }
        //HORIZONTALLY
        if (this.cells[0].cellValue != 0 && this.cells[0].cellValue == this.cells[1].cellValue && this.cells[1].cellValue == this.cells[2].cellValue) {
            statusDisplay.innerHTML = currentPlayer + " has won!";
            gameRunning = false;
        }
        if (this.cells[3].cellValue != 0 && this.cells[3].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[5].cellValue) {
            statusDisplay.innerHTML = currentPlayer + " has won!";
            gameRunning = false;
        }
        if (this.cells[6].cellValue != 0 && this.cells[6].cellValue == this.cells[7].cellValue && this.cells[7].cellValue == this.cells[8].cellValue) {
            statusDisplay.innerHTML = currentPlayer + " has won!";
            gameRunning = false;
        }
        //VERTICALLY
        if (this.cells[0].cellValue != 0 && this.cells[0].cellValue == this.cells[3].cellValue && this.cells[3].cellValue == this.cells[6].cellValue) {
            statusDisplay.innerHTML = currentPlayer + " has won!";
            gameRunning = false;
        }
        if (this.cells[1].cellValue != 0 && this.cells[1].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[7].cellValue) {
            statusDisplay.innerHTML = currentPlayer + " has won!";
            gameRunning = false;
        }
        if (this.cells[2].cellValue != 0 && this.cells[2].cellValue == this.cells[5].cellValue && this.cells[5].cellValue == this.cells[8].cellValue) {
            statusDisplay.innerHTML = currentPlayer + " has won!";
            gameRunning = false;
        }
        //DIAGONALLY
        if (this.cells[0].cellValue != 0 && this.cells[0].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[8].cellValue) {
            statusDisplay.innerHTML = currentPlayer + " has won!";
            gameRunning = false;
        }
        if (this.cells[2].cellValue != 0 && this.cells[2].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[6].cellValue) {
            statusDisplay.innerHTML = currentPlayer + " has won!";
            gameRunning = false;
        }
    };
    return Board;
}());
exports.Board = Board;
var board = new Board(3);
