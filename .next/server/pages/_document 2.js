/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyDocument; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/weirongwu/Desktop/personal-website/src/pages/_document.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n  static async getInitialProps(ctx) {\n    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();\n    const originalRenderPage = ctx.renderPage;\n\n    try {\n      ctx.renderPage = () => originalRenderPage({\n        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 27\n        }, this))\n      });\n\n      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n      return _objectSpread(_objectSpread({}, initialProps), {}, {\n        styles: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [initialProps.styles, sheet.getStyleElement()]\n        }, void 0, true)\n      });\n    } finally {\n      sheet.seal();\n    }\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n      lang: \"en\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n          children: \"Peter Wu\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n          name: \"viewport\",\n          content: \"initial-scale=1.0, width=device-width\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 4\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3BhZ2VzL19kb2N1bWVudC5qcz9iMWU5Il0sIm5hbWVzIjpbIk15RG9jdW1lbnQiLCJEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInNoZWV0IiwiU2VydmVyU3R5bGVTaGVldCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJlbmhhbmNlQXBwIiwiQXBwIiwicHJvcHMiLCJjb2xsZWN0U3R5bGVzIiwiaW5pdGlhbFByb3BzIiwic3R5bGVzIiwiZ2V0U3R5bGVFbGVtZW50Iiwic2VhbCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsTUFBTUEsVUFBTixTQUF5QkMsc0RBQXpCLENBQWtDO0FBQ2hELGVBQWFDLGVBQWIsQ0FBNkJDLEdBQTdCLEVBQWtDO0FBQ2pDLFVBQU1DLEtBQUssR0FBRyxJQUFJQywrREFBSixFQUFkO0FBQ0EsVUFBTUMsa0JBQWtCLEdBQUdILEdBQUcsQ0FBQ0ksVUFBL0I7O0FBRUEsUUFBSTtBQUNISixTQUFHLENBQUNJLFVBQUosR0FBaUIsTUFDaEJELGtCQUFrQixDQUFDO0FBQ2xCRSxrQkFBVSxFQUFHQyxHQUFELElBQVVDLEtBQUQsSUFDcEJOLEtBQUssQ0FBQ08sYUFBTixlQUFvQiw4REFBQyxHQUFELG9CQUFTRCxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXBCO0FBRmlCLE9BQUQsQ0FEbkI7O0FBTUEsWUFBTUUsWUFBWSxHQUFHLE1BQU1YLG9FQUFBLENBQXlCRSxHQUF6QixDQUEzQjtBQUNBLDZDQUNJUyxZQURKO0FBRUNDLGNBQU0sZUFDTDtBQUFBLHFCQUNFRCxZQUFZLENBQUNDLE1BRGYsRUFFRVQsS0FBSyxDQUFDVSxlQUFOLEVBRkY7QUFBQTtBQUhGO0FBU0EsS0FqQkQsU0FpQlU7QUFDVFYsV0FBSyxDQUFDVyxJQUFOO0FBQ0E7QUFDRDs7QUFDREMsUUFBTSxHQUFHO0FBQ1Isd0JBQ0MsOERBQUMsK0NBQUQ7QUFBTSxVQUFJLEVBQUMsSUFBWDtBQUFBLDhCQUNDLDhEQUFDLCtDQUFEO0FBQUEsZ0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFFQztBQUNDLGNBQUksRUFBQyxVQUROO0FBRUMsaUJBQU8sRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQsZUFNQztBQUNDLGNBQUksRUFBQyw4RkFETjtBQUVDLGFBQUcsRUFBQztBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkQsZUFVQztBQUNDLGNBQUksRUFBQywwRUFETjtBQUVDLGFBQUcsRUFBQztBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFnQkM7QUFBQSxnQ0FDQyw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBRUMsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUF1QkE7O0FBbEQrQyIsImZpbGUiOiIuL3NyYy9wYWdlcy9fZG9jdW1lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgSHRtbCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG5cdFx0Y29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xuXHRcdGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cblx0XHRcdFx0b3JpZ2luYWxSZW5kZXJQYWdlKHtcblx0XHRcdFx0XHRlbmhhbmNlQXBwOiAoQXBwKSA9PiAocHJvcHMpID0+XG5cdFx0XHRcdFx0XHRzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPiksXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLmluaXRpYWxQcm9wcyxcblx0XHRcdFx0c3R5bGVzOiAoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdHtpbml0aWFsUHJvcHMuc3R5bGVzfVxuXHRcdFx0XHRcdFx0e3NoZWV0LmdldFN0eWxlRWxlbWVudCgpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpLFxuXHRcdFx0fTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0c2hlZXQuc2VhbCgpO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxIdG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+UGV0ZXIgV3U8L3RpdGxlPlxuXHRcdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdFx0Y29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYWNlK0dyb3Rlc2s6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXG5cdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwXCJcblx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdD48L2xpbms+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGJvZHk+XG5cdFx0XHRcdFx0PE1haW4gLz5cblx0XHRcdFx0XHQ8TmV4dFNjcmlwdCAvPlxuXHRcdFx0XHQ8L2JvZHk+XG5cdFx0XHQ8L0h0bWw+XG5cdFx0KTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_document.js\n");

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./src/pages/_document.js"); });
module.exports = __webpack_exports__;

})();