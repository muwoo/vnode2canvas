(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/get-iterator */ \"./node_modules/core-js/library/fn/get-iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/*!***************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/map.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/map */ \"./node_modules/core-js/library/fn/map.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/map.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/assign */ \"./node_modules/core-js/library/fn/object/assign.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/assign.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/create */ \"./node_modules/core-js/library/fn/object/create.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ \"./node_modules/core-js/library/fn/object/get-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/keys */ \"./node_modules/core-js/library/fn/object/keys.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/keys.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"./node_modules/core-js/library/fn/object/set-prototype-of.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol */ \"./node_modules/core-js/library/fn/symbol/index.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = { \"default\": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"./node_modules/core-js/library/fn/symbol/iterator.js\"), __esModule: true };\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      (0, _defineProperty2.default)(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (obj, key, value) {\n  if (key in obj) {\n    (0, _defineProperty2.default)(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _assign = __webpack_require__(/*! ../core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _assign2.default || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/babel-runtime/core-js/object/set-prototype-of.js\");\n\nvar _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);\n\nvar _create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/babel-runtime/core-js/object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(superClass)));\n  }\n\n  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _typeof2 = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/babel-runtime/helpers/typeof.js\");\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && ((typeof call === \"undefined\" ? \"undefined\" : (0, _typeof3.default)(call)) === \"object\" || typeof call === \"function\") ? call : self;\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/babel-runtime/core-js/symbol/iterator.js\");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/babel-runtime/core-js/symbol.js\");\n\nvar _symbol2 = _interopRequireDefault(_symbol);\n\nvar _typeof = typeof _symbol2.default === \"function\" && typeof _iterator2.default === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj; };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = typeof _symbol2.default === \"function\" && _typeof(_iterator2.default) === \"symbol\" ? function (obj) {\n  return typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n} : function (obj) {\n  return obj && typeof _symbol2.default === \"function\" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? \"symbol\" : typeof obj === \"undefined\" ? \"undefined\" : _typeof(obj);\n};\n\n//# sourceURL=webpack:///./node_modules/babel-runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\nmodule.exports = __webpack_require__(/*! ../modules/core.get-iterator */ \"./node_modules/core-js/library/modules/core.get-iterator.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.map */ \"./node_modules/core-js/library/modules/es6.map.js\");\n__webpack_require__(/*! ../modules/es7.map.to-json */ \"./node_modules/core-js/library/modules/es7.map.to-json.js\");\n__webpack_require__(/*! ../modules/es7.map.of */ \"./node_modules/core-js/library/modules/es7.map.of.js\");\n__webpack_require__(/*! ../modules/es7.map.from */ \"./node_modules/core-js/library/modules/es7.map.from.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Map;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/map.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.assign */ \"./node_modules/core-js/library/modules/es6.object.assign.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.create */ \"./node_modules/core-js/library/modules/es6.object.create.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function create(P, D) {\n  return $Object.create(P, D);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.get-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.getPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.keys */ \"./node_modules/core-js/library/modules/es6.object.keys.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.keys;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ \"./node_modules/core-js/library/modules/es6.object.set-prototype-of.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object.setPrototypeOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.symbol */ \"./node_modules/core-js/library/modules/es6.symbol.js\");\n__webpack_require__(/*! ../../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ \"./node_modules/core-js/library/modules/es7.symbol.async-iterator.js\");\n__webpack_require__(/*! ../../modules/es7.symbol.observable */ \"./node_modules/core-js/library/modules/es7.symbol.observable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\nmodule.exports = __webpack_require__(/*! ../../modules/_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\").f('iterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/fn/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\n\nmodule.exports = function (iter, ITERATOR) {\n  var result = [];\n  forOf(iter, false, result.push, result, ITERATOR);\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-from-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 0 -> Array#forEach\n// 1 -> Array#map\n// 2 -> Array#filter\n// 3 -> Array#some\n// 4 -> Array#every\n// 5 -> Array#find\n// 6 -> Array#findIndex\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar asc = __webpack_require__(/*! ./_array-species-create */ \"./node_modules/core-js/library/modules/_array-species-create.js\");\nmodule.exports = function (TYPE, $create) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  var create = $create || asc;\n  return function ($this, callbackfn, that) {\n    var O = toObject($this);\n    var self = IObject(O);\n    var f = ctx(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var val, res;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      val = self[index];\n      res = f(val, index, O);\n      if (TYPE) {\n        if (IS_MAP) result[index] = res;   // map\n        else if (res) switch (TYPE) {\n          case 3: return true;             // some\n          case 5: return val;              // find\n          case 6: return index;            // findIndex\n          case 2: result.push(val);        // filter\n        } else if (IS_EVERY) return false; // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-methods.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\n\nmodule.exports = function (original) {\n  var C;\n  if (isArray(original)) {\n    C = original.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return C === undefined ? Array : C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 9.4.2.3 ArraySpeciesCreate(originalArray, length)\nvar speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ \"./node_modules/core-js/library/modules/_array-species-constructor.js\");\n\nmodule.exports = function (original, length) {\n  return new (speciesConstructor(original))(length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/library/modules/_redefine-all.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/library/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\nvar $iterDefine = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar setSpecies = __webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/library/modules/_set-species.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar fastKey = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").fastKey;\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/library/modules/_validate-collection.js\");\nvar SIZE = DESCRIPTORS ? '_s' : 'size';\n\nvar getEntry = function (that, key) {\n  // fast case\n  var index = fastKey(key);\n  var entry;\n  if (index !== 'F') return that._i[index];\n  // frozen object case\n  for (entry = that._f; entry; entry = entry.n) {\n    if (entry.k == key) return entry;\n  }\n};\n\nmodule.exports = {\n  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {\n    var C = wrapper(function (that, iterable) {\n      anInstance(that, C, NAME, '_i');\n      that._t = NAME;         // collection type\n      that._i = create(null); // index\n      that._f = undefined;    // first entry\n      that._l = undefined;    // last entry\n      that[SIZE] = 0;         // size\n      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);\n    });\n    redefineAll(C.prototype, {\n      // 23.1.3.1 Map.prototype.clear()\n      // 23.2.3.2 Set.prototype.clear()\n      clear: function clear() {\n        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {\n          entry.r = true;\n          if (entry.p) entry.p = entry.p.n = undefined;\n          delete data[entry.i];\n        }\n        that._f = that._l = undefined;\n        that[SIZE] = 0;\n      },\n      // 23.1.3.3 Map.prototype.delete(key)\n      // 23.2.3.4 Set.prototype.delete(value)\n      'delete': function (key) {\n        var that = validate(this, NAME);\n        var entry = getEntry(that, key);\n        if (entry) {\n          var next = entry.n;\n          var prev = entry.p;\n          delete that._i[entry.i];\n          entry.r = true;\n          if (prev) prev.n = next;\n          if (next) next.p = prev;\n          if (that._f == entry) that._f = next;\n          if (that._l == entry) that._l = prev;\n          that[SIZE]--;\n        } return !!entry;\n      },\n      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)\n      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)\n      forEach: function forEach(callbackfn /* , that = undefined */) {\n        validate(this, NAME);\n        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);\n        var entry;\n        while (entry = entry ? entry.n : this._f) {\n          f(entry.v, entry.k, this);\n          // revert to the last existing entry\n          while (entry && entry.r) entry = entry.p;\n        }\n      },\n      // 23.1.3.7 Map.prototype.has(key)\n      // 23.2.3.7 Set.prototype.has(value)\n      has: function has(key) {\n        return !!getEntry(validate(this, NAME), key);\n      }\n    });\n    if (DESCRIPTORS) dP(C.prototype, 'size', {\n      get: function () {\n        return validate(this, NAME)[SIZE];\n      }\n    });\n    return C;\n  },\n  def: function (that, key, value) {\n    var entry = getEntry(that, key);\n    var prev, index;\n    // change existing entry\n    if (entry) {\n      entry.v = value;\n    // create new entry\n    } else {\n      that._l = entry = {\n        i: index = fastKey(key, true), // <- index\n        k: key,                        // <- key\n        v: value,                      // <- value\n        p: prev = that._l,             // <- previous entry\n        n: undefined,                  // <- next entry\n        r: false                       // <- removed\n      };\n      if (!that._f) that._f = entry;\n      if (prev) prev.n = entry;\n      that[SIZE]++;\n      // add to index\n      if (index !== 'F') that._i[index] = entry;\n    } return that;\n  },\n  getEntry: getEntry,\n  setStrong: function (C, NAME, IS_MAP) {\n    // add .keys, .values, .entries, [@@iterator]\n    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11\n    $iterDefine(C, NAME, function (iterated, kind) {\n      this._t = validate(iterated, NAME); // target\n      this._k = kind;                     // kind\n      this._l = undefined;                // previous\n    }, function () {\n      var that = this;\n      var kind = that._k;\n      var entry = that._l;\n      // revert to the last existing entry\n      while (entry && entry.r) entry = entry.p;\n      // get next entry\n      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {\n        // or finish the iteration\n        that._t = undefined;\n        return step(1);\n      }\n      // return step by kind\n      if (kind == 'keys') return step(0, entry.k);\n      if (kind == 'values') return step(0, entry.v);\n      return step(0, [entry.k, entry.v]);\n    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);\n\n    // add [@@species], 23.1.2.2, 23.2.2.2\n    setSpecies(NAME);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_collection-strong.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar from = __webpack_require__(/*! ./_array-from-iterable */ \"./node_modules/core-js/library/modules/_array-from-iterable.js\");\nmodule.exports = function (NAME) {\n  return function toJSON() {\n    if (classof(this) != NAME) throw TypeError(NAME + \"#toJSON isn't generic\");\n    return from(this);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_collection-to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar meta = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar redefineAll = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/library/modules/_redefine-all.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/library/modules/_an-instance.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar each = __webpack_require__(/*! ./_array-methods */ \"./node_modules/core-js/library/modules/_array-methods.js\")(0);\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\n\nmodule.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {\n  var Base = global[NAME];\n  var C = Base;\n  var ADDER = IS_MAP ? 'set' : 'add';\n  var proto = C && C.prototype;\n  var O = {};\n  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {\n    new C().entries().next();\n  }))) {\n    // create collection constructor\n    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);\n    redefineAll(C.prototype, methods);\n    meta.NEED = true;\n  } else {\n    C = wrapper(function (target, iterable) {\n      anInstance(target, C, NAME, '_c');\n      target._c = new Base();\n      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);\n    });\n    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {\n      var IS_ADDER = KEY == 'add' || KEY == 'set';\n      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {\n        anInstance(this, C, KEY);\n        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;\n        var result = this._c[KEY](a === 0 ? 0 : a, b);\n        return IS_ADDER ? this : result;\n      });\n    });\n    IS_WEAK || dP(C.prototype, 'size', {\n      get: function () {\n        return this._c.size;\n      }\n    });\n  }\n\n  setToStringTag(C, NAME);\n\n  O[NAME] = C;\n  $export($export.G + $export.W + $export.F, O);\n\n  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);\n\n  return C;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_collection.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.5.7' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// all enumerable object keys, includes symbols\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nmodule.exports = function (it) {\n  var result = getKeys(it);\n  var getSymbols = gOPS.f;\n  if (getSymbols) {\n    var symbols = getSymbols(it);\n    var isEnum = pIE.f;\n    var i = 0;\n    var key;\n    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);\n  } return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_enum-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.2.2 IsArray(argument)\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nmodule.exports = Array.isArray || function isArray(arg) {\n  return cof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var META = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\")('meta');\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar setDesc = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar id = 0;\nvar isExtensible = Object.isExtensible || function () {\n  return true;\n};\nvar FREEZE = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return isExtensible(Object.preventExtensions({}));\n});\nvar setMeta = function (it) {\n  setDesc(it, META, { value: {\n    i: 'O' + ++id, // object ID\n    w: {}          // weak collections IDs\n  } });\n};\nvar fastKey = function (it, create) {\n  // return primitive with prefix\n  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return 'F';\n    // not necessary to add metadata\n    if (!create) return 'E';\n    // add missing metadata\n    setMeta(it);\n  // return object ID\n  } return it[META].i;\n};\nvar getWeak = function (it, create) {\n  if (!has(it, META)) {\n    // can't set metadata to uncaught frozen object\n    if (!isExtensible(it)) return true;\n    // not necessary to add metadata\n    if (!create) return false;\n    // add missing metadata\n    setMeta(it);\n  // return hash weak collections IDs\n  } return it[META].w;\n};\n// add metadata on freeze-family methods calling\nvar onFreeze = function (it) {\n  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);\n  return it;\n};\nvar meta = module.exports = {\n  KEY: META,\n  NEED: false,\n  fastKey: fastKey,\n  getWeak: getWeak,\n  onFreeze: onFreeze\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_meta.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 19.1.2.1 Object.assign(target, source, ...)\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPS = __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\");\nvar pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar $assign = Object.assign;\n\n// should work with symbols and should have deterministic property order (V8 bug)\nmodule.exports = !$assign || __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  var A = {};\n  var B = {};\n  // eslint-disable-next-line no-undef\n  var S = Symbol();\n  var K = 'abcdefghijklmnopqrst';\n  A[S] = 7;\n  K.split('').forEach(function (k) { B[k] = k; });\n  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars\n  var T = toObject(target);\n  var aLen = arguments.length;\n  var index = 1;\n  var getSymbols = gOPS.f;\n  var isEnum = pIE.f;\n  while (aLen > index) {\n    var S = IObject(arguments[index++]);\n    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];\n  } return T;\n} : $assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pIE = __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? gOPD : function getOwnPropertyDescriptor(O, P) {\n  O = toIObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return gOPD(O, P);\n  } catch (e) { /* empty */ }\n  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopd.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar gOPN = __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f;\nvar toString = {}.toString;\n\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames\n  ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return gOPN(it);\n  } catch (e) {\n    return windowNames.slice();\n  }\n};\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\").concat('length', 'prototype');\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return $keys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gopn.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gops.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = {}.propertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-pie.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// most Object methods by ES6 should accept primitives\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nmodule.exports = function (KEY, exec) {\n  var fn = (core.Object || {})[KEY] || Object[KEY];\n  var exp = {};\n  exp[KEY] = exec(fn);\n  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_object-sap.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {\n    var mapFn = arguments[1];\n    var mapping, A, n, cb;\n    aFunction(this);\n    mapping = mapFn !== undefined;\n    if (mapping) aFunction(mapFn);\n    if (source == undefined) return new this();\n    A = [];\n    if (mapping) {\n      n = 0;\n      cb = ctx(mapFn, arguments[2], 2);\n      forOf(source, false, function (nextItem) {\n        A.push(cb(nextItem, n++));\n      });\n    } else {\n      forOf(source, false, A.push, A);\n    }\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-collection-from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://tc39.github.io/proposal-setmap-offrom/\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\nmodule.exports = function (COLLECTION) {\n  $export($export.S, COLLECTION, { of: function of() {\n    var length = arguments.length;\n    var A = new Array(length);\n    while (length--) A[length] = arguments[length];\n    return new this(A);\n  } });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-collection-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar check = function (O, proto) {\n  anObject(O);\n  if (!isObject(proto) && proto !== null) throw TypeError(proto + \": can't set as prototype!\");\n};\nmodule.exports = {\n  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line\n    function (test, buggy, set) {\n      try {\n        set = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\")(Function.call, __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\").f(Object.prototype, '__proto__').set, 2);\n        set(test, []);\n        buggy = !(test instanceof Array);\n      } catch (e) { buggy = true; }\n      return function setPrototypeOf(O, proto) {\n        check(O, proto);\n        if (buggy) O.__proto__ = proto;\n        else set(O, proto);\n        return O;\n      };\n    }({}, false) : undefined),\n  check: check\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-proto.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it, TYPE) {\n  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_validate-collection.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar defineProperty = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nmodule.exports = function (name) {\n  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});\n  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.f = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks-ext.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar get = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIterator = function (it) {\n  var iterFn = get(it);\n  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');\n  return anObject(iterFn.call(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/core.get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar strong = __webpack_require__(/*! ./_collection-strong */ \"./node_modules/core-js/library/modules/_collection-strong.js\");\nvar validate = __webpack_require__(/*! ./_validate-collection */ \"./node_modules/core-js/library/modules/_validate-collection.js\");\nvar MAP = 'Map';\n\n// 23.1 Map Objects\nmodule.exports = __webpack_require__(/*! ./_collection */ \"./node_modules/core-js/library/modules/_collection.js\")(MAP, function (get) {\n  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };\n}, {\n  // 23.1.3.6 Map.prototype.get(key)\n  get: function get(key) {\n    var entry = strong.getEntry(validate(this, MAP), key);\n    return entry && entry.v;\n  },\n  // 23.1.3.9 Map.prototype.set(key, value)\n  set: function set(key, value) {\n    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);\n  }\n}, strong, true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.map.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.1 Object.assign(target, source)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ \"./node_modules/core-js/library/modules/_object-assign.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.assign.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\n$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\") });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 Object.getPrototypeOf(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('getPrototypeOf', function () {\n  return function getPrototypeOf(it) {\n    return $getPrototypeOf(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 Object.keys(O)\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\n__webpack_require__(/*! ./_object-sap */ \"./node_modules/core-js/library/modules/_object-sap.js\")('keys', function () {\n  return function keys(it) {\n    return $keys(toObject(it));\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.3.19 Object.setPrototypeOf(O, proto)\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ \"./node_modules/core-js/library/modules/_set-proto.js\").set });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// ECMAScript 6 symbols shim\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar META = __webpack_require__(/*! ./_meta */ \"./node_modules/core-js/library/modules/_meta.js\").KEY;\nvar $fails = __webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\");\nvar shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar wks = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\");\nvar wksExt = __webpack_require__(/*! ./_wks-ext */ \"./node_modules/core-js/library/modules/_wks-ext.js\");\nvar wksDefine = __webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\");\nvar enumKeys = __webpack_require__(/*! ./_enum-keys */ \"./node_modules/core-js/library/modules/_enum-keys.js\");\nvar isArray = __webpack_require__(/*! ./_is-array */ \"./node_modules/core-js/library/modules/_is-array.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar _create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ \"./node_modules/core-js/library/modules/_object-gopn-ext.js\");\nvar $GOPD = __webpack_require__(/*! ./_object-gopd */ \"./node_modules/core-js/library/modules/_object-gopd.js\");\nvar $DP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar $keys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\nvar gOPD = $GOPD.f;\nvar dP = $DP.f;\nvar gOPN = gOPNExt.f;\nvar $Symbol = global.Symbol;\nvar $JSON = global.JSON;\nvar _stringify = $JSON && $JSON.stringify;\nvar PROTOTYPE = 'prototype';\nvar HIDDEN = wks('_hidden');\nvar TO_PRIMITIVE = wks('toPrimitive');\nvar isEnum = {}.propertyIsEnumerable;\nvar SymbolRegistry = shared('symbol-registry');\nvar AllSymbols = shared('symbols');\nvar OPSymbols = shared('op-symbols');\nvar ObjectProto = Object[PROTOTYPE];\nvar USE_NATIVE = typeof $Symbol == 'function';\nvar QObject = global.QObject;\n// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\nvar setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;\n\n// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\nvar setSymbolDesc = DESCRIPTORS && $fails(function () {\n  return _create(dP({}, 'a', {\n    get: function () { return dP(this, 'a', { value: 7 }).a; }\n  })).a != 7;\n}) ? function (it, key, D) {\n  var protoDesc = gOPD(ObjectProto, key);\n  if (protoDesc) delete ObjectProto[key];\n  dP(it, key, D);\n  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);\n} : dP;\n\nvar wrap = function (tag) {\n  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);\n  sym._k = tag;\n  return sym;\n};\n\nvar isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return it instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(it, key, D) {\n  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);\n  anObject(it);\n  key = toPrimitive(key, true);\n  anObject(D);\n  if (has(AllSymbols, key)) {\n    if (!D.enumerable) {\n      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));\n      it[HIDDEN][key] = true;\n    } else {\n      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;\n      D = _create(D, { enumerable: createDesc(0, false) });\n    } return setSymbolDesc(it, key, D);\n  } return dP(it, key, D);\n};\nvar $defineProperties = function defineProperties(it, P) {\n  anObject(it);\n  var keys = enumKeys(P = toIObject(P));\n  var i = 0;\n  var l = keys.length;\n  var key;\n  while (l > i) $defineProperty(it, key = keys[i++], P[key]);\n  return it;\n};\nvar $create = function create(it, P) {\n  return P === undefined ? _create(it) : $defineProperties(_create(it), P);\n};\nvar $propertyIsEnumerable = function propertyIsEnumerable(key) {\n  var E = isEnum.call(this, key = toPrimitive(key, true));\n  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;\n  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;\n};\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {\n  it = toIObject(it);\n  key = toPrimitive(key, true);\n  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;\n  var D = gOPD(it, key);\n  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;\n  return D;\n};\nvar $getOwnPropertyNames = function getOwnPropertyNames(it) {\n  var names = gOPN(toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);\n  } return result;\n};\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(it) {\n  var IS_OP = it === ObjectProto;\n  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));\n  var result = [];\n  var i = 0;\n  var key;\n  while (names.length > i) {\n    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);\n  } return result;\n};\n\n// 19.4.1.1 Symbol([description])\nif (!USE_NATIVE) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');\n    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);\n    var $set = function (value) {\n      if (this === ObjectProto) $set.call(OPSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDesc(this, tag, createDesc(1, value));\n    };\n    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });\n    return wrap(tag);\n  };\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return this._k;\n  });\n\n  $GOPD.f = $getOwnPropertyDescriptor;\n  $DP.f = $defineProperty;\n  __webpack_require__(/*! ./_object-gopn */ \"./node_modules/core-js/library/modules/_object-gopn.js\").f = gOPNExt.f = $getOwnPropertyNames;\n  __webpack_require__(/*! ./_object-pie */ \"./node_modules/core-js/library/modules/_object-pie.js\").f = $propertyIsEnumerable;\n  __webpack_require__(/*! ./_object-gops */ \"./node_modules/core-js/library/modules/_object-gops.js\").f = $getOwnPropertySymbols;\n\n  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\")) {\n    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);\n  }\n\n  wksExt.f = function (name) {\n    return wrap(wks(name));\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });\n\nfor (var es6Symbols = (\n  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14\n  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'\n).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);\n\nfor (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);\n\n$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {\n  // 19.4.2.1 Symbol.for(key)\n  'for': function (key) {\n    return has(SymbolRegistry, key += '')\n      ? SymbolRegistry[key]\n      : SymbolRegistry[key] = $Symbol(key);\n  },\n  // 19.4.2.5 Symbol.keyFor(sym)\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');\n    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;\n  },\n  useSetter: function () { setter = true; },\n  useSimple: function () { setter = false; }\n});\n\n$export($export.S + $export.F * !USE_NATIVE, 'Object', {\n  // 19.1.2.2 Object.create(O [, Properties])\n  create: $create,\n  // 19.1.2.4 Object.defineProperty(O, P, Attributes)\n  defineProperty: $defineProperty,\n  // 19.1.2.3 Object.defineProperties(O, Properties)\n  defineProperties: $defineProperties,\n  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,\n  // 19.1.2.7 Object.getOwnPropertyNames(O)\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // 19.1.2.8 Object.getOwnPropertySymbols(O)\n  getOwnPropertySymbols: $getOwnPropertySymbols\n});\n\n// 24.3.2 JSON.stringify(value [, replacer [, space]])\n$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {\n  var S = $Symbol();\n  // MS Edge converts symbol values to JSON as {}\n  // WebKit converts symbol values to JSON as null\n  // V8 throws on boxed symbols\n  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';\n})), 'JSON', {\n  stringify: function stringify(it) {\n    var args = [it];\n    var i = 1;\n    var replacer, $replacer;\n    while (arguments.length > i) args.push(arguments[i++]);\n    $replacer = replacer = args[1];\n    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n    if (!isArray(replacer)) replacer = function (key, value) {\n      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n      if (!isSymbol(value)) return value;\n    };\n    args[1] = replacer;\n    return _stringify.apply($JSON, args);\n  }\n});\n\n// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)\n$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n// 19.4.3.5 Symbol.prototype[@@toStringTag]\nsetToStringTag($Symbol, 'Symbol');\n// 20.2.1.9 Math[@@toStringTag]\nsetToStringTag(Math, 'Math', true);\n// 24.3.3 JSON[@@toStringTag]\nsetToStringTag(global.JSON, 'JSON', true);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es6.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from\n__webpack_require__(/*! ./_set-collection-from */ \"./node_modules/core-js/library/modules/_set-collection-from.js\")('Map');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.map.from.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of\n__webpack_require__(/*! ./_set-collection-of */ \"./node_modules/core-js/library/modules/_set-collection-of.js\")('Map');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.map.of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// https://github.com/DavidBruant/Map-Set.prototype.toJSON\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n\n$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ \"./node_modules/core-js/library/modules/_collection-to-json.js\")('Map') });\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.map.to-json.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('asyncIterator');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./_wks-define */ \"./node_modules/core-js/library/modules/_wks-define.js\")('observable');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/es7.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/scroller/index.js":
/*!****************************************!*\
  !*** ./node_modules/scroller/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {\n    if (true) {\n        // AMD\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./lib/animate */ \"./node_modules/scroller/lib/animate.js\"), __webpack_require__(/*! ./lib/Scroller */ \"./node_modules/scroller/lib/Scroller.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, function (exports, animate, Scroller) {\n    exports.animate = animate;\n    exports.Scroller = Scroller;\n}));\n\n\n//# sourceURL=webpack:///./node_modules/scroller/index.js?");

