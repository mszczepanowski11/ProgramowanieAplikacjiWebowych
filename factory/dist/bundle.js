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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/styles.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/styles.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".theme-light {\\n  --color-primary: #fbfbfe;\\n  --font-color: #000000;\\n}\\n\\n.theme-dark {\\n  --color-primary: #2a2c2d;\\n  --font-color: crimson;\\n}\\n\\nbody {\\n  background: var(--color-primary);\\n  font-family: \\\"Hammersmith One\\\", sans-serif;\\n  margin: 25px;\\n}\\n\\nheader {\\n  color: var(--font-color);\\n  font-family: \\\"Press Start 2P\\\", cursive;\\n  font-size: 36px;\\n  text-align: left;\\n}\\n\\nh3 {\\n  color: var(--font-color);\\n}\\n\\n.menu {\\n  width: 25%;\\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 4px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\\n  border-radius: 10px;\\n  padding: 3px;\\n  transition: all 100ms ease-in;\\n  margin-bottom: 50px;\\n}\\n.menu:hover {\\n  box-shadow: crimson 0px 0px 0px 1px, crimson 0px 2px 2px 0px, crimson 0px 1px 0px inset;\\n}\\n\\nul {\\n  color: var(--font-color);\\n  list-style-type: none;\\n  font-size: 24px;\\n}\\nul li {\\n  cursor: pointer;\\n}\\n\\n.icon {\\n  margin: 5px 0 0 140px;\\n}\\n\\n.theme-button {\\n  position: absolute;\\n  top: 25px;\\n  right: 5%;\\n  display: inline-block;\\n  font-size: 20px;\\n  color: var(--font-color);\\n  background-color: var(--color-primary);\\n  border: none;\\n  border-radius: 10px;\\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 4px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\\n  text-align: center;\\n  text-decoration: none;\\n  transition: all 100ms ease-in;\\n  cursor: pointer;\\n}\\n.theme-button:hover {\\n  color: var(--color-primary);\\n  background-color: var(--font-color);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./battleships/battleships.ts":
/*!************************************!*\
  !*** ./battleships/battleships.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.BattleShips = void 0;\nvar logger_1 = __webpack_require__(/*! ../decorators/logger */ \"./decorators/logger.ts\");\nvar BattleShips = /** @class */ (function () {\n    function BattleShips() {\n        this.name = \"Battleship\";\n        this.icon = '../icons/battleship.png';\n        this.disabled = true;\n    }\n    BattleShips.prototype.getGameElement = function () {\n        var div = document.createElement('div');\n        div.appendChild(document.createTextNode(\"Hello BattleShips\"));\n        return div;\n    };\n    __decorate([\n        logger_1.logger('Battleships')\n    ], BattleShips.prototype, \"getGameElement\", null);\n    return BattleShips;\n}());\nexports.BattleShips = BattleShips;\n\n\n//# sourceURL=webpack:///./battleships/battleships.ts?");

/***/ }),

/***/ "./decorators/decorator.ts":
/*!*********************************!*\
  !*** ./decorators/decorator.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.disabled = void 0;\nfunction disabled(constructorFn) {\n    constructorFn.prototype.disabled = true;\n}\nexports.disabled = disabled;\n\n\n//# sourceURL=webpack:///./decorators/decorator.ts?");

/***/ }),

/***/ "./decorators/initalize.ts":
/*!*********************************!*\
  !*** ./decorators/initalize.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.initialize = void 0;\nfunction initialize(target, propKey, descriptor) {\n    var originalFn = target[propKey];\n    descriptor.value = function (param) {\n        console.log(\"Game portal has been loaded\");\n        return originalFn.call(this, param);\n    };\n}\nexports.initialize = initialize;\n\n\n//# sourceURL=webpack:///./decorators/initalize.ts?");

/***/ }),

/***/ "./decorators/logger.ts":
/*!******************************!*\
  !*** ./decorators/logger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.logger = void 0;\nfunction logger(name) {\n    return function (target, propKey, descriptor) {\n        var originalFn = target[propKey];\n        descriptor.value = function (param) {\n            console.log(\"Game \" + name + \" has been launched\");\n            return originalFn.call(this, param);\n        };\n    };\n}\nexports.logger = logger;\n\n\n//# sourceURL=webpack:///./decorators/logger.ts?");

/***/ }),

/***/ "./game.factory.ts":
/*!*************************!*\
  !*** ./game.factory.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameFactory = void 0;\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./games.enum.ts\");\nvar tictactoe_1 = __webpack_require__(/*! ./tictactoe/tictactoe */ \"./tictactoe/tictactoe.ts\");\nvar battleships_1 = __webpack_require__(/*! ./battleships/battleships */ \"./battleships/battleships.ts\");\nvar GameFactory = /** @class */ (function () {\n    function GameFactory() {\n    }\n    GameFactory.prototype.getGame = function (game) {\n        switch (game) {\n            case games_enum_1.Games.TicTacToe:\n                return new tictactoe_1.TicTacToe();\n            case games_enum_1.Games.BattleShips:\n                return new battleships_1.BattleShips();\n            default:\n                alert(\"There's no that type of game here!\");\n        }\n    };\n    return GameFactory;\n}());\nexports.GameFactory = GameFactory;\n\n\n//# sourceURL=webpack:///./game.factory.ts?");

