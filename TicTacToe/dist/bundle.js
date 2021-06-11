/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/board.ts":
/*!**************************!*\
  !*** ./scripts/board.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Board = void 0;\nconst cell_1 = __webpack_require__(/*! ./cell */ \"./scripts/cell.ts\");\nlet currentPlayer = 'X';\nlet gameRunning = true;\nclass Board {\n    constructor(size) {\n        this.cells = new Array(size);\n        this.currentSymbol = 1;\n        let table = document.getElementById(\"tictactoe\");\n        let i = 0;\n        for (let r = 0; r < size; r++) {\n            let row = table.insertRow(r);\n            for (let c = 0; c < size; c++) {\n                let cell = row.insertCell(c);\n                cell.className = 'cell';\n                const newCell = new cell_1.Cell(cell);\n                this.cells[i] = newCell;\n                gameRunning ?\n                    cell.addEventListener(\"click\", () => this.makeMove(newCell), true)\n                    :\n                        cell.removeEventListener(\"click\", () => this.makeMove(newCell), false);\n                i++;\n            }\n        }\n    }\n    boardIsFull() {\n        for (let i = 0; i < this.cells.length; i++) {\n            if (this.cells[i].cellValue == 0)\n                return false;\n        }\n        return true;\n    }\n    makeMove(cell) {\n        currentPlayer = this.currentSymbol === 1 ? 'X' : 'O';\n        const statusDisplay = document.querySelector('.game-status');\n        cell.setCellValue(this.currentSymbol);\n        if (cell.cellValue == 0) {\n            if (this.currentSymbol == 1) {\n                cell.cellValue = -1;\n                this.currentSymbol = -1;\n                statusDisplay.innerHTML = 'Turn:O';\n            }\n            else if (this.currentSymbol == -1) {\n                cell.cellValue = 1;\n                this.currentSymbol = 1;\n                statusDisplay.innerHTML = 'Turn:X';\n            }\n        }\n        //DRAW\n        if (this.boardIsFull()) {\n            console.log(this.boardIsFull());\n            statusDisplay.innerHTML = 'Draw!';\n        }\n        //HORIZONTALLY\n        if (this.cells[0].cellValue != 0 && this.cells[0].cellValue == this.cells[1].cellValue && this.cells[1].cellValue == this.cells[2].cellValue) {\n            statusDisplay.innerHTML = `${currentPlayer} has won!`;\n            gameRunning = false;\n        }\n        if (this.cells[3].cellValue != 0 && this.cells[3].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[5].cellValue) {\n            statusDisplay.innerHTML = `${currentPlayer} has won!`;\n            gameRunning = false;\n        }\n        if (this.cells[6].cellValue != 0 && this.cells[6].cellValue == this.cells[7].cellValue && this.cells[7].cellValue == this.cells[8].cellValue) {\n            statusDisplay.innerHTML = `${currentPlayer} has won!`;\n            gameRunning = false;\n        }\n        //VERTICALLY\n        if (this.cells[0].cellValue != 0 && this.cells[0].cellValue == this.cells[3].cellValue && this.cells[3].cellValue == this.cells[6].cellValue) {\n            statusDisplay.innerHTML = `${currentPlayer} has won!`;\n            gameRunning = false;\n        }\n        if (this.cells[1].cellValue != 0 && this.cells[1].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[7].cellValue) {\n            statusDisplay.innerHTML = `${currentPlayer} has won!`;\n            gameRunning = false;\n        }\n        if (this.cells[2].cellValue != 0 && this.cells[2].cellValue == this.cells[5].cellValue && this.cells[5].cellValue == this.cells[8].cellValue) {\n            statusDisplay.innerHTML = `${currentPlayer} has won!`;\n            gameRunning = false;\n        }\n        //DIAGONALLY\n        if (this.cells[0].cellValue != 0 && this.cells[0].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[8].cellValue) {\n            statusDisplay.innerHTML = `${currentPlayer} has won!`;\n            gameRunning = false;\n        }\n        if (this.cells[2].cellValue != 0 && this.cells[2].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[6].cellValue) {\n            statusDisplay.innerHTML = `${currentPlayer} has won!`;\n            gameRunning = false;\n        }\n    }\n}\nexports.Board = Board;\n\n\n//# sourceURL=webpack://TicTacToe/./scripts/board.ts?");

/***/ }),

/***/ "./scripts/cell.ts":
/*!*************************!*\
  !*** ./scripts/cell.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Cell = void 0;\nclass Cell {\n    constructor(cell) {\n        this.htmlELement = cell;\n        this.cellValue = 0;\n    }\n    setCellValue(value) {\n        const PlayerX = new Image(50);\n        const PlayerO = new Image(50);\n        PlayerX.src = 'x_sign.png';\n        PlayerO.src = 'o_sign.png';\n        PlayerX.classList.add('img');\n        PlayerO.classList.add('img');\n        if (value == 1 && this.cellValue == 0) {\n            this.htmlELement.appendChild(PlayerX);\n        }\n        else if (value == -1 && this.cellValue == 0) {\n            this.htmlELement.appendChild(PlayerO);\n        }\n    }\n}\nexports.Cell = Cell;\n\n\n//# sourceURL=webpack://TicTacToe/./scripts/cell.ts?");

/***/ }),

/***/ "./scripts/index.ts":
/*!**************************!*\
  !*** ./scripts/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst board_1 = __webpack_require__(/*! ./board */ \"./scripts/board.ts\");\nlet input = document.getElementById('board_size');\nlet table = document.getElementById('tictactoe');\nlet playButton = document.getElementById('playBtn');\nlet size;\nplayButton.addEventListener('click', () => {\n    table.innerHTML = ' ';\n    size = parseInt(input.value);\n    const board = new board_1.Board(size);\n});\n\n\n//# sourceURL=webpack://TicTacToe/./scripts/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.ts");
/******/ 	
/******/ })()
;