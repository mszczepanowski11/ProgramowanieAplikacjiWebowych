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

/***/ "./animal.ts":
/*!*******************!*\
  !*** ./animal.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Animal = /** @class */ (function () {\n    function Animal(theName) {\n        this.name = theName;\n    }\n    Animal.prototype.move = function (distanceInMeters) {\n        if (distanceInMeters === void 0) { distanceInMeters = 0; }\n        console.log(this.name + \" moved \" + distanceInMeters + \"m.\");\n    };\n    return Animal;\n}());\nexports.default = Animal;\n\n\n//# sourceURL=webpack://webpack/./animal.ts?");

/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar horse_1 = __webpack_require__(/*! ./horse */ \"./horse.ts\");\nvar snake_1 = __webpack_require__(/*! ./snake */ \"./snake.ts\");\nvar sam = new snake_1[\"default\"](\"Sammy the Python\");\nvar tom = new horse_1[\"default\"](\"Tommy the Palomino\");\nconsole.log(sam.move());\nconsole.log(tom.move(34));\n\n\n//# sourceURL=webpack://webpack/./app.ts?");

/***/ }),

/***/ "./horse.ts":
/*!******************!*\
  !*** ./horse.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar animal_1 = __webpack_require__(/*! ./animal */ \"./animal.ts\");\nvar Horse = /** @class */ (function (_super) {\n    __extends(Horse, _super);\n    function Horse(name) {\n        return _super.call(this, name) || this;\n    }\n    Horse.prototype.move = function (distanceInMeters) {\n        if (distanceInMeters === void 0) { distanceInMeters = 45; }\n        console.log(\"Galloping...\");\n        _super.prototype.move.call(this, distanceInMeters);\n    };\n    return Horse;\n}(animal_1[\"default\"]));\nexports.default = Horse;\n\n\n//# sourceURL=webpack://webpack/./horse.ts?");

/***/ }),

/***/ "./snake.ts":
/*!******************!*\
  !*** ./snake.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar animal_1 = __webpack_require__(/*! ./animal */ \"./animal.ts\");\nvar Snake = /** @class */ (function (_super) {\n    __extends(Snake, _super);\n    function Snake(name) {\n        return _super.call(this, name) || this;\n    }\n    Snake.prototype.move = function (distanceInMeters) {\n        if (distanceInMeters === void 0) { distanceInMeters = 5; }\n        console.log(\"Slithering...\");\n        _super.prototype.move.call(this, distanceInMeters);\n    };\n    return Snake;\n}(animal_1[\"default\"]));\nexports.default = Snake;\n\n\n//# sourceURL=webpack://webpack/./snake.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./app.ts");
/******/ 	
/******/ })()
;