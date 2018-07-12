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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/event.js":
/*!***************************!*\
  !*** ./src/core/event.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * @author muwoo\n * Date: 2018/7/11\n */\nvar Event = exports.Event = function () {\n  function Event(ctx) {\n    _classCallCheck(this, Event);\n\n    this.ctx = ctx || null;\n    this.stack = [];\n  }\n\n  _createClass(Event, [{\n    key: 'init',\n    value: function init(canvas) {\n      var _this = this;\n\n      canvas.addEventListener('click', function (e) {\n        _this.dispatch(e);\n      });\n    }\n  }, {\n    key: 'addEvent',\n    value: function addEvent(shape, fn) {\n      this.stack.push({\n        shape: shape,\n        handler: fn\n      });\n    }\n  }, {\n    key: 'dispatch',\n    value: function dispatch(point) {\n      this.stack.forEach(function (item) {\n        if (item.handler && item.shape.isInPath(point)) {\n          item.handler(point, item);\n        }\n      });\n    }\n  }]);\n\n  return Event;\n}();\n\n//# sourceURL=webpack:///./src/core/event.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Render = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author muwoo\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date: 2018/7/2\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */\n\n\nexports.createCanvas = createCanvas;\n\nvar _event = __webpack_require__(/*! ./event */ \"./src/core/event.js\");\n\nvar _view = __webpack_require__(/*! ./shape/view */ \"./src/core/shape/view.js\");\n\nvar _image = __webpack_require__(/*! ./shape/image */ \"./src/core/shape/image.js\");\n\nvar _text = __webpack_require__(/*! ./shape/text */ \"./src/core/shape/text.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction createCanvas(vm) {\n  vm.$canvas = document.createElement('canvas');\n  vm.$canvas.width = vm.renderWidth === 'full' ? window.innerWidth : vm.renderWidth;\n  vm.$canvas.height = vm.renderHeight === 'full' ? window.innerHeight : vm.renderHeight;\n  vm.$ctx = vm.$canvas.getContext('2d');\n}\n\nvar Render = exports.Render = function () {\n  function Render(vm, vnode) {\n    _classCallCheck(this, Render);\n\n    this.vm = vm;\n    this.statck = [vnode];\n    this.rate = vm.$canvas.width / 375;\n    this.event = new _event.Event(vm.$ctx);\n    this.event.init(vm.$canvas);\n  }\n\n  _createClass(Render, [{\n    key: 'clearCanvas',\n    value: function clearCanvas() {\n      this.vm.$ctx.clearRect(0, 0, this.vm.$canvas.width, this.vm.$canvas.height);\n    }\n  }, {\n    key: 'vnode2canvas',\n    value: function vnode2canvas() {\n      this.traverse(this.statck);\n      document.body.appendChild(this.vm.$canvas);\n    }\n  }, {\n    key: 'getImportStyle',\n    value: function getImportStyle(vnode) {\n      var style = {};\n      var vStyle = vStyle || {};\n      Object.keys(vStyle).forEach(function (key) {\n        if (vnode.data && vnode.data.class) {\n          if ('.' + vnode.data.class === key) {\n            style = vStyle[key];\n          }\n        }\n        if (vnode.tag) {\n          if (vnode.tag === key) {\n            style = vStyle[key];\n          }\n        }\n      });\n      return style;\n    }\n  }, {\n    key: 'renderProxy',\n    value: function renderProxy(target, key) {\n      var _this = this;\n\n      target.data = target.data || {};\n\n      var clickEvent = void 0;\n      (clickEvent = target.data.on) && (clickEvent = clickEvent.click);\n\n      var importStyle = this.getImportStyle(target);\n\n      var drawStyle = _extends({}, importStyle, target.data.style) || _extends({}, importStyle);\n      var font = 12 * this.rate;\n      this.vm.$ctx.fillStyle = drawStyle.fill || '#fff';\n      this.vm.$ctx.font = font + 'px Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif';\n      return {\n        view: function view() {\n          var view = new _view.View(_this.vm.$ctx, drawStyle, _this.rate);\n          view.draw();\n          _this.event.addEvent(view, clickEvent);\n        },\n        text: function text() {\n          var text = new _text.Text(_this.vm.$ctx, drawStyle, _this.rate);\n          text.draw(target.children[0].text);\n          _this.event.addEvent(text, clickEvent);\n        },\n        image: function image() {\n          var src = void 0;\n          (src = target.data.props) && (src = src.src || '');\n          var image = new _image.Img(_this.vm.$ctx, drawStyle, _this.rate);\n          image.draw(src);\n          _this.event.addEvent(image, clickEvent);\n        }\n      }[key];\n    }\n  }, {\n    key: 'traverse',\n    value: function traverse(stack) {\n      while (stack.length) {\n        var vnode = stack.shift();\n        new Proxy(vnode, { get: this.renderProxy.bind(this) })[vnode.tag]();\n        if (!vnode.children || vnode.tag === 'text') {\n          continue;\n        }\n\n        vnode.children.forEach(function (node) {\n          stack.push(node);\n        });\n      }\n    }\n  }]);\n\n  return Render;\n}();\n\n//# sourceURL=webpack:///./src/core/index.js?");

/***/ }),

