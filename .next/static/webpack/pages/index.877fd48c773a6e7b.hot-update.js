/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/footer.jsx":
/*!***********************************!*\
  !*** ./src/components/footer.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _libs_easing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/easing.js */ \"./src/libs/easing.js\");\n/* harmony import */ var _libs_easing_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs_easing_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass Footer extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    componentDidMount() {\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\".back-to-top\").click(function() {\n            jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"html, body\").animate({\n                scrollTop: 0\n            }, 1500, \"easeInOutExpo\");\n            return false;\n        });\n        window.addEventListener(\"scroll\", ()=>{\n            if (window.pageYOffset > 100) {\n                document.querySelector(\".footer-animated\").classList.remove(\"fadeOut\");\n                document.querySelector(\".footer-animated\").style.display = \"block\";\n                document.querySelector(\".footer-animated\").classList.add(\"fadeIn\");\n            } else {\n                document.querySelector(\".footer-animated\").classList.remove(\"fadeIn\");\n                document.querySelector(\".footer-animated\").classList.add(\"fadeOut\");\n            }\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"footer animated footer-animated\",\n            style: {\n                zIndex: 20\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"back-to-top animated\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa fa-chevron-up\"\n                        }, void 0, false, {\n                            fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"socials\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.youtube.com/channel/UCL4U7uB704X1u2oZwXxSBDw\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"ico-circle\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"ion-social-youtube\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://github.com/rlew631\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"ico-circle\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"ion-social-github\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://www.linkedin.com/in/rlew631/\",\n                                    target: \"_blank\",\n                                    rel: \"noopener noreferrer\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"ico-circle\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"ion-social-linkedin\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rlew/Documents/rlew631.github.io/src/components/footer.jsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDSDtBQUNHO0FBRTFCLE1BQU1FLGVBQWVGLHdEQUFlO0lBQ2hDSSxvQkFBbUI7UUFDZkgsNkNBQUNBLENBQUMsZ0JBQWdCSSxLQUFLLENBQUMsV0FBVTtZQUM5QkosNkNBQUNBLENBQUMsY0FBY0ssT0FBTyxDQUFDO2dCQUFDQyxXQUFZO1lBQUMsR0FBRSxNQUFNO1lBQzlDLE9BQU8sS0FBSztRQUNoQjtRQUNBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVLElBQUk7WUFDbEMsSUFBR0QsT0FBT0UsV0FBVyxHQUFHLEtBQUk7Z0JBQ3hCQyxTQUFTQyxhQUFhLENBQUMsb0JBQW9CQyxTQUFTLENBQUNDLE1BQU0sQ0FBQztnQkFDNURILFNBQVNDLGFBQWEsQ0FBQyxvQkFBb0JHLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO2dCQUMzREwsU0FBU0MsYUFBYSxDQUFDLG9CQUFvQkMsU0FBUyxDQUFDSSxHQUFHLENBQUM7WUFDN0QsT0FBTTtnQkFDRk4sU0FBU0MsYUFBYSxDQUFDLG9CQUFvQkMsU0FBUyxDQUFDQyxNQUFNLENBQUM7Z0JBQzVESCxTQUFTQyxhQUFhLENBQUMsb0JBQW9CQyxTQUFTLENBQUNJLEdBQUcsQ0FBQztZQUM3RCxDQUFDO1FBQ0w7SUFDSjtJQUVBQyxTQUFRO1FBQ0oscUJBQ0ksOERBQUNDO1lBQUlDLFdBQVU7WUFBa0NMLE9BQU87Z0JBQUNNLFFBQVE7WUFBRTs7OEJBQy9ELDhEQUFDRjs4QkFDRyw0RUFBQ0c7d0JBQUVDLE1BQUs7d0JBQUlILFdBQVU7a0NBQ2xCLDRFQUFDSTs0QkFBRUosV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHckIsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDSzs7MENBQ0csOERBQUNDOzBDQUNELDRFQUFDSjtvQ0FDR0MsTUFBSztvQ0FDTEksUUFBTztvQ0FDUEMsS0FBSTs4Q0FFSiw0RUFBQ0M7d0NBQUtULFdBQVU7a0RBQ2hCLDRFQUFDSTs0Q0FBRUosV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlqQiw4REFBQ007MENBQ0QsNEVBQUNKO29DQUNHQyxNQUFLO29DQUNMSSxRQUFPO29DQUNQQyxLQUFJOzhDQUVKLDRFQUFDQzt3Q0FBS1QsV0FBVTtrREFDaEIsNEVBQUNJOzRDQUFFSixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSWpCLDhEQUFDTTswQ0FDRCw0RUFBQ0o7b0NBQ0dDLE1BQUs7b0NBQ0xJLFFBQU87b0NBQ1BDLEtBQUk7OENBRUosNEVBQUNDO3dDQUFLVCxXQUFVO2tEQUNoQiw0RUFBQ0k7NENBQUVKLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU3JDO0FBQ0o7QUFFQSwrREFBZWxCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzeD8yYjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICcuLi9saWJzL2Vhc2luZy5qcydcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAkKCcuYmFjay10by10b3AnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcCA6IDB9LDE1MDAsICdlYXNlSW5PdXRFeHBvJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCk9PntcbiAgICAgICAgICAgIGlmKHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMCl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci1hbmltYXRlZCcpLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlT3V0XCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItYW5pbWF0ZWQnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItYW5pbWF0ZWQnKS5jbGFzc0xpc3QuYWRkKFwiZmFkZUluXCIpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItYW5pbWF0ZWQnKS5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZUluXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItYW5pbWF0ZWQnKS5jbGFzc0xpc3QuYWRkKFwiZmFkZU91dFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyIGFuaW1hdGVkIGZvb3Rlci1hbmltYXRlZFwiIHN0eWxlPXt7ekluZGV4OiAyMH19PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmFjay10by10b3AgYW5pbWF0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZXZyb24tdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ0w0VTd1QjcwNFgxdTJvWndYeFNCRHdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwteW91dHViZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JsZXc2MzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtZ2l0aHViXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmxldzYzMS9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtbGlua2VkaW5cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiJCIsIkZvb3RlciIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50IiwiY2xpY2siLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkIiwicmVuZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiekluZGV4IiwiYSIsImhyZWYiLCJpIiwidWwiLCJsaSIsInRhcmdldCIsInJlbCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/footer.jsx\n"));

