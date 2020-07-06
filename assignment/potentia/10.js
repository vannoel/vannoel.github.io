(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
/* harmony import */ var _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);




var ServerContainer = function ServerContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Switch */ "d"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Redirect */ "a"], {
    exact: true,
    from: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].SERVER,
    to: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].SERVER_INFO
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Route */ "b"], {
    path: _src_assets_definitions_routeMap_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].SERVER_INFO,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 204));
    })
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ServerContainer);

/***/ })

}]);