/***/ }),

/***/ "./node_modules/scroller/lib/Scroller.js":
/*!***********************************************!*\
  !*** ./node_modules/scroller/lib/Scroller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*\n * Scroller\n * http://github.com/zynga/scroller\n *\n * Copyright 2011, Zynga Inc.\n * Licensed under the MIT License.\n * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt\n *\n * Based on the work of: Unify Project (unify-project.org)\n * http://unify-project.org\n * Copyright 2011, Deutsche Telekom AG\n * License: MIT + Apache (V2)\n */\n\n(function (root, factory) {\n    if (true) {\n        // AMD\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./animate */ \"./node_modules/scroller/lib/animate.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, function (animate) {\n    var NOOP = function () {};\n\n    /**\n     * A pure logic 'component' for 'virtual' scrolling/zooming.\n     */\n    var Scroller = function (callback, options) {\n        this.__callback = callback;\n\n        this.options = {\n            /** Enable scrolling on x-axis */\n            scrollingX: true,\n\n            /** Enable scrolling on y-axis */\n            scrollingY: true,\n\n            /** Enable animations for deceleration, snap back, zooming and scrolling */\n            animating: true,\n\n            /** duration for animations triggered by scrollTo/zoomTo */\n            animationDuration: 250,\n\n            /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */\n            bouncing: true,\n\n            /** Enable locking to the main axis if user moves only slightly on one of them at start */\n            locking: true,\n\n            /** Enable pagination mode (switching between full page content panes) */\n            paging: false,\n\n            /** Enable snapping of content to a configured pixel grid */\n            snapping: false,\n\n            /** Enable zooming of content via API, fingers and mouse wheel */\n            zooming: false,\n\n            /** Minimum zoom level */\n            minZoom: 0.5,\n\n            /** Maximum zoom level */\n            maxZoom: 3,\n\n            /** Multiply or decrease scrolling speed **/\n            speedMultiplier: 1,\n\n            /** Callback that is fired on the later of touch end or deceleration end,\n                provided that another scrolling action has not begun. Used to know\n                when to fade out a scrollbar. */\n            scrollingComplete: NOOP,\n\n            /** This configures the amount of change applied to deceleration when reaching boundaries  **/\n            penetrationDeceleration : 0.03,\n\n            /** This configures the amount of change applied to acceleration when reaching boundaries  **/\n            penetrationAcceleration : 0.08\n        };\n\n        for (var key in options) {\n            this.options[key] = options[key];\n        }\n    };\n\n\n    // Easing Equations (c) 2003 Robert Penner, all rights reserved.\n    // Open source under the BSD License.\n\n    /**\n     * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)\n     **/\n    var easeOutCubic = function (pos) {\n        return (Math.pow((pos - 1), 3) + 1);\n    };\n\n    /**\n     * @param pos {Number} position between 0 (start of effect) and 1 (end of effect)\n     **/\n    var easeInOutCubic = function (pos) {\n        if ((pos /= 0.5) < 1) {\n            return 0.5 * Math.pow(pos, 3);\n        }\n\n        return 0.5 * (Math.pow((pos - 2), 3) + 2);\n    };\n\n\n    Scroller.prototype = {\n\n        /*\n          ---------------------------------------------------------------------------\n          INTERNAL FIELDS :: STATUS\n          ---------------------------------------------------------------------------\n        */\n\n        /** {Boolean} Whether only a single finger is used in touch handling */\n        __isSingleTouch: false,\n\n        /** {Boolean} Whether a touch event sequence is in progress */\n        __isTracking: false,\n\n        /** {Boolean} Whether a deceleration animation went to completion. */\n        __didDecelerationComplete: false,\n\n        /**\n         * {Boolean} Whether a gesture zoom/rotate event is in progress. Activates when\n         * a gesturestart event happens. This has higher priority than dragging.\n         */\n        __isGesturing: false,\n\n        /**\n         * {Boolean} Whether the user has moved by such a distance that we have enabled\n         * dragging mode. Hint: It's only enabled after some pixels of movement to\n         * not interrupt with clicks etc.\n         */\n        __isDragging: false,\n\n        /**\n         * {Boolean} Not touching and dragging anymore, and smoothly animating the\n         * touch sequence using deceleration.\n         */\n        __isDecelerating: false,\n\n        /**\n         * {Boolean} Smoothly animating the currently configured change\n         */\n        __isAnimating: false,\n\n\n\n        /*\n          ---------------------------------------------------------------------------\n          INTERNAL FIELDS :: DIMENSIONS\n          ---------------------------------------------------------------------------\n        */\n\n        /** {Integer} Viewport left boundary */\n        __clientLeft: 0,\n\n        /** {Integer} Viewport right boundary */\n        __clientTop: 0,\n\n        /** {Integer} Viewport width */\n        __clientWidth: 0,\n\n        /** {Integer} Viewport height */\n        __clientHeight: 0,\n\n        /** {Integer} Full content's width */\n        __contentWidth: 0,\n\n        /** {Integer} Full content's height */\n        __contentHeight: 0,\n\n        /** {Integer} Snapping width for content */\n        __snapWidth: 100,\n\n        /** {Integer} Snapping height for content */\n        __snapHeight: 100,\n\n        /** {Number} Zoom level */\n        __zoomLevel: 1,\n\n        /** {Number} Scroll position on x-axis */\n        __scrollLeft: 0,\n\n        /** {Number} Scroll position on y-axis */\n        __scrollTop: 0,\n\n        /** {Integer} Maximum allowed scroll position on x-axis */\n        __maxScrollLeft: 0,\n\n        /** {Integer} Maximum allowed scroll position on y-axis */\n        __maxScrollTop: 0,\n\n        /* {Number} Scheduled left position (final position when animating) */\n        __scheduledLeft: 0,\n\n        /* {Number} Scheduled top position (final position when animating) */\n        __scheduledTop: 0,\n\n        /* {Number} Scheduled zoom level (final scale when animating) */\n        __scheduledZoom: 0,\n\n\n\n        /*\n          ---------------------------------------------------------------------------\n          INTERNAL FIELDS :: LAST POSITIONS\n          ---------------------------------------------------------------------------\n        */\n\n        /** {Number} Left position of finger at start */\n        __lastTouchLeft: null,\n\n        /** {Number} Top position of finger at start */\n        __lastTouchTop: null,\n\n        /** {Date} Timestamp of last move of finger. Used to limit tracking range for deceleration speed. */\n        __lastTouchMove: null,\n\n        /** {Array} List of positions, uses three indexes for each state: left, top, timestamp */\n        __positions: null,\n\n\n\n        /*\n          ---------------------------------------------------------------------------\n          INTERNAL FIELDS :: DECELERATION SUPPORT\n          ---------------------------------------------------------------------------\n        */\n\n        /** {Integer} Minimum left scroll position during deceleration */\n        __minDecelerationScrollLeft: null,\n\n        /** {Integer} Minimum top scroll position during deceleration */\n        __minDecelerationScrollTop: null,\n\n        /** {Integer} Maximum left scroll position during deceleration */\n        __maxDecelerationScrollLeft: null,\n\n        /** {Integer} Maximum top scroll position during deceleration */\n        __maxDecelerationScrollTop: null,\n\n        /** {Number} Current factor to modify horizontal scroll position with on every step */\n        __decelerationVelocityX: null,\n\n        /** {Number} Current factor to modify vertical scroll position with on every step */\n        __decelerationVelocityY: null,\n\n\n\n        /*\n          ---------------------------------------------------------------------------\n          PUBLIC API\n          ---------------------------------------------------------------------------\n        */\n\n        /**\n         * Configures the dimensions of the client (outer) and content (inner) elements.\n         * Requires the available space for the outer element and the outer size of the inner element.\n         * All values which are falsy (null or zero etc.) are ignored and the old value is kept.\n         *\n         * @param clientWidth {Integer ? null} Inner width of outer element\n         * @param clientHeight {Integer ? null} Inner height of outer element\n         * @param contentWidth {Integer ? null} Outer width of inner element\n         * @param contentHeight {Integer ? null} Outer height of inner element\n         */\n        setDimensions : function (clientWidth, clientHeight, contentWidth, contentHeight) {\n            // Only update values which are defined\n            if (clientWidth !== null) {\n                this.__clientWidth = clientWidth;\n            }\n\n            if (clientHeight !== null) {\n                this.__clientHeight = clientHeight;\n            }\n\n            if (contentWidth !== null) {\n                this.__contentWidth = contentWidth;\n            }\n\n            if (contentHeight !== null) {\n                this.__contentHeight = contentHeight;\n            }\n\n            // Refresh maximums\n            this.__computeScrollMax();\n\n            // Refresh scroll position\n            this.scrollTo(this.__scrollLeft, this.__scrollTop, true);\n        },\n\n\n        /**\n         * Sets the client coordinates in relation to the document.\n         *\n         * @param left {Integer ? 0} Left position of outer element\n         * @param top {Integer ? 0} Top position of outer element\n         */\n        setPosition : function (left, top) {\n            this.__clientLeft = left || 0;\n            this.__clientTop = top || 0;\n        },\n\n\n        /**\n         * Configures the snapping (when snapping is active)\n         *\n         * @param width {Integer} Snapping width\n         * @param height {Integer} Snapping height\n         */\n        setSnapSize : function (width, height) {\n            this.__snapWidth = width;\n            this.__snapHeight = height;\n        },\n\n\n        /**\n         * Returns the scroll position and zooming values\n         *\n         * @return {Map} `left` and `top` scroll position and `zoom` level\n         */\n        getValues : function () {\n            return {\n                left: this.__scrollLeft,\n                top: this.__scrollTop,\n                right: this.__scrollLeft + this.__clientWidth/this.__zoomLevel,\n                bottom: this.__scrollTop + this.__clientHeight/this.__zoomLevel,\n                zoom: this.__zoomLevel\n            };\n        },\n\n\n        /**\n         * Get point in in content space from scroll coordinates.\n         */\n        getPoint : function (scrollLeft, scrollTop) {\n            var values = this.getValues();\n\n            return {\n                left : scrollLeft / values.zoom,\n                top : scrollTop / values.zoom\n            };\n        },\n\n\n        /**\n         * Returns the maximum scroll values\n         *\n         * @return {Map} `left` and `top` maximum scroll values\n         */\n        getScrollMax : function () {\n            return {\n                left: this.__maxScrollLeft,\n                top: this.__maxScrollTop\n            };\n        },\n\n\n        /**\n         * Zooms to the given level. Supports optional animation. Zooms\n         * the center when no coordinates are given.\n         *\n         * @param level {Number} Level to zoom to\n         * @param isAnimated {Boolean ? false} Whether to use animation\n         * @param fixedLeft {Number ? undefined} Stationary point's left coordinate (vector in client space)\n         * @param fixedTop {Number ? undefined} Stationary point's top coordinate (vector in client space)\n         * @param callback {Function ? null} A callback that gets fired when the zoom is complete.\n         */\n        zoomTo : function (level, isAnimated, fixedLeft, fixedTop, callback) {\n            if (!this.options.zooming) {\n                throw new Error(\"Zooming is not enabled!\");\n            }\n\n            // Add callback if exists\n            if(callback) {\n                this.__zoomComplete = callback;\n            }\n\n            // Stop deceleration\n            if (this.__isDecelerating) {\n                animate.stop(this.__isDecelerating);\n                this.__isDecelerating = false;\n            }\n\n            var oldLevel = this.__zoomLevel;\n\n            // Normalize fixed point to center of viewport if not defined\n            if (fixedLeft === undefined) {\n                fixedLeft = this.__clientWidth / 2;\n            }\n\n            if (fixedTop === undefined) {\n                fixedTop = this.__clientHeight / 2;\n            }\n\n            // Limit level according to configuration\n            level = Math.max(Math.min(level, this.options.maxZoom), this.options.minZoom);\n\n            // Recompute maximum values while temporary tweaking maximum scroll ranges\n            this.__computeScrollMax(level);\n\n            // Recompute left and top scroll positions based on new zoom level.\n            // Choosing the new viewport so that the origin's position remains\n            // fixed, we have central dilation about the origin.\n            // * Fixed point, $F$, remains stationary in content space and in the\n            // viewport.\n            // * Initial scroll position, $S_i$, in content space.\n            // * Final scroll position, $S_f$, in content space.\n            // * Initial scaling factor, $k_i$.\n            // * Final scaling factor, $k_f$.\n            //\n            // * $S_i \\mapsto S_f$.\n            // * $(S_i - F) k_i = (S_f - F) k_f$.\n            // * $(S_i - F) k_i/k_f = (S_f - F)$.\n            // * $S_f = F + (S_i - F) k_i/k_f$.\n            //\n            // Fixed point location, $\\vector{f} = (F - S_i) k_i$.\n            // * $F = S_i + \\vector{f}/k_i$.\n            // * $S_f = S_i + \\vector{f}/k_i + (S_i - S_i - \\vector{f}/k_i) k_i/k_f$.\n            // * $S_f = S_i + \\vector{f}/k_i - \\vector{f}/k_f$.\n            // * $S_f k_f = S_i k_f + (k_f/k_i - 1)\\vector{f}$.\n            // * $S_f k_f = (k_f/k_i)(S_i k_i) + (k_f/k_i - 1) \\vector{f}$.\n            var k = level / oldLevel;\n            var left = k*(this.__scrollLeft + fixedLeft) - fixedLeft;\n            var top = k*(this.__scrollTop + fixedTop) - fixedTop;\n\n            // Limit x-axis\n            if (left > this.__maxScrollLeft) {\n                left = this.__maxScrollLeft;\n            } else if (left < 0) {\n                left = 0;\n            }\n\n            // Limit y-axis\n            if (top > this.__maxScrollTop) {\n                top = this.__maxScrollTop;\n            } else if (top < 0) {\n                top = 0;\n            }\n\n            // Push values out\n            this.__publish(left, top, level, isAnimated);\n        },\n\n\n        /**\n         * Zooms the content by the given factor.\n         *\n         * @param factor {Number} Zoom by given factor\n         * @param isAnimated {Boolean ? false} Whether to use animation\n         * @param originLeft {Number ? 0} Zoom in at given left coordinate\n         * @param originTop {Number ? 0} Zoom in at given top coordinate\n         * @param callback {Function ? null} A callback that gets fired when the zoom is complete.\n         */\n        zoomBy : function (factor, isAnimated, originLeft, originTop, callback) {\n            this.zoomTo(this.__zoomLevel * factor, isAnimated, originLeft, originTop, callback);\n        },\n\n\n        /**\n         * Scrolls to the given position. Respect limitations and snapping automatically.\n         *\n         * @param left {Number?null} Horizontal scroll position, keeps current if value is <code>null</code>\n         * @param top {Number?null} Vertical scroll position, keeps current if value is <code>null</code>\n         * @param isAnimated {Boolean?false} Whether the scrolling should happen using an animation\n         * @param zoom {Number} [1.0] Zoom level to go to\n         */\n        scrollTo : function (left, top, isAnimated, zoom) {\n\n            // Stop deceleration\n            if (this.__isDecelerating) {\n                animate.stop(this.__isDecelerating);\n                this.__isDecelerating = false;\n            }\n\n            // Correct coordinates based on new zoom level\n            if (zoom !== undefined && zoom !== this.__zoomLevel) {\n                if (!this.options.zooming) {\n                    throw new Error(\"Zooming is not enabled!\");\n                }\n\n                left *= zoom;\n                top *= zoom;\n\n                // Recompute maximum values while temporary tweaking maximum scroll ranges\n                this.__computeScrollMax(zoom);\n            } else {\n                // Keep zoom when not defined\n                zoom = this.__zoomLevel;\n            }\n\n            if (!this.options.scrollingX) {\n                left = this.__scrollLeft;\n            } else {\n                if (this.options.paging) {\n                    left = Math.round(left / this.__clientWidth) * this.__clientWidth;\n                } else if (this.options.snapping) {\n                    left = Math.round(left / this.__snapWidth) * this.__snapWidth;\n                }\n            }\n\n            if (!this.options.scrollingY) {\n                top = this.__scrollTop;\n            } else {\n                if (this.options.paging) {\n                    top = Math.round(top / this.__clientHeight) * this.__clientHeight;\n                } else if (this.options.snapping) {\n                    top = Math.round(top / this.__snapHeight) * this.__snapHeight;\n                }\n            }\n            // Limit for allowed ranges\n            left = Math.max(Math.min(this.__maxScrollLeft, left), 0);\n            top = Math.max(Math.min(this.__maxScrollTop, top), 0);\n\n            // Don't animate when no change detected, still call publish to make sure\n            // that rendered position is really in-sync with internal data\n            if (left === this.__scrollLeft && top === this.__scrollTop) {\n                isAnimated = false;\n            }\n\n            // Publish new values\n            this.__publish(left, top, zoom, isAnimated);\n        },\n\n\n        /**\n         * Scroll by the given offset\n         *\n         * @param left {Number ? 0} Scroll x-axis by given offset\n         * @param top {Number ? 0} Scroll x-axis by given offset\n         * @param isAnimated {Boolean ? false} Whether to animate the given change\n         */\n        scrollBy : function (left, top, isAnimated) {\n            var startLeft = this.__isAnimating ? this.__scheduledLeft : this.__scrollLeft;\n            var startTop = this.__isAnimating ? this.__scheduledTop : this.__scrollTop;\n\n            this.scrollTo(startLeft + (left || 0), startTop + (top || 0), isAnimated);\n        },\n\n\n        /*\n          ---------------------------------------------------------------------------\n          EVENT CALLBACKS\n          ---------------------------------------------------------------------------\n        */\n\n        /**\n         * Mouse wheel handler for zooming support\n         */\n        doMouseZoom : function (wheelDelta, timeStamp, pageX, pageY) {\n            var change = wheelDelta > 0 ? 0.97 : 1.03;\n\n            return this.zoomTo(this.__zoomLevel * change, false, pageX - this.__clientLeft, pageY - this.__clientTop);\n        },\n\n\n        /**\n         * Touch start handler for scrolling support\n         */\n        doTouchStart : function (touches, timeStamp) {\n            // Array-like check is enough here\n            if (touches.length === undefined) {\n                throw new Error(\"Invalid touch list: \" + touches);\n            }\n\n            if (timeStamp instanceof Date) {\n                timeStamp = timeStamp.valueOf();\n            }\n            if (typeof timeStamp !== \"number\") {\n                throw new Error(\"Invalid timestamp value: \" + timeStamp);\n            }\n\n            // Reset interruptedAnimation flag\n            this.__interruptedAnimation = true;\n\n            // Stop deceleration\n            if (this.__isDecelerating) {\n                animate.stop(this.__isDecelerating);\n                this.__isDecelerating = false;\n                this.__interruptedAnimation = true;\n            }\n\n            // Stop animation\n            if (this.__isAnimating) {\n                animate.stop(this.__isAnimating);\n                this.__isAnimating = false;\n                this.__interruptedAnimation = true;\n            }\n\n            // Use center point when dealing with two fingers\n            var currentTouchLeft, currentTouchTop;\n            var isSingleTouch = touches.length === 1;\n            if (isSingleTouch) {\n                currentTouchLeft = touches[0].pageX;\n                currentTouchTop = touches[0].pageY;\n            } else {\n                currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;\n                currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;\n            }\n\n            // Store initial positions\n            this.__initialTouchLeft = currentTouchLeft;\n            this.__initialTouchTop = currentTouchTop;\n\n            // Store current zoom level\n            this.__zoomLevelStart = this.__zoomLevel;\n\n            // Store initial touch positions\n            this.__lastTouchLeft = currentTouchLeft;\n            this.__lastTouchTop = currentTouchTop;\n\n            // Store initial move time stamp\n            this.__lastTouchMove = timeStamp;\n\n            // Reset initial scale\n            this.__lastScale = 1;\n\n            // Reset locking flags\n            this.__enableScrollX = !isSingleTouch && this.options.scrollingX;\n            this.__enableScrollY = !isSingleTouch && this.options.scrollingY;\n\n            // Reset tracking flag\n            this.__isTracking = true;\n\n            // Reset deceleration complete flag\n            this.__didDecelerationComplete = false;\n\n            // Dragging starts directly with two fingers, otherwise lazy with an offset\n            this.__isDragging = !isSingleTouch;\n\n            // Some features are disabled in multi touch scenarios\n            this.__isSingleTouch = isSingleTouch;\n\n            // Clearing data structure\n            this.__positions = [];\n        },\n\n\n        /**\n         * Touch move handler for scrolling support\n         * @param {Number} [1.0] scale - ....\n         */\n        doTouchMove : function (touches, timeStamp, scale) {\n            // Array-like check is enough here\n            if (touches.length === undefined) {\n                throw new Error(\"Invalid touch list: \" + touches);\n            }\n\n            if (timeStamp instanceof Date) {\n                timeStamp = timeStamp.valueOf();\n            }\n            if (typeof timeStamp !== \"number\") {\n                throw new Error(\"Invalid timestamp value: \" + timeStamp);\n            }\n\n            // Ignore event when tracking is not enabled (event might be outside of element)\n            if (!this.__isTracking) {\n                return;\n            }\n\n            var currentTouchLeft, currentTouchTop;\n\n            // Compute move based around of center of fingers\n            if (touches.length === 2) {\n                currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;\n                currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;\n            } else {\n                currentTouchLeft = touches[0].pageX;\n                currentTouchTop = touches[0].pageY;\n            }\n\n            var positions = this.__positions;\n\n            // Are we already is dragging mode?\n            if (this.__isDragging) {\n                // Compute move distance\n                var moveX = currentTouchLeft - this.__lastTouchLeft;\n                var moveY = currentTouchTop - this.__lastTouchTop;\n\n                // Read previous scroll position and zooming\n                var scrollLeft = this.__scrollLeft;\n                var scrollTop = this.__scrollTop;\n                var level = this.__zoomLevel;\n\n                // Work with scaling\n                if (scale !== undefined && this.options.zooming) {\n                    var oldLevel = level;\n\n                    // Recompute level based on previous scale and new scale\n                    level = level / this.__lastScale * scale;\n\n                    // Limit level according to configuration\n                    level = Math.max(Math.min(level, this.options.maxZoom), this.options.minZoom);\n\n                    // Only do further compution when change happened\n                    if (oldLevel !== level) {\n                        // Compute relative event position to container\n                        var currentTouchLeftRel = currentTouchLeft - this.__clientLeft;\n                        var currentTouchTopRel = currentTouchTop - this.__clientTop;\n\n                        // Recompute left and top coordinates based on new zoom level\n                        scrollLeft = ((currentTouchLeftRel + scrollLeft) * level / oldLevel) - currentTouchLeftRel;\n                        scrollTop = ((currentTouchTopRel + scrollTop) * level / oldLevel) - currentTouchTopRel;\n\n                        // Recompute max scroll values\n                        this.__computeScrollMax(level);\n                    }\n                }\n\n                if (this.__enableScrollX) {\n                    scrollLeft -= moveX * this.options.speedMultiplier;\n                    var maxScrollLeft = this.__maxScrollLeft;\n\n                    if (scrollLeft > maxScrollLeft || scrollLeft < 0) {\n                        // Slow down on the edges\n                        if (this.options.bouncing) {\n                            scrollLeft += (moveX / 2  * this.options.speedMultiplier);\n                        } else if (scrollLeft > maxScrollLeft) {\n                            scrollLeft = maxScrollLeft;\n                        } else {\n                            scrollLeft = 0;\n                        }\n                    }\n                }\n\n                // Compute new vertical scroll position\n                if (this.__enableScrollY) {\n                    scrollTop -= moveY * this.options.speedMultiplier;\n                    var maxScrollTop = this.__maxScrollTop;\n\n                    if (scrollTop > maxScrollTop || scrollTop < 0) {\n                        // Slow down on the edges\n                        if (this.options.bouncing) {\n                            scrollTop += (moveY / 2 * this.options.speedMultiplier);\n                        } else if (scrollTop > maxScrollTop) {\n                            scrollTop = maxScrollTop;\n                        } else {\n                            scrollTop = 0;\n                        }\n                    }\n                }\n\n                // Keep list from growing infinitely (holding min 10, max 20 measure points)\n                if (positions.length > 60) {\n                    positions.splice(0, 30);\n                }\n\n                // Track scroll movement for decleration\n                positions.push(scrollLeft, scrollTop, timeStamp);\n\n                // Sync scroll position\n                this.__publish(scrollLeft, scrollTop, level);\n\n                // Otherwise figure out whether we are switching into dragging mode now.\n            } else {\n                var minimumTrackingForScroll = this.options.locking ? 3 : 0;\n                var minimumTrackingForDrag = 5;\n\n                var distanceX = Math.abs(currentTouchLeft - this.__initialTouchLeft);\n                var distanceY = Math.abs(currentTouchTop - this.__initialTouchTop);\n\n                this.__enableScrollX = this.options.scrollingX && distanceX >= minimumTrackingForScroll;\n                this.__enableScrollY = this.options.scrollingY && distanceY >= minimumTrackingForScroll;\n\n                positions.push(this.__scrollLeft, this.__scrollTop, timeStamp);\n\n                this.__isDragging = (this.__enableScrollX || this.__enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);\n                if (this.__isDragging) {\n                    this.__interruptedAnimation = false;\n                }\n            }\n\n            // Update last touch positions and time stamp for next event\n            this.__lastTouchLeft = currentTouchLeft;\n            this.__lastTouchTop = currentTouchTop;\n            this.__lastTouchMove = timeStamp;\n            this.__lastScale = scale;\n        },\n\n\n        /**\n         * Touch end handler for scrolling support\n         */\n        doTouchEnd : function (timeStamp) {\n            if (timeStamp instanceof Date) {\n                timeStamp = timeStamp.valueOf();\n            }\n            if (typeof timeStamp !== \"number\") {\n                throw new Error(\"Invalid timestamp value: \" + timeStamp);\n            }\n\n            // Ignore event when tracking is not enabled (no touchstart event on element)\n            // This is required as this listener ('touchmove') sits on the document and not on the element itself.\n            if (!this.__isTracking) {\n                return;\n            }\n\n            // Not touching anymore (when two finger hit the screen there are two touch end events)\n            this.__isTracking = false;\n\n            // Be sure to reset the dragging flag now. Here we also detect whether\n            // the finger has moved fast enough to switch into a deceleration animation.\n            if (this.__isDragging) {\n                // Reset dragging flag\n                this.__isDragging = false;\n\n                // Start deceleration\n                // Verify that the last move detected was in some relevant time frame\n                if (this.__isSingleTouch && this.options.animating && (timeStamp - this.__lastTouchMove) <= 100) {\n                    // Then figure out what the scroll position was about 100ms ago\n                    var positions = this.__positions;\n                    var endPos = positions.length - 1;\n                    var startPos = endPos;\n\n                    // Move pointer to position measured 100ms ago\n                    for (var i = endPos; i > 0 && positions[i] > (this.__lastTouchMove - 100); i -= 3) {\n                        startPos = i;\n                    }\n\n                    // If start and stop position is identical in a 100ms timeframe,\n                    // we cannot compute any useful deceleration.\n                    if (startPos !== endPos) {\n                        // Compute relative movement between these two points\n                        var timeOffset = positions[endPos] - positions[startPos];\n                        var movedLeft = this.__scrollLeft - positions[startPos - 2];\n                        var movedTop = this.__scrollTop - positions[startPos - 1];\n\n                        // Based on 50ms compute the movement to apply for each render step\n                        this.__decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);\n                        this.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60);\n\n                        // How much velocity is required to start the deceleration\n                        var minVelocityToStartDeceleration = this.options.paging || this.options.snapping ? 4 : 1;\n\n                        // Verify that we have enough velocity to start deceleration\n                        if (Math.abs(this.__decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(this.__decelerationVelocityY) > minVelocityToStartDeceleration) {\n                            this.__startDeceleration(timeStamp);\n                        }\n                    } else {\n                        this.options.scrollingComplete();\n                    }\n                } else if ((timeStamp - this.__lastTouchMove) > 100) {\n                    this.options.scrollingComplete();\n                }\n            }\n\n            // If this was a slower move it is per default non decelerated, but this\n            // still means that we want snap back to the bounds which is done here.\n            // This is placed outside the condition above to improve edge case stability\n            // e.g. touchend fired without enabled dragging. This should normally do not\n            // have modified the scroll positions or even showed the scrollbars though.\n            if (!this.__isDecelerating) {\n                if (this.__interruptedAnimation || this.__isDragging) {\n                    this.options.scrollingComplete();\n                }\n                this.scrollTo(this.__scrollLeft, this.__scrollTop, true, this.__zoomLevel);\n            }\n\n            // Fully cleanup list\n            this.__positions.length = 0;\n        },\n\n\n\n        /*\n          ---------------------------------------------------------------------------\n          PRIVATE API\n          ---------------------------------------------------------------------------\n        */\n\n        /**\n         * Applies the scroll position to the content element\n         *\n         * @param left {Number} Left scroll position\n         * @param top {Number} Top scroll position\n         * @param isAnimated {Boolean?false} Whether animation should be used to move to the new coordinates\n         */\n        __publish : function (left, top, zoom, isAnimated) {\n            // Remember whether we had an animation, then we try to continue\n            // based on the current \"drive\" of the animation.\n            var wasAnimating = this.__isAnimating;\n            if (wasAnimating) {\n                animate.stop(wasAnimating);\n                this.__isAnimating = false;\n            }\n\n            if (isAnimated && this.options.animating) {\n                // Keep scheduled positions for scrollBy/zoomBy functionality.\n                this.__scheduledLeft = left;\n                this.__scheduledTop = top;\n                this.__scheduledZoom = zoom;\n\n                var oldLeft = this.__scrollLeft;\n                var oldTop = this.__scrollTop;\n                var oldZoom = this.__zoomLevel;\n\n                var diffLeft = left - oldLeft;\n                var diffTop = top - oldTop;\n                var diffZoom = zoom - oldZoom;\n\n                var step = function (percent, now, render) {\n                    if (render) {\n                        this.__scrollLeft = oldLeft + (diffLeft * percent);\n                        this.__scrollTop = oldTop + (diffTop * percent);\n                        this.__zoomLevel = oldZoom + (diffZoom * percent);\n\n                        // Push values out\n                        if (this.__callback) {\n                            this.__callback(this.__scrollLeft, this.__scrollTop, this.__zoomLevel);\n                        }\n                    }\n                }.bind(this);\n\n                var verify = function (id) {\n                    return this.__isAnimating === id;\n                }.bind(this);\n\n                var completed = function (renderedFramesPerSecond, animationId, wasFinished) {\n                    if (animationId === this.__isAnimating) {\n                        this.__isAnimating = false;\n                    }\n                    if (this.__didDecelerationComplete || wasFinished) {\n                        this.options.scrollingComplete();\n                    }\n\n                    if (this.options.zooming) {\n                        this.__computeScrollMax();\n                        if (this.__zoomComplete) {\n                            this.__zoomComplete();\n                            this.__zoomComplete = null;\n                        }\n                    }\n                }.bind(this);\n\n                // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out\n                this.__isAnimating = animate.start(step, verify, completed, this.options.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);\n\n            } else {\n                this.__scheduledLeft = this.__scrollLeft = left;\n                this.__scheduledTop = this.__scrollTop = top;\n                this.__scheduledZoom = this.__zoomLevel = zoom;\n\n                // Push values out\n                if (this.__callback) {\n                    this.__callback(left, top, zoom);\n                }\n\n                // Fix max scroll ranges\n                if (this.options.zooming) {\n                    this.__computeScrollMax();\n                    if (this.__zoomComplete) {\n                        this.__zoomComplete();\n                        this.__zoomComplete = null;\n                    }\n                }\n            }\n        },\n\n\n        /**\n         * Recomputes scroll minimum values based on client dimensions and content dimensions.\n         */\n        __computeScrollMax : function (zoomLevel) {\n            if (zoomLevel === undefined) {\n                zoomLevel = this.__zoomLevel;\n            }\n\n            this.__maxScrollLeft = Math.max(this.__contentWidth*zoomLevel - this.__clientWidth, 0);\n            this.__maxScrollTop = Math.max(this.__contentHeight*zoomLevel - this.__clientHeight, 0);\n        },\n\n\n\n        /*\n          ---------------------------------------------------------------------------\n          ANIMATION (DECELERATION) SUPPORT\n          ---------------------------------------------------------------------------\n        */\n\n        /**\n         * Called when a touch sequence end and the speed of the finger was high enough\n         * to switch into deceleration mode.\n         */\n        __startDeceleration : function (timeStamp) {\n            if (this.options.paging) {\n                var scrollLeft = Math.max(Math.min(this.__scrollLeft, this.__maxScrollLeft), 0);\n                var scrollTop = Math.max(Math.min(this.__scrollTop, this.__maxScrollTop), 0);\n                var clientWidth = this.__clientWidth;\n                var clientHeight = this.__clientHeight;\n\n                // We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.\n                // Each page should have exactly the size of the client area.\n                this.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;\n                this.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;\n                this.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;\n                this.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;\n            } else {\n                this.__minDecelerationScrollLeft = 0;\n                this.__minDecelerationScrollTop = 0;\n                this.__maxDecelerationScrollLeft = this.__maxScrollLeft;\n                this.__maxDecelerationScrollTop = this.__maxScrollTop;\n            }\n\n            // Wrap class method\n            var step = function (percent, now, render) {\n                this.__stepThroughDeceleration(render);\n            }.bind(this);\n\n            // How much velocity is required to keep the deceleration running\n            var minVelocityToKeepDecelerating = this.options.snapping ? 4 : 0.1;\n\n            // Detect whether it's still worth to continue animating steps\n            // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.\n            var verify = function () {\n                var shouldContinue = Math.abs(this.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(this.__decelerationVelocityY) >= minVelocityToKeepDecelerating;\n                if (!shouldContinue) {\n                    this.__didDecelerationComplete = true;\n                }\n                return shouldContinue;\n            }.bind(this);\n\n            var completed = function (renderedFramesPerSecond, animationId, wasFinished) {\n                this.__isDecelerating = false;\n                if (this.__didDecelerationComplete) {\n                    this.options.scrollingComplete();\n                }\n\n                // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions\n                this.scrollTo(this.__scrollLeft, this.__scrollTop, this.options.snapping);\n            }.bind(this);\n\n            // Start animation and switch on flag\n            this.__isDecelerating = animate.start(step, verify, completed);\n        },\n\n\n        /**\n         * Called on every step of the animation\n         *\n         * @param inMemory {Boolean?false} Whether to not render the current step, but keep it in memory only. Used internally only!\n         */\n        __stepThroughDeceleration : function (render) {\n\n            //\n            // COMPUTE NEXT SCROLL POSITION\n            //\n\n            // Add deceleration to scroll position\n            var scrollLeft = this.__scrollLeft + this.__decelerationVelocityX;\n            var scrollTop = this.__scrollTop + this.__decelerationVelocityY;\n\n\n            //\n            // HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE\n            //\n\n            if (!this.options.bouncing) {\n                var scrollLeftFixed = Math.max(Math.min(this.__maxDecelerationScrollLeft, scrollLeft), this.__minDecelerationScrollLeft);\n                if (scrollLeftFixed !== scrollLeft) {\n                    scrollLeft = scrollLeftFixed;\n                    this.__decelerationVelocityX = 0;\n                }\n\n                var scrollTopFixed = Math.max(Math.min(this.__maxDecelerationScrollTop, scrollTop), this.__minDecelerationScrollTop);\n                if (scrollTopFixed !== scrollTop) {\n                    scrollTop = scrollTopFixed;\n                    this.__decelerationVelocityY = 0;\n                }\n            }\n\n\n            //\n            // UPDATE SCROLL POSITION\n            //\n\n            if (render) {\n                this.__publish(scrollLeft, scrollTop, this.__zoomLevel);\n            } else {\n                this.__scrollLeft = scrollLeft;\n                this.__scrollTop = scrollTop;\n            }\n\n\n            //\n            // SLOW DOWN\n            //\n\n            // Slow down velocity on every iteration\n            if (!this.options.paging) {\n                // This is the factor applied to every iteration of the animation\n                // to slow down the process. This should emulate natural behavior where\n                // objects slow down when the initiator of the movement is removed\n                var frictionFactor = 0.95;\n\n                this.__decelerationVelocityX *= frictionFactor;\n                this.__decelerationVelocityY *= frictionFactor;\n            }\n\n\n            //\n            // BOUNCING SUPPORT\n            //\n\n            if (this.options.bouncing) {\n                var scrollOutsideX = 0;\n                var scrollOutsideY = 0;\n\n                // This configures the amount of change applied to deceleration/acceleration when reaching boundaries\n                var penetrationDeceleration = this.options.penetrationDeceleration;\n                var penetrationAcceleration = this.options.penetrationAcceleration;\n\n                // Check limits\n                if (scrollLeft < this.__minDecelerationScrollLeft) {\n                    scrollOutsideX = this.__minDecelerationScrollLeft - scrollLeft;\n                } else if (scrollLeft > this.__maxDecelerationScrollLeft) {\n                    scrollOutsideX = this.__maxDecelerationScrollLeft - scrollLeft;\n                }\n\n                if (scrollTop < this.__minDecelerationScrollTop) {\n                    scrollOutsideY = this.__minDecelerationScrollTop - scrollTop;\n                } else if (scrollTop > this.__maxDecelerationScrollTop) {\n                    scrollOutsideY = this.__maxDecelerationScrollTop - scrollTop;\n                }\n\n                // Slow down until slow enough, then flip back to snap position\n                if (scrollOutsideX !== 0) {\n                    if (scrollOutsideX * this.__decelerationVelocityX <= 0) {\n                        this.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;\n                    } else {\n                        this.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;\n                    }\n                }\n\n                if (scrollOutsideY !== 0) {\n                    if (scrollOutsideY * this.__decelerationVelocityY <= 0) {\n                        this.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;\n                    } else {\n                        this.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration;\n                    }\n                }\n            }\n        }\n    };\n\n    return Scroller;\n}));\n\n\n//# sourceURL=webpack:///./node_modules/scroller/lib/Scroller.js?");

/***/ }),

/***/ "./node_modules/scroller/lib/animate.js":
/*!**********************************************!*\
  !*** ./node_modules/scroller/lib/animate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*\n * Scroller\n * http://github.com/zynga/scroller\n *\n * Copyright 2011, Zynga Inc.\n * Licensed under the MIT License.\n * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt\n *\n * Based on the work of: Unify Project (unify-project.org)\n * http://unify-project.org\n * Copyright 2011, Deutsche Telekom AG\n * License: MIT + Apache (V2)\n */\n\n/**\n * Generic animation class with support for dropped frames both optional easing and duration.\n *\n * Optional duration is useful when the lifetime is defined by another condition than time\n * e.g. speed of an animating object, etc.\n *\n * Dropped frame logic allows to keep using the same updater logic independent from the actual\n * rendering. This eases a lot of cases where it might be pretty complex to break down a state\n * based on the pure time difference.\n */\n(function (root, factory) {\n    if (true) {\n        // AMD. Register as an anonymous module.\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(this, function (exports) {\n    var global = typeof window === 'undefined' ? this : window\n    var time = Date.now || function () {\n        return +new Date();\n    };\n    var desiredFrames = 60;\n    var millisecondsPerSecond = 1000;\n    var running = {};\n    var counter = 1;\n\n    /**\n     * A requestAnimationFrame wrapper / polyfill.\n     *\n     * @param callback {Function} The callback to be invoked before the next repaint.\n     * @param root {HTMLElement} The root element for the repaint\n     */\n    exports.requestAnimationFrame = (function () {\n        // Check for request animation Frame support\n        var requestFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame;\n        var isNative = !!requestFrame;\n\n        if (requestFrame && !/requestAnimationFrame\\(\\)\\s*\\{\\s*\\[native code\\]\\s*\\}/i.test(requestFrame.toString())) {\n            isNative = false;\n        }\n\n        if (isNative) {\n            return function (callback, root) {\n                requestFrame(callback, root);\n            };\n        }\n\n        var TARGET_FPS = 60;\n        var requests = {};\n        var requestCount = 0;\n        var rafHandle = 1;\n        var intervalHandle = null;\n        var lastActive = +new Date();\n\n        return function (callback, root) {\n            var callbackHandle = rafHandle++;\n\n            // Store callback\n            requests[callbackHandle] = callback;\n            requestCount++;\n\n            // Create timeout at first request\n            if (intervalHandle === null) {\n\n                intervalHandle = setInterval(function () {\n\n                    var time = +new Date();\n                    var currentRequests = requests;\n\n                    // Reset data structure before executing callbacks\n                    requests = {};\n                    requestCount = 0;\n\n                    for(var key in currentRequests) {\n                        if (currentRequests.hasOwnProperty(key)) {\n                            currentRequests[key](time);\n                            lastActive = time;\n                        }\n                    }\n\n                    // Disable the timeout when nothing happens for a certain\n                    // period of time\n                    if (time - lastActive > 2500) {\n                        clearInterval(intervalHandle);\n                        intervalHandle = null;\n                    }\n\n                }, 1000 / TARGET_FPS);\n            }\n\n            return callbackHandle;\n        };\n\n    })();\n\n    /**\n     * Stops the given animation.\n     *\n     * @param id {Integer} Unique animation ID\n     * @return {Boolean} Whether the animation was stopped (aka, was running before)\n     */\n    exports.stop = function (id) {\n        var cleared = (running[id] !== null);\n        if (cleared) {\n            running[id] = null;\n        }\n\n        return cleared;\n    };\n\n\n    /**\n     * Whether the given animation is still running.\n     *\n     * @param id {Integer} Unique animation ID\n     * @return {Boolean} Whether the animation is still running\n     */\n    exports.isRunning = function (id) {\n        return running[id] !== null;\n    };\n\n\n    /**\n     * Start the animation.\n     *\n     * @param stepCallback {Function} Pointer to function which is executed on every step.\n     *   Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`\n     * @param verifyCallback {Function} Executed before every animation step.\n     *   Signature of the method should be `function() { return continueWithAnimation; }`\n     * @param completedCallback {Function}\n     *   Signature of the method should be `function(droppedFrames, finishedAnimation, optional wasFinished) {}`\n     * @param duration {Integer} Milliseconds to run the animation\n     * @param easingMethod {Function} Pointer to easing function\n     *   Signature of the method should be `function(percent) { return modifiedValue; }`\n     * @param root {Element} Render root. Used for internal usage of requestAnimationFrame.\n     * @return {Integer} Identifier of animation. Can be used to stop it any time.\n     */\n    exports.start = function (stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {\n        var start = time();\n        var lastFrame = start;\n        var percent = 0;\n        var dropCounter = 0;\n        var id = counter++;\n\n        // Compacting running db automatically every few new animations\n        if (id % 20 === 0) {\n            var newRunning = {};\n            for (var usedId in running) {\n                newRunning[usedId] = true;\n            }\n            running = newRunning;\n        }\n\n        // This is the internal step method which is called every few milliseconds\n        var step = function (virtual) {\n\n            // Normalize virtual value\n            var render = virtual !== true;\n\n            // Get current time\n            var now = time();\n\n            // Verification is executed before next animation step\n            if (!running[id] || (verifyCallback && !verifyCallback(id))) {\n\n                running[id] = null;\n                completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, false);\n                return;\n\n            }\n\n            // For the current rendering to apply let's update omitted steps in memory.\n            // This is important to bring internal state variables up-to-date with progress in time.\n            if (render) {\n\n                var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;\n                for (var j = 0; j < Math.min(droppedFrames, 4); j++) {\n                    step(true);\n                    dropCounter++;\n                }\n\n            }\n\n            // Compute percent value\n            if (duration) {\n                percent = (now - start) / duration;\n                if (percent > 1) {\n                    percent = 1;\n                }\n            }\n\n            // Execute step callback, then...\n            var value = easingMethod ? easingMethod(percent) : percent;\n            if ((stepCallback(value, now, render) === false || percent === 1) && render) {\n                running[id] = null;\n                completedCallback(desiredFrames - (dropCounter / ((now - start) / millisecondsPerSecond)), id, percent === 1 || duration === undefined);\n            } else if (render) {\n                lastFrame = now;\n                exports.requestAnimationFrame(step, root);\n            }\n        };\n\n        // Mark as running\n        running[id] = true;\n\n        // Init first step\n        exports.requestAnimationFrame(step, root);\n\n        // Return unique animation ID\n        return id;\n    };\n}));\n\n\n//# sourceURL=webpack:///./node_modules/scroller/lib/animate.js?");

/***/ }),

/***/ "./src/core/event.js":
/*!***************************!*\
  !*** ./src/core/event.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Event = undefined;\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/core/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Event = exports.Event = function () {\n  function Event(ctx) {\n    (0, _classCallCheck3.default)(this, Event);\n\n    this.ctx = ctx || null;\n    this.stack = [];\n    this.eventHandler = this.eventHandler || this.emit.bind(this);\n  }\n\n  (0, _createClass3.default)(Event, [{\n    key: 'init',\n    value: function init(canvas) {\n      if (_utils.constants.IN_BROWSER) {\n        canvas.removeEventListener('click', this.eventHandler);\n        canvas.removeEventListener('mousedown', this.eventHandler);\n        canvas.removeEventListener('mouseup', this.eventHandler);\n        canvas.addEventListener('click', this.eventHandler);\n        canvas.addEventListener('mousedown', this.eventHandler);\n        canvas.addEventListener('mouseup', this.eventHandler);\n      }\n    }\n  }, {\n    key: 'addEvent',\n    value: function addEvent(shape, fns) {\n      this.stack.push({\n        shape: shape,\n        handler: fns\n      });\n    }\n  }, {\n    key: 'emit',\n    value: function emit(point) {\n      this.stack.forEach(function (item) {\n        if (item.handler[point.type] && item.shape.isInPath(point)) {\n          item.handler[point.type](point, item);\n        }\n      });\n    }\n  }]);\n  return Event;\n}(); /**\n      * @author muwoo\n      * Date: 2018/7/11\n      */\n\n//# sourceURL=webpack:///./src/core/event.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Render = undefined;\n\nvar _defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ \"./node_modules/babel-runtime/core-js/object/define-property.js\");\n\nvar _defineProperty2 = _interopRequireDefault(_defineProperty);\n\nvar _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ \"./node_modules/babel-runtime/helpers/extends.js\");\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ \"./node_modules/babel-runtime/core-js/object/keys.js\");\n\nvar _keys2 = _interopRequireDefault(_keys);\n\nvar _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _event = __webpack_require__(/*! ./event */ \"./src/core/event.js\");\n\nvar _shape = __webpack_require__(/*! ./shape */ \"./src/core/shape/index.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/core/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Render = exports.Render = function (_Canvas) {\n  (0, _inherits3.default)(Render, _Canvas);\n\n  /**\n   * constructor\n   * @param renderInstance: mainCanvas instance\n   * @param vnode: virtual dom\n   * @param width: render width\n   * @param height: render height\n   */\n  function Render(renderInstance, vnode, width, height) {\n    (0, _classCallCheck3.default)(this, Render);\n\n    /**\n     * render canvas container\n     * @type {null}\n     */\n    var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, width, height));\n\n    _this.renderInstance = renderInstance;\n    _this.stack = [vnode];\n    _this.event = new _event.Event(_this._ctx);\n    _this.event.init(renderInstance._canvas);\n    _this.scrollContainer = null;\n    _this.isRendering = false;\n    _utils.canvasItemPool.clear();\n    _this.id = 0;\n\n    /**\n     * in weixin\n     * Instead of using off-screen canvas, draw directly on canvas context\n     *\n     */\n    !_utils.constants.IN_BROWSER && (_this._ctx = renderInstance._ctx);\n    return _this;\n  }\n\n  (0, _createClass3.default)(Render, [{\n    key: 'clearCanvas',\n    value: function clearCanvas() {\n      this._ctx.clearRect(0, 0, this.width, this.height);\n    }\n  }, {\n    key: 'vnode2canvas',\n    value: function vnode2canvas() {\n      this.traverse(this.stack);\n      !_utils.constants.IN_BROWSER && this._ctx.draw(true);\n      return this._canvas;\n    }\n  }, {\n    key: 'rePaint',\n    value: function rePaint(top) {\n      var _this2 = this;\n\n      if (this.isRendering) {\n        return;\n      }\n      this.isRendering = true;\n      // adapter Mini Program\n      doAnimationFrame(function () {\n        _this2.clearCanvas();\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = (0, _getIterator3.default)(_utils.canvasItemPool), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var cacheItem = _step.value;\n\n            cacheItem.draw(_this2._ctx, top, _this2);\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n              _iterator.return();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n\n        _utils.constants.IN_BROWSER ? _this2.renderInstance.add(_this2._canvas) : _this2._ctx.draw();\n        _this2.isRendering = false;\n      });\n    }\n\n    /**\n     * if style import with css file\n     * @param vnode\n     * @returns {{}}\n     */\n\n  }, {\n    key: 'getImportStyle',\n    value: function getImportStyle(vnode) {\n      var style = {};\n      var vStyle = window.vStyle || {};\n      (0, _keys2.default)(vStyle).forEach(function (key) {\n        if (vnode.data && vnode.data.class) {\n          if ('.' + vnode.data.class === key) {\n            style = vStyle[key];\n          }\n        }\n        if (vnode.tag) {\n          if (vnode.tag === key) {\n            style = vStyle[key];\n          }\n        }\n      });\n      return style;\n    }\n\n    /**\n     * Proxy\n     * @param target: virtual dom\n     * @param key: render type\n     * @returns {*}\n     */\n\n  }, {\n    key: 'renderProxy',\n    value: function renderProxy(target, key) {\n      var _this3 = this;\n\n      target.data = target.data || {};\n      var importStyle = _utils.constants.IN_BROWSER ? this.getImportStyle(target) : {};\n      var drawStyle = (0, _extends3.default)({}, importStyle, target.data.style) || (0, _extends3.default)({}, importStyle);\n      var canvasItem = null;\n      return {\n        scrollView: function scrollView() {\n          canvasItem = new _shape.ScrollView(drawStyle);\n          canvasItem.draw(_this3);\n          /**\n           * export scrollInstance for setting touch event automatic\n           */\n          _this3.scrollContainer = canvasItem;\n          return canvasItem;\n        },\n        scrollItem: function scrollItem(ctx) {\n          canvasItem = new _shape.ScrollItem(drawStyle, target, _this3);\n          canvasItem.draw(ctx, 0);\n          return canvasItem;\n        },\n        view: function view(ctx) {\n          canvasItem = new _shape.View(drawStyle);\n          canvasItem.draw(ctx, 0);\n          return canvasItem;\n        },\n        text: function text(ctx) {\n          canvasItem = new _shape.Text(drawStyle, target.children[0].text);\n          canvasItem.draw(ctx, 0);\n          return canvasItem;\n        },\n        image: function image(ctx) {\n          var src = void 0;\n          (src = target.data.props) && (src = src.src || '');\n          canvasItem = new _shape.Img(drawStyle, src);\n          canvasItem.draw(ctx, 0, _this3);\n          return canvasItem;\n        }\n      }[key];\n    }\n\n    /**\n     * traverse dom by BFS\n     * @param stack\n     * @param ctx\n     */\n\n  }, {\n    key: 'traverse',\n    value: function traverse(stack, ctx) {\n      while (stack.length) {\n        var vnode = stack.shift();\n        this.renderItem(vnode, ctx || this._ctx, !ctx);\n        /**\n         * check need traverse or not\n         */\n        if (!vnode.children || vnode.tag === 'text' || vnode.tag === 'scrollItem') {\n          continue;\n        }\n\n        vnode.children.forEach(function (node) {\n          stack.push(node);\n        });\n      }\n    }\n\n    /**\n     * render canvas item\n     * @param item: canvas item\n     * @param ctx: canvas context\n     * @param collect: need collect to canvasItemPool\n     */\n\n  }, {\n    key: 'renderItem',\n    value: function renderItem(item, ctx, collect) {\n      var canvasItem = new ProxyPolyfill(item, { get: this.renderProxy.bind(this) })[item.tag](ctx);\n      this.event.addEvent(canvasItem, item.data.on || {});\n      if (item.tag !== 'scrollView' && collect) {\n        this.id++;\n        _utils.canvasItemPool.add(this.id, canvasItem);\n      }\n    }\n  }]);\n  return Render;\n}(_utils.Canvas); /**\n                   * @author muwoo\n                   * Date: 2018/7/2\n                   */\n\n\nvar ProxyPolyfill = function ProxyPolyfill(target, handler) {\n  var proxy = {};\n  (0, _defineProperty2.default)(proxy, target.tag, {\n    get: function get() {\n      return handler.get(target, target.tag);\n    }\n  });\n  return proxy;\n};\n\nvar lastFrameTime = 0;\nvar doAnimationFrame = function doAnimationFrame(callback) {\n  if (_utils.constants.IN_BROWSER) {\n    return requestAnimationFrame(callback);\n  }\n  var currTime = new Date().getTime();\n  var timeToCall = Math.max(0, 16 - (currTime - lastFrameTime));\n  var id = setTimeout(function () {\n    callback(currTime + timeToCall);\n  }, timeToCall);\n  lastFrameTime = currTime + timeToCall;\n  return id;\n};\n\n//# sourceURL=webpack:///./src/core/index.js?");

/***/ }),

