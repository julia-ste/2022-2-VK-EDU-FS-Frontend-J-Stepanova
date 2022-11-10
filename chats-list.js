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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/chats-list/chats-list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/chats-list.json":
/*!********************************!*\
  !*** ./assets/chats-list.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"title\\\":\\\"Дженнифер Эшли\\\",\\\"imgSrc\\\":\\\"https://cdn0.iconfinder.com/data/icons/faces-set-06/64/emo-black-female-1024.png\\\",\\\"lastMsg\\\":{\\\"userId\\\":1,\\\"text\\\":\\\"Ты куда пропал?\\\",\\\"timestamp\\\":1666379917606,\\\"attachments\\\":[],\\\"status\\\":\\\"read\\\",\\\"unreadCount\\\":99,\\\"isMentioned\\\":false}},{\\\"title\\\":\\\"Общество целых бокалов\\\",\\\"imgSrc\\\":\\\"https://100wines.net/wp-content/uploads/2014/07/Bezyimyannyiy.png\\\",\\\"lastMsg\\\":{\\\"userId\\\":0,\\\"text\\\":\\\"Ребят, без меня сегодня :(\\\",\\\"timestamp\\\":1666379917606,\\\"attachments\\\":[],\\\"status\\\":\\\"read\\\",\\\"unreadCount\\\":0,\\\"isisMentioned\\\":false}},{\\\"title\\\":\\\"Антон Иванов\\\",\\\"imgSrc\\\":\\\"https://pedsovet.org/v3/upload/ckeditor/8/images/2019-12-12/1576161992_173_oooo.plus.jpg\\\",\\\"lastMsg\\\":{\\\"userId\\\":0,\\\"text\\\":\\\"Тоха, ты где?\\\",\\\"timestamp\\\":1666379917606,\\\"attachments\\\":[],\\\"status\\\":\\\"read\\\",\\\"unreadCount\\\":0,\\\"isMentioned\\\":false}},{\\\"title\\\":\\\"Серёга (должен 2000Р)\\\",\\\"imgSrc\\\":\\\"https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/hiphop-man-white-1024.png\\\",\\\"lastMsg\\\":{\\\"userId\\\":0,\\\"text\\\":\\\"Серёг, это Петя. Где бабло моё?\\\",\\\"timestamp\\\":1666379917606,\\\"attachments\\\":[],\\\"status\\\":\\\"delivered\\\",\\\"unreadCount\\\":0,\\\"isMentioned\\\":false}},{\\\"title\\\":\\\"Общество разбитых бокалов\\\",\\\"imgSrc\\\":\\\"https://primetytut.ru/wp-content/uploads/2018/02/razbityy-bokal-s-vinom.jpg\\\",\\\"lastMsg\\\":{\\\"userId\\\":1,\\\"text\\\":\\\"Петька, ты с нами сегодня?\\\",\\\"timestamp\\\":1666379917606,\\\"attachments\\\":[],\\\"status\\\":\\\"read\\\",\\\"unreadCount\\\":99,\\\"isMentioned\\\":true}},{\\\"title\\\":\\\"Сэм с Нижнего\\\",\\\"imgSrc\\\":\\\"https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-v2/64/hipster-man-white-1024.png\\\",\\\"lastMsg\\\":{\\\"userId\\\":0,\\\"text\\\":\\\"\\\",\\\"timestamp\\\":1666379917606,\\\"attachments\\\":[{\\\"type\\\":\\\"image\\\",\\\"name\\\":\\\"img_12-12-09\\\"}],\\\"status\\\":\\\"delivered\\\",\\\"unreadCount\\\":0,\\\"isMentioned\\\":false}},{\\\"title\\\":\\\"Айрат работа\\\",\\\"imgSrc\\\":\\\"https://cdn3.iconfinder.com/data/icons/diversity-avatars/64/hipster-beanie-man-asian-1024.png\\\",\\\"lastMsg\\\":{\\\"userId\\\":0,\\\"text\\\":\\\"Айрат, во сколько приедешь?\\\",\\\"timestamp\\\":1666379917606,\\\"attachments\\\":[],\\\"status\\\":\\\"delivered\\\",\\\"unreadCount\\\":0,\\\"isMentioned\\\":false}}]\");\n\n//# sourceURL=webpack:///./assets/chats-list.json?");

/***/ }),

/***/ "./pages/chats-list/chats-list.css":
/*!*****************************************!*\
  !*** ./pages/chats-list/chats-list.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./pages/chats-list/chats-list.css?");

/***/ }),

