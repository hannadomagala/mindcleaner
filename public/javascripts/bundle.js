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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/css/contexts.css":
/*!******************************!*\
  !*** ./src/css/contexts.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/contexts.css?");

/***/ }),

/***/ "./src/css/inbox.css":
/*!***************************!*\
  !*** ./src/css/inbox.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/inbox.css?");

/***/ }),

/***/ "./src/css/login.css":
/*!***************************!*\
  !*** ./src/css/login.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/login.css?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/css/mediaqueries.css":
/*!**********************************!*\
  !*** ./src/css/mediaqueries.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/mediaqueries.css?");

/***/ }),

/***/ "./src/css/page-content.css":
/*!**********************************!*\
  !*** ./src/css/page-content.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/page-content.css?");

/***/ }),

/***/ "./src/css/page-template.css":
/*!***********************************!*\
  !*** ./src/css/page-template.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/page-template.css?");

/***/ }),

/***/ "./src/css/tasks.css":
/*!***************************!*\
  !*** ./src/css/tasks.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/tasks.css?");

/***/ }),

/***/ "./src/css/variables.css":
/*!*******************************!*\
  !*** ./src/css/variables.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/variables.css?");

/***/ }),

/***/ "./src/js/auth-forms.js":
/*!******************************!*\
  !*** ./src/js/auth-forms.js ***!
  \******************************/
/*! exports provided: loginUser, createUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginUser\", function() { return loginUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutUser\", function() { return logoutUser; });\nconst nickLogInput = document.querySelector(\"#log-nick\");\r\nconst passwordLogInput = document.querySelector(\"#log-password\");\r\nconst errorLog = document.querySelector(\".login__error\");\r\n\r\nconst nameSignupInput = document.querySelector(\"#create-name\");\r\nconst nickSignupInput = document.querySelector(\"#create-nick\");\r\nconst passwordSignupInput = document.querySelector(\"#create-password\");\r\nconst errorSignup = document.querySelector(\".signup__error\");\r\nconst successSignup = document.querySelector(\".signup__success\");\r\n\r\nconst loginUser = async e => {\r\n  e.preventDefault();\r\n\r\n  const response = await fetch(\"/auth\", {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\"\r\n    },\r\n    credentials: \"include\",\r\n    body: JSON.stringify({\r\n      nick: nickLogInput.value,\r\n      password: passwordLogInput.value\r\n    })\r\n  });\r\n\r\n  const decoded = await response.json();\r\n  const token = await decoded;\r\n\r\n  if (token.err) {\r\n    errorLog.innerHTML = token.err;\r\n    return;\r\n  }\r\n\r\n  window.location.href = \"/inbox\";\r\n};\r\n\r\nconst createUser = async e => {\r\n  e.preventDefault();\r\n\r\n  const response = await fetch(\"/users\", {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\"\r\n    },\r\n    body: JSON.stringify({\r\n      name: nameSignupInput.value,\r\n      nick: nickSignupInput.value,\r\n      password: passwordSignupInput.value\r\n    })\r\n  });\r\n\r\n  const decoded = await response.json();\r\n  const created = await decoded;\r\n  console.log(created);\r\n  if (created.err) {\r\n    errorSignup.innerHTML = created.err;\r\n  }\r\n\r\n  if (created.message) {\r\n    successSignup.innerHTML = created.message;\r\n    errorSignup.innerHTML = null;\r\n    nameSignupInput.value = null;\r\n    nickSignupInput.value = null;\r\n    passwordSignupInput.value = null;\r\n  }\r\n};\r\n\r\nconst logoutUser = async e => {\r\n  e.preventDefault();\r\n  const response = await fetch(\"/logout\", {\r\n    method: \"DELETE\",\r\n    credentials: \"include\"\r\n  });\r\n  window.location.href = \"/\";\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/auth-forms.js?");

/***/ }),

/***/ "./src/js/inbox-forms.js":
/*!*******************************!*\
  !*** ./src/js/inbox-forms.js ***!
  \*******************************/
