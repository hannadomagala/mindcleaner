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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.css?");

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

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/variables.css */ \"./src/css/variables.css\");\n/* harmony import */ var _css_variables_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_variables_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_page_template_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/page-template.css */ \"./src/css/page-template.css\");\n/* harmony import */ var _css_page_template_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_page_template_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_page_content_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/page-content.css */ \"./src/css/page-content.css\");\n/* harmony import */ var _css_page_content_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_page_content_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_inbox_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/inbox.css */ \"./src/css/inbox.css\");\n/* harmony import */ var _css_inbox_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_inbox_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_tasks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/tasks.css */ \"./src/css/tasks.css\");\n/* harmony import */ var _css_tasks_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_tasks_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_contexts_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/contexts.css */ \"./src/css/contexts.css\");\n/* harmony import */ var _css_contexts_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_contexts_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n// css imports\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//basic functionality imports\r\n\r\n\r\n\r\nObject(_menu__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\r\nconst contextsContainer = document.querySelector('.sort-by-context');\r\nconst contextsBtn = document.querySelector('.page-nav__link--sort');\r\n\r\nconst toggleContexts = (e) => {\r\n    e.preventDefault();\r\n    contextsContainer.classList.toggle('sort-by-context--toggle');\r\n};\r\n\r\ncontextsBtn.addEventListener('click', toggleContexts);\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst validateName = (name) => {\r\n    name = name.replace(/\\s+/g, '');\r\n    return name.toLowerCase();\r\n}\r\n\r\nconst highlightActive = () => {\r\n    const menuItems = document.querySelectorAll('.page-nav__item');\r\n    let pageName = document.querySelector('.page-content__title').innerText;\r\n    const itemsArr = [...menuItems];\r\n    console.log(pageName);\r\n    \r\n    const rightIndex = itemsArr.findIndex((item) => {\r\n        pageName = validateName(pageName);\r\n        console.log(pageName);\r\n        return item.dataset.name === pageName;\r\n    });\r\n    \r\n    console.log(rightIndex);\r\n\r\n    menuItems[rightIndex].classList.add('page-nav__item--active');\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (highlightActive);\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ })

/******/ });