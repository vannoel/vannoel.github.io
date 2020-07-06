(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(171) });


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(10);
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(35);
var toObject = __webpack_require__(26);
var IObject = __webpack_require__(52);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(15)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(120);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(159);






var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};
var Button = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__[/* useBootstrapPrefix */ "a"])(bsPrefix, 'btn');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
      as: as,
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (!as) {
    props.type = type;
  }

  var Component = as || 'button';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
    className: classes
  }));
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Checkbox; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCheckboxState; });

// UNUSED EXPORTS: Group, Radio, RadioGroup, Switch, useRadioState, useSwitchState

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(119);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/nanoid/url-alphabet/index.js
// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped
// optimize the gzip compression for this alphabet.
let urlAlphabet =
  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'



// CONCATENATED MODULE: ./node_modules/nanoid/index.browser.js
// This file replaces `index.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.



if (false) {}

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))

let customRandom = (alphabet, size, getRandom) => {
  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes
  // values closer to the alphabet size. The bitmask calculates the closest
  // `2^31 - 1` number, which exceeds the alphabet size.
  // For example, the bitmask for the alphabet size 30 is 31 (00011111).
  // `Math.clz32` is not used, because it is not available in browsers.
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  // Though, the bitmask solution is not perfect since the bytes exceeding
  // the alphabet size are refused. Therefore, to reliably generate the ID,
  // the random bytes redundancy has to be satisfied.

  // Note: every hardware random generator call is performance expensive,
  // because the system call for entropy collection takes a lot of time.
  // So, to avoid additional system calls, extra bytes are requested in advance.

  // Next, a step determines how many random bytes to generate.
  // The number of random bytes gets decided upon the ID size, mask,
  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance
  // according to benchmarks).

  // `-~f => Math.ceil(f)` if f is a float
  // `-~i => i + 1` if i is an integer
  let step = -~((1.6 * mask * size) / alphabet.length)

  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      // A compact alternative for `for (var i = 0; i < step; i++)`.
      let j = step
      while (j--) {
        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.
        id += alphabet[bytes[j] & mask] || ''
        // `id.length + 1 === size` is a more compact option.
        if (id.length === +size) return id
      }
    }
  }
}

let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)

let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))

  // A compact alternative for `for (var i = 0; i < step; i++)`.
  while (size--) {
    // It is incorrect to use bytes exceeding the alphabet size.
    // The following mask reduces the random byte in the 0-255 value
    // range to the 0-63 value range. Therefore, adding hacks, such
    // as empty string fallback or magic numbers, is unneccessary because
    // the bitmask trims bytes down to the alphabet size.
    let byte = bytes[size] & 63
    if (byte < 36) {
      // `0-9a-z`
      id += byte.toString(36)
    } else if (byte < 62) {
      // `A-Z`
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



// CONCATENATED MODULE: ./node_modules/pretty-checkbox-react/dist-web/index.js




const useIcon = (icon) => {
    return Object(react["useMemo"])(() => {
        if (icon) {
            let type = 'icon';
            if (icon.type === 'img') {
                type = 'image';
            }
            else if (icon.type === 'svg') {
                type = 'svg';
            }
            return {
                iconType: type,
                icon: Object(react["cloneElement"])(icon, {
                    ...icon.props,
                    className: classnames_default()(icon.props.className, 'icon'),
                }),
            };
        }
        return {};
    }, [icon]);
};

const isBoolean = (value) => typeof value === 'undefined';
const getChecked = (args) => {
    const { disabled, locked, state, value, type } = args;
    if (disabled || locked) {
        return false;
    }
    if (Array.isArray(state)) {
        return state.indexOf(value) !== -1;
    }
    if (isBoolean(value)) {
        return !!state;
    }
    if (type === 'radio') {
        return state === value;
    }
    return state;
};
const isDefaultStyle = (animation, icon) => {
    if (animation === 'tada' ||
        animation === 'jelly' ||
        animation === 'rotate' ||
        animation === 'pulse') {
        return false;
    }
    return !icon;
};
const getClassNames = ({ animation, icon, locked, bigger, plain, shape, fill, className, readOnly, isSwitch, iconType, }) => classnames_default()('pretty', {
    'p-switch': isSwitch,
    'p-default': !isSwitch && isDefaultStyle(animation, icon),
    'p-locked': locked || readOnly,
    'p-bigger': bigger,
    'p-plain': plain,
    [`p-${shape}`]: shape,
    [`p-${fill}`]: fill,
    [`p-${animation}`]: animation,
    [`p-${iconType}`]: iconType,
}, className);

const PrettyInput = Object(react["forwardRef"])(({ onChange, disabled, value, state, locked, type, name, checked, defaultChecked, defaultValue, baseId, }, ref) => {
    return (Object(react["createElement"])("input", { onChange: onChange, type: type, value: value, name: name, id: baseId, tabIndex: -1, ref: ref, defaultChecked: defaultChecked, defaultValue: defaultValue, checked: typeof checked === 'undefined'
            ? getChecked({ state, value, disabled, locked, type })
            : checked, disabled: disabled }));
});
PrettyInput.displayName = 'Pretty.Input';

const PrettyLabel = ({ color, icon, children, baseId, }) => (Object(react["createElement"])("div", { className: classnames_default()('state', {
        [`p-${color}`]: color,
    }) },
    icon,
    Object(react["createElement"])("label", { htmlFor: baseId }, children)));
PrettyLabel.displayName = 'Pretty.Label';

const getInputProps = (props) => {
    const { onChange, disabled, value, state, locked, type, name, checked, baseId, defaultValue, defaultChecked, } = props;
    return {
        onChange,
        disabled,
        value,
        state,
        locked,
        type,
        name,
        checked,
        baseId,
        defaultValue,
        defaultChecked,
    };
};
const getLabelProps = (props) => {
    const { children, baseId, color, icon } = props;
    return { children, baseId, color, icon };
};
const getHTMLProps = (props, exclude) => {
    const htmlProps = {};
    const propKeys = Object.keys(props);
    for (let i = 0; i < propKeys.length; i++) {
        if (!exclude.has(propKeys[i])) {
            htmlProps[propKeys[i]] = props[propKeys[i]];
        }
    }
    return htmlProps;
};
/**
 * A fairly gross way of organizing props so we don't unintentionally pass
 * props to native HTML elements.
 */
const organizeProps = (props) => {
    const { animation, bigger, plain, shape, fill, iconType, isSwitch, setState, className, ...rest } = props;
    const pcrProps = {
        animation,
        bigger,
        plain,
        shape,
        fill,
        iconType,
        isSwitch,
        setState,
        className,
    };
    const inputProps = getInputProps(rest);
    const labelProps = getLabelProps(rest);
    const htmlProps = getHTMLProps(props, new Set([...Object.keys(pcrProps), ...Object.keys(inputProps), ...Object.keys(labelProps)]));
    return {
        pcrProps,
        inputProps,
        labelProps,
        htmlProps,
    };
};

const Pretty = Object(react["forwardRef"])((props, ref) => {
    const { as = 'div', ...rest } = props;
    const { inputProps, labelProps, htmlProps } = organizeProps(rest);
    return Object(react["createElement"])(as, {
        // @ts-ignore
        className: getClassNames(props),
        'aria-disabled': inputProps.disabled,
        'aria-checked': inputProps.state === 'indeterminate' ? 'mixed' : !!inputProps.state,
        tabIndex: inputProps.locked || inputProps.disabled ? -1 : 0,
        onKeyPress: Object(react["useCallback"])(
        /* istanbul ignore next */ (e) => {
            /* istanbul ignore next */
            e.preventDefault();
        }, []),
        onKeyUp: Object(react["useCallback"])((e) => {
            if ((e.keyCode === 32 || e.keyCode === 13) &&
                typeof inputProps.onChange === 'function') {
                inputProps.onChange(e, inputProps.value);
            }
        }, 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [inputProps.onChange, inputProps.value]),
        role: inputProps.type,
        ...htmlProps,
    }, Object(react["createElement"])(react["Fragment"], null,
        Object(react["createElement"])(PrettyInput, Object.assign({ ref: ref }, inputProps)),
        Object(react["createElement"])(PrettyLabel, Object.assign({}, labelProps))));
});
Pretty.displayName = 'Pretty';

const PREFIX = 'pcr_';
const useUUID = ({ prefix = PREFIX } = {}) => {
    const { current: baseId } = Object(react["useRef"])(prefix + nanoid(10));
    return { baseId };
};

const useCheckboxState = ({ state: initialState = false, } = {}) => {
    const [state, setState] = Object(react["useState"])(initialState);
    return {
        state,
        setState,
        onChange: Object(react["useCallback"])((e, args) => {
            const value = args || e.currentTarget.value;
            setState(state => {
                if (Array.isArray(state)) {
                    const index = state.indexOf(value);
                    if (index === -1) {
                        state.push(value);
                    }
                    else {
                        state.splice(index, 1);
                    }
                    return state.slice();
                }
                return !state;
            });
        }, []),
        ...useUUID(),
    };
};
const Checkbox = Object(react["forwardRef"])(({ value: userValue, icon: userIcon, ...rest }, ref) => {
    const { icon, iconType } = useIcon(userIcon);
    const value = typeof userValue === 'undefined' ? '' : userValue;
    return Object(react["createElement"])(Pretty, {
        type: 'checkbox',
        icon,
        iconType,
        value,
        ref,
        ...rest,
    });
});
Checkbox.displayName = 'Checkbox';

const Group = (props) => {
    // TODO: find a better way to filter through non-HTML attribute noise
    const { baseId, state, setState, onChange, ...propsWithoutState } = props;
    const { as = 'div', children, ...htmlProps } = propsWithoutState;
    return Object(react["createElement"])(as, htmlProps, children);
};
Group.displayName = 'Group';

const useRadioState = ({ state: initialState = false } = {}) => {
    const [state, setState] = Object(react["useState"])(initialState);
    return {
        state,
        setState,
        onChange: Object(react["useCallback"])((e, args) => {
            const value = args || e.currentTarget.value;
            setState(prev => (isBoolean(prev) ? !prev : value));
        }, []),
        ...useUUID(),
    };
};
const RadioGroup = (props) => (Object(react["createElement"])(Group, Object.assign({ as: "fieldset", role: "radiogroup" }, props)));
const Radio = Object(react["forwardRef"])(({ value: userValue, icon: userIcon, shape = 'round', ...rest }, ref) => {
    const { icon, iconType } = useIcon(userIcon);
    const value = typeof userValue === 'undefined' ? '' : userValue;
    return Object(react["createElement"])(Pretty, {
        type: 'radio',
        shape,
        icon,
        iconType,
        value,
        ref,
        ...rest,
    });
});
Radio.displayName = 'Radio';

const useSwitchState = ({ type = 'checkbox', state: initialState = false, } = {}) => {
    // TODO: might be an issue if the baseId changes if folks change from checkbox > radio
    const checkbox = useCheckboxState(initialState);
    const radio = useRadioState(initialState);
    return Object.assign({ type }, type === 'checkbox' ? checkbox : radio);
};
const Switch = Object(react["forwardRef"])(({ value: userValue, ...rest }, ref) => {
    const value = typeof userValue === 'undefined' ? '' : userValue;
    return Object(react["createElement"])(Pretty, {
        type: 'checkbox',
        isSwitch: true,
        value,
        ref,
        ...rest,
    });
});
Switch.displayName = 'Switch';


//# sourceMappingURL=index.js.map


/***/ })

}]);