/*! exports provided: createThought, deleteThought */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createThought\", function() { return createThought; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteThought\", function() { return deleteThought; });\nconst addThoughtInput = document.querySelector(\".add-thought__input\");\r\n\r\nconst createThought = async e => {\r\n  e.preventDefault();\r\n  try {\r\n    const user = e.target.dataset.user;\r\n\r\n    const response = await fetch(\"/thoughts\", {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      },\r\n      body: JSON.stringify({\r\n        thought: addThoughtInput.value,\r\n        userId: user\r\n      })\r\n    });\r\n    window.location.href = \"/inbox\";\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n};\r\n\r\nconst deleteThought = async e => {\r\n  e.preventDefault();\r\n  try {\r\n    const id = e.target.dataset.id;\r\n    const response = await fetch(`/thoughts/${id}`, {\r\n      method: \"DELETE\"\r\n    });\r\n    window.location.href = \"/inbox\";\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/inbox-forms.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/variables.css */ \"./src/css/variables.css\");\n/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_variables_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_page_template_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/page-template.css */ \"./src/css/page-template.css\");\n/* harmony import */ var _css_page_template_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_page_template_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_page_content_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/page-content.css */ \"./src/css/page-content.css\");\n/* harmony import */ var _css_page_content_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_page_content_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_inbox_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/inbox.css */ \"./src/css/inbox.css\");\n/* harmony import */ var _css_inbox_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_inbox_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_tasks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/tasks.css */ \"./src/css/tasks.css\");\n/* harmony import */ var _css_tasks_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_tasks_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_contexts_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/contexts.css */ \"./src/css/contexts.css\");\n/* harmony import */ var _css_contexts_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_contexts_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/login.css */ \"./src/css/login.css\");\n/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_login_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _css_mediaqueries_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/mediaqueries.css */ \"./src/css/mediaqueries.css\");\n/* harmony import */ var _css_mediaqueries_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_mediaqueries_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _inbox_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inbox-forms */ \"./src/js/inbox-forms.js\");\n/* harmony import */ var _auth_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth-forms */ \"./src/js/auth-forms.js\");\n/* harmony import */ var _tasks_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasks-forms */ \"./src/js/tasks-forms.js\");\n// css imports\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//basic functionality imports\r\n\r\n\r\n// crud imports\r\n\r\n\r\n\r\n\r\n//highlight active page at page-nav\r\nif (_tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] !== \"login\") {\r\n  Object(_menu__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\r\n  const logoutButton = document.querySelector(\".page-header__logout\");\r\n  logoutButton.addEventListener(\"click\", _auth_forms__WEBPACK_IMPORTED_MODULE_12__[\"logoutUser\"]);\r\n\r\n  // toogle menu\r\n  const menuBtn = document.querySelector(\".page-header__hamburger\");\r\n  const menuContent = document.querySelector(\".page-nav\");\r\n\r\n  menuBtn.addEventListener(\"click\", e => {\r\n    menuContent.classList.toggle(\"page-nav--toggle\");\r\n  });\r\n}\r\n\r\n//sort-by-context at page-nav\r\nconst contextsContainer = document.querySelector(\".sort-by-context\");\r\nconst contextsBtn = document.querySelector(\".page-nav__link--sort\");\r\nconst contextsCloseBtn = document.querySelector(\".contexts__close\");\r\n\r\nif (contextsContainer) {\r\n  const toggleContexts = e => {\r\n    e.preventDefault();\r\n    contextsContainer.classList.toggle(\"sort-by-context--toggle\");\r\n  };\r\n\r\n  const closeContexts = e => {\r\n    contextsContainer.classList.toggle(\"sort-by-context--toggle\");\r\n  };\r\n\r\n  contextsBtn.addEventListener(\"click\", toggleContexts);\r\n  contextsCloseBtn.addEventListener(\"click\", closeContexts);\r\n}\r\n\r\n// inbox functionality\r\nif (_tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] === \"inbox\") {\r\n  const addThoughtForm = document.querySelector(\".add-thought\");\r\n  const deleteThoughtButtons = document.querySelectorAll(\".delete-thought\");\r\n\r\n  addThoughtForm.addEventListener(\"submit\", _inbox_forms__WEBPACK_IMPORTED_MODULE_11__[\"createThought\"]);\r\n\r\n  for (const deleteButton of deleteThoughtButtons) {\r\n    deleteButton.addEventListener(\"submit\", _inbox_forms__WEBPACK_IMPORTED_MODULE_11__[\"deleteThought\"]);\r\n  }\r\n}\r\n\r\n// add task functionality\r\nif (_tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] === \"addtask\") {\r\n  const addTaskForm = document.querySelector(\".add-task__form\");\r\n\r\n  _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"someday\"].addEventListener(\"click\", _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"toggleDate\"]);\r\n  addTaskForm.addEventListener(\"submit\", _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"createTask\"]);\r\n}\r\n\r\n// edit task functionality\r\nif (_tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] === \"edittask\") {\r\n  const addTaskForm = document.querySelector(\".add-task__form\");\r\n\r\n  _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"someday\"].addEventListener(\"click\", _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"toggleDate\"]);\r\n  addTaskForm.addEventListener(\"submit\", _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"editTask\"]);\r\n}\r\n\r\n// tasks views functionality\r\nif (\r\n  _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] !== \"inbox\" &&\r\n  _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] !== \"addtask\" &&\r\n  _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] !== \"edittask\" &&\r\n  _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] !== \"done\"\r\n) {\r\n  const doneTaskForms = document.querySelectorAll(\".task__is-done\");\r\n\r\n  for (const form of doneTaskForms) {\r\n    form.addEventListener(\"submit\", _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"accomplishTask\"]);\r\n  }\r\n}\r\n\r\n// done task view functionality\r\nif (_tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] === \"done\") {\r\n  const doneTaskForms = document.querySelectorAll(\".task__delete-form\");\r\n  console.log(doneTaskForms);\r\n\r\n  for (const form of doneTaskForms) {\r\n    form.addEventListener(\"submit\", _tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"deleteTask\"]);\r\n  }\r\n}\r\n\r\n//login functionality\r\nif (_tasks_forms__WEBPACK_IMPORTED_MODULE_13__[\"pageName\"] === \"login\") {\r\n  const loginForm = document.querySelector(\".login__form\");\r\n  const signUpForm = document.querySelector(\".signup__form\");\r\n\r\n  loginForm.addEventListener(\"submit\", _auth_forms__WEBPACK_IMPORTED_MODULE_12__[\"loginUser\"]);\r\n  signUpForm.addEventListener(\"submit\", _auth_forms__WEBPACK_IMPORTED_MODULE_12__[\"createUser\"]);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst validateName = name => {\r\n  name = name.replace(/\\s+/g, \"\");\r\n  return name.toLowerCase();\r\n};\r\n\r\nconst highlightActive = () => {\r\n  const menuItems = document.querySelectorAll(\".page-nav__item\");\r\n  let pageName = document.querySelector(\".page-content__title\").innerText;\r\n  const itemsArr = [...menuItems];\r\n\r\n  const rightIndex = itemsArr.findIndex(item => {\r\n    pageName = validateName(pageName);\r\n    return item.dataset.name === pageName;\r\n  });\r\n\r\n  if (rightIndex >= 0) {\r\n    menuItems[rightIndex].classList.add(\"page-nav__item--active\");\r\n  } else {\r\n    return;\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (highlightActive);\r\n\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ }),

