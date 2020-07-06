(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(137);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);




var instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: "".concat("https://api-test.potentia.tech")
});
instance.interceptors.request.use(function (config) {
  var xAccessToken = _src_store_js__WEBPACK_IMPORTED_MODULE_3__[/* store */ "b"].getState().user.xAccessToken || '';

  if (xAccessToken) {
    config.headers['X-Access-Token'] = "".concat(xAccessToken);
  }

  return Promise.resolve(config);
}, function (error) {
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  return response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
}, function (error) {
  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_plugins_axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
 // Note: The error code of API should be claimed in documemt.

/* harmony default export */ __webpack_exports__["a"] = ({
  loginUser: function loginUser(payload) {
    // Note: For general definition, there is a suggestion to use username install of account. Unless the account defined to the account like "bank's account".
    return _src_plugins_axios_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/login', payload);
  },
  refreshToken: function refreshToken() {
    // Note: If the time of reaction to front-end are concerned, there is a suggestion to auto-refresh within each successful package which is sent with token.
    return _src_plugins_axios_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/api/refresh');
  },
  getUserInfo: function getUserInfo() {
    // Note: The same suggestion with API:loginUser(/api/login).
    return _src_plugins_axios_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/api/me');
  }
});

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Page = function Page(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: props.id,
    className: "module-page"
  }, props.headline ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page_headline border-bottom"
  }, props.headline) : [], props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(126);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(128);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__(129);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(119);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(120);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Table.js





var Table = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      striped = _ref.striped,
      bordered = _ref.bordered,
      borderless = _ref.borderless,
      hover = _ref.hover,
      size = _ref.size,
      variant = _ref.variant,
      responsive = _ref.responsive,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "striped", "bordered", "borderless", "hover", "size", "variant", "responsive"]);

  var decoratedBsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'table');
  var classes = classnames_default()(className, decoratedBsPrefix, variant && decoratedBsPrefix + "-" + variant, size && decoratedBsPrefix + "-" + size, striped && decoratedBsPrefix + "-striped", bordered && decoratedBsPrefix + "-bordered", borderless && decoratedBsPrefix + "-borderless", hover && decoratedBsPrefix + "-hover");
  var table = /*#__PURE__*/react_default.a.createElement("table", Object(esm_extends["a" /* default */])({}, props, {
    className: classes,
    ref: ref
  }));

  if (responsive) {
    var responsiveClass = decoratedBsPrefix + "-responsive";

    if (typeof responsive === 'string') {
      responsiveClass = responsiveClass + "-" + responsive;
    }

    return /*#__PURE__*/react_default.a.createElement("div", {
      className: responsiveClass
    }, table);
  }

  return table;
});
/* harmony default export */ var esm_Table = (Table);
// EXTERNAL MODULE: ./src/modules/page/Page.jsx
var Page = __webpack_require__(141);

// EXTERNAL MODULE: ./src/assets/definitions/routeMap.js
var routeMap = __webpack_require__(31);

// EXTERNAL MODULE: ./src/apis/auth.js
var auth = __webpack_require__(135);

// EXTERNAL MODULE: ./src/stores/userStore.js
var userStore = __webpack_require__(47);

// CONCATENATED MODULE: ./src/components/user/Information.jsx












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var tableHeader = [{
  index: 'account',
  title: '帳戶名稱'
}, {
  index: 'name',
  title: '帳戶持有人'
}];

var Information_UserInformation = function UserInformation(props) {
  var env = {
    state_info: useInfoState({})
  };
  Object(react["useEffect"])(function () {
    _getUserInfo(true);
  }, []);

  function _getUserInfo(isRetryable) {
    auth["a" /* default */].getUserInfo().then(function (_ref) {
      var data = _ref.data;
      env.state_info.onChange(data);
    })["catch"](function (error) {
      switch (error.response.status) {
        case 401:
          if (isRetryable) {
            _refreshToken(_getUserInfo);
          } else {
            alert("未預期錯誤：如刷新頁面仍有發生問題，請聯繫客服人員。");
            throw Error(error);
          }

          break;

        default:
          alert("未預期錯誤：如刷新頁面仍有發生問題，請聯繫客服人員。");
          throw Error(error);
      }
    });
  }

  function _refreshToken(retryAPI) {
    auth["a" /* default */].refreshToken().then(function (_ref2) {
      var data = _ref2.data;
      var obj = {
        'xAccessToken': data.token
      };
      props.dispatch(userStore["a" /* userAction */].refreshToken(obj));
      retryAPI(false);
    })["catch"](function (error) {
      if (error.response.status === 400) {
        alert('帳號已登出：請重新登入帳號。');
        history.push(routeMap["a" /* default */].AUTH_LOGIN);
      }

      throw Error(error);
    });
  }

  return /*#__PURE__*/react_default.a.createElement(Page["a" /* default */], {
    id: "page-user-info",
    headline: "User Information"
  }, /*#__PURE__*/react_default.a.createElement(esm_Table, {
    bordered: true,
    hover: true,
    size: "sm"
  }, /*#__PURE__*/react_default.a.createElement("tbody", {
    className: "user-info_table"
  }, tableHeader.map(function (head) {
    return /*#__PURE__*/react_default.a.createElement("tr", {
      key: head.index
    }, /*#__PURE__*/react_default.a.createElement("th", null, head.title), /*#__PURE__*/react_default.a.createElement("td", null, env.state_info.value[head.index] || ''));
  }))));
};

function useInfoState(defaultSate) {
  var _useState = Object(react["useState"])(defaultSate),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  return {
    value: value,
    onChange: function onChange(data) {
      setState(data);
    }
  };
}

/* harmony default export */ var Information = __webpack_exports__["default"] = (Object(es["b" /* connect */])()(Information_UserInformation));

/***/ })

}]);