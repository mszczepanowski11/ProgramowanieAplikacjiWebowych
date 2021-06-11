"use strict";
exports.__esModule = true;
exports.TicTacToe = void 0;
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.name = "Kółko i krzyżyk";
    }
    TicTacToe.prototype.getGameElement = function () {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello TicTacToe"));
        return div;
    };
    return TicTacToe;
}());
exports.TicTacToe = TicTacToe;
