webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");
/* harmony import */ var _random_text_src_get_random_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../random-text/src/get-random-text */ "./random-text/src/get-random-text.ts");
/* harmony import */ var _random_text_src_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../random-text/src/utils */ "./random-text/src/utils.ts");
/* harmony import */ var _random_text_text_strings_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../random-text/text/strings.json */ "./random-text/text/strings.json");
var _random_text_text_strings_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../random-text/text/strings.json */ "./random-text/text/strings.json", 1);



var _jsxFileName = "/Users/jasonoverby/p/random-text-site/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var NUMBER_OF_PHRASES = 3;
var STARTER_PHRASE = 'get random text';
var STOCK_PHRASES = _random_text_text_strings_json__WEBPACK_IMPORTED_MODULE_8__["phrases"];

var getRandomPhrases =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(randomWords) {
    var phrases, i, phrase;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            phrases = [];
            i = 0;

          case 2:
            if (!(i < NUMBER_OF_PHRASES)) {
              _context.next = 16;
              break;
            }

            _context.prev = 3;
            _context.next = 6;
            return Object(_random_text_src_get_random_text__WEBPACK_IMPORTED_MODULE_6__["default"])(randomWords);

          case 6:
            phrase = _context.sent;
            phrases.push(phrase);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);

          case 13:
            i += 1;
            _context.next = 2;
            break;

          case 16:
            return _context.abrupt("return", phrases);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));

  return function getRandomPhrases(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getRandomPhrasesDebounced = Object(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_5__["default"])(getRandomPhrases, 500);

var getPhrase = function getPhrase(phrases, phrase) {
  var randomIndex = Object(_random_text_src_utils__WEBPACK_IMPORTED_MODULE_7__["getRandomNumber"])(0, STOCK_PHRASES.length - 1);
  return STOCK_PHRASES[randomIndex];
};

var RandomText = function RandomText(_ref2) {
  var randomWords = _ref2.randomWords;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([STARTER_PHRASE]),
      phrases = _useState[0],
      setPhrases = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(STARTER_PHRASE),
      phrase = _useState2[0],
      setPhrase = _useState2[1];

  var handleClick = function handleClick() {
    console.log('phrases', phrases);
    var newPhrase = getPhrase(phrases, phrase);

    if (phrase === phrases[0]) {
      var _newPhrases = [newPhrase].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(phrases.slice(1)));

      setPhrase(newPhrase);
      setPhrases(_newPhrases);
    } else {
      setPhrase(phrases[0]);
    }

    var newPhrases = phrases && phrases.slice(1) || [];

    if (newPhrases.length <= 1) {
      getRandomPhrasesDebounced(randomWords).then(function (randomPhrases) {
        setPhrases(newPhrases.concat(randomPhrases));
      });
    } else {
      newPhrases = phrases.slice(1);
      setPhrases(newPhrases);
    }
  };

  return __jsx("div", {
    className: "jsx-1924471468" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h1", {
    onClick: handleClick,
    className: "jsx-1924471468",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, phrase), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1924471468",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');body{background:#000;}.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{color:rgb(255,235,238);cursor:pointer;font:32px 'fira code',menlo,helvetica,arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbm92ZXJieS9wL3JhbmRvbS10ZXh0LXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEUyxBQUV3RixBQUUzRCxBQUlILEFBT1ksZ0JBVjNCLE9BV2lCLGVBQzRDLG9DQVI5QyxhQUNVLE1BUXpCLDZGQVBxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2phc29ub3ZlcmJ5L3AvcmFuZG9tLXRleHQtc2l0ZS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBd2Vzb21lRGVib3VuY2VQcm9taXNlIGZyb20gJ2F3ZXNvbWUtZGVib3VuY2UtcHJvbWlzZSc7XG5pbXBvcnQgZ2V0UmFuZG9tUGhyYXNlIGZyb20gJy4uL3JhbmRvbS10ZXh0L3NyYy9nZXQtcmFuZG9tLXRleHQnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tV29yZHMsIGdldFJhbmRvbU51bWJlciB9IGZyb20gJy4uL3JhbmRvbS10ZXh0L3NyYy91dGlscyc7XG5pbXBvcnQgKiBhcyBzdHJpbmdzSnNvbiBmcm9tICcuLi9yYW5kb20tdGV4dC90ZXh0L3N0cmluZ3MuanNvbic7XG5cbmNvbnN0IE5VTUJFUl9PRl9QSFJBU0VTID0gMztcbmNvbnN0IFNUQVJURVJfUEhSQVNFID0gJ2dldCByYW5kb20gdGV4dCc7XG5jb25zdCBTVE9DS19QSFJBU0VTID0gc3RyaW5nc0pzb24ucGhyYXNlcztcblxuY29uc3QgZ2V0UmFuZG9tUGhyYXNlcyA9IGFzeW5jIChyYW5kb21Xb3Jkczogc3RyaW5nW10pID0+IHtcbiAgY29uc3QgcGhyYXNlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTUJFUl9PRl9QSFJBU0VTOyBpICs9IDEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGhyYXNlID0gYXdhaXQgZ2V0UmFuZG9tUGhyYXNlKHJhbmRvbVdvcmRzKTtcbiAgICAgIHBocmFzZXMucHVzaChwaHJhc2UpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBocmFzZXM7XG59O1xuY29uc3QgZ2V0UmFuZG9tUGhyYXNlc0RlYm91bmNlZCA9IEF3ZXNvbWVEZWJvdW5jZVByb21pc2UoZ2V0UmFuZG9tUGhyYXNlcywgNTAwKTtcbmNvbnN0IGdldFBocmFzZSA9IChwaHJhc2VzOiBzdHJpbmdbXSwgcGhyYXNlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcmFuZG9tSW5kZXggPSBnZXRSYW5kb21OdW1iZXIoMCwgU1RPQ0tfUEhSQVNFUy5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIFNUT0NLX1BIUkFTRVNbcmFuZG9tSW5kZXhdO1xufTtcblxuY29uc3QgUmFuZG9tVGV4dCA9ICh7IHJhbmRvbVdvcmRzIH06IHsgcmFuZG9tV29yZHM6IHN0cmluZ1tdIH0pID0+IHtcbiAgY29uc3QgW3BocmFzZXMsIHNldFBocmFzZXNdID0gdXNlU3RhdGUoW1NUQVJURVJfUEhSQVNFXSk7XG4gIGNvbnN0IFtwaHJhc2UsIHNldFBocmFzZV0gPSB1c2VTdGF0ZShTVEFSVEVSX1BIUkFTRSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3BocmFzZXMnLCBwaHJhc2VzKTtcbiAgICBjb25zdCBuZXdQaHJhc2UgPSBnZXRQaHJhc2UocGhyYXNlcywgcGhyYXNlKTtcbiAgICBpZiAocGhyYXNlID09PSBwaHJhc2VzWzBdKSB7XG4gICAgICBjb25zdCBuZXdQaHJhc2VzID0gW25ld1BocmFzZSwgLi4ucGhyYXNlcy5zbGljZSgxKV07XG4gICAgICBzZXRQaHJhc2UobmV3UGhyYXNlKTtcbiAgICAgIHNldFBocmFzZXMobmV3UGhyYXNlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFBocmFzZShwaHJhc2VzWzBdKTtcbiAgICB9XG4gICAgbGV0IG5ld1BocmFzZXMgPSAocGhyYXNlcyAmJiBwaHJhc2VzLnNsaWNlKDEpKSB8fCBbXTtcbiAgICBpZiAobmV3UGhyYXNlcy5sZW5ndGggPD0gMSkge1xuICAgICAgZ2V0UmFuZG9tUGhyYXNlc0RlYm91bmNlZChyYW5kb21Xb3JkcykudGhlbigocmFuZG9tUGhyYXNlcykgPT4ge1xuICAgICAgICBzZXRQaHJhc2VzKG5ld1BocmFzZXMuY29uY2F0KHJhbmRvbVBocmFzZXMpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdQaHJhc2VzID0gcGhyYXNlcy5zbGljZSgxKTtcbiAgICAgIHNldFBocmFzZXMobmV3UGhyYXNlcyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBvbkNsaWNrPXtoYW5kbGVDbGlja30+e3BocmFzZX08L2gxPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK0NvZGUmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDIzNSwgMjM4KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQ6IDMycHggJ2ZpcmEgY29kZScsIG1lbmxvLCBoZWx2ZXRpY2EsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJhbmRvbVdvcmRzID0gYXdhaXQgZ2V0UmFuZG9tV29yZHMoKTtcbiAgcmV0dXJuIHsgcmFuZG9tV29yZHMgfTtcbn07XG5SYW5kb21UZXh0LmdldEluaXRpYWxQcm9wcyA9IGdldEluaXRpYWxQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgUmFuZG9tVGV4dDtcbiJdfQ== */\n/*@ sourceURL=/Users/jasonoverby/p/random-text-site/pages/index.tsx */"));
};

var getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var randomWords;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_random_text_src_utils__WEBPACK_IMPORTED_MODULE_7__["getRandomWords"])();

          case 2:
            randomWords = _context2.sent;
            return _context2.abrupt("return", {
              randomWords: randomWords
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getInitialProps() {
    return _ref3.apply(this, arguments);
  };
}();

RandomText.getInitialProps = getInitialProps;
/* harmony default export */ __webpack_exports__["default"] = (RandomText);

/***/ }),

/***/ "./random-text/text/strings.json":
/*!***************************************!*\
  !*** ./random-text/text/strings.json ***!
  \***************************************/
/*! exports provided: phrases, specials, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"phrases\":[\"succeed unpredictable sentence\",\"dirty strong reality\",\"include tropical dollar\",\"discuss treated cowboy\",\"ask new fact\",\"receive actual telepathy\",\"become larger magic\",\"please typical shark\",\"eat dangerous assemblage\",\"live built character\",\"remain mad cage\",\"complete unknowable house\",\"recognize held seventies\",\"recognize additional eight\",\"remember dangerous ape\",\"provide unhappy ale\",\"discuss angry mouth\"],\"specials\":[\"America\",\"seventies\",\"pattern\",\"open\",\"unknowable\",\"ghosts\",\"character\",\"holographic\",\"assemblage\",\"surprised\",\"unpredictable\",\"beautiful\",\"magic\",\"accretion\",\"cage\",\"new\",\"realities\",\"reality\",\"densely\",\"phenomena\",\"tattoo\",\"chemical\",\"Gloria\",\"Crispin\",\"tropical\",\"electric\",\"cowboy\",\"snake\",\"shark\",\"tiger\",\"discrete\",\"fuzzy\",\"eight\"]}");

/***/ })

})
//# sourceMappingURL=index.js.c1e3c643e600edae4bd7.hot-update.js.map