/***/ "./src/core/renderAdapter/index.js":
/*!*****************************************!*\
  !*** ./src/core/renderAdapter/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/core/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * adapter for browser of weixin Mini Program\n */\nvar RenderAdapter = function () {\n  function RenderAdapter() {\n    (0, _classCallCheck3.default)(this, RenderAdapter);\n\n    this.platform = _utils.constants.IN_BROWSER ? 'browser' : 'wx';\n  }\n\n  (0, _createClass3.default)(RenderAdapter, [{\n    key: 'renderText',\n    value: function renderText(instance, ctx, scrollTop) {\n      var renderFn = {\n        browser: function browser() {\n          ctx.fillStyle = instance.fillStyle;\n          ctx.textBaseline = instance.textBaseline;\n          ctx.font = instance.font;\n          ctx.textAlign = instance.textAlign;\n          var distText = instance.filterText(ctx, instance.text);\n          instance.width = instance.width || ctx.measureText(distText).width;\n          var drawY = instance.startY - scrollTop;\n          var drawX = instance.startX;\n          if (instance.drawStyle.textAlign === 'right') {\n            drawX += instance.width;\n          }\n          if (instance.drawStyle.textAlign === 'center') {\n            drawX += instance.width / 2;\n          }\n          ctx.fillText(distText, drawX, drawY);\n        },\n        wx: function wx() {\n          ctx.setFillStyle(instance.fillStyle);\n          ctx.setTextBaseline(instance.textBaseline);\n          ctx.font = instance.font;\n          var distText = instance.filterText(ctx, instance.text);\n          instance.width = instance.width || ctx.measureText(distText).width;\n          var drawY = instance.startY - scrollTop;\n          var drawX = instance.startX;\n          if (instance.drawStyle.textAlign === 'right') {\n            drawX += instance.width;\n          }\n          if (instance.drawStyle.textAlign === 'center') {\n            drawX += instance.width / 2;\n          }\n          ctx.fillText(distText, drawX, drawY);\n        }\n      };\n      renderFn[this.platform]();\n    }\n  }, {\n    key: 'renderImage',\n    value: function renderImage(instance, ctx, scrollTop, mainInstance) {\n      var renderFn = {\n        browser: function browser() {\n          // check cache\n          if (instance.render || (instance.img = _utils.imgCachePool.get(this.src))) {\n            return instance.drawImg(ctx, scrollTop);\n          }\n\n          // load Img\n          instance.img = new Image();\n          instance.img.onload = function () {\n            if (instance.isVisible(_utils.constants.scrollerTop)) {\n              return;\n            }\n            instance.render = true;\n            /**\n             * checkout img if has be loaded\n             */\n            if (!!_utils.imgCachePool.get(instance.src)) {\n              return mainInstance.rePaint(_utils.constants.scrollerTop);\n            }\n            instance.drawImg(ctx, scrollTop);\n          };\n          instance.img.crossOrigin = true;\n          instance.img.src = instance.src;\n          _utils.imgCachePool.add(instance.src, instance.img);\n        },\n        wx: function (_wx) {\n          function wx() {\n            return _wx.apply(this, arguments);\n          }\n\n          wx.toString = function () {\n            return _wx.toString();\n          };\n\n          return wx;\n        }(function () {\n          wx.getImageInfo({\n            src: instance.src,\n            success: function success(res) {\n              ctx.drawImage(res.path, instance.startX, instance.startY - scrollTop, instance.width, instance.height);\n              ctx.draw(true);\n            }\n          });\n        })\n      };\n      renderFn[this.platform]();\n    }\n  }, {\n    key: 'renderView',\n    value: function renderView(instance, ctx, scrollTop) {\n      var renderFn = {\n        browser: function browser() {\n          ctx.fillStyle = instance.fillStyle;\n          ctx.strokeStyle = instance.strokeStyle;\n          ctx.lineWidth = instance.lineWidth;\n        },\n        wx: function wx() {\n          ctx.setFillStyle(instance.fillStyle);\n          ctx.setStrokeStyle(instance.strokeStyle);\n          ctx.setLineWidth(instance.lineWidth);\n        }\n      };\n      renderFn[this.platform]();\n    }\n  }]);\n  return RenderAdapter;\n}(); /**\n      * @author muwoo\n      * Date: 2018/8/7\n      */\n\n\nexports.default = new RenderAdapter();\n\n//# sourceURL=webpack:///./src/core/renderAdapter/index.js?");

/***/ }),

/***/ "./src/core/shape/image.js":
/*!*********************************!*\
  !*** ./src/core/shape/image.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Img = undefined;\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _super = __webpack_require__(/*! ./super */ \"./src/core/shape/super.js\");\n\nvar _renderAdapter = __webpack_require__(/*! ../renderAdapter */ \"./src/core/renderAdapter/index.js\");\n\nvar _renderAdapter2 = _interopRequireDefault(_renderAdapter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @author muwoo\n * Date: 2018/7/12\n */\nvar Img = exports.Img = function (_Super) {\n  (0, _inherits3.default)(Img, _Super);\n\n  function Img(drawStyle, src) {\n    (0, _classCallCheck3.default)(this, Img);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (Img.__proto__ || (0, _getPrototypeOf2.default)(Img)).call(this, drawStyle));\n\n    _this.src = src;\n    _this.img = null;\n    return _this;\n  }\n\n  (0, _createClass3.default)(Img, [{\n    key: 'drawImg',\n    value: function drawImg(ctx, scrollTop) {\n      ctx.drawImage(this.img, this.startX, this.startY - scrollTop, this.width, this.height);\n    }\n  }, {\n    key: 'draw',\n    value: function draw(ctx, scrollTop, mainInstance) {\n      // check visible\n      if (this.isVisible(scrollTop)) {\n        return;\n      }\n      this.radius && ctx.save();\n      this.radius && this.arcByRadius(ctx, scrollTop);\n      _renderAdapter2.default.renderImage(this, ctx, scrollTop, mainInstance);\n      this.radius && ctx.restore();\n    }\n  }]);\n  return Img;\n}(_super.Super);\n\n//# sourceURL=webpack:///./src/core/shape/image.js?");

/***/ }),

/***/ "./src/core/shape/index.js":
/*!*********************************!*\
  !*** ./src/core/shape/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.View = exports.ScrollView = exports.ScrollItem = exports.Text = exports.Img = undefined;\n\nvar _image = __webpack_require__(/*! ./image */ \"./src/core/shape/image.js\");\n\nvar _text = __webpack_require__(/*! ./text */ \"./src/core/shape/text.js\");\n\nvar _scrollItem = __webpack_require__(/*! ./scrollItem */ \"./src/core/shape/scrollItem.js\");\n\nvar _scrollView = __webpack_require__(/*! ./scrollView */ \"./src/core/shape/scrollView.js\");\n\nvar _view = __webpack_require__(/*! ./view */ \"./src/core/shape/view.js\");\n\nexports.Img = _image.Img;\nexports.Text = _text.Text;\nexports.ScrollItem = _scrollItem.ScrollItem;\nexports.ScrollView = _scrollView.ScrollView;\nexports.View = _view.View; /**\n                            * @author muwoo\n                            * Date: 2018/7/15\n                            */\n\n//# sourceURL=webpack:///./src/core/shape/index.js?");

/***/ }),

