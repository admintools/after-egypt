"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./next-i18next.config.js":
/*!********************************!*\
  !*** ./next-i18next.config.js ***!
  \********************************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    debug: \"development\" === \"development\",\n    i18n: {\n        defaultLocale: \"en\",\n        locales: [\n            \"en\",\n            \"de\",\n            \"it\"\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQUEsT0FBT0MsT0FBTyxHQUFHO0lBQ2ZDLE9BQU9DLGtCQUF5QjtJQUNoQ0MsTUFBTTtRQUNKQyxlQUFlO1FBQ2ZDLFNBQVM7WUFBQztZQUFNO1lBQU07U0FBSztJQUM3QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS1zc2cvLi9uZXh0LWkxOG5leHQuY29uZmlnLmpzPzFjYjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxuICBpMThuOiB7XG4gICAgZGVmYXVsdExvY2FsZTogXCJlblwiLFxuICAgIGxvY2FsZXM6IFtcImVuXCIsIFwiZGVcIiwgXCJpdFwiXSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRlYnVnIiwicHJvY2VzcyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./next-i18next.config.js\n");

/***/ }),

/***/ "./src/lib/languageDetector.js":
/*!*************************************!*\
  !*** ./src/lib/languageDetector.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_language_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-language-detector */ \"next-language-detector\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../next-i18next.config */ \"./next-i18next.config.js\");\n/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_language_detector__WEBPACK_IMPORTED_MODULE_0__]);\nnext_language_detector__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_language_detector__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    fallbackLng: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.defaultLocale),\n    supportedLngs: (_next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales)\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2xhbmd1YWdlRGV0ZWN0b3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzRDtBQUNBO0FBRXRELGlFQUFlQSxrRUFBZ0JBLENBQUM7SUFDOUJFLGFBQWFELGdGQUFnQztJQUM3Q0ksZUFBZUosMEVBQTBCO0FBQzNDLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtc3NnLy4vc3JjL2xpYi9sYW5ndWFnZURldGVjdG9yLmpzP2E2NmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxhbmd1YWdlRGV0ZWN0b3IgZnJvbSBcIm5leHQtbGFuZ3VhZ2UtZGV0ZWN0b3JcIjtcbmltcG9ydCBpMThuZXh0Q29uZmlnIGZyb20gXCIuLi8uLi9uZXh0LWkxOG5leHQuY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlRGV0ZWN0b3Ioe1xuICBmYWxsYmFja0xuZzogaTE4bmV4dENvbmZpZy5pMThuLmRlZmF1bHRMb2NhbGUsXG4gIHN1cHBvcnRlZExuZ3M6IGkxOG5leHRDb25maWcuaTE4bi5sb2NhbGVzLFxufSk7XG4iXSwibmFtZXMiOlsibGFuZ3VhZ2VEZXRlY3RvciIsImkxOG5leHRDb25maWciLCJmYWxsYmFja0xuZyIsImkxOG4iLCJkZWZhdWx0TG9jYWxlIiwic3VwcG9ydGVkTG5ncyIsImxvY2FsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/languageDetector.js\n");

/***/ }),

