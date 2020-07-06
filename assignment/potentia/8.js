(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "files/logo.png");

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/pretty-checkbox-react/dist-web/index.js + 2 modules
var dist_web = __webpack_require__(203);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(200);

// EXTERNAL MODULE: ./src/history.js
var src_history = __webpack_require__(48);

// EXTERNAL MODULE: ./src/assets/definitions/routeMap.js
var routeMap = __webpack_require__(31);

// EXTERNAL MODULE: ./src/apis/auth.js
var auth = __webpack_require__(135);

// EXTERNAL MODULE: ./src/stores/userStore.js
var userStore = __webpack_require__(47);

// EXTERNAL MODULE: ./src/assets/images/logo.png
var logo = __webpack_require__(138);

// CONCATENATED MODULE: ./src/components/auth/Login.jsx












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















var mapStateToProps = function mapStateToProps(state) {
  return {
    'rememberEnabled': state.user.rememberEnabled,
    'rememberUsername': state.user.rememberUsername,
    'rememberPWD': state.user.rememberPWD
  };
};

var Login_Login = function Login(props) {
  var env = {
    state_rememberEnabled: Object(dist_web["b" /* useCheckboxState */])({
      state: props.rememberEnabled
    }),
    state_rememberUsername: useInputState(props.rememberUsername),
    state_rememberPWD: useInputState(props.rememberPWD)
  };

  function _loginUser() {
    var payload = {
      'account': env.state_rememberUsername.value,
      'password': env.state_rememberPWD.value
    };
    auth["a" /* default */].loginUser(payload).then(function (_ref) {
      var data = _ref.data;
      var obj = {
        'xAccessToken': data.token,
        'rememberEnabled': env.state_rememberEnabled.state,
        'rememberUsername': env.state_rememberUsername.value,
        'rememberPWD': env.state_rememberPWD.value
      };
      props.dispatch(userStore["a" /* userAction */].login(obj));
      Object(src_history["b" /* historyPush */])(routeMap["a" /* default */].HOME);
    })["catch"](function (error) {
      alert("帳號登入錯誤：請檢查輸入欄位是否有誤。");
      throw Error(error);
    });
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    id: "page-login"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "login_bg"
  }), /*#__PURE__*/react_default.a.createElement(Row["a" /* default */], {
    className: "justify-content-center",
    noGutters: true
  }, /*#__PURE__*/react_default.a.createElement(Col["a" /* default */], {
    xl: 6,
    md: 8,
    sm: 8
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "login_board"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "board_brand"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "brand_logo",
    src: logo["a" /* default */]
  }), /*#__PURE__*/react_default.a.createElement("p", {
    className: "brand_name"
  }, 'POTENTIA COMPUTING INC.')), /*#__PURE__*/react_default.a.createElement("div", {
    className: "board_divider"
  }), /*#__PURE__*/react_default.a.createElement("div", {
    className: "board_content"
  }, /*#__PURE__*/react_default.a.createElement("h1", {
    className: "content_title"
  }, 'Login'), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */], {
    className: "contennt_form"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Group, {
    as: Row["a" /* default */],
    controlId: "formPlaintextEmail"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Label, {
    className: "text-md-right",
    column: true,
    sm: "2"
  }, /*#__PURE__*/react_default.a.createElement(index_es["a" /* FontAwesomeIcon */], {
    icon: ['fas', 'user'],
    fixedWidth: true
  })), /*#__PURE__*/react_default.a.createElement(Col["a" /* default */], {
    sm: "10"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Control, _extends({}, env.state_rememberUsername, {
    type: "text",
    placeholder: "Username"
  })))), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Group, {
    as: Row["a" /* default */],
    controlId: "formPlaintextPassword"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Label, {
    className: "text-md-right",
    column: true,
    sm: "2"
  }, /*#__PURE__*/react_default.a.createElement(index_es["a" /* FontAwesomeIcon */], {
    icon: ['fas', 'key'],
    fixedWidth: true
  })), /*#__PURE__*/react_default.a.createElement(Col["a" /* default */], {
    sm: "10"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Control, _extends({}, env.state_rememberPWD, {
    type: "password",
    placeholder: "Password"
  })))), /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Group, {
    as: Row["a" /* default */],
    controlId: "formPlaintextPassword"
  }, /*#__PURE__*/react_default.a.createElement(Col["a" /* default */], {
    sm: {
      span: 10,
      offset: 2
    }
  }, /*#__PURE__*/react_default.a.createElement(dist_web["a" /* Checkbox */], _extends({}, env.state_rememberEnabled, {
    iconType: "icon",
    color: "primary",
    icon: /*#__PURE__*/react_default.a.createElement(index_es["a" /* FontAwesomeIcon */], {
      icon: ['fas', 'check']
    })
  }), 'Remember me')))), /*#__PURE__*/react_default.a.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/react_default.a.createElement(Button["a" /* default */], {
    variant: "primary",
    onClick: function onClick() {
      _loginUser();
    }
  }, "Login")))))));
};

function useInputState(defaultSate) {
  var _useState = Object(react["useState"])(defaultSate),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  return {
    value: value,
    onChange: function onChange(event) {
      setState(event.target.value);
    }
  };
}

/* harmony default export */ var auth_Login = (Object(es["b" /* connect */])(mapStateToProps)(Login_Login));
// CONCATENATED MODULE: ./src/routes/auth/LoginContainer.jsx



var LoginContainer_LoginContainer = function LoginContainer() {
  return /*#__PURE__*/react_default.a.createElement(auth_Login, null);
};

/* harmony default export */ var auth_LoginContainer = __webpack_exports__["default"] = (LoginContainer_LoginContainer);

/***/ })

}]);