/***/ "./src/core/shape/scrollItem.js":
/*!**************************************!*\
  !*** ./src/core/shape/scrollItem.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ScrollItem = undefined;\n\nvar _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _super = __webpack_require__(/*! ./super */ \"./src/core/shape/super.js\");\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/core/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @author muwoo\n * Date: 2018/7/14\n * desc: cache canvas group, to improve performance\n * render one group replace render every item one by one\n * but use this have to create a canvas dom every time.\n * So it needs later optimization\n */\nvar ScrollItem = exports.ScrollItem = function (_Super) {\n  (0, _inherits3.default)(ScrollItem, _Super);\n\n  function ScrollItem(drawStyle, vnode, mainRender) {\n    (0, _classCallCheck3.default)(this, ScrollItem);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollItem.__proto__ || (0, _getPrototypeOf2.default)(ScrollItem)).call(this, drawStyle));\n\n    _this.stack = vnode.children;\n    _this.cacheCanvas = new _utils.Canvas(_this.width, _this.height);\n    _this.mainRender = mainRender;\n    _this.children = [];\n    return _this;\n  }\n\n  (0, _createClass3.default)(ScrollItem, [{\n    key: 'init',\n    value: function init() {\n      if (this.children.length) {\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = (0, _getIterator3.default)(this.children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var child = _step.value;\n\n            child.draw(this.cacheCanvas._ctx, 0);\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n              _iterator.return();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n      } else {\n        this.mainRender.traverse({\n          stack: this.stack,\n          ctx: this.cacheCanvas._ctx,\n          scrollItem: this\n        });\n      }\n    }\n  }, {\n    key: 'draw',\n    value: function draw(ctx, scrollTop) {\n      if (this.isVisible(scrollTop)) {\n        return;\n      }\n      !this.render && this.init();\n      ctx.drawImage(this.cacheCanvas._canvas, this.startX, this.startY - scrollTop, this.width, this.height);\n      this.render = true;\n    }\n  }, {\n    key: 'rePaint',\n    value: function rePaint() {\n      this.render = false;\n      // this.cacheCanvas._ctx.clearRect(0, 0, this.width, this.height)\n    }\n  }]);\n  return ScrollItem;\n}(_super.Super);\n\n//# sourceURL=webpack:///./src/core/shape/scrollItem.js?");

