webpackHotUpdate("static/development/pages/index.js",{

/***/ "./random-text/src/get-random-text.ts":
/*!********************************************!*\
  !*** ./random-text/src/get-random-text.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _specials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specials */ "./random-text/src/specials.ts");
/* harmony import */ var _get_word__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-word */ "./random-text/src/get-word.ts");
/* harmony import */ var _pos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos */ "./random-text/src/pos.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./random-text/src/utils.ts");






var DEFAULT_NUMBER_OF_LETTERS = 200;
var WIGGLE_ROOM = 3;

var getRandomPhrase =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(randomWords) {
    var numberOfLetters, partsOfSpeech, specialsWord, specialsWordPOS, str, pos, word, indexOfWord;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            numberOfLetters = DEFAULT_NUMBER_OF_LETTERS;
            partsOfSpeech = ['v', 'adj', 'n'];
            _context.next = 4;
            return Object(_specials__WEBPACK_IMPORTED_MODULE_2__["default"])();

          case 4:
            specialsWord = _context.sent;
            _context.next = 7;
            return Object(_pos__WEBPACK_IMPORTED_MODULE_4__["getPOS"])(specialsWord);

          case 7:
            specialsWordPOS = _context.sent;
            str = '';

          case 9:
            if (!(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isShiftable"])(partsOfSpeech) && str.length + WIGGLE_ROOM < numberOfLetters)) {
              _context.next = 25;
              break;
            }

            pos = partsOfSpeech.shift();
            word = '';

            if (!specialsWordPOS.includes(pos)) {
              _context.next = 17;
              break;
            }

            word = specialsWord;
            specialsWordPOS = [];
            _context.next = 22;
            break;

          case 17:
            _context.next = 19;
            return Object(_get_word__WEBPACK_IMPORTED_MODULE_3__["default"])(pos, randomWords);

          case 19:
            word = _context.sent;
            indexOfWord = randomWords.indexOf(word);
            randomWords.splice(indexOfWord, 1);

          case 22:
            if ("".concat(str, " ").concat(word).length < numberOfLetters) {
              str += " ".concat(word);
            }

            _context.next = 9;
            break;

          case 25:
            return _context.abrupt("return", str.trim());

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRandomPhrase(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (getRandomPhrase);

/***/ })

})
//# sourceMappingURL=index.js.627bd96bd7ddaaad9113.hot-update.js.map