/***/ "./pages/chats-list/chats-list.js":
/*!****************************************!*\
  !*** ./pages/chats-list/chats-list.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chats_list_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats-list.css */ \"./pages/chats-list/chats-list.css\");\n/* harmony import */ var _chats_list_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chats_list_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_chats_list_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _assets/chats-list.json */ \"./assets/chats-list.json\");\nvar _assets_chats_list_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! _assets/chats-list.json */ \"./assets/chats-list.json\", 1);\n/* harmony import */ var _utils_check_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _utils/check-user */ \"./utils/check-user.js\");\n\n\n\n\nvar body = document.querySelector(\".body-container\");\nrenderPage();\nfunction renderPage() {\n  _assets_chats_list_json__WEBPACK_IMPORTED_MODULE_2__.forEach(function (chat) {\n    var chatElement = createChatElement(chat);\n    chatElement.addEventListener(\"click\", function () {\n      location.href = \"chat.html\";\n    });\n    body.append(chatElement);\n  });\n}\nfunction createChatElement(_ref) {\n  var title = _ref.title,\n    imgSrc = _ref.imgSrc,\n    _ref$lastMsg = _ref.lastMsg,\n    userId = _ref$lastMsg.userId,\n    text = _ref$lastMsg.text,\n    timestamp = _ref$lastMsg.timestamp,\n    attachments = _ref$lastMsg.attachments,\n    status = _ref$lastMsg.status,\n    unreadCount = _ref$lastMsg.unreadCount,\n    isMentioned = _ref$lastMsg.isMentioned;\n  var chat = document.createElement(\"div\");\n  chat.className = \"chat\";\n  var img = document.createElement(\"img\");\n  img.className = \"chat-img\";\n  img.src = imgSrc;\n  img.alt = \"\";\n  chat.appendChild(img);\n  var firstLineContainer = document.createElement(\"div\");\n  firstLineContainer.className = \"msg-line\";\n  var chatTitle = document.createElement(\"div\");\n  chatTitle.className = \"chat-title\";\n  chatTitle.textContent = title;\n  firstLineContainer.appendChild(chatTitle);\n  var lastMsgTime = document.createElement(\"span\");\n  lastMsgTime.className = \"msg-time\";\n  lastMsgTime.textContent = \"\".concat(new Date(timestamp).toLocaleTimeString(\"ru-RU\", {\n    hour: \"2-digit\",\n    minute: \"2-digit\"\n  }));\n  firstLineContainer.appendChild(lastMsgTime);\n  var secondLineContainer = document.createElement(\"div\");\n  secondLineContainer.className = \"msg-line\";\n  var lastMsgText = document.createElement(\"div\");\n  lastMsgText.className = \"msg-text\";\n  lastMsgText.textContent = \"\".concat(text, \" \").concat(attachments.length ? attachments[0].name : \"\");\n  secondLineContainer.appendChild(lastMsgText);\n  if (Object(_utils_check_user__WEBPACK_IMPORTED_MODULE_3__[\"isCurrentUser\"])(userId)) {\n    var statusIcon = document.createElement(\"i\");\n    statusIcon.className = \"material-symbols-outlined\";\n    statusIcon.textContent = \"read\" === status ? \"done_all\" : \"done\";\n    var chatStatus = document.createElement(\"span\");\n    chatStatus.className = \"msg-done-all\";\n    chatStatus.appendChild(statusIcon);\n    secondLineContainer.appendChild(chatStatus);\n  } else if (unreadCount !== 0) {\n    var chatUnreadCount = document.createElement(\"span\");\n    chatUnreadCount.className = \"unread-count \".concat(isMentioned ? \"mentioned\" : \"\");\n    chatUnreadCount.textContent = \"\".concat(isMentioned ? \"@\" : \"\", \"  \").concat(unreadCount);\n    secondLineContainer.appendChild(chatUnreadCount);\n  }\n  var msg = document.createElement(\"div\");\n  msg.className = \"msg-content\";\n  msg.appendChild(firstLineContainer);\n  msg.appendChild(secondLineContainer);\n  chat.appendChild(msg);\n  return chat;\n}\n\n//# sourceURL=webpack:///./pages/chats-list/chats-list.js?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/main.css?");

/***/ }),

/***/ "./utils/check-user.js":
/*!*****************************!*\
  !*** ./utils/check-user.js ***!
  \*****************************/
/*! exports provided: CURRENT_USER_ID, isCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENT_USER_ID\", function() { return CURRENT_USER_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCurrentUser\", function() { return isCurrentUser; });\nvar CURRENT_USER_ID = 0;\nfunction isCurrentUser(userId) {\n  return CURRENT_USER_ID === userId;\n}\n\n//# sourceURL=webpack:///./utils/check-user.js?");

/***/ })

/******/ });