/***/ }),

/***/ "./src/core/shape/scrollView.js":
/*!**************************************!*\
  !*** ./src/core/shape/scrollView.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ScrollView = undefined;\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _super = __webpack_require__(/*! ./super */ \"./src/core/shape/super.js\");\n\nvar _scroller = __webpack_require__(/*! scroller */ \"./node_modules/scroller/index.js\");\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/core/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ScrollView = exports.ScrollView = function (_Super) {\n  (0, _inherits3.default)(ScrollView, _Super);\n\n  function ScrollView(drawStyle) {\n    (0, _classCallCheck3.default)(this, ScrollView);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollView.__proto__ || (0, _getPrototypeOf2.default)(ScrollView)).call(this, drawStyle));\n\n    _this.scroller = null;\n    /**\n     * Avoid duplication of creation using the same off screen canvas\n     * @type {null}\n     */\n    _this.mainInstance = null;\n    _this.startHandler = _this.startHandler || _this.handleTouchStart.bind(_this);\n    _this.moveHandler = _this.moveHandler || _this.handleTouchMove.bind(_this);\n    _this.endHandler = _this.endHandler || _this.handleTouchEnd.bind(_this);\n    return _this;\n  }\n\n  (0, _createClass3.default)(ScrollView, [{\n    key: 'draw',\n    value: function draw(mainRender) {\n      this.mainInstance = mainRender;\n      this.createScroller();\n      this.updateScrollingDimensions();\n      this.render = true;\n      /**\n       * in weixin Mini Program\n       * Manual binding events need to be manually\n       */\n      _utils.constants.IN_BROWSER && this.removeListener();\n      _utils.constants.IN_BROWSER && this.bindListener();\n    }\n  }, {\n    key: 'bindListener',\n    value: function bindListener() {\n      window.addEventListener('touchstart', this.startHandler, { passive: false });\n      window.addEventListener('touchmove', this.moveHandler, { passive: false });\n      window.addEventListener('touchend', this.endHandler, { passive: false });\n    }\n  }, {\n    key: 'removeListener',\n    value: function removeListener() {\n      window.removeEventListener('touchstart', this.startHandler);\n      window.removeEventListener('touchmove', this.moveHandler);\n      window.removeEventListener('touchend', this.endHandler);\n    }\n  }, {\n    key: 'handleTouchStart',\n    value: function handleTouchStart(e) {\n      var touches = _utils.constants.IN_BROWSER ? e.touches : [{\n        pageX: e.x,\n        pageY: e.y\n      }];\n      if (this.scroller) {\n        this.scroller.doTouchStart(touches, e.timeStamp);\n      }\n    }\n  }, {\n    key: 'handleTouchMove',\n    value: function handleTouchMove(e) {\n      if (_utils.constants.IN_BROWSER && e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {\n        return;\n      }\n      var touches = _utils.constants.IN_BROWSER ? e.touches : [{\n        pageX: e.x,\n        pageY: e.y\n      }];\n      if (this.scroller) {\n        e.preventDefault();\n        this.scroller.doTouchMove(touches, e.timeStamp, e.scale);\n      }\n    }\n  }, {\n    key: 'handleTouchEnd',\n    value: function handleTouchEnd(e) {\n      if (this.scroller) {\n        this.scroller.doTouchEnd(e.timeStamp);\n      }\n    }\n  }, {\n    key: 'createScroller',\n    value: function createScroller() {\n      var options = {\n        scrollingX: this.drawStyle.scrollingX === undefined ? false : this.drawStyle.scrollingX,\n        scrollingY: this.drawStyle.scrollingY === undefined ? true : this.drawStyle.scrollingY\n      };\n      this.scroller = new _scroller.Scroller(this.handleScroll.bind(this), options);\n    }\n  }, {\n    key: 'handleScroll',\n    value: function handleScroll(left, top) {\n      /**\n       * When rendering, it needs to scroll to the previous position.\n       */\n      _utils.constants.top = _utils.constants.scrollTop + top;\n      _utils.constants.scrollerTop = top;\n      this.mainInstance.rePaint(top);\n    }\n  }, {\n    key: 'updateScrollingDimensions',\n    value: function updateScrollingDimensions() {\n      this.scroller.setDimensions(this.width / _utils.constants.rate, this.height / _utils.constants.rate, this.width / _utils.constants.rate, this.drawStyle.scrollHeight * _utils.constants.rate);\n      this.scroller.scrollTo(0, _utils.constants.scrollTop);\n    }\n  }]);\n  return ScrollView;\n}(_super.Super);\n\n//# sourceURL=webpack:///./src/core/shape/scrollView.js?");

/***/ }),

/***/ "./src/core/shape/super.js":
/*!*********************************!*\
  !*** ./src/core/shape/super.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Super = undefined;\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/core/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar defaultStyle = {\n  left: 0,\n  top: 0,\n  right: 0,\n  bottom: 0,\n  width: 0,\n  height: 0\n}; /**\n    * @author muwoo\n    * Date: 2018/7/11\n    */\n\nvar Super = exports.Super = function () {\n  function Super(drawStyle) {\n    (0, _classCallCheck3.default)(this, Super);\n\n    this.render = false;\n    this.drawStyle = (0, _assign2.default)({}, defaultStyle, drawStyle);\n    this.startX = this.drawStyle.left * _utils.constants.rate;\n    this.startY = this.drawStyle.top * _utils.constants.rate;\n    this.width = this.drawStyle.width * _utils.constants.rate;\n    this.height = this.drawStyle.height * _utils.constants.rate;\n    this.fillStyle = this.drawStyle.fill || '#fff';\n    this.radius = this.drawStyle.radius * _utils.constants.rate || 0;\n  }\n\n  /**\n   * if in weixin Mini Program\n   * offsetX = point.target.x - point.target.offsetLeft\n   * offsetY = point.target.y - point.target.offsetTop\n   * @param point\n   * @returns {boolean}\n   */\n\n\n  (0, _createClass3.default)(Super, [{\n    key: 'isInPath',\n    value: function isInPath(point) {\n      var x = _utils.constants.IN_BROWSER ? point.offsetX : point.target.x - point.target.offsetLeft;\n      var y = _utils.constants.IN_BROWSER ? point.offsetY : point.target.y - point.target.offsetTop;\n      if (this.render && x >= this.startX && x <= this.width + this.startX && y >= this.startY && y <= this.height + this.startY) {\n        return true;\n      }\n      return false;\n    }\n  }, {\n    key: 'isVisible',\n    value: function isVisible(scrollTop) {\n      if (_utils.constants.IN_BROWSER) {\n        return this.startY - scrollTop + this.height <= 0 || this.startY - scrollTop > window.innerHeight;\n      }\n      var mobile = wx.getSystemInfoSync();\n      return this.startY - scrollTop + this.height <= 0 || this.startY - scrollTop > mobile.innerHeight;\n    }\n  }, {\n    key: 'arcByRadius',\n    value: function arcByRadius(ctx, scrollTop) {\n      var min = Math.min(this.width / 2, this.height / 2);\n      var x = this.startX;\n      var y = this.startY - scrollTop;\n      var w = this.width;\n      var h = this.height;\n      var r = this.radius > min ? min : this.radius;\n      ctx.beginPath();\n      ctx.moveTo(x + r, y);\n      ctx.arcTo(x + w, y, x + w, y + h, r);\n      ctx.arcTo(x + w, y + h, x, y + h, r);\n      ctx.arcTo(x, y + h, x, y, r);\n      ctx.arcTo(x, y, x + w, y, r);\n      ctx.closePath();\n      ctx.clip();\n    }\n  }]);\n  return Super;\n}();\n\n//# sourceURL=webpack:///./src/core/shape/super.js?");