/***/ }),

/***/ "./games.enum.ts":
/*!***********************!*\
  !*** ./games.enum.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Games = void 0;\nvar Games;\n(function (Games) {\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\n    Games[Games[\"BattleShips\"] = 2] = \"BattleShips\";\n})(Games = exports.Games || (exports.Games = {}));\n\n\n//# sourceURL=webpack:///./games.enum.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./games.enum.ts\");\nvar game_factory_1 = __webpack_require__(/*! ./game.factory */ \"./game.factory.ts\");\nvar initalize_1 = __webpack_require__(/*! ./decorators/initalize */ \"./decorators/initalize.ts\");\n__webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\nvar App = /** @class */ (function () {\n    function App(gamesFactory) {\n        this.gamesFactory = gamesFactory;\n        this.init();\n    }\n    App.prototype.init = function () {\n        var menuContainer = (document.createElement('div'));\n        var gameContainer = (document.createElement('div'));\n        var themeBtn = (document.createElement('button'));\n        var list = document.createElement('ul');\n        themeBtn.innerHTML = 'Switch theme';\n        themeBtn.classList.add('theme-button');\n        menuContainer.classList.add('menu');\n        gameContainer.classList.add('game');\n        var _loop_1 = function (gameObject) {\n            if (isNaN(Number(gameObject))) {\n                return \"continue\";\n            }\n            var game = this_1.gamesFactory.getGame(Number(gameObject));\n            if (game.disabled) {\n                var icon = document.createElement('img');\n                icon.classList.add('icon');\n                var item = document.createElement('li');\n                icon.src = game.icon;\n                item.appendChild(document.createTextNode(game.name));\n                item.appendChild(icon);\n                item.addEventListener('click', function () {\n                    gameContainer.innerHTML = \" \";\n                    gameContainer.appendChild(game.getGameElement());\n                });\n                list.appendChild(item);\n            }\n        };\n        var this_1 = this;\n        for (var _i = 0, _a = Object.keys(games_enum_1.Games); _i < _a.length; _i++) {\n            var gameObject = _a[_i];\n            _loop_1(gameObject);\n        }\n        var setTheme = function (themeName) {\n            localStorage.setItem('theme', themeName);\n            document.documentElement.className = themeName;\n        };\n        var toggleTheme = function () {\n            if (localStorage.getItem('theme') === 'theme-dark')\n                setTheme('theme-light');\n            else\n                setTheme('theme-dark');\n        };\n        themeBtn.addEventListener('click', function () {\n            toggleTheme();\n        });\n        menuContainer.appendChild(list);\n        document.body.appendChild(menuContainer);\n        document.body.appendChild(gameContainer);\n        document.body.appendChild(themeBtn);\n    };\n    __decorate([\n        initalize_1.initialize\n    ], App.prototype, \"init\", null);\n    return App;\n}());\nvar gamesFactory = new game_factory_1.GameFactory;\nvar app = new App(gamesFactory);\n// TODO: Zaimplementuj wzorzec fabryki/metody fabrykuj??cej, tak aby na podstawie konkretnej warto??ci z enum\n// zwr??ci?? obiekt gry. Z tego obiektu mo??na nast??pnie pobra?? nazw?? gry i doda?? do menu oraz metod?? zwracaj??c??\n// sam?? gr?? i po klikni??ciu w wybrany element listy wywo??ywa?? j??, aby dokleja?? zawarto???? do gameContainer. \n// Aby wy??wietli?? menu nale??y napisa?? p??tl??, kt??ra przeiteruje po wszystkich warto??ciach enum'\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ }),

/***/ "./tictactoe/tictactoe.ts":
/*!********************************!*\
  !*** ./tictactoe/tictactoe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TicTacToe = void 0;\nvar decorator_1 = __webpack_require__(/*! ../decorators/decorator */ \"./decorators/decorator.ts\");\nvar logger_1 = __webpack_require__(/*! ../decorators/logger */ \"./decorators/logger.ts\");\nvar TicTacToe = /** @class */ (function () {\n    function TicTacToe() {\n        this.name = \"TicTacToe\";\n        this.icon = '../icons/tic-tac-toe-2.png';\n        this.disabled = true;\n    }\n    TicTacToe.prototype.getGameElement = function () {\n        var div = document.createElement('div');\n        div.appendChild(document.createTextNode(\"Hello TicTacToe\"));\n        return div;\n    };\n    __decorate([\n        logger_1.logger('Tic Tac Toe')\n    ], TicTacToe.prototype, \"getGameElement\", null);\n    TicTacToe = __decorate([\n        decorator_1.disabled\n    ], TicTacToe);\n    return TicTacToe;\n}());\nexports.TicTacToe = TicTacToe;\n\n\n//# sourceURL=webpack:///./tictactoe/tictactoe.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;