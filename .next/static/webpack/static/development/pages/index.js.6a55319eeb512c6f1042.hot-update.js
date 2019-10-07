webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");
/* harmony import */ var _random_text_src_get_random_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../random-text/src/get-random-text */ "./random-text/src/get-random-text.ts");
/* harmony import */ var _random_text_src_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../random-text/src/utils */ "./random-text/src/utils.ts");
/* harmony import */ var _random_text_text_phrases_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../random-text/text/phrases.json */ "./random-text/text/phrases.json");
var _random_text_text_phrases_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../random-text/text/phrases.json */ "./random-text/text/phrases.json", 1);


var _jsxFileName = "/Users/jasonoverby/p/random-text-site/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var NUMBER_OF_PHRASES = 3;
var STARTER_PHRASE = 'get random text';
var STOCK_PHRASES = _random_text_text_phrases_json__WEBPACK_IMPORTED_MODULE_7__["phrases"];

var getRandomPhrases =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(randomWords) {
    var phrases, i, phrase;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
            return Object(_random_text_src_get_random_text__WEBPACK_IMPORTED_MODULE_5__["default"])(randomWords);

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

var getRandomPhrasesDebounced = Object(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_4__["default"])(getRandomPhrases, 500);

var getPhrase = function getPhrase(phrases, phrase) {
  var randomIndex = Object(_random_text_src_utils__WEBPACK_IMPORTED_MODULE_6__["getRandomNumber"])(0, STOCK_PHRASES.length - 1);
  return STOCK_PHRASES[randomIndex];
};

var RandomText = function RandomText(_ref2) {
  var randomWords = _ref2.randomWords;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([STARTER_PHRASE]),
      phrases = _useState[0],
      setPhrases = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(STARTER_PHRASE),
      phrase = _useState2[0],
      setPhrase = _useState2[1];

  var handleClick = function handleClick() {
    console.log('phrases', phrases);
    var newPhrase = getPhrase(phrases, phrase);

    if (phrase !== phrases[0]) {
      setPhrase(newPhrase);

      var _newPhrases = phrases.filter(function (thePhrase) {
        return thePhrase === STARTER_PHRASE;
      });

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
      lineNumber: 57
    },
    __self: this
  }, __jsx("h1", {
    onClick: handleClick,
    className: "jsx-1924471468",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, phrase), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1924471468",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');body{background:#000;}.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{color:rgb(255,235,238);cursor:pointer;font:32px 'fira code',menlo,helvetica,arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbm92ZXJieS9wL3JhbmRvbS10ZXh0LXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEUyxBQUV3RixBQUUzRCxBQUlILEFBT1ksZ0JBVjNCLE9BV2lCLGVBQzRDLG9DQVI5QyxhQUNVLE1BUXpCLDZGQVBxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2phc29ub3ZlcmJ5L3AvcmFuZG9tLXRleHQtc2l0ZS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBd2Vzb21lRGVib3VuY2VQcm9taXNlIGZyb20gJ2F3ZXNvbWUtZGVib3VuY2UtcHJvbWlzZSc7XG5pbXBvcnQgZ2V0UmFuZG9tUGhyYXNlIGZyb20gJy4uL3JhbmRvbS10ZXh0L3NyYy9nZXQtcmFuZG9tLXRleHQnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tV29yZHMsIGdldFJhbmRvbU51bWJlciB9IGZyb20gJy4uL3JhbmRvbS10ZXh0L3NyYy91dGlscyc7XG5pbXBvcnQgKiBhcyBzdG9ja1BocmFzZXNKc29uIGZyb20gJy4uL3JhbmRvbS10ZXh0L3RleHQvcGhyYXNlcy5qc29uJztcblxuY29uc3QgTlVNQkVSX09GX1BIUkFTRVMgPSAzO1xuY29uc3QgU1RBUlRFUl9QSFJBU0UgPSAnZ2V0IHJhbmRvbSB0ZXh0JztcbmNvbnN0IFNUT0NLX1BIUkFTRVMgPSBzdG9ja1BocmFzZXNKc29uLnBocmFzZXM7XG5cbmNvbnN0IGdldFJhbmRvbVBocmFzZXMgPSBhc3luYyAocmFuZG9tV29yZHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IHBocmFzZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1CRVJfT0ZfUEhSQVNFUzsgaSArPSAxKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBocmFzZSA9IGF3YWl0IGdldFJhbmRvbVBocmFzZShyYW5kb21Xb3Jkcyk7XG4gICAgICBwaHJhc2VzLnB1c2gocGhyYXNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG4gIHJldHVybiBwaHJhc2VzO1xufTtcbmNvbnN0IGdldFJhbmRvbVBocmFzZXNEZWJvdW5jZWQgPSBBd2Vzb21lRGVib3VuY2VQcm9taXNlKGdldFJhbmRvbVBocmFzZXMsIDUwMCk7XG5jb25zdCBnZXRQaHJhc2UgPSAocGhyYXNlczogc3RyaW5nW10sIHBocmFzZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gZ2V0UmFuZG9tTnVtYmVyKDAsIFNUT0NLX1BIUkFTRVMubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBTVE9DS19QSFJBU0VTW3JhbmRvbUluZGV4XTtcbn07XG5cbmNvbnN0IFJhbmRvbVRleHQgPSAoeyByYW5kb21Xb3JkcyB9OiB7IHJhbmRvbVdvcmRzOiBzdHJpbmdbXSB9KSA9PiB7XG4gIGNvbnN0IFtwaHJhc2VzLCBzZXRQaHJhc2VzXSA9IHVzZVN0YXRlKFtTVEFSVEVSX1BIUkFTRV0pO1xuICBjb25zdCBbcGhyYXNlLCBzZXRQaHJhc2VdID0gdXNlU3RhdGUoU1RBUlRFUl9QSFJBU0UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwaHJhc2VzJywgcGhyYXNlcyk7XG4gICAgY29uc3QgbmV3UGhyYXNlID0gZ2V0UGhyYXNlKHBocmFzZXMsIHBocmFzZSk7XG4gICAgaWYgKHBocmFzZSAhPT0gcGhyYXNlc1swXSkge1xuICAgICAgc2V0UGhyYXNlKG5ld1BocmFzZSk7XG4gICAgICBjb25zdCBuZXdQaHJhc2VzID0gcGhyYXNlcy5maWx0ZXIoXG4gICAgICAgICh0aGVQaHJhc2U6IHN0cmluZykgPT4gdGhlUGhyYXNlID09PSBTVEFSVEVSX1BIUkFTRSxcbiAgICAgICk7XG4gICAgICBzZXRQaHJhc2VzKG5ld1BocmFzZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRQaHJhc2UocGhyYXNlc1swXSk7XG4gICAgfVxuICAgIGxldCBuZXdQaHJhc2VzID0gKHBocmFzZXMgJiYgcGhyYXNlcy5zbGljZSgxKSkgfHwgW107XG4gICAgaWYgKG5ld1BocmFzZXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgIGdldFJhbmRvbVBocmFzZXNEZWJvdW5jZWQocmFuZG9tV29yZHMpLnRoZW4oKHJhbmRvbVBocmFzZXMpID0+IHtcbiAgICAgICAgc2V0UGhyYXNlcyhuZXdQaHJhc2VzLmNvbmNhdChyYW5kb21QaHJhc2VzKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3UGhyYXNlcyA9IHBocmFzZXMuc2xpY2UoMSk7XG4gICAgICBzZXRQaHJhc2VzKG5ld1BocmFzZXMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDEgb25DbGljaz17aGFuZGxlQ2xpY2t9PntwaHJhc2V9PC9oMT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStDb2RlJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyMzUsIDIzOCk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBmb250OiAzMnB4ICdmaXJhIGNvZGUnLCBtZW5sbywgaGVsdmV0aWNhLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByYW5kb21Xb3JkcyA9IGF3YWl0IGdldFJhbmRvbVdvcmRzKCk7XG4gIHJldHVybiB7IHJhbmRvbVdvcmRzIH07XG59O1xuUmFuZG9tVGV4dC5nZXRJbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmRvbVRleHQ7XG4iXX0= */\n/*@ sourceURL=/Users/jasonoverby/p/random-text-site/pages/index.tsx */"));
};

var getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var randomWords;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_random_text_src_utils__WEBPACK_IMPORTED_MODULE_6__["getRandomWords"])();

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

/***/ })

})
//# sourceMappingURL=index.js.6a55319eeb512c6f1042.hot-update.js.map