/***/ "./src/core/shape/image.js":
/*!*********************************!*\
  !*** ./src/core/shape/image.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Img = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _super = __webpack_require__(/*! ./super */ \"./src/core/shape/super.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author muwoo\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2018/7/12\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\n\nvar Img = exports.Img = function (_Super) {\n  _inherits(Img, _Super);\n\n  function Img(ctx, drawStyle, rate) {\n    _classCallCheck(this, Img);\n\n    var _this = _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, drawStyle, rate));\n\n    _this.ctx = ctx;\n    _this.render = false;\n    return _this;\n  }\n\n  _createClass(Img, [{\n    key: 'draw',\n    value: function draw(src) {\n      var _this2 = this;\n\n      var img = new Image();\n      img.onload = function () {\n        _this2.ctx.drawImage(img, _this2.startX, _this2.startY, _this2.width, _this2.height);\n        _this2.render = true;\n      };\n      img.src = src;\n    }\n  }]);\n\n  return Img;\n}(_super.Super);\n\n//# sourceURL=webpack:///./src/core/shape/image.js?");

/***/ }),

/***/ "./src/core/shape/super.js":
/*!*********************************!*\
  !*** ./src/core/shape/super.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * @author muwoo\n * Date: 2018/7/11\n */\nvar defaultStyle = {\n  left: 0,\n  top: 0,\n  right: 0,\n  bottom: 0,\n  width: 0,\n  height: 0\n};\n\nvar Super = exports.Super = function () {\n  function Super(drawStyle, rate) {\n    _classCallCheck(this, Super);\n\n    this.drawStyle = Object.assign({}, defaultStyle, drawStyle);\n    this.rate = rate;\n    this.startX = this.drawStyle.left * this.rate;\n    this.startY = this.drawStyle.top * this.rate;\n    this.width = this.drawStyle.width * this.rate;\n    this.height = this.drawStyle.height * this.rate;\n  }\n\n  _createClass(Super, [{\n    key: \"isInPath\",\n    value: function isInPath(point) {\n      if (this.render && point.layerX >= this.startX && point.layerX <= this.width + this.startX && point.layerY >= this.startY && point.layerY <= this.height + this.startY) {\n        return true;\n      }\n      return false;\n    }\n  }]);\n\n  return Super;\n}();\n\n//# sourceURL=webpack:///./src/core/shape/super.js?");

/***/ }),

/***/ "./src/core/shape/text.js":
/*!********************************!*\
  !*** ./src/core/shape/text.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Text = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _super = __webpack_require__(/*! ./super */ \"./src/core/shape/super.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author muwoo\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2018/7/12\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\n\nvar Text = exports.Text = function (_Super) {\n  _inherits(Text, _Super);\n\n  function Text(ctx, drawStyle, rate) {\n    _classCallCheck(this, Text);\n\n    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, drawStyle, rate));\n\n    _this.ctx = ctx;\n    _this.render = false;\n    return _this;\n  }\n\n  _createClass(Text, [{\n    key: 'draw',\n    value: function draw(text) {\n      this.ctx.textBaseline = 'top';\n      var font = this.drawStyle['font-size'] * this.rate || 12 * this.rate;\n      this.ctx.font = font + 'px Helvetica Neue,Helvetica,Arial,PingFangSC-Regular,Microsoft YaHei,SimSun,sans-serif';\n      var distText = this.filterText(text);\n      this.ctx.fillText(distText, this.startX, this.startY);\n      this.render = true;\n      this.width = this.ctx.measureText(distText).width;\n      this.height = font;\n    }\n  }, {\n    key: 'filterText',\n    value: function filterText(text) {\n      if (this.drawStyle.ellipse && this.drawStyle.width) {\n        var filterText = '';\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = text.split('')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var char = _step.value;\n\n            if (this.ctx.measureText(filterText + '...').width >= this.drawStyle.width) {\n              filterText += '...';\n              break;\n            }\n            filterText += char;\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n              _iterator.return();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n\n        return filterText;\n      }\n      return text;\n    }\n  }]);\n\n  return Text;\n}(_super.Super);\n\n//# sourceURL=webpack:///./src/core/shape/text.js?");

/***/ }),

/***/ "./src/core/shape/view.js":
/*!********************************!*\
  !*** ./src/core/shape/view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.View = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _super = __webpack_require__(/*! ./super */ \"./src/core/shape/super.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author muwoo\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2018/7/11\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\n\nvar View = exports.View = function (_Super) {\n  _inherits(View, _Super);\n\n  function View(ctx, drawStyle, rate) {\n    _classCallCheck(this, View);\n\n    var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, drawStyle, rate));\n\n    _this.ctx = ctx;\n    _this.render = false;\n    return _this;\n  }\n\n  _createClass(View, [{\n    key: 'draw',\n    value: function draw() {\n      this.ctx.fillRect(this.startX, this.startY, this.width, this.height);\n      this.render = true;\n    }\n  }]);\n\n  return View;\n}(_super.Super);\n\n//# sourceURL=webpack:///./src/core/shape/view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(/*! ./core/index */ \"./src/core/index.js\");\n\nvar RenderCanvas = function RenderCanvas() {}; /**\n                                                * @author muwoo\n                                                * Date: 2018/7/2\n                                                */\n\n\nRenderCanvas.install = function (Vue) {\n  Vue.mixin({\n    created: function created() {\n      if (this.$options.renderCanvas) {\n        (0, _index.createCanvas)(this);\n        this.$watch(this.updateCanvas, this.noop);\n      }\n    },\n\n    methods: {\n      updateCanvas: function updateCanvas() {\n        var vnode = this.$options.renderCanvas.call(this._renderProxy, this.$createElement);\n        var render = new _index.Render(this, vnode);\n        render.clearCanvas();\n        render.vnode2canvas();\n        return vnode;\n      },\n      noop: function noop() {}\n    }\n  });\n};\n\nwindow.RenderCanvas = RenderCanvas;\n\nexports.default = RenderCanvas;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });