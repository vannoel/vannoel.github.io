(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "files/logo.png");

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(118);

// EXTERNAL MODULE: ./src/assets/definitions/routeMap.js
var routeMap = __webpack_require__(31);

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

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(119);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Navbar.js + 20 modules
var Navbar = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Nav.js + 10 modules
var Nav = __webpack_require__(165);

// EXTERNAL MODULE: ./src/history.js
var src_history = __webpack_require__(48);

// EXTERNAL MODULE: ./src/stores/userStore.js
var userStore = __webpack_require__(47);

// EXTERNAL MODULE: ./src/assets/images/logo.png
var logo = __webpack_require__(138);

// CONCATENATED MODULE: ./src/components/layout/Topbar.jsx










var Topbar_Topbar = function Topbar(props) {
  function _logoutUser() {
    props.dispatch(userStore["a" /* userAction */].logout());
    Object(src_history["b" /* historyPush */])(routeMap["a" /* default */].AUTH_LOGIN);
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: "module-topbar"
  }, /*#__PURE__*/react_default.a.createElement(Navbar["a" /* default */], {
    bg: "light"
  }, /*#__PURE__*/react_default.a.createElement(Nav["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link, {
    onClick: props.toggleSidebar
  }, /*#__PURE__*/react_default.a.createElement(index_es["a" /* FontAwesomeIcon */], {
    icon: ['fas', 'bars'],
    size: "lg",
    fixedWidth: true
  }))), /*#__PURE__*/react_default.a.createElement(Navbar["a" /* default */].Brand, {
    href: "/"
  }, /*#__PURE__*/react_default.a.createElement("img", {
    className: "topbar_logo",
    src: logo["a" /* default */]
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: "topbar_name"
  }, 'Potentia')), /*#__PURE__*/react_default.a.createElement(Navbar["a" /* default */].Collapse, {
    className: "justify-content-end"
  }, /*#__PURE__*/react_default.a.createElement(Nav["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link, {
    onClick: function onClick() {
      _logoutUser();
    }
  }, /*#__PURE__*/react_default.a.createElement(index_es["a" /* FontAwesomeIcon */], {
    icon: ['fas', 'sign-out-alt'],
    size: "lg",
    fixedWidth: true
  }))))));
};

/* harmony default export */ var layout_Topbar = (Object(es["b" /* connect */])()(Topbar_Topbar));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__(201);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(85);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__(86);

// CONCATENATED MODULE: ./src/assets/definitions/constObj.js











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GRID = {
  GRID_SM: 576,
  GRID_MD: 768,
  GRID_LG: 992,
  GRID_XL: 1200
};

var constObj = _objectSpread({}, GRID);

/* harmony default export */ var definitions_constObj = (constObj);
// CONCATENATED MODULE: ./src/assets/definitions/menuList.js

var menuList = [{
  id: 'SERVER_INFO',
  routename: routeMap["a" /* default */].SERVER_INFO,
  title: 'Server Info'
}, {
  id: 'USER_INFO',
  routename: routeMap["a" /* default */].USER_INFO,
  title: 'User Info'
}];
/* harmony default export */ var definitions_menuList = (menuList);
// CONCATENATED MODULE: ./src/components/layout/Menu.jsx













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Menu_Menu = function Menu(props) {
  var env = {
    state_menu: useMenuState(_mapRouteToMenu(location.pathname))
  };
  Object(react["useEffect"])(function () {
    env.state_menu.onChange(_mapRouteToMenu(location.pathname));
  }, [location.pathname]);

  function _redirectPath(path) {
    Object(src_history["b" /* historyPush */])(path);
  }

  function _clickNavLink(routename) {
    if (top.innerWidth < definitions_constObj.GRID_LG) {
      props.toggleSidebar();
    }

    if (env.state_menu.value !== _mapRouteToMenu(routename)) {
      _redirectPath(routename);

      env.state_menu.onChange(_mapRouteToMenu(routename));
    }
  }

  function _mapRouteToMenu(pathname) {
    var result = definitions_menuList.find(function (item) {
      return item.routename === pathname;
    });
    return result ? result.id : '';
  }

  return /*#__PURE__*/react_default.a.createElement(Nav["a" /* default */], {
    className: "module-menu flex-column"
  }, definitions_menuList.map(function (item) {
    return /*#__PURE__*/react_default.a.createElement(Nav["a" /* default */].Link, {
      key: item.id,
      onClick: function onClick() {
        _clickNavLink(item.routename);
      }
    }, /*#__PURE__*/react_default.a.createElement(index_es["a" /* FontAwesomeIcon */], {
      className: classnames_default()('menu_marker', {
        'marker-active': item.id === env.state_menu.value
      }),
      icon: ['fas', 'map-marker-alt'],
      fixedWidth: true
    }), /*#__PURE__*/react_default.a.createElement("span", null, item.title));
  }));
};

function useMenuState(defaultSate) {
  var _useState = Object(react["useState"])(defaultSate),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  return {
    value: value,
    onChange: function onChange(activeId) {
      setState(activeId);
    }
  };
}

/* harmony default export */ var layout_Menu = (Object(es["b" /* connect */])()(Menu_Menu));
// CONCATENATED MODULE: ./src/components/layout/Copyright.jsx



var Copyright_Copyright = function Copyright() {
  return /*#__PURE__*/react_default.a.createElement(Navbar["a" /* default */], {
    className: "module-copyright",
    bg: "dark"
  }, /*#__PURE__*/react_default.a.createElement("p", null, '© 2020 Potentia Computing Inc. All Rights Reserved.'));
};

/* harmony default export */ var layout_Copyright = (Copyright_Copyright);
// CONCATENATED MODULE: ./src/components/layout/Home.jsx











function Home_slicedToArray(arr, i) { return Home_arrayWithHoles(arr) || Home_iterableToArrayLimit(arr, i) || Home_unsupportedIterableToArray(arr, i) || Home_nonIterableRest(); }

function Home_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Home_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Home_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Home_arrayLikeToArray(o, minLen); }

function Home_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Home_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Home_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var mapStateToProps = function mapStateToProps(state) {
  return {
    'xAccessToken': state.user.xAccessToken
  };
};

var Home_Home = function Home(props) {
  var env = {
    state_sidebar: useSidebarState(top.innerWidth > definitions_constObj.GRID_LG)
  };
  Object(react["useEffect"])(function () {
    if (typeof props.xAccessToken != 'string' || props.xAccessToken.length === 0) {
      alert('尚未登入帳號，或帳號已自動登出，請登入帳號。');

      _logoutUser();
    }
  });

  function _logoutUser() {
    props.dispatch(userStore["a" /* userAction */].logout());
    Object(src_history["b" /* historyPush */])(routeMap["a" /* default */].AUTH_LOGIN);
  }

  function _toggleSidebar() {
    env.state_sidebar.onChange(!env.state_sidebar.value);
  }

  return /*#__PURE__*/react_default.a.createElement("div", {
    id: "page-home"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "home_topbar"
  }, /*#__PURE__*/react_default.a.createElement(layout_Topbar, {
    toggleSidebar: _toggleSidebar
  })), /*#__PURE__*/react_default.a.createElement("div", {
    className: classnames_default()('home_body', {
      'body-menuShow': env.state_sidebar.value
    })
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "body_container"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "container_content"
  }, props.children), /*#__PURE__*/react_default.a.createElement(layout_Copyright, null)), /*#__PURE__*/react_default.a.createElement("div", {
    className: 'body_sidebar'
  }, /*#__PURE__*/react_default.a.createElement(layout_Menu, {
    toggleSidebar: _toggleSidebar
  }))));
};

function useSidebarState(defaultSate) {
  var _useState = Object(react["useState"])(defaultSate),
      _useState2 = Home_slicedToArray(_useState, 2),
      value = _useState2[0],
      setState = _useState2[1];

  return {
    value: value,
    onChange: function onChange(toggle) {
      setState(toggle);
    }
  };
}

/* harmony default export */ var layout_Home = (Object(es["b" /* connect */])(mapStateToProps)(Home_Home));
// CONCATENATED MODULE: ./src/routes/HomeContainer.jsx





var HomeContainer_HomeContainer = function HomeContainer() {
  return /*#__PURE__*/react_default.a.createElement(layout_Home, null, /*#__PURE__*/react_default.a.createElement(react["Suspense"], {
    fallback: /*#__PURE__*/react_default.a.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react_default.a.createElement(react_router["d" /* Switch */], null, /*#__PURE__*/react_default.a.createElement(react_router["a" /* Redirect */], {
    exact: true,
    from: routeMap["a" /* default */].HOME,
    to: routeMap["a" /* default */].SERVER
  }), /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
    path: routeMap["a" /* default */].SERVER,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 207));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
    path: routeMap["a" /* default */].USER,
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 208));
    })
  }), /*#__PURE__*/react_default.a.createElement(react_router["b" /* Route */], {
    component: /*#__PURE__*/react_default.a.lazy(function () {
      return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 211));
    })
  }))));
};

/* harmony default export */ var routes_HomeContainer = __webpack_exports__["default"] = (HomeContainer_HomeContainer);

/***/ })

}]);