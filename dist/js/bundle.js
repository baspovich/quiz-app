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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/generator.js":
/*!*************************************!*\
  !*** ./src/js/modules/generator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction generate({question, answ1, answ2, answ3, answ4, trueAnswer}) {\n    class GuestionGenerator {\n        constructor(guestion, answ1, answ2, answ3, answ4, trueAnswer) {\n            this.guestion = question;\n            this.answers = [answ1, answ2, answ3, answ4];\n            this.trueAnswer = trueAnswer;\n        }\n        pasteQuestion() {\n            const questionBlock = document.querySelector('.quiz__question'),\n                  questionAnswers = document.querySelectorAll('.quiz__answ');\n            let i = 0;\n            \n            questionBlock.innerHTML = this.guestion;\n\n            questionAnswers.forEach(btn => {\n                if (this.answers[i] === this.trueAnswer) {\n                    btn.dataset.true = 1;\n                }\n                btn.innerHTML = this.answers[i];\n                i++;\n            });\n        }\n    }\n\n    new GuestionGenerator(question, answ1, answ2, answ3, answ4, trueAnswer)\n    .pasteQuestion();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generate);\n\n//# sourceURL=webpack:///./src/js/modules/generator.js?");

/***/ }),

/***/ "./src/js/modules/switching.js":
/*!*************************************!*\
  !*** ./src/js/modules/switching.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction switchingScreen({from, to, btn}) {\n    const switchFrom = document.querySelector(from),\n          switchTo = document.querySelector(to),\n          triggerBtn = document.querySelector(btn);\n    \n    triggerBtn.addEventListener('click', () => {\n        switchFrom.classList.remove('on');\n        switchTo.classList.add('on');\n    });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (switchingScreen);\n\n//# sourceURL=webpack:///./src/js/modules/switching.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_switching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/switching */ \"./src/js/modules/switching.js\");\n/* harmony import */ var _modules_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/generator */ \"./src/js/modules/generator.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n\n    const questions = [\n        {\n            question: 'Вопрос 1',\n            answ1: 'Правильный ответ',\n            answ2: 'Неверный ответ',\n            answ3: 'Неверный ответ',\n            answ4: 'Неверный ответ'\n        },\n        {\n            question: 'Вопрос 2',\n            answ1: 'Неверный ответ',\n            answ2: 'Правильный ответ',\n            answ3: 'Неверный ответ',\n            answ4: 'Неверный ответ'\n        },\n        {\n            question: 'Вопрос 3',\n            answ1: 'Неверный ответ',\n            answ2: 'Неверный ответ',\n            answ3: 'Правильный ответ',\n            answ4: 'Неверный ответ'\n        },\n        {\n            question: 'Вопрос 4',\n            answ1: 'Неверный ответ',\n            answ2: 'Неверный ответ',\n            answ3: 'Неверный ответ',\n            answ4: 'Правильный ответ'\n        }\n    ];\n\n    const nextBtn = document.querySelector('.quiz__next');\n    \n\n    Object(_modules_generator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        question: `Проверка`,\n        answ1: 'Ответ 1',\n        answ2: 'Ответ 2',\n        answ3: 'Ответ 3',\n        answ4: 'Ответ 4',\n        trueAnswer: 'Ответ 1'\n    });\n\n    nextBtn.addEventListener('click', () => {\n        Object(_modules_generator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            question: `Проверка кнопки`,\n            answ1: 'Ответ 1',\n            answ2: 'Ответ 2',\n            answ3: 'Ответ 3',\n            answ4: 'Ответ 4',\n            trueAnswer: 'Ответ 1'\n        });\n    });\n\n    Object(_modules_switching__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ // переключение на quiz\n        from: '.main',\n        to: '.quiz',\n        btn: '.btn'\n    });\n\n    Object(_modules_switching__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ // переключение на main\n        from: '.quiz',\n        to: '.main',\n        btn: '.back'\n    });\n\n\n\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });