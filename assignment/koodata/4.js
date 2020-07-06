(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ 60:
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

// CONCATENATED MODULE: ./src/modules/MovieCard.jsx


var base_IMAGE_URL = "".concat("https://image.tmdb.org", "/t/p/w92");

var MovieCard_MovieCard = function MovieCard(props) {
  var styleConfig = {
    'backgroundImage': "url(".concat(base_IMAGE_URL + props.movie.poster_path, ")")
  };

  function _clickMovie() {
    if (typeof props.onMovieClick == 'function') {
      props.onMovieClick(props.movie);
    }
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-movie-card",
    style: styleConfig,
    onClick: _clickMovie
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "card_shadow"
  }, /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
    className: "movies_icon",
    icon: ['fas', 'info-circle'],
    fixedWidth: true
  }), /*#__PURE__*/react_default.a.createElement("p", {
    className: "card_detail"
  }, "\u96FB\u5F71\u8CC7\u8A0A")));
};

/* harmony default export */ var modules_MovieCard = (MovieCard_MovieCard);
// CONCATENATED MODULE: ./src/modules/MovieList.jsx



var MovieList_MovieList = function MovieList(props) {
  function _clickMovie(movie) {
    if (typeof props.onMovieClick == 'function') {
      props.onMovieClick(movie);
    }
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-movie-list"
  }, /*#__PURE__*/react_default.a.createElement("label", {
    className: "list_title"
  }, props.title), /*#__PURE__*/react_default.a.createElement("div", {
    className: "list_content"
  }, function () {
    if (props.data) {
      return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, props.data.map(function (movie) {
        return movie.poster_path ? /*#__PURE__*/react_default.a.createElement(modules_MovieCard, {
          movie: movie,
          key: movie.id,
          onMovieClick: _clickMovie
        }) : [];
      }));
    } else {
      return /*#__PURE__*/react_default.a.createElement("div", null, "Loading ...");
    }
  }()));
};

/* harmony default export */ var modules_MovieList = (MovieList_MovieList);
// EXTERNAL MODULE: ./src/apis/tmdb.js + 1 modules
var tmdb = __webpack_require__(34);

// CONCATENATED MODULE: ./src/functions/padZero.js
function padZero(value, digit, position) {
  var str_value = value.toString();
  var offset = digit - str_value.length;
  var str_pad = new Array(offset > 0 ? offset : 0).fill(0).join('');
  var result = '';

  switch (position) {
    case 'after':
      result = str_value + str_pad;
      break;

    case 'before':
    default:
      result = str_pad + str_value;
      break;
  }

  return result;
}

/* harmony default export */ var functions_padZero = (padZero);
// EXTERNAL MODULE: ./src/assets/definitions/routeMap.js
var routeMap = __webpack_require__(11);

// CONCATENATED MODULE: ./src/components/PageMovieOverview.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var parameter_basic = {
  api_key: "eaa119d0f0242c41deb3741c5e14de31" || false,
  session_id: "f488fee7c2ae90be14eef1b1ffed16dbf5c1baf3" || false,
  language: 'zh-TW',
  sort_by: 'popularity.desc',
  region: 'TW'
};
var PageMovieOverview = Object(react_router["g" /* withRouter */])(function (props) {
  var state_releaseMovies = PageMovieOverview_useMoviesState();
  var state_favoredMovies = PageMovieOverview_useMoviesState();
  var state_currentMovies = PageMovieOverview_useMoviesState();
  Object(react["useEffect"])(function () {
    window.scrollTo(0, 0);

    _discoverMovies();

    _getFavoredMovies();

    _getCurrentMovies();
  }, []);

  function _discoverMovies() {
    var parameter = _objectSpread({}, parameter_basic);

    tmdb["a" /* default */].getPlaying(parameter).then(function (_ref) {
      var data = _ref.data;
      state_releaseMovies.update(data.results);
    });
  }

  function _getFavoredMovies() {
    var parameter = _objectSpread({}, parameter_basic);

    tmdb["a" /* default */].getFavor(parameter).then(function (_ref2) {
      var data = _ref2.data;
      state_favoredMovies.update(data.results);
    });
  }

  function _getCurrentMovies() {
    var begin = new Date(Date.now() - 2 * 7 * 24 * 60 * 60 * 1000);
    var end = new Date(Date.now() + 2 * 7 * 24 * 60 * 60 * 1000);

    var parameter = _objectSpread(_objectSpread({}, parameter_basic), {}, {
      'primary_release_date.gte': "".concat(begin.getFullYear(), "-").concat(functions_padZero(begin.getMonth() + 1, 2), "-").concat(functions_padZero(begin.getDate(), 2)),
      'primary_release_date.lte': "".concat(end.getFullYear(), "-").concat(functions_padZero(end.getMonth() + 1, 2), "-").concat(functions_padZero(end.getDate(), 2))
    });

    tmdb["a" /* default */].discoverMovies(parameter).then(function (_ref3) {
      var data = _ref3.data;
      state_currentMovies.update(data.results);
    });
  }

  function _readMovieDetail(movie) {
    props.history.push({
      pathname: routeMap["a" /* default */].MOVIE_INFO,
      search: "?movie_id=".concat(movie.id)
    });
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    id: "page-movie-overview"
  }, /*#__PURE__*/react_default.a.createElement(modules_MovieList, {
    title: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, '上映中電影', " ", /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
      className: "overview_icon",
      icon: ['fas', 'video'],
      fixedWidth: true
    })),
    data: state_releaseMovies.movies,
    onMovieClick: _readMovieDetail
  }), /*#__PURE__*/react_default.a.createElement(modules_MovieList, {
    title: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, '喜愛的電影', " ", /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
      className: "overview_icon",
      icon: ['fas', 'star'],
      fixedWidth: true
    })),
    data: state_favoredMovies.movies,
    onMovieClick: _readMovieDetail
  }), /*#__PURE__*/react_default.a.createElement(modules_MovieList, {
    title: /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, '近期上映', " ", /*#__PURE__*/react_default.a.createElement(index_es["FontAwesomeIcon"], {
      className: "overview_icon",
      icon: ['fas', 'film'],
      fixedWidth: true
    })),
    data: state_currentMovies.movies,
    onMovieClick: _readMovieDetail
  }));
});

var PageMovieOverview_useMoviesState = function useMoviesState() {
  var _useState = Object(react["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      movies = _useState2[0],
      updateMovies = _useState2[1];

  return {
    movies: movies,
    update: function update(movies) {
      updateMovies(movies);
    }
  };
};

/* harmony default export */ var components_PageMovieOverview = (PageMovieOverview);
// CONCATENATED MODULE: ./src/routes/OverviewContainer.jsx



var OverviewContainer_OverviewContainer = function OverviewContainer() {
  return /*#__PURE__*/react_default.a.createElement(components_PageMovieOverview, null);
};

/* harmony default export */ var routes_OverviewContainer = __webpack_exports__["default"] = (OverviewContainer_OverviewContainer);

/***/ })

}]);