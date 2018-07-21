/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n__webpack_require__(/*! ./font/stylesheet.css */ \"./src/font/stylesheet.css\");\n__webpack_require__(/*! ./img/stylesheet.css */ \"./src/img/stylesheet.css\");\n__webpack_require__(/*! ./normalize-css/normalize.css */ \"./src/normalize-css/normalize.css\");\n__webpack_require__(/*! ./js/rainbow.js */ \"./src/js/rainbow.js\");\n__webpack_require__(/*! ./js/unicorns.js */ \"./src/js/unicorns.js\");\n__webpack_require__(/*! ./js/scrollUp.js */ \"./src/js/scrollUp.js\");\n\nconsole.log(\"I entry point\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/font/stylesheet.css":
/*!*********************************!*\
  !*** ./src/font/stylesheet.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/font/stylesheet.css?");

/***/ }),

/***/ "./src/img/stylesheet.css":
/*!********************************!*\
  !*** ./src/img/stylesheet.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/img/stylesheet.css?");

/***/ }),

/***/ "./src/js/rainbow.js":
/*!***************************!*\
  !*** ./src/js/rainbow.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar string = 'This is rainbows.js';\n\nconsole.log(string);\n\n//# sourceURL=webpack:///./src/js/rainbow.js?");

/***/ }),

/***/ "./src/js/scrollUp.js":
/*!****************************!*\
  !*** ./src/js/scrollUp.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\njQuery(document).ready(function () {\n\tvar offset = 250;\n\tvar duration = 300;\n\tconsole.log(\"scrollUp is required\");\n\tjQuery(window).scroll(function () {\n\t\tif (jQuery(this).scrollTop() > offset) {\n\t\t\tjQuery('.back_to_up').fadeIn(duration);\n\t\t} else {\n\t\t\tjQuery('.back_to_up').fadeOut(duration);\n\t\t}\n\t});\n\n\tjQuery('.back_to_up').click(function (event) {\n\t\tevent.preventDefault();\n\t\tjQuery('html, body').animate({ scrollTop: 0 }, duration);\n\t\treturn false;\n\t});\n});\n\n//# sourceURL=webpack:///./src/js/scrollUp.js?");

/***/ }),

/***/ "./src/js/unicorns.js":
/*!****************************!*\
  !*** ./src/js/unicorns.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log('Hello, unicorns!');\n\n//# sourceURL=webpack:///./src/js/unicorns.js?");

/***/ }),

/***/ "./src/normalize-css/normalize.css":
/*!*****************************************!*\
  !*** ./src/normalize-css/normalize.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/normalize-css/normalize.css?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ })

/******/ });