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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ \"./src/screen.js\");\n/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ \"./src/scenes/loading.js\");\n/* module game.js controls all aspects of the game\r\n\r\n*/\r\n\r\n\r\nclass Game{\r\n    constructor(){\r\n        this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__.Screen(480,480);\r\n        this.scenes = {\r\n            loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__.Loading(this)\r\n        };\r\n        this.currentScene = this.scenes.loading;\r\n        this.currentScene.init();\r\n    }\r\n\r\n    frame(time){\r\n        //if scene is over \r\n        if(this.currentScene.isActive == false ){\r\n            this.currentScene = this.scenes[this.currentScene.nextScene];\r\n            this.currentScene.init();\r\n        }\r\n        this.currentScene.render(time);\r\n        requestAnimationFrame(time => this.frame(time));\r\n    }\r\n\r\n    run(){\r\n      requestAnimationFrame(time => this.frame(time));\r\n    }\r\n}\n\n//# sourceURL=webpack://catsjournery/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\nwindow.onload = ()=>{\r\n    const cat_journey = new _game__WEBPACK_IMPORTED_MODULE_0__.Game();\r\n    cat_journey.run();\r\n};\r\n\r\nconsole.log(\"sda\");\r\n\n\n//# sourceURL=webpack://catsjournery/./src/index.js?");

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": () => (/* binding */ Scene)\n/* harmony export */ });\nclass Scene {\r\n    constructor(game){\r\n        this.game = game;\r\n    }\r\n    init(){\r\n        this.isActive = true ; \r\n\r\n    }\r\n\r\n    render(time){\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://catsjournery/./src/scene.js?");

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Loading\": () => (/* binding */ Loading)\n/* harmony export */ });\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ \"./src/scene.js\");\n\r\n\r\nclass Loading extends _scene__WEBPACK_IMPORTED_MODULE_0__.Scene {\r\n    constructor(game){\r\n        super(game);\r\n        this.nextScene = \"menu\";\r\n    }\r\n    render(time){\r\n        this.game.screen.fill(\"#000000\");\r\n        super.render(time);\r\n    }\r\n}\n\n//# sourceURL=webpack://catsjournery/./src/scenes/loading.js?");

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Screen\": () => (/* binding */ Screen)\n/* harmony export */ });\nclass Screen {\r\n    constructor(width,height){\r\n        this.width = width;\r\n        this.height = height;\r\n        this.canvas = this.createCanvas();\r\n        this.canvas.width = width;\r\n        this.canvas.height = height;\r\n        this.context = this.canvas.getContext('2d');\r\n    }\r\n\r\n    createCanvas(){\r\n        let elements  = document.getElementsByTagName('canvas');\r\n        // if we already have canvas , take him \r\n        if(elements.length > 0){\r\n            return elements[0];\r\n        }\r\n        let canvas = document.createElement('canvas');\r\n        document.body.appendChild(canvas);\r\n        return canvas;\r\n    }\r\n    \r\n    fill(color){\r\n        this.context.fillStyle = color;\r\n        this.context.fillRect(0,0,this.width,this.height);\r\n    }\r\n}\n\n//# sourceURL=webpack://catsjournery/./src/screen.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;