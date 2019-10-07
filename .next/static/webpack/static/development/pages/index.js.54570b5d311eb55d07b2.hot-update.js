webpackHotUpdate("static/development/pages/index.js",{

/***/ "./random-text/src/specials.ts":
/*!*************************************!*\
  !*** ./random-text/src/specials.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./random-text/src/utils.ts");
/* harmony import */ var _text_strings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/strings.json */ "./random-text/text/strings.json");
var _text_strings_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../text/strings.json */ "./random-text/text/strings.json", 1);




var SPECIALS = _text_strings_json__WEBPACK_IMPORTED_MODULE_3__["specials"];

var getSpecialsWord =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var index;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            index = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getRandomNumber"])(0, SPECIALS.length - 1);
            return _context.abrupt("return", SPECIALS[index]);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSpecialsWord() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (getSpecialsWord);

/***/ })

})
//# sourceMappingURL=index.js.54570b5d311eb55d07b2.hot-update.js.map