/***/ }),

/***/ "./src/core/shape/text.js":
/*!********************************!*\
  !*** ./src/core/shape/text.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Text = undefined;\n\nvar _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ \"./node_modules/babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _super = __webpack_require__(/*! ./super */ \"./src/core/shape/super.js\");\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/core/utils/index.js\");\n\nvar _renderAdapter = __webpack_require__(/*! ../renderAdapter */ \"./src/core/renderAdapter/index.js\");\n\nvar _renderAdapter2 = _interopRequireDefault(_renderAdapter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Text = exports.Text = function (_Super) {\n  (0, _inherits3.default)(Text, _Super);\n\n  function Text(drawStyle, text) {\n    (0, _classCallCheck3.default)(this, Text);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).call(this, drawStyle));\n\n    _this.text = text;\n    _this.fontSize = parseInt((_this.drawStyle['font-size'] || _this.drawStyle['fontSize'] || 12) * _utils.constants.rate);\n    _this.height = _this.fontSize;\n    _this.textBaseline = 'top';\n    _this.font = _this.fontSize + 'px ' + _utils.constants.DEFAULT_FONT_FAMILY;\n    _this.textAlign = _this.drawStyle.textAlign || 'left';\n    return _this;\n  }\n\n  (0, _createClass3.default)(Text, [{\n    key: 'draw',\n    value: function draw(ctx, scrollTop) {\n      if (this.isVisible(scrollTop)) {\n        return;\n      }\n      _renderAdapter2.default.renderText(this, ctx, scrollTop);\n      this.render = true;\n    }\n\n    /**\n     * clip text\n     * @param ctx\n     * @param text\n     * @returns {*}\n     */\n\n  }, {\n    key: 'filterText',\n    value: function filterText(ctx, text) {\n      if (this.drawStyle.ellipse && this.drawStyle.width) {\n        var filterText = '';\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = (0, _getIterator3.default)(text.split('')), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var char = _step.value;\n\n            if (ctx.measureText(filterText + '...').width / _utils.constants.rate >= this.drawStyle.width) {\n              filterText += '...';\n              break;\n            }\n            filterText += char;\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n              _iterator.return();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n\n        return filterText;\n      }\n      return text;\n    }\n  }]);\n  return Text;\n}(_super.Super); /**\n                  * @author muwoo\n                  * Date: 2018/7/12\n                  */\n\n//# sourceURL=webpack:///./src/core/shape/text.js?");

