/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function() {

eval("var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nfunction StandardAccess(constructorFn) {\n    constructorFn.prototype.role = Role.Standard;\n}\nfunction ModeratorAccess(constructorFn) {\n    constructorFn.prototype.role = Role.Moderator;\n}\nfunction AdminAccess(constructorFn) {\n    constructorFn.prototype.role = Role.Admin;\n}\nfunction watch(target, propKey, descriptor) {\n    const originalFn = target[propKey];\n    descriptor.value = function (param) {\n        console.log(`User: ${param} wants ${propKey}`);\n        return originalFn.call(this, param);\n    };\n}\nfunction forAdmin(target, propKey, descriptor) {\n    const originalFn = target[propKey];\n    descriptor.value = function (param) {\n        param.role === Role.Admin ? console.log('Admin role') : originalFn.call(this, param);\n    };\n}\nfunction forModerator(target, propKey, descriptor) {\n    const originalFn = target[propKey];\n    descriptor.value = function (param) {\n        param.role === Role.Moderator ? console.log('Moderator role') : originalFn.call(this, param);\n    };\n}\nvar Role;\n(function (Role) {\n    Role[\"Standard\"] = \"Standard\";\n    Role[\"Moderator\"] = \"Moderator\";\n    Role[\"Admin\"] = \"Admin\";\n})(Role || (Role = {}));\nclass User {\n    toString() {\n        return `${this.name} ${this.surname} ${this.role}`;\n    }\n}\nlet StandardUser = class StandardUser extends User {\n    constructor(name, surname) {\n        super();\n        this.name = name;\n        this.surname = surname;\n    }\n};\nStandardUser = __decorate([\n    StandardAccess\n], StandardUser);\nlet ModeratorUser = class ModeratorUser extends User {\n    constructor(name, surname) {\n        super();\n        this.name = name;\n        this.surname = surname;\n    }\n};\nModeratorUser = __decorate([\n    ModeratorAccess\n], ModeratorUser);\nlet AdminUser = class AdminUser extends User {\n    constructor(name, surname) {\n        super();\n        this.name = name;\n        this.surname = surname;\n    }\n};\nAdminUser = __decorate([\n    AdminAccess\n], AdminUser);\nclass Resource {\n    constructor() {\n        this.resourceValue = \"resource value\";\n    }\n    // @watch\n    read(user) {\n        if (user.role === Role.Moderator || user.role === Role.Admin) {\n            console.log(this.resourceValue);\n        }\n    }\n    // @watch\n    change(user) {\n        if (user.role === Role.Admin) {\n            this.resourceValue = \"changed resource value\";\n        }\n    }\n}\n__decorate([\n    forModerator\n], Resource.prototype, \"read\", null);\n__decorate([\n    forAdmin\n], Resource.prototype, \"change\", null);\nconst user1 = new StandardUser(\"Luke\", \"Skywalker\");\nconst user2 = new ModeratorUser(\"Han\", \"Solo\");\nconst user3 = new AdminUser(\"Obi-Wan\", \"Kenobi\");\nconst res = new Resource();\nconsole.log(user1.toString());\nconsole.log(user2.toString());\nconsole.log(user3.toString());\nconsole.log('User 1:');\nres.read(user1);\nres.change(user1);\nconsole.log('User 2:');\nres.read(user2);\nres.change(user2);\nres.read(user3);\nconsole.log('User 3:');\nres.change(user3);\nres.read(user3);\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"]();
/******/ 	
/******/ })()
;