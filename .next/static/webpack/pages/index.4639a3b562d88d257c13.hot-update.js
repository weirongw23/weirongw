/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ \"./node_modules/react-countup/build/index.js\");\n/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-visibility-sensor */ \"./node_modules/react-visibility-sensor/dist/visibility-sensor.js\");\n/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AcomplishmentsStyles */ \"./src/components/Acomplishments/AcomplishmentsStyles.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/weirongwu/Desktop/personal-website/src/components/Acomplishments/Acomplishments.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar data = [{\n  number: 800,\n  text: \"YouTube Watch Time\"\n}, {\n  number: 30,\n  text: \"Projects Completed\"\n}, {\n  number: 10,\n  text: \"Languages Learned\"\n}, {\n  number: 150,\n  text: \"Students Taught\"\n}];\n\nvar Acomplishments = function Acomplishments() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.Section, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_4__.SectionText, {\n      children: \"By the Numbers.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 3\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.Boxes, {\n      children: data.map(function (card, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.Box, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.BoxNum, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_2__.default, {\n              end: _this.state.didViewContup ? card.number : 0,\n              duration: 3,\n              redraw: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 7\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 6\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_5__.BoxText, {\n            children: card.text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 6\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 5\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 2\n  }, _this);\n};\n\n_c = Acomplishments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Acomplishments);\n\nvar _c;\n\n$RefreshReg$(_c, \"Acomplishments\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanM/NDk0NyJdLCJuYW1lcyI6WyJkYXRhIiwibnVtYmVyIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwibWFwIiwiY2FyZCIsImluZGV4Iiwic3RhdGUiLCJkaWRWaWV3Q29udHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNaO0FBQUVDLFFBQU0sRUFBRSxHQUFWO0FBQWVDLE1BQUksRUFBRTtBQUFyQixDQURZLEVBRVo7QUFBRUQsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRlksRUFHWjtBQUFFRCxRQUFNLEVBQUUsRUFBVjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIWSxFQUlaO0FBQUVELFFBQU0sRUFBRSxHQUFWO0FBQWVDLE1BQUksRUFBRTtBQUFyQixDQUpZLENBQWI7O0FBT0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLHNCQUN0Qiw4REFBQyw2REFBRDtBQUFBLDRCQUNDLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFFQyw4REFBQyx3REFBRDtBQUFBLGdCQUNFSCxJQUFJLENBQUNJLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDVCw4REFBQyxzREFBRDtBQUFBLGtDQUNDLDhEQUFDLHlEQUFEO0FBQUEsbUNBQ0MsOERBQUMsa0RBQUQ7QUFDQyxpQkFBRyxFQUFFLEtBQUksQ0FBQ0MsS0FBTCxDQUFXQyxhQUFYLEdBQTJCSCxJQUFJLENBQUNKLE1BQWhDLEdBQXlDLENBRC9DO0FBRUMsc0JBQVEsRUFBRSxDQUZYO0FBR0Msb0JBQU0sRUFBRTtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBUUMsOERBQUMsMERBQUQ7QUFBQSxzQkFBVUksSUFBSSxDQUFDSDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkQ7QUFBQSxXQUFVSSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFUO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURzQjtBQUFBLENBQXZCOztLQUFNSCxjO0FBb0JOLCtEQUFlQSxjQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ291bnRVcCBmcm9tIFwicmVhY3QtY291bnR1cFwiO1xuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSBcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCI7XG5cbmltcG9ydCB7XG5cdFNlY3Rpb24sXG5cdFNlY3Rpb25UZXh0LFxuXHRTZWN0aW9uRGl2aWRlcixcblx0U2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IEJveCwgQm94ZXMsIEJveE51bSwgQm94VGV4dCB9IGZyb20gXCIuL0Fjb21wbGlzaG1lbnRzU3R5bGVzXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG5cdHsgbnVtYmVyOiA4MDAsIHRleHQ6IFwiWW91VHViZSBXYXRjaCBUaW1lXCIgfSxcblx0eyBudW1iZXI6IDMwLCB0ZXh0OiBcIlByb2plY3RzIENvbXBsZXRlZFwiIH0sXG5cdHsgbnVtYmVyOiAxMCwgdGV4dDogXCJMYW5ndWFnZXMgTGVhcm5lZFwiIH0sXG5cdHsgbnVtYmVyOiAxNTAsIHRleHQ6IFwiU3R1ZGVudHMgVGF1Z2h0XCIgfSxcbl07XG5cbmNvbnN0IEFjb21wbGlzaG1lbnRzID0gKCkgPT4gKFxuXHQ8U2VjdGlvbj5cblx0XHQ8U2VjdGlvblRleHQ+QnkgdGhlIE51bWJlcnMuPC9TZWN0aW9uVGV4dD5cblx0XHQ8Qm94ZXM+XG5cdFx0XHR7ZGF0YS5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdDxCb3gga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0PEJveE51bT5cblx0XHRcdFx0XHRcdDxDb3VudFVwXG5cdFx0XHRcdFx0XHRcdGVuZD17dGhpcy5zdGF0ZS5kaWRWaWV3Q29udHVwID8gY2FyZC5udW1iZXIgOiAwfVxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbj17M31cblx0XHRcdFx0XHRcdFx0cmVkcmF3PXt0cnVlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0JveE51bT5cblx0XHRcdFx0XHQ8Qm94VGV4dD57Y2FyZC50ZXh0fTwvQm94VGV4dD5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHQpKX1cblx0XHQ8L0JveGVzPlxuXHQ8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBY29tcGxpc2htZW50cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Acomplishments/Acomplishments.js\n");

/***/ })

});