/***/ }),

/***/ "./src/core/shape/view.js":
/*!********************************!*\
  !*** ./src/core/shape/view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.View = undefined;\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"./node_modules/babel-runtime/core-js/object/get-prototype-of.js\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"./node_modules/babel-runtime/helpers/inherits.js\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _super = __webpack_require__(/*! ./super */ \"./src/core/shape/super.js\");\n\nvar _renderAdapter = __webpack_require__(/*! ../renderAdapter */ \"./src/core/renderAdapter/index.js\");\n\nvar _renderAdapter2 = _interopRequireDefault(_renderAdapter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @author muwoo\n * Date: 2018/7/11\n */\nvar View = exports.View = function (_Super) {\n  (0, _inherits3.default)(View, _Super);\n\n  function View(drawStyle) {\n    (0, _classCallCheck3.default)(this, View);\n\n    var _this = (0, _possibleConstructorReturn3.default)(this, (View.__proto__ || (0, _getPrototypeOf2.default)(View)).call(this, drawStyle));\n\n    _this.strokeStyle = _this.drawStyle.borderColor || '#000';\n    _this.lineWidth = _this.drawStyle.borderWidth || 1;\n    return _this;\n  }\n\n  (0, _createClass3.default)(View, [{\n    key: 'draw',\n    value: function draw(ctx, scrollTop) {\n      if (this.isVisible(scrollTop)) {\n        return;\n      }\n      ctx.save();\n      this.radius && this.arcByRadius(ctx, scrollTop);\n      _renderAdapter2.default.renderView(this, ctx, scrollTop);\n      this.drawStyle.fill ? ctx.fillRect(this.startX, this.startY - scrollTop, this.width, this.height) : ctx.strokeRect(this.startX, this.startY - scrollTop, this.width, this.height);\n      ctx.restore();\n      this.render = true;\n    }\n  }]);\n  return View;\n}(_super.Super);\n\n//# sourceURL=webpack:///./src/core/shape/view.js?");

/***/ }),

/***/ "./src/core/utils/cachePool.js":
/*!*************************************!*\
  !*** ./src/core/utils/cachePool.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.scrollItemPool = exports.imgCachePool = exports.canvasItemPool = undefined;\n\nvar _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ \"./node_modules/babel-runtime/helpers/defineProperty.js\");\n\nvar _defineProperty3 = _interopRequireDefault(_defineProperty2);\n\nvar _iterator = __webpack_require__(/*! babel-runtime/core-js/symbol/iterator */ \"./node_modules/babel-runtime/core-js/symbol/iterator.js\");\n\nvar _iterator2 = _interopRequireDefault(_iterator);\n\nvar _map = __webpack_require__(/*! babel-runtime/core-js/map */ \"./node_modules/babel-runtime/core-js/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @author muwoo\n * Date: 2018/7/15\n */\nvar pool = function pool() {\n  var _ref;\n\n  var pool = new _map2.default();\n  var length = 0;\n  return _ref = {\n    pool: pool,\n    add: function add(key, value) {\n      this.pool.set(key, value);\n      this.length++;\n    },\n    get: function get(key) {\n      return this.pool.get(key);\n    },\n    clear: function clear() {\n      this.pool = new _map2.default();\n      this.length = 0;\n    }\n  }, (0, _defineProperty3.default)(_ref, _iterator2.default, function () {\n    return this.pool.values();\n  }), (0, _defineProperty3.default)(_ref, \"length\", length), _ref;\n};\n\nvar canvasItemPool = exports.canvasItemPool = pool();\nvar imgCachePool = exports.imgCachePool = pool();\nvar scrollItemPool = exports.scrollItemPool = pool();\n\n//# sourceURL=webpack:///./src/core/utils/cachePool.js?");

/***/ }),

/***/ "./src/core/utils/constans.js":
/*!************************************!*\
  !*** ./src/core/utils/constans.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * default font family\n * @type {string}\n */\nvar DEFAULT_FONT_FAMILY = exports.DEFAULT_FONT_FAMILY = 'Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif';\n\n/**\n * scroll top, when view update will be reset.\n * @type {number}\n */\nvar top = exports.top = 0;\n\n/**\n * scroll top, when view update will not be reset\n * @type {number}\n */\nvar scrollTop = exports.scrollTop = 0;\n\nvar scrollerTop = exports.scrollerTop = 0;\n\nvar rate = exports.rate = 1;\n\n/**\n * Detection of the current environment\n * @type {Window}\n */\nvar IN_BROWSER = exports.IN_BROWSER = window;\n\n//# sourceURL=webpack:///./src/core/utils/constans.js?");

/***/ }),

/***/ "./src/core/utils/createCanvas.js":
/*!****************************************!*\
  !*** ./src/core/utils/createCanvas.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Canvas = undefined;\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"./node_modules/babel-runtime/helpers/createClass.js\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/core/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Canvas = exports.Canvas = function () {\n  function Canvas(width, height, id) {\n    (0, _classCallCheck3.default)(this, Canvas);\n\n    /**\n     * in weixin Mini Program\n     * direct creation of canvas context\n     */\n    if (!_utils.constants.IN_BROWSER) {\n      this.width = width;\n      this.height = height;\n      this._canvas = null;\n      this._ctx = id ? wx.createCanvasContext(id) : null;\n      return;\n    }\n\n    if (!this._canvas) {\n      this._canvas = document.createElement('canvas');\n    }\n\n    this.width = width;\n    this.height = height;\n    this.scale = window.devicePixelRatio;\n\n    this._canvas.width = this.width * this.scale;\n    this._canvas.height = this.height * this.scale;\n    this._canvas.style.width = this.width + 'px';\n    this._canvas.style.height = this.height + 'px';\n    this._canvas.getContext('2d').scale(this.scale, this.scale);\n    this._ctx = this._canvas.getContext('2d');\n  }\n\n  (0, _createClass3.default)(Canvas, [{\n    key: 'add',\n    value: function add(offScreenCanvas) {\n      this._ctx.clearRect(0, 0, this.width, this.height);\n      this._ctx.drawImage(offScreenCanvas, 0, 0, this.width, this.height);\n    }\n  }]);\n  return Canvas;\n}(); /**\n      * @author muwoo\n      * Date: 2018/7/15\n      */\n\n//# sourceURL=webpack:///./src/core/utils/createCanvas.js?");

/***/ }),

/***/ "./src/core/utils/index.js":
/*!*********************************!*\
  !*** ./src/core/utils/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Canvas = exports.scrollItemPool = exports.canvasItemPool = exports.imgCachePool = exports.constants = undefined;\n\nvar _constans = __webpack_require__(/*! ./constans */ \"./src/core/utils/constans.js\");\n\nvar constants = _interopRequireWildcard(_constans);\n\nvar _cachePool = __webpack_require__(/*! ./cachePool */ \"./src/core/utils/cachePool.js\");\n\nvar _createCanvas = __webpack_require__(/*! ./createCanvas */ \"./src/core/utils/createCanvas.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.constants = constants;\nexports.imgCachePool = _cachePool.imgCachePool;\nexports.canvasItemPool = _cachePool.canvasItemPool;\nexports.scrollItemPool = _cachePool.scrollItemPool;\nexports.Canvas = _createCanvas.Canvas; /**\n                                        * @author muwoo\n                                        * Date: 2018/7/13\n                                        */\n\n//# sourceURL=webpack:///./src/core/utils/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nvar _index = __webpack_require__(/*! ./core/index */ \"./src/core/index.js\");\n\nvar _utils = __webpack_require__(/*! ./core/utils */ \"./src/core/utils/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @author muwoo\n * Date: 2018/7/2\n */\nvar RenderCanvas = function RenderCanvas() {};\n\n/**\n * mainCanvas in dom\n */\nvar renderInstance = null;\nvar render = null;\n\nRenderCanvas.install = function (Vue) {\n  Vue.mixin({\n    data: function data() {\n      return {\n        options: {\n          /**\n           * canvas width\n           */\n          width: 0,\n          /**\n           * canvas height\n           */\n          height: 0\n        }\n      };\n    },\n\n    /**\n     * for weixin Mini Program\n     */\n    onLoad: function onLoad() {\n      if (this.$options.renderCanvas) {\n        var mobile = wx.getSystemInfoSync();\n        _utils.constants.rate = mobile.windowWidth / 375;\n      }\n    },\n    mounted: function mounted() {\n      if (this.$options.renderCanvas) {\n        this.options = (0, _assign2.default)({}, this.options, this.getOptions());\n        _utils.constants.IN_BROWSER && (_utils.constants.rate = this.options.remUnit ? window.innerWidth / (this.options.remUnit * 10) : 1);\n        renderInstance = new _utils.Canvas(this.options.width, this.options.height, this.options.canvasId);\n        this.$watch(this.updateCanvas, this.noop);\n        _utils.constants.IN_BROWSER && document.querySelector(this.options.el || 'body').appendChild(renderInstance._canvas);\n      }\n    },\n\n    /**\n     * for weixin Mini Program, teardown watchers\n     */\n    onUnload: function onUnload() {\n      if (this._watcher) {\n        this._watcher.teardown();\n      }\n      for (var i = this._watchers.length - 1; i >= 0; i--) {\n        this._watchers[i].teardown();\n      }\n    },\n\n    methods: {\n      getRenderInstance: function getRenderInstance() {\n        return renderInstance;\n      },\n      getRender: function getRender() {\n        return render;\n      },\n      updateCanvas: function updateCanvas() {\n        /**\n         * to record before re-render scrollTop\n         * @type {number}\n         */\n        _utils.constants.scrollTop += _utils.constants.top;\n        /**\n         * get render vnode\n         */\n        var vnode = this.$options.renderCanvas.call(this._renderProxy, this.$createElement);\n\n        /**\n         * get off screen render canvas\n         * @type {Render}\n         */\n        render = new _index.Render(renderInstance, vnode, this.options.width, this.options.height);\n        var offScreenCanvas = render.vnode2canvas();\n\n        /**\n         * render off screen canvas to mainCanvas\n         */\n        _utils.constants.IN_BROWSER && renderInstance.add(offScreenCanvas);\n        return vnode;\n      },\n      getOptions: function getOptions() {\n        return typeof this.$options.canvasOptions === 'function' ? this.$options.canvasOptions() : this.$options.canvasOptions || {};\n      },\n      noop: function noop() {}\n    }\n  });\n};\n\n_utils.constants.IN_BROWSER && (window.RenderCanvas = RenderCanvas);\n\nexports.default = RenderCanvas;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
});