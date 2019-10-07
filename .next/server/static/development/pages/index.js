module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! awesome-debounce-promise */ "awesome-debounce-promise");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _random_text_src_get_random_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../random-text/src/get-random-text */ "./random-text/src/get-random-text.ts");
/* harmony import */ var _random_text_src_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../random-text/src/utils */ "./random-text/src/utils.ts");
var _jsxFileName = "/Users/jasonoverby/p/random-text-site/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const NUMBER_OF_PHRASES = 3;
const STARTER_PHRASE = 'get random text';

const getRandomPhrases = async randomWords => {
  const phrases = [];

  for (let i = 0; i < NUMBER_OF_PHRASES; i += 1) {
    try {
      const phrase = await Object(_random_text_src_get_random_text__WEBPACK_IMPORTED_MODULE_3__["default"])(randomWords);
      phrases.push(phrase);
    } catch (err) {
      console.log(err);
    }
  }

  return phrases;
};

const getRandomPhrasesDebounced = awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_2___default()(getRandomPhrases, 500);

const RandomText = ({
  randomWords
}) => {
  const {
    0: phrases,
    1: setPhrases
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([STARTER_PHRASE]);
  const {
    0: phrase,
    1: setPhrase
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(STARTER_PHRASE); // useEffect(() => {
  //   if (!phrases || phrases.length === 0) {
  //     getRandomPhrases(randomWords).then((newPhrases) => {
  //       setPhrases(phrases);
  //     });
  //   }
  // });

  const handleClick = () => {
    console.log('phrases', phrases);
    setPhrase(phrases[0]);
    let newPhrases = phrases && phrases.slice(1) || [];

    if (newPhrases.length <= 1) {
      getRandomPhrasesDebounced(randomWords).then(randomPhrases => {
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
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("h1", {
    onClick: handleClick,
    className: "jsx-1924471468",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, phrase), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1924471468",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');body{background:#000;}.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1{color:rgb(255,235,238);cursor:pointer;font:32px 'fira code',menlo,helvetica,arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbm92ZXJieS9wL3JhbmRvbS10ZXh0LXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EUyxBQUV3RixBQUUzRCxBQUlILEFBT1ksZ0JBVjNCLE9BV2lCLGVBQzRDLG9DQVI5QyxhQUNVLE1BUXpCLDZGQVBxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2phc29ub3ZlcmJ5L3AvcmFuZG9tLXRleHQtc2l0ZS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF3ZXNvbWVEZWJvdW5jZVByb21pc2UgZnJvbSAnYXdlc29tZS1kZWJvdW5jZS1wcm9taXNlJztcbmltcG9ydCBnZXRSYW5kb21QaHJhc2UgZnJvbSAnLi4vcmFuZG9tLXRleHQvc3JjL2dldC1yYW5kb20tdGV4dCc7XG5pbXBvcnQgeyBnZXRSYW5kb21Xb3JkcyB9IGZyb20gJy4uL3JhbmRvbS10ZXh0L3NyYy91dGlscyc7XG5cbmNvbnN0IE5VTUJFUl9PRl9QSFJBU0VTID0gMztcbmNvbnN0IFNUQVJURVJfUEhSQVNFID0gJ2dldCByYW5kb20gdGV4dCc7XG5cbmNvbnN0IGdldFJhbmRvbVBocmFzZXMgPSBhc3luYyAocmFuZG9tV29yZHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IHBocmFzZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1CRVJfT0ZfUEhSQVNFUzsgaSArPSAxKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBocmFzZSA9IGF3YWl0IGdldFJhbmRvbVBocmFzZShyYW5kb21Xb3Jkcyk7XG4gICAgICBwaHJhc2VzLnB1c2gocGhyYXNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG4gIHJldHVybiBwaHJhc2VzO1xufTtcbmNvbnN0IGdldFJhbmRvbVBocmFzZXNEZWJvdW5jZWQgPSBBd2Vzb21lRGVib3VuY2VQcm9taXNlKGdldFJhbmRvbVBocmFzZXMsIDUwMCk7XG5cbmNvbnN0IFJhbmRvbVRleHQgPSAoeyByYW5kb21Xb3JkcyB9OiB7IHJhbmRvbVdvcmRzOiBzdHJpbmdbXSB9KSA9PiB7XG4gIGNvbnN0IFtwaHJhc2VzLCBzZXRQaHJhc2VzXSA9IHVzZVN0YXRlKFtTVEFSVEVSX1BIUkFTRV0pO1xuICBjb25zdCBbcGhyYXNlLCBzZXRQaHJhc2VdID0gdXNlU3RhdGUoU1RBUlRFUl9QSFJBU0UpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghcGhyYXNlcyB8fCBwaHJhc2VzLmxlbmd0aCA9PT0gMCkge1xuICAvLyAgICAgZ2V0UmFuZG9tUGhyYXNlcyhyYW5kb21Xb3JkcykudGhlbigobmV3UGhyYXNlcykgPT4ge1xuICAvLyAgICAgICBzZXRQaHJhc2VzKHBocmFzZXMpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncGhyYXNlcycsIHBocmFzZXMpO1xuICAgIHNldFBocmFzZShwaHJhc2VzWzBdKTtcbiAgICBsZXQgbmV3UGhyYXNlcyA9IChwaHJhc2VzICYmIHBocmFzZXMuc2xpY2UoMSkpIHx8IFtdO1xuICAgIGlmIChuZXdQaHJhc2VzLmxlbmd0aCA8PSAxKSB7XG4gICAgICBnZXRSYW5kb21QaHJhc2VzRGVib3VuY2VkKHJhbmRvbVdvcmRzKS50aGVuKChyYW5kb21QaHJhc2VzKSA9PiB7XG4gICAgICAgIHNldFBocmFzZXMobmV3UGhyYXNlcy5jb25jYXQocmFuZG9tUGhyYXNlcykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1BocmFzZXMgPSBwaHJhc2VzLnNsaWNlKDEpO1xuICAgICAgc2V0UGhyYXNlcyhuZXdQaHJhc2VzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57cGhyYXNlfTwvaDE+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZpcmErQ29kZSZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjM1LCAyMzgpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udDogMzJweCAnZmlyYSBjb2RlJywgbWVubG8sIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmFuZG9tV29yZHMgPSBhd2FpdCBnZXRSYW5kb21Xb3JkcygpO1xuICByZXR1cm4geyByYW5kb21Xb3JkcyB9O1xufTtcblJhbmRvbVRleHQuZ2V0SW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBSYW5kb21UZXh0O1xuIl19 */\n/*@ sourceURL=/Users/jasonoverby/p/random-text-site/pages/index.tsx */"));
};

const getInitialProps = async () => {
  const randomWords = await Object(_random_text_src_utils__WEBPACK_IMPORTED_MODULE_4__["getRandomWords"])();
  return {
    randomWords
  };
};

RandomText.getInitialProps = getInitialProps;
/* harmony default export */ __webpack_exports__["default"] = (RandomText);

/***/ }),

/***/ "./random-text/src/get-random-text.ts":
/*!********************************************!*\
  !*** ./random-text/src/get-random-text.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _specials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./specials */ "./random-text/src/specials.ts");
/* harmony import */ var _get_word__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-word */ "./random-text/src/get-word.ts");
/* harmony import */ var _pos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pos */ "./random-text/src/pos.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./random-text/src/utils.ts");




