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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mock_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-data.json */ \"./mock-data.json\");\nvar _mock_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./mock-data.json */ \"./mock-data.json\", 1);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar CHAT_KEY = \"chat\";\nvar CURRENT_USER_ID = 0;\nvar chat = document.querySelector(\".chat-body\");\nvar form = document.querySelector(\"form\");\nvar options = document.querySelector(\".options\");\nvar optionsButton = document.querySelector(\".options-btn\");\nform.addEventListener(\"keypress\", handleKeyPress);\nform.addEventListener(\"submit\", handleSubmit);\noptionsButton.addEventListener(\"click\", handleClick);\nrenderPage();\nfunction getFromLocalStorage(key) {\n  return JSON.parse(localStorage.getItem(key)) || [];\n}\nfunction saveToLocalStorage(key, value) {\n  localStorage.setItem(key, JSON.stringify(value));\n}\nfunction scroll() {\n  chat.scrollTop = chat.scrollHeight;\n}\nfunction validateMessage(_ref) {\n  var userId = _ref.userId,\n    text = _ref.text,\n    timestamp = _ref.timestamp,\n    attachments = _ref.attachments;\n  var hasAttachments = attachments.length;\n  return userId >= 0 && timestamp >= 0 && (!hasAttachments && text || hasAttachments && attachments.every(function (obj) {\n    return obj.type && obj.src;\n  }));\n}\nfunction renderPage() {\n  _mock_data_json__WEBPACK_IMPORTED_MODULE_1__.filter(validateMessage).forEach(function (message) {\n    return chat.append(createMessageElement(message));\n  });\n  if (window.localStorage) {\n    getFromLocalStorage(CHAT_KEY).filter(validateMessage).forEach(function (message) {\n      return chat.append(createMessageElement(message));\n    });\n    scroll();\n  }\n}\nfunction isCurrentUser(userId) {\n  return CURRENT_USER_ID === userId;\n}\nfunction formMessage(text) {\n  return {\n    userId: CURRENT_USER_ID,\n    text: text,\n    timestamp: new Date().valueOf(),\n    attachments: []\n  };\n}\nfunction createMessageElement(_ref2) {\n  var userId = _ref2.userId,\n    rawText = _ref2.text,\n    timestamp = _ref2.timestamp,\n    attachments = _ref2.attachments;\n  var message = document.createElement(\"div\");\n  message.className = \"msg-content\";\n  if (attachments) {\n    var media = document.createElement(\"div\");\n    media.className = \"msg-media\";\n    var _iterator = _createForOfIteratorHelper(attachments),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _step$value = _step.value,\n          type = _step$value.type,\n          src = _step$value.src;\n        if (type === \"image\") {\n          var img = document.createElement(\"img\");\n          img.className = \"msg-img\";\n          img.src = src;\n          img.alt = \"\";\n          media.appendChild(img);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n    message.append(media);\n  }\n  if (rawText) {\n    var text = document.createElement(\"div\");\n    text.className = \"msg-text\";\n    text.textContent = rawText;\n    message.append(text);\n  }\n  var metadata = document.createElement(\"div\");\n  metadata.className = \"msg-meta\";\n  var time = document.createElement(\"span\");\n  time.className = \"msg-time\";\n  time.textContent = \"\".concat(new Date(timestamp).toLocaleTimeString(\"ru-RU\", {\n    hour: \"2-digit\",\n    minute: \"2-digit\"\n  }));\n  metadata.appendChild(time);\n  if (isCurrentUser(userId)) {\n    var doneAllIcon = document.createElement(\"i\");\n    doneAllIcon.className = \"material-symbols-outlined small-icon\";\n    doneAllIcon.textContent = \"done_all\";\n    var doneAll = document.createElement(\"span\");\n    doneAll.className = \"msg-done-all\";\n    doneAll.appendChild(doneAllIcon);\n    metadata.appendChild(doneAll);\n  }\n  message.append(metadata);\n  var container = document.createElement(\"div\");\n  container.className = isCurrentUser(userId) ? \"msg-bubble right\" : \"msg-bubble left\";\n  container.appendChild(message);\n  return container;\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var input = event.target.querySelector(\".form-input\");\n  var newMessage = formMessage(input.value);\n  chat.append(createMessageElement(newMessage));\n  input.value = \"\";\n  scroll();\n  if (window.localStorage) {\n    var chatHistory = getFromLocalStorage(CHAT_KEY);\n    chatHistory.push(newMessage);\n    saveToLocalStorage(CHAT_KEY, chatHistory);\n  }\n}\nfunction isBlank(str) {\n  return !str || str.trim().length === 0;\n}\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    event.preventDefault();\n    if (!isBlank(event.target.value)) {\n      form.dispatchEvent(new Event(\"submit\"));\n    }\n  }\n}\nfunction handleClick() {\n  options.style.display = options.style.display === \"none\" ? \"block\" : \"none\";\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./mock-data.json":
/*!************************!*\
  !*** ./mock-data.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"userId\\\":1,\\\"text\\\":\\\"Я тут кое-что нарисовала!\\\\nПосмотри как будет время)\\\",\\\"timestamp\\\":1666379917606,\\\"attachments\\\":[]},{\\\"userId\\\":1,\\\"text\\\":\\\"\\\",\\\"timestamp\\\":1666379917607,\\\"attachments\\\":[{\\\"type\\\":\\\"image\\\",\\\"src\\\":\\\"https://cdn.dribbble.com/users/4859/screenshots/5235895/alba-shot.png\\\"}]},{\\\"userId\\\":1,\\\"text\\\":\\\"Тебе нравится как я нарисовала?\\\",\\\"timestamp\\\":1666379917608,\\\"attachments\\\":[]},{\\\"userId\\\":0,\\\"text\\\":\\\"Горжусь тобой! Ты крутая!\\\",\\\"timestamp\\\":1666380917609,\\\"attachments\\\":[]},{\\\"userId\\\":0,\\\"text\\\":\\\"Джен, ты молодец!\\\",\\\"timestamp\\\":1666380917610,\\\"attachments\\\":[]}]\");\n\n//# sourceURL=webpack:///./mock-data.json?");

/***/ })

/******/ });