(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);





var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var Col = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "className", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "a"])(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span, offset, order;

    if (propValue != null && typeof propValue === 'object') {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span != null) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, [className].concat(spans, classes))
  }));
});
Col.displayName = 'Col';
/* harmony default export */ __webpack_exports__["a"] = (Col);

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);





var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};
var Row = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "className", "noGutters", "as"]);

  var decoratedBsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "a"])(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});
Row.displayName = 'Row';
Row.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Row);

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

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(119);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/all.js
var lib_all = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(19);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Feedback.js





var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: prop_types_default.a.string.isRequired,
  as: prop_types_default.a.elementType
};
var defaultProps = {
  type: 'valid'
};
var Feedback = react_default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      type = _ref.type,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["as", "className", "type"]);

  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    className: classnames_default()(className, type && type + "-feedback")
  }));
});
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
/* harmony default export */ var esm_Feedback = (Feedback);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormContext.js

var FormContext = react_default.a.createContext({
  controlId: undefined
});
/* harmony default export */ var esm_FormContext = (FormContext);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(120);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheckInput.js






var FormCheckInput_defaultProps = {
  type: 'checkbox'
};
var FormCheckInput = react_default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      isStatic = _ref.isStatic,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "isStatic", "as"]);

  var _useContext = Object(react["useContext"])(esm_FormContext),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control-input'] : [bsPrefix, 'form-check-input'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    id: id || controlId,
    className: classnames_default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
  }));
});
FormCheckInput.displayName = 'FormCheckInput';
FormCheckInput.defaultProps = FormCheckInput_defaultProps;
/* harmony default export */ var esm_FormCheckInput = (FormCheckInput);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheckLabel.js






var FormCheckLabel = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"]);

  var _useContext = Object(react["useContext"])(esm_FormContext),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control-label'] : [bsPrefix, 'form-check-label'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  return /*#__PURE__*/react_default.a.createElement("label", Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames_default()(className, bsPrefix)
  }));
});
FormCheckLabel.displayName = 'FormCheckLabel';
/* harmony default export */ var esm_FormCheckLabel = (FormCheckLabel);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormCheck.js










var FormCheck_defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};
var FormCheck = react_default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      inline = _ref.inline,
      disabled = _ref.disabled,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      type = _ref.type,
      label = _ref.label,
      children = _ref.children,
      propCustom = _ref.custom,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'input' : _ref$as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"]);

  var custom = type === 'switch' ? true : propCustom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control'] : [bsPrefix, 'form-check'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(prefix, defaultPrefix);

  var _useContext = Object(react["useContext"])(esm_FormContext),
      controlId = _useContext.controlId;

  var innerFormContext = Object(react["useMemo"])(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;
  var input = /*#__PURE__*/react_default.a.createElement(esm_FormCheckInput, Object(esm_extends["a" /* default */])({}, props, {
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    isStatic: !hasLabel,
    disabled: disabled,
    as: as
  }));
  return /*#__PURE__*/react_default.a.createElement(esm_FormContext.Provider, {
    value: innerFormContext
  }, /*#__PURE__*/react_default.a.createElement("div", {
    style: style,
    className: classnames_default()(className, bsPrefix, custom && "custom-" + type, inline && bsPrefix + "-inline")
  }, children || /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, input, hasLabel && /*#__PURE__*/react_default.a.createElement(esm_FormCheckLabel, {
    title: title
  }, label), (isValid || isInvalid) && /*#__PURE__*/react_default.a.createElement(esm_Feedback, {
    type: isValid ? 'valid' : 'invalid'
  }, feedback))));
});
FormCheck.displayName = 'FormCheck';
FormCheck.defaultProps = FormCheck_defaultProps;
FormCheck.Input = esm_FormCheckInput;
FormCheck.Label = esm_FormCheckLabel;
/* harmony default export */ var esm_FormCheck = (FormCheck);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormFileInput.js






var FormFileInput = react_default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      lang = _ref.lang,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"]);

  var _useContext = Object(react["useContext"])(esm_FormContext),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var type = 'file';

  var _ref2 = custom ? [bsCustomPrefix, 'custom-file-input'] : [bsPrefix, 'form-control-file'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    id: id || controlId,
    type: type,
    lang: lang,
    className: classnames_default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  }));
});
FormFileInput.displayName = 'FormFileInput';
/* harmony default export */ var esm_FormFileInput = (FormFileInput);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormFileLabel.js






var FormFileLabel = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"]);

  var _useContext = Object(react["useContext"])(esm_FormContext),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-file-label'] : [bsPrefix, 'form-file-label'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  return /*#__PURE__*/react_default.a.createElement("label", Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames_default()(className, bsPrefix),
    "data-browse": props['data-browse']
  }));
});
FormFileLabel.displayName = 'FormFileLabel';
/* harmony default export */ var esm_FormFileLabel = (FormFileLabel);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormFile.js










var FormFile_defaultProps = {
  disabled: false,
  isValid: false,
  isInvalid: false
};
var FormFile = react_default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      disabled = _ref.disabled,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      children = _ref.children,
      custom = _ref.custom,
      lang = _ref.lang,
      dataBrowse = _ref['data-browse'],
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$inputAs = _ref.inputAs,
      inputAs = _ref$inputAs === void 0 ? 'input' : _ref$inputAs,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"]);

  var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-file'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  var type = 'file';

  var _useContext = Object(react["useContext"])(esm_FormContext),
      controlId = _useContext.controlId;

  var innerFormContext = Object(react["useMemo"])(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;
  var input = /*#__PURE__*/react_default.a.createElement(esm_FormFileInput, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: inputAs,
    lang: lang
  }));
  return /*#__PURE__*/react_default.a.createElement(esm_FormContext.Provider, {
    value: innerFormContext
  }, /*#__PURE__*/react_default.a.createElement(Component, {
    style: style,
    className: classnames_default()(className, bsPrefix, custom && "custom-" + type)
  }, children || /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, custom ? /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, input, hasLabel && /*#__PURE__*/react_default.a.createElement(esm_FormFileLabel, {
    "data-browse": dataBrowse
  }, label)) : /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, hasLabel && /*#__PURE__*/react_default.a.createElement(esm_FormFileLabel, null, label), input), (isValid || isInvalid) && /*#__PURE__*/react_default.a.createElement(esm_Feedback, {
    type: isValid ? 'valid' : 'invalid'
  }, feedback))));
});
FormFile.displayName = 'FormFile';
FormFile.defaultProps = FormFile_defaultProps;
FormFile.Input = esm_FormFileInput;
FormFile.Label = esm_FormFileLabel;
/* harmony default export */ var esm_FormFile = (FormFile);
// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(132);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormControl.js









var FormControl = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      type = _ref.type,
      size = _ref.size,
      id = _ref.id,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      plaintext = _ref.plaintext,
      readOnly = _ref.readOnly,
      custom = _ref.custom,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "bsCustomPrefix", "type", "size", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"]);

  var _useContext = Object(react["useContext"])(esm_FormContext),
      controlId = _useContext.controlId;

  var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-control'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  var classes;

  if (plaintext) {
    var _classes;

    classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
  } else if (type === 'file') {
    var _classes2;

    classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
  } else if (type === 'range') {
    var _classes3;

    classes = (_classes3 = {}, _classes3[bsPrefix + "-range"] = true, _classes3);
  } else if (Component === 'select' && custom) {
    var _classes4;

    classes = (_classes4 = {}, _classes4[bsPrefix + "-select"] = true, _classes4[bsPrefix + "-select-" + size] = size, _classes4);
  } else {
    var _classes5;

    classes = (_classes5 = {}, _classes5[bsPrefix] = true, _classes5[bsPrefix + "-" + size] = size, _classes5);
  }

   false ? undefined : void 0;
  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    type: type,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames_default()(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
  }));
});
FormControl.displayName = 'FormControl';
FormControl.Feedback = esm_Feedback;
/* harmony default export */ var esm_FormControl = (FormControl);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormGroup.js






var FormGroup = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "children", "controlId", "as"]);

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'form-group');
  var context = Object(react["useMemo"])(function () {
    return {
      controlId: controlId
    };
  }, [controlId]);
  return /*#__PURE__*/react_default.a.createElement(esm_FormContext.Provider, {
    value: context
  }, /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    className: classnames_default()(className, bsPrefix)
  }), children));
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ var esm_FormGroup = (FormGroup);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(131);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormLabel.js








var FormLabel_defaultProps = {
  column: false,
  srOnly: false
};
var FormLabel = react_default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'label' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"]);

  var _useContext = Object(react["useContext"])(esm_FormContext),
      controlId = _useContext.controlId;

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'form-label');
  var columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = columnClass + "-" + column;
  var classes = classnames_default()(className, bsPrefix, srOnly && 'sr-only', column && columnClass);
   false ? undefined : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/react_default.a.createElement(Col["a" /* default */], Object(esm_extends["a" /* default */])({
    as: "label",
    className: classes,
    htmlFor: htmlFor
  }, props));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({
      ref: ref,
      className: classes,
      htmlFor: htmlFor
    }, props))
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = FormLabel_defaultProps;
/* harmony default export */ var esm_FormLabel = (FormLabel);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/FormText.js





var FormText = react_default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'small' : _ref$as,
      muted = _ref.muted,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "className", "as", "muted"]);

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'form-text');
  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    className: classnames_default()(className, bsPrefix, muted && 'text-muted')
  }));
});
FormText.displayName = 'FormText';
/* harmony default export */ var esm_FormText = (FormText);
// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Switch.js



var Switch = react_default.a.forwardRef(function (props, ref) {
  return /*#__PURE__*/react_default.a.createElement(esm_FormCheck, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    type: "switch"
  }));
});
Switch.displayName = 'Switch';
Switch.Input = esm_FormCheck.Input;
Switch.Label = esm_FormCheck.Label;
/* harmony default export */ var esm_Switch = (Switch);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js + 1 modules
var createWithBsPrefix = __webpack_require__(143);

// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Form.js













var Form_defaultProps = {
  inline: false
};
var Form = react_default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'form' : _ref$as,
      props = Object(objectWithoutPropertiesLoose["a" /* default */])(_ref, ["bsPrefix", "inline", "className", "validated", "as"]);

  bsPrefix = Object(ThemeProvider["a" /* useBootstrapPrefix */])(bsPrefix, 'form');
  return /*#__PURE__*/react_default.a.createElement(Component, Object(esm_extends["a" /* default */])({}, props, {
    ref: ref,
    className: classnames_default()(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});
Form.displayName = 'Form';
Form.defaultProps = Form_defaultProps;
Form.Row = Object(createWithBsPrefix["a" /* default */])('form-row');
Form.Group = esm_FormGroup;
Form.Control = esm_FormControl;
Form.Check = esm_FormCheck;
Form.File = esm_FormFile;
Form.Switch = esm_Switch;
Form.Label = esm_FormLabel;
Form.Text = esm_FormText;
/* harmony default export */ var esm_Form = __webpack_exports__["a"] = (Form);

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(9);
var toISOString = __webpack_require__(202);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(15);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),

/***/ 204:
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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-iso-string.js
var es6_date_to_iso_string = __webpack_require__(163);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(142);

// EXTERNAL MODULE: ./src/modules/page/Page.jsx
var Page = __webpack_require__(141);

// EXTERNAL MODULE: ./src/plugins/axios.js
var axios = __webpack_require__(130);

// CONCATENATED MODULE: ./src/apis/server.js
 // Note: The error code of API should be claimed in documemt.

/* harmony default export */ var server = ({
  getServerInfo: function getServerInfo() {
    // Note: Frontend can do ISO string format by self. If case in real and necessary, we just need UNIX timestamp unless using the local timestamp form python.
    return axios["a" /* default */].get('/api/now');
  }
});
// CONCATENATED MODULE: ./utils/reviseISOString.js

var formatISOString = /((\d{4})-(\d{2})-(\d{2}))T((\d{2}):(\d{2}):(\d{2}))/; // 0: total
// 1: Date(YYYY-MM-DD)
// 2: Full Year
// 3: Mounth
// 4: Day
// 5: Time(HH-MM-SS)
// 6: Hour
// 7: Minute
// 8: Second

var reviseISOString = function reviseISOString(isoString) {
  var localISOString = new Date(Date.parse(isoString) - new Date().getTimezoneOffset() * 60 * 1000).toISOString();
  var separateDateTime = formatISOString.exec(localISOString);
  var obj = {};

  if (separateDateTime) {
    obj = {
      'whole': separateDateTime[0],
      'date': separateDateTime[1],
      'year': separateDateTime[2],
      'month': separateDateTime[3],
      'day': separateDateTime[4],
      'time': separateDateTime[5],
      'hour': separateDateTime[6],
      'minute': separateDateTime[7],
      'second': separateDateTime[8]
    };
  }

  return obj;
};

/* harmony default export */ var utils_reviseISOString = (reviseISOString);
// CONCATENATED MODULE: ./src/components/server/Information.jsx












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Information_ServerInformation = function ServerInformation() {
  var env = {
    state_info: useInfoState({}),
    interval_info: ''
  };
  Object(react["useEffect"])(function () {
    _beginInfoInterval();

    return function () {
      _endInfoInterval();
    };
  }, []);

  function _beginInfoInterval() {
    _getServerInfo();

    env.interval_info = setInterval(function () {
      _getServerInfo();
    }, 1 * 1000);
  }

  function _endInfoInterval() {
    clearInterval(env.interval_info);
  }

  function _getServerInfo() {
    server.getServerInfo().then(function (_ref) {
      var data = _ref.data;
      env.state_info.onChange(data);
    })["catch"](function (error) {
      alert("未預期錯誤：如刷新頁面仍有發生問題，請聯繫客服人員。");
      throw Error(error);
    });
  }

  return /*#__PURE__*/react_default.a.createElement(Page["a" /* default */], {
    id: "page-server-info",
    headline: "Server Information"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */], null, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Group, {
    as: Row["a" /* default */],
    controlId: "formPlaintextEmail"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Label, {
    column: true,
    sm: "2"
  }, "Server Time:"), /*#__PURE__*/react_default.a.createElement(Col["a" /* default */], {
    sm: "10"
  }, /*#__PURE__*/react_default.a.createElement(Form["a" /* default */].Control, {
    plaintext: true,
    readOnly: true,
    defaultValue: _formatTime(env.state_info.value.timestamp)
  })))));
};

function _formatTime(timestamp) {
  var result = '';

  if (timestamp) {
    var date = new Date(timestamp);
    var timeObj = utils_reviseISOString(date.toISOString());
    result = "".concat(timeObj.date, " ").concat(timeObj.time);
  }

  return result;
}

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

/* harmony default export */ var Information = __webpack_exports__["default"] = (Information_ServerInformation);

/***/ })

}]);