/***/ "./src/js/tasks-forms.js":
/*!*******************************!*\
  !*** ./src/js/tasks-forms.js ***!
  \*******************************/
/*! exports provided: someday, date, pageName, toggleDate, createTask, editTask, accomplishTask, deleteTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"someday\", function() { return someday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"date\", function() { return date; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageName\", function() { return pageName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleDate\", function() { return toggleDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTask\", function() { return editTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accomplishTask\", function() { return accomplishTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTask\", function() { return deleteTask; });\nconst pageName = document.body.className;\r\n\r\n// inputs\r\nconst title = document.querySelector(\"#title\");\r\nconst date = document.querySelector(\"#date\");\r\nconst someday = document.querySelector(\"#someday\");\r\nconst details = document.querySelector(\"#details\");\r\nconst delegate = document.querySelector(\"#delegate\");\r\nconst thoughtId = document.querySelector(\"main\").dataset.thought;\r\n\r\n// contexts\r\nconst outside = document.querySelector(\"#outside\");\r\nconst home = document.querySelector(\"#home\");\r\nconst work = document.querySelector(\"#work\");\r\nconst shopping = document.querySelector(\"#shopping\");\r\nconst computer = document.querySelector(\"#computer\");\r\nconst phone = document.querySelector(\"#phone\");\r\n\r\n// functions\r\n\r\nconst toggleDate = e => {\r\n  if (someday.checked) {\r\n    date.value = null;\r\n    date.disabled = true;\r\n  } else {\r\n    date.disabled = false;\r\n  }\r\n};\r\n\r\nconst createTask = async e => {\r\n  e.preventDefault();\r\n\r\n  const userId = e.target.dataset.user;\r\n\r\n  const contexts = [outside, home, work, shopping, computer, phone];\r\n  const contextsToSend = [];\r\n\r\n  for (const context of contexts) {\r\n    if (context.checked) {\r\n      contextsToSend.push({\r\n        name: context.id,\r\n        class: `c-${context.id}`\r\n      });\r\n    }\r\n  }\r\n\r\n  const waiting = !!delegate.value;\r\n\r\n  try {\r\n    const response = await fetch(\"/tasks\", {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      },\r\n      body: JSON.stringify({\r\n        title: title.value,\r\n        date: date.value,\r\n        someday: someday.checked,\r\n        details: details.value.replace(/\\r?\\n/g, \"<br />\"),\r\n        contexts: contextsToSend,\r\n        waiting: waiting,\r\n        delegated: delegate.value,\r\n        done: false,\r\n        thoughtId: thoughtId,\r\n        userId: userId\r\n      })\r\n    });\r\n\r\n    console.log(response);\r\n    window.location.href = \"/all\";\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n};\r\n\r\nconst editTask = async e => {\r\n  e.preventDefault();\r\n\r\n  const contexts = [outside, home, work, shopping, computer, phone];\r\n  const contextsToSend = [];\r\n\r\n  for (const context of contexts) {\r\n    if (context.checked) {\r\n      contextsToSend.push({\r\n        name: context.id,\r\n        class: `c-${context.id}`\r\n      });\r\n    }\r\n  }\r\n\r\n  const waiting = !!delegate.value;\r\n\r\n  const id = document.body.dataset.id;\r\n\r\n  try {\r\n    const response = await fetch(`/tasks/${id}`, {\r\n      method: \"PUT\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      },\r\n      body: JSON.stringify({\r\n        title: title.value,\r\n        date: date.value,\r\n        someday: someday.checked,\r\n        details: details.value.replace(/\\r?\\n/g, \"<br />\"),\r\n        contexts: contextsToSend,\r\n        waiting: waiting,\r\n        delegated: delegate.value,\r\n        done: false\r\n      })\r\n    });\r\n\r\n    console.log(response);\r\n    window.location.href = \"/all\";\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n};\r\n\r\nconst accomplishTask = async e => {\r\n  e.preventDefault();\r\n  try {\r\n    const id = e.target.dataset.id;\r\n    const response = await fetch(`/tasks/${id}`, {\r\n      method: \"PUT\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      },\r\n      body: JSON.stringify({\r\n        done: true\r\n      })\r\n    });\r\n    window.location.href = `/${pageName}`;\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n};\r\n\r\nconst deleteTask = async e => {\r\n  e.preventDefault();\r\n  try {\r\n    const id = e.target.dataset.id;\r\n    const response = await fetch(`/tasks/${id}`, {\r\n      method: \"DELETE\"\r\n    });\r\n    window.location.href = \"/done\";\r\n  } catch (err) {\r\n    console.log(err);\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/tasks-forms.js?");

/***/ })

/******/ });