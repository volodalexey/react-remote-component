webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _list = __webpack_require__(178);

	var _list2 = _interopRequireDefault(_list);

	__webpack_require__(182);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_list2.default, null), document.querySelector('[data-role="react"]'));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _remote = __webpack_require__(179);

	var _remote2 = _interopRequireDefault(_remote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var List = function (_React$Component) {
	  _inherits(List, _React$Component);

	  function List(props) {
	    _classCallCheck(this, List);

	    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

	    _this.state = _this.getInitialState();

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(List, [{
	    key: 'getInitialState',
	    value: function getInitialState() {
	      return {
	        component: null
	      };
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      this.setState({ component: e.target.dataset.component });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var component = this.state.component;


	      return _react2.default.createElement(
	        'table',
	        null,
	        _react2.default.createElement(
	          'tbody',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement(
	              'td',
	              { style: { verticalAlign: 'top' } },
	              'Selected component ' + component,
	              _react2.default.createElement(
	                'ul',
	                null,
	                _react2.default.createElement(
	                  'li',
	                  { style: { cursor: 'pointer' },
	                    onClick: this.handleClick, 'data-component': '1' },
	                  'Show first remote component'
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { style: { cursor: 'pointer' },
	                    onClick: this.handleClick, 'data-component': '2' },
	                  'Show second remote component'
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { style: { cursor: 'pointer' },
	                    onClick: this.handleClick, 'data-component': '3' },
	                  'Show third remote component'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'td',
	              null,
	              _react2.default.createElement(_remote2.default, { component: component })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return List;
	}(_react2.default.Component);

	exports.default = List;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ajax = __webpack_require__(180);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _spinner = __webpack_require__(181);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Remote = function (_React$Component) {
	  _inherits(Remote, _React$Component);

	  function Remote(props) {
	    _classCallCheck(this, Remote);

	    var _this = _possibleConstructorReturn(this, (Remote.__proto__ || Object.getPrototypeOf(Remote)).call(this, props));

	    _this.state = _this.getInitialState();
	    return _this;
	  }

	  _createClass(Remote, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.getComponent(nextProps.component);
	    }
	  }, {
	    key: 'getComponent',
	    value: function getComponent(requiredComponent) {
	      var _this2 = this;

	      var component = void 0;
	      if (component = this.state.components[requiredComponent]) {
	        // found in cache
	      } else if (requiredComponent) {
	        _ajax2.default.load('remote/' + requiredComponent).then(function (str_component) {
	          var component = void 0;
	          try {
	            var module = {},
	                Template = new Function('module', 'React', str_component);

	            Template(module, _react2.default);
	            component = _react2.default.createFactory(module.exports);
	          } catch (e) {
	            console.error(e);
	          }

	          if (component) {
	            _this2.setState({
	              pending: false,
	              components: Object.assign({}, _this2.state.components, _defineProperty({}, requiredComponent, component))
	            });
	          }
	        }).catch(function (err) {
	          console.error(err);
	          _this2.setState({ pending: false });
	        });

	        this.setState({ pending: true });
	      } else {
	        component = null;
	      }
	      return component;
	    }
	  }, {
	    key: 'getInitialState',
	    value: function getInitialState() {
	      return {
	        components: {},
	        pending: false
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          pending = _state.pending,
	          components = _state.components;


	      var component = components[this.props.component];
	      return _react2.default.createElement(
	        'div',
	        null,
	        component ? component({ now: Date.now() }) : null,
	        pending ? _react2.default.createElement(_spinner2.default, null) : null
	      );
	    }
	  }]);

	  return Remote;
	}(_react2.default.Component);

	exports.default = Remote;

/***/ },

/***/ 180:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ajax = function () {
	  function Ajax() {
	    _classCallCheck(this, Ajax);

	    this.active_requests = [];
	  }

	  _createClass(Ajax, [{
	    key: 'load',
	    value: function load(url) {
	      var _this = this;

	      var promise = this.active_requests.find(function (ar) {
	        return ar.__url === url;
	      });
	      if (!promise) {
	        promise = new Promise(function (resolve, reject) {
	          var xhr = new XMLHttpRequest();
	          xhr.__url = url;
	          _this.active_requests.push(xhr);
	          xhr.open('GET', url, true);
	          xhr.setRequestHeader('Accept', '*/*');
	          xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4) {
	              var index = _this.active_requests.indexOf(xhr);
	              if (index > -1) {
	                _this.active_requests.splice(index, 1);
	              }
	              var message = xhr.responseText;
	              if (xhr.status === 0) {
	                reject('Connection error!');
	              } else if (xhr.status >= 200 && xhr.status < 300) {
	                resolve(message);
	              } else {
	                reject(message);
	              }
	            }
	          };
	          xhr.send();
	        });
	      }

	      return promise;
	    }
	  }]);

	  return Ajax;
	}();

	exports.default = new Ajax();

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Spinner = function Spinner() {
	  return _react2.default.createElement("div", { className: "loader" });
	};

	exports.default = Spinner;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(185)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(184)();
	// imports


	// module
	exports.push([module.id, "/* https://codepen.io/mrrocks/pen/EiplA */\n/* https://projects.lukehaas.me/css-loaders/ */\n.loader,\n.loader:before,\n.loader:after {\n    border-radius: 50%;\n}\n.loader {\n    color: #8ae2ac;\n    font-size: 11px;\n    text-indent: -99999em;\n    margin: 55px auto;\n    position: relative;\n    width: 10em;\n    height: 10em;\n    box-shadow: inset 0 0 0 1em;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n}\n.loader:before,\n.loader:after {\n    position: absolute;\n    content: '';\n}\n\n.loader:before {\n    width: 5.2em;\n    height: 10.2em;\n    background: #ffffff;\n    border-radius: 10.2em 0 0 10.2em;\n    top: -0.1em;\n    left: -0.1em;\n    -webkit-transform-origin: 5.2em 5.1em;\n    transform-origin: 5.2em 5.1em;\n    -webkit-animation: load2 2s infinite ease 1.5s;\n    animation: load2 2s infinite ease 1.5s;\n}\n\n.loader:after {\n    width: 5.2em;\n    height: 10.2em;\n    background: #ffffff;\n    border-radius: 0 10.2em 10.2em 0;\n    top: -0.1em;\n    left: 5.1em;\n    -webkit-transform-origin: 0px 5.1em;\n    transform-origin: 0px 5.1em;\n    -webkit-animation: load2 2s infinite ease;\n    animation: load2 2s infinite ease;\n}\n\n@keyframes load2 {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n", ""]);

	// exports


/***/ },

/***/ 184:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});