const DEFAULT_NUMBER_OF_LETTERS = 200;
const WIGGLE_ROOM = 3;

const getRandomPhrase = async randomWords => {
  const numberOfLetters = DEFAULT_NUMBER_OF_LETTERS;
  const partsOfSpeech = ['v', 'adj', 'n'];
  const specialsWord = await Object(_specials__WEBPACK_IMPORTED_MODULE_0__["default"])();
  let specialsWordPOS = await Object(_pos__WEBPACK_IMPORTED_MODULE_2__["getPOS"])(specialsWord);
  let str = '';

  while (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isShiftable"])(partsOfSpeech) && str.length + WIGGLE_ROOM < numberOfLetters) {
    const pos = partsOfSpeech.shift();
    let word = '';

    if (specialsWordPOS.includes(pos)) {
      word = specialsWord;
      specialsWordPOS = [];
    } else {
      word = await Object(_get_word__WEBPACK_IMPORTED_MODULE_1__["default"])(pos, randomWords);
      const indexOfWord = randomWords.indexOf(word);
      randomWords.splice(indexOfWord, 1);
    }

    if (`${str} ${word}`.length < numberOfLetters) {
      str += ` ${word}`;
    }
  }

  return str.trim();
};

/* harmony default export */ __webpack_exports__["default"] = (getRandomPhrase);

/***/ }),

/***/ "./random-text/src/get-word.ts":
/*!*************************************!*\
  !*** ./random-text/src/get-word.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos */ "./random-text/src/pos.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./random-text/src/utils.ts");



// TODO: change to 500 when live
const prepareWords = words => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["shuffleArr"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["removeNonAlphaChars"])([...words]));

const getWords = () => ({
  conjunctions: 'and but for or so yet nor'.split(' '),
  prepositions: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["multilineStrToArrayOfWords"])(`of in to for with on at from
        by about as into like through after over between out against during without
        before under around among`),
  determiners: 'the this that those every each'.split(' ')
});

const getRandomWordFromWords = pos => {
  const words = getWords();
  const arr = words[pos];

  if (arr) {
    return arr[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomNumber"])(0, arr.length - 1)];
  }

  return '';
};

const getWord = async (pos, randomWords) => {
  const preparedWords = prepareWords(randomWords);

  if (Object(_pos__WEBPACK_IMPORTED_MODULE_0__["isMuseApiPartOfSpeech"])(pos)) {
    for (let i = 0; i < preparedWords.length; i += 1) {
      const word = preparedWords[i];
      const isThisPOS = await Object(_pos__WEBPACK_IMPORTED_MODULE_0__["wordIsThisPOS"])(word, pos);
      if (isThisPOS) return word;
    }
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomWords"])().then(moreWords => {
    randomWords = randomWords.concat(moreWords);
  });
  return getRandomWordFromWords(pos);
};

/* harmony default export */ __webpack_exports__["default"] = (getWord);

/***/ }),

/***/ "./random-text/src/pos.ts":
/*!********************************!*\
  !*** ./random-text/src/pos.ts ***!
  \********************************/
/*! exports provided: getPOS, wordIsThisPOS, isPos, isMuseApiPartOfSpeech */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPOS", function() { return getPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordIsThisPOS", function() { return wordIsThisPOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPos", function() { return isPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMuseApiPartOfSpeech", function() { return isMuseApiPartOfSpeech; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);


const getPOS = async word => {
  const pos = [];
  const datamuseApiRes = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.datamuse.com/words?sp=${word}&md=p&max=1`);
  const datamuseApiJson = await datamuseApiRes.json();
  const wordObj = datamuseApiJson[0];

  if (wordObj && wordObj.tags) {
    const {
      tags
    } = wordObj;
    return tags;
  }

  return ['prop'];
};

const wordIsThisPOS = async (word, pos) => {
  const datamuseApiRes = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.datamuse.com/words?sp=${word}&md=p&max=1`);
  const datamuseApiJson = await datamuseApiRes.json(); // console.log(datamuseApiJson);

  const wordObj = datamuseApiJson[0];

  if (wordObj && wordObj.tags) {
    const {
      tags
    } = wordObj;
    return tags.includes(pos);
  } // TODO: REMOVE from randomWords


  return false;
};

const isPos = str => {
  const validPos = ['adj', 'adv', 'conjunctions', 'determiners', 'n', 'v', 'prop'];
  return validPos.includes(str);
};

const isMuseApiPartOfSpeech = str => {
  const validPos = ['adj', 'adv', 'n', 'v', 'prop'];
  return validPos.includes(str);
};



/***/ }),

/***/ "./random-text/src/specials.ts":
/*!*************************************!*\
  !*** ./random-text/src/specials.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./random-text/src/utils.ts");

const specials = ['America', 'seventies', 'pattern', 'open', 'unknowable', 'ghosts', 'character', 'holographic', 'assemblage', 'surprised', 'unpredictable', 'beautiful', 'magic', 'accretion', 'cage', 'new', 'realities', 'reality', 'densely', 'phenomena', 'tattoo', 'chemical', 'Gloria', 'Crispin', 'tropical', 'electric', 'cowboy', 'snake', 'shark', 'tiger', 'discrete', 'fuzzy', 'eight'];

const getSpecialsWord = async () => {
  const index = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomNumber"])(0, specials.length - 1);
  return specials[index];
};

/* harmony default export */ __webpack_exports__["default"] = (getSpecialsWord);

/***/ }),

/***/ "./random-text/src/utils.ts":
/*!**********************************!*\
  !*** ./random-text/src/utils.ts ***!
  \**********************************/
/*! exports provided: isShiftable, multilineStrToArrayOfWords, getRandomNumber, getRandomWords, removeNonAlphaChars, shuffleArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShiftable", function() { return isShiftable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multilineStrToArrayOfWords", function() { return multilineStrToArrayOfWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomWords", function() { return getRandomWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNonAlphaChars", function() { return removeNonAlphaChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleArr", function() { return shuffleArr; });
const NUMBER_OF_WORDS_TO_FETCH = 100;

const isShiftable = arr => arr.length > 0;

const multilineStrToArrayOfWords = str => str.split(' ').filter(char => char !== '');

const getRandomNumber = (val1, val2) => {
  const min = Math.min(val1, val2);
  const max = Math.max(val1, val2);
  if (min === max) return min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const removeNonAlphaChars = arr => arr.filter(word => /^[a-z]+$/i.test(word));

const shuffleArr = arr => {
  let currentIndex = arr.length;
  let temporaryValue;
  let randomIndex; // While there remain elements to shuffle...

  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
};

const getRandomWords = async () => {
  const wordsApiKeyRes = await fetch('https://random-word-api.herokuapp.com/key?');
  const wordsApiKey = await wordsApiKeyRes.text();
  const wordsApiRes = await fetch(`https://random-word-api.herokuapp.com/word?key=${wordsApiKey}&number=${NUMBER_OF_WORDS_TO_FETCH}`);
  return wordsApiRes.json();
};



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jasonoverby/p/random-text-site/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "awesome-debounce-promise":
/*!*******************************************!*\
  !*** external "awesome-debounce-promise" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("awesome-debounce-promise");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map