/***/ }),

/***/ "./src/libs/easing.js":
/*!****************************!*\
  !*** ./src/libs/easing.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_intro_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/intro.jsx */ \"./src/components/intro.jsx\");\n/* harmony import */ var _components_about_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/about.jsx */ \"./src/components/about.jsx\");\n/* harmony import */ var _components_portfolio_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/portfolio.jsx */ \"./src/components/portfolio.jsx\");\n/* harmony import */ var _components_contact_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contact.jsx */ \"./src/components/contact.jsx\");\n/* harmony import */ var _components_footer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer.jsx */ \"./src/components/footer.jsx\");\n/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/preloader */ \"./src/components/preloader.jsx\");\n// this is just a default import from create-next-app\n\n\n//import components\n// import Navbar from '../components/navbar.jsx';\n\n\n\n\n\n\nfunction SafeHydrate(param) {\n    let { children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        suppressHydrationWarning: true,\n        children:  false ? 0 : children\n    }, void 0, false, {\n        fileName: \"/home/rlew/Documents/rlew631.github.io/src/pages/index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = SafeHydrate;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intro_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/pages/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_portfolio_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/pages/index.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_preloader__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/rlew/Documents/rlew631.github.io/src/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rlew/Documents/rlew631.github.io/src/pages/index.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"SafeHydrate\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUQ7O0FBQ1I7QUFFN0MsbUJBQW1CO0FBQ25CLGlEQUFpRDtBQUNMO0FBQ0E7QUFDUTtBQUNKO0FBQ0Y7QUFDRTtBQUVoRCxTQUFTTyxZQUFZLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaO0lBQ25CLHFCQUNFLDhEQUFDQztRQUFJQyx3QkFBd0I7a0JBQzFCLE1BQWtCLEdBQWMsQ0FBSSxHQUFHRixRQUFROzs7Ozs7QUFHdEQ7S0FOU0Q7QUFRTSxTQUFTSSxPQUFPO0lBQzdCLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFLQyxXQUFXYixxRUFBVzs7OEJBSTFCLDhEQUFDQyw2REFBS0E7Ozs7OzhCQUNOLDhEQUFDQyw2REFBS0E7Ozs7OzhCQUNOLDhEQUFDQyxpRUFBU0E7Ozs7OzhCQUNWLDhEQUFDQywrREFBT0E7Ozs7OzhCQUVSLDhEQUFDRSw2REFBU0E7Ozs7Ozs7Ozs7OztBQUlsQixDQUFDO01BaEJ1QksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyBqdXN0IGEgZGVmYXVsdCBpbXBvcnQgZnJvbSBjcmVhdGUtbmV4dC1hcHBcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG4vL2ltcG9ydCBjb21wb25lbnRzXG4vLyBpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyLmpzeCc7XG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9pbnRyby5qc3gnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXQuanN4JztcbmltcG9ydCBQb3J0Zm9saW8gZnJvbSAnLi4vY29tcG9uZW50cy9wb3J0Zm9saW8uanN4JztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdC5qc3gnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci5qc3gnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3ByZWxvYWRlcic7XG5cbmZ1bmN0aW9uIFNhZmVIeWRyYXRlKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nPlxuICAgICAge3R5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICB7LyogPFNhZmVIeWRyYXRlPlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPC9TYWZlSHlkcmF0ZT4gKi99XG4gICAgICAgIDxJbnRybyAvPlxuICAgICAgICA8QWJvdXQgLz5cbiAgICAgICAgPFBvcnRmb2xpbyAvPlxuICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICB7LyogPEZvb3RlciAvPiAqL31cbiAgICAgICAgPFByZWxvYWRlciAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW50cm8iLCJBYm91dCIsIlBvcnRmb2xpbyIsIkNvbnRhY3QiLCJGb290ZXIiLCJQcmVsb2FkZXIiLCJTYWZlSHlkcmF0ZSIsImNoaWxkcmVuIiwiZGl2Iiwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIiwiSG9tZSIsIm1haW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});