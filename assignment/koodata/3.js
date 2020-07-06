(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(35);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/plugins/axios.js

var instance = axios_default.a.create({
  baseURL: "".concat("https://api.themoviedb.org/3/")
});
instance.interceptors.response.use(function (response) {
  return response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
}, function (error) {
  return Promise.reject(error);
});
/* harmony default export */ var plugins_axios = (instance);
// CONCATENATED MODULE: ./src/apis/tmdb.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ var tmdb = __webpack_exports__["a"] = ({
  getMovie: function getMovie(_ref) {
    var movie_id = _ref.movie_id,
        params = _objectWithoutProperties(_ref, ["movie_id"]);

    return plugins_axios.get("/movie/".concat(movie_id), {
      params: params
    });
  },
  getPlaying: function getPlaying(params) {
    return plugins_axios.get('/movie/now_playing', {
      params: params
    });
  },
  getFavor: function getFavor(params) {
    return plugins_axios.get('/account/{account_id}/favorite/movies', {
      params: params
    });
  },
  discoverMovies: function discoverMovies(params) {
    return plugins_axios.get('/discover/movie', {
      params: params
    });
  }
});

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(27);

// CONCATENATED MODULE: ./src/modules/MovieRate.jsx


var FULLMARKS = 10;
var ARRAY_ZERO = new Array(FULLMARKS).fill(0);

var MovieRate_MovieRate = function MovieRate(props) {
  var score = props.rate || 0;
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: ['module-movie-rate', props.className].join(' ')
  }, ARRAY_ZERO.map(function (entry, order) {
    var iconConfig = [];
    var index = order + 1;

    if (score - index >= 0) {
      iconConfig = ['fas', 'star'];
    } else if (score - index >= -0.5) {
      iconConfig = ['fas', 'star-half-alt'];
    } else {
      iconConfig = ['far', 'star'];
    }

    return /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
      className: "rate_star",
      icon: iconConfig,
      fixedWidth: true,
      key: index
    });
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: "rate_score"
  }, score));
};

/* harmony default export */ var modules_MovieRate = (MovieRate_MovieRate);
// EXTERNAL MODULE: ./src/apis/tmdb.js + 1 modules
var tmdb = __webpack_require__(34);

// EXTERNAL MODULE: ./src/assets/definitions/routeMap.js
var routeMap = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/PageMovieInfo.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var base_IMAGE_URL = "".concat("https://image.tmdb.org", "/t/p/w185");
var parameter_basic = {
  api_key: "eaa119d0f0242c41deb3741c5e14de31" || false,
  language: 'zh-TW'
};
var PageMovieInfo = Object(react_router["g" /* withRouter */])(function (props) {
  var query = new URLSearchParams(props.location.search);
  var state_movieInfo = PageMovieInfo_useMoviesState();
  var styleConfig = {
    'backgroundImage': state_movieInfo.data && state_movieInfo.data.poster_path ? "url(".concat(base_IMAGE_URL + state_movieInfo.data.poster_path, ")") : ''
  };
  Object(react["useEffect"])(function () {
    window.scrollTo(0, 0);

    _getMovie();
  }, []);

  function _getMovie() {
    var parameter = _objectSpread(_objectSpread({}, parameter_basic), {}, {
      'movie_id': query.get('movie_id')
    });

    tmdb["a" /* default */].getMovie(parameter).then(function (_ref) {
      var data = _ref.data;
      console.log(data);
      state_movieInfo.update(data);
    });
  }

  function _backToOverview() {
    props.history.push(routeMap["a" /* default */].MOVIE_OVERVIEW);
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    id: "page-movie-info"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "info_head"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "head_back",
    onClick: _backToOverview
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "overview_icon",
    icon: ['fas', 'hand-point-left'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: "back_text"
  }, "\u56DE\u6E05\u55AE"))), state_movieInfo.data ? /*#__PURE__*/react_default.a.createElement("div", {
    className: "info_body"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "body_section section-basic"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "basic_photo",
    style: styleConfig
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "basic_content"
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: "content_title"
  }, state_movieInfo.data.title, /*#__PURE__*/react_default.a.createElement("span", {
    className: "title_date"
  }, "(".concat(state_movieInfo.data.release_date, ")"))), /*#__PURE__*/react_default.a.createElement("h2", {
    className: "content_originalTitle"
  }, state_movieInfo.data.original_title), /*#__PURE__*/react_default.a.createElement(modules_MovieRate, {
    className: "content_rate",
    rate: state_movieInfo.data.vote_average
  }), function () {
    var genres = [];
    (state_movieInfo.data.genres || []).forEach(function (entry) {
      genres.push(entry.name);
    });
    return /*#__PURE__*/react_default.a.createElement("p", {
      className: "content_genres"
    }, genres.join('、'));
  }(), /*#__PURE__*/react_default.a.createElement("p", {
    className: "content_runtime"
  }, "\u5F71\u7247\u6642\u9593\uFF1A".concat(state_movieInfo.data.runtime, " \u5206\u9418")), function () {
    var original = [];
    var translated = [];
    (state_movieInfo.data.spoken_languages || []).forEach(function (entry) {
      if (entry.iso_639_1 === state_movieInfo.data.original_language) {
        original.push(entry.name);
      } else {
        translated.push(entry.name);
      }
    });
    return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("p", {
      className: "content_originalLang"
    }, "\u5F71\u7247\u539F\u6587\uFF1A".concat(original.join('、'))), translated.length ? /*#__PURE__*/react_default.a.createElement("p", {
      className: "content_translatedLang"
    }, "\u5F71\u7247\u7FFB\u8B6F\uFF1A".concat(translated.join('、'))) : []);
  }(), /*#__PURE__*/react_default.a.createElement("p", {
    className: "content_description"
  }, state_movieInfo.data.overview), state_movieInfo.data.homepage ? /*#__PURE__*/react_default.a.createElement("a", {
    className: "content_homePage",
    href: state_movieInfo.data.homepage,
    target: "_blank"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    icon: ['fas', 'external-link-alt'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement("span", null, "\u5B98\u65B9\u4ECB\u7D39")) : []))) : []);
});

var PageMovieInfo_useMoviesState = function useMoviesState() {
  var _useState = Object(react["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      updateMovies = _useState2[1];

  return {
    data: data,
    update: function update(movies) {
      updateMovies(movies);
    }
  };
};

/* harmony default export */ var components_PageMovieInfo = (PageMovieInfo);
// CONCATENATED MODULE: ./src/routes/InfoContainer.jsx



var InfoContainer_InfoContainer = function InfoContainer() {
  return /*#__PURE__*/react_default.a.createElement(components_PageMovieInfo, null);
};

/* harmony default export */ var routes_InfoContainer = __webpack_exports__["default"] = (InfoContainer_InfoContainer);

/***/ })

}]);