/***/ "./src/lib/redirect.js":
/*!*****************************!*\
  !*** ./src/lib/redirect.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Redirect\": () => (/* binding */ Redirect),\n/* harmony export */   \"getRedirect\": () => (/* binding */ getRedirect),\n/* harmony export */   \"useRedirect\": () => (/* binding */ useRedirect)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _languageDetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languageDetector */ \"./src/lib/languageDetector.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_languageDetector__WEBPACK_IMPORTED_MODULE_3__]);\n_languageDetector__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst useRedirect = (to)=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    to = to || router.asPath;\n    // language detection\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const detectedLng = _languageDetector__WEBPACK_IMPORTED_MODULE_3__[\"default\"].detect();\n        if (to.startsWith(\"/\" + detectedLng) && router.route === \"/404\") {\n            // prevent endless loop\n            router.replace(\"/\" + detectedLng + router.route);\n            return;\n        }\n        _languageDetector__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cache(detectedLng);\n        router.replace(\"/\" + detectedLng + to);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\nconst Redirect = ()=>{\n    useRedirect();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n// eslint-disable-next-line react/display-name\nconst getRedirect = (to)=>()=>{\n        useRedirect(to);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    };\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3JlZGlyZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ007QUFDVTtBQUUzQyxNQUFNRyxjQUFjLENBQUNDLEtBQU87SUFDakMsTUFBTUMsU0FBU0osc0RBQVNBO0lBQ3hCRyxLQUFLQSxNQUFNQyxPQUFPQyxNQUFNO0lBRXhCLHFCQUFxQjtJQUNyQk4sZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1PLGNBQWNMLGdFQUF1QjtRQUMzQyxJQUFJRSxHQUFHSyxVQUFVLENBQUMsTUFBTUYsZ0JBQWdCRixPQUFPSyxLQUFLLEtBQUssUUFBUTtZQUMvRCx1QkFBdUI7WUFDdkJMLE9BQU9NLE9BQU8sQ0FBQyxNQUFNSixjQUFjRixPQUFPSyxLQUFLO1lBQy9DO1FBQ0YsQ0FBQztRQUVEUiwrREFBc0IsQ0FBQ0s7UUFDdkJGLE9BQU9NLE9BQU8sQ0FBQyxNQUFNSixjQUFjSDtJQUNyQztJQUVBLHFCQUFPO0FBQ1QsRUFBRTtBQUVLLE1BQU1TLFdBQVcsSUFBTTtJQUM1QlY7SUFDQSxxQkFBTztBQUNULEVBQUU7QUFFRiw4Q0FBOEM7QUFDdkMsTUFBTVcsY0FBYyxDQUFDVixLQUFPLElBQU07UUFDdkNELFlBQVlDO1FBQ1oscUJBQU87SUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS1zc2cvLi9zcmMvbGliL3JlZGlyZWN0LmpzP2I1ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBsYW5ndWFnZURldGVjdG9yIGZyb20gXCIuL2xhbmd1YWdlRGV0ZWN0b3JcIjtcblxuZXhwb3J0IGNvbnN0IHVzZVJlZGlyZWN0ID0gKHRvKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB0byA9IHRvIHx8IHJvdXRlci5hc1BhdGg7XG5cbiAgLy8gbGFuZ3VhZ2UgZGV0ZWN0aW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGV0ZWN0ZWRMbmcgPSBsYW5ndWFnZURldGVjdG9yLmRldGVjdCgpO1xuICAgIGlmICh0by5zdGFydHNXaXRoKFwiL1wiICsgZGV0ZWN0ZWRMbmcpICYmIHJvdXRlci5yb3V0ZSA9PT0gXCIvNDA0XCIpIHtcbiAgICAgIC8vIHByZXZlbnQgZW5kbGVzcyBsb29wXG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9cIiArIGRldGVjdGVkTG5nICsgcm91dGVyLnJvdXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsYW5ndWFnZURldGVjdG9yLmNhY2hlKGRldGVjdGVkTG5nKTtcbiAgICByb3V0ZXIucmVwbGFjZShcIi9cIiArIGRldGVjdGVkTG5nICsgdG8pO1xuICB9KTtcblxuICByZXR1cm4gPD48Lz47XG59O1xuXG5leHBvcnQgY29uc3QgUmVkaXJlY3QgPSAoKSA9PiB7XG4gIHVzZVJlZGlyZWN0KCk7XG4gIHJldHVybiA8PjwvPjtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbmV4cG9ydCBjb25zdCBnZXRSZWRpcmVjdCA9ICh0bykgPT4gKCkgPT4ge1xuICB1c2VSZWRpcmVjdCh0byk7XG4gIHJldHVybiA8PjwvPjtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwibGFuZ3VhZ2VEZXRlY3RvciIsInVzZVJlZGlyZWN0IiwidG8iLCJyb3V0ZXIiLCJhc1BhdGgiLCJkZXRlY3RlZExuZyIsImRldGVjdCIsInN0YXJ0c1dpdGgiLCJyb3V0ZSIsInJlcGxhY2UiLCJjYWNoZSIsIlJlZGlyZWN0IiwiZ2V0UmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/redirect.js\n");

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/redirect */ \"./src/lib/redirect.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_redirect__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_redirect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_redirect__WEBPACK_IMPORTED_MODULE_0__.Redirect);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvNDA0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQzNDLGlFQUFlQSxtREFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUtc3NnLy4vc3JjL3BhZ2VzLzQwNC5qcz83NTg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcIi4uL2xpYi9yZWRpcmVjdFwiO1xuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3Q7XG4iXSwibmFtZXMiOlsiUmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/404.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "next-language-detector":
/*!*****************************************!*\
  !*** external "next-language-detector" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/404.js"));
module.exports = __webpack_exports__;

})();