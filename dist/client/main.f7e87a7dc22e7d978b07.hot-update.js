webpackHotUpdate("main",{

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar EIcon_1 = __webpack_require__(/*! ../../enums/EIcon */ \"./src/enums/EIcon.tsx\");\r\nvar Icon_css_1 = __importDefault(__webpack_require__(/*! ./Icon.css */ \"./src/shared/Icon/Icon.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ./Icons */ \"./src/shared/Icon/Icons/index.ts\");\r\nvar CommentsIcon_1 = __webpack_require__(/*! ./Icons/CommentsIcon */ \"./src/shared/Icon/Icons/CommentsIcon.tsx\");\r\nvar ComplainIcon_1 = __webpack_require__(/*! ./Icons/ComplainIcon */ \"./src/shared/Icon/Icons/ComplainIcon.tsx\");\r\nvar HideIcon_1 = __webpack_require__(/*! ./Icons/HideIcon */ \"./src/shared/Icon/Icons/HideIcon.tsx\");\r\nvar SaveIcon_1 = __webpack_require__(/*! ./Icons/SaveIcon */ \"./src/shared/Icon/Icons/SaveIcon.tsx\");\r\nvar ShareIcon_1 = __webpack_require__(/*! ./Icons/ShareIcon */ \"./src/shared/Icon/Icons/ShareIcon.tsx\");\r\nfunction Icon(_a) {\r\n    var _b;\r\n    var name = _a.name, size = _a.size;\r\n    return (react_1.default.createElement(\"div\", { className: (0, classnames_1.default)((_b = {}, _b[Icon_css_1.default[\"w\" + size]] = size, _b)) },\r\n        name === EIcon_1.EIcon.Comment && react_1.default.createElement(CommentsIcon_1.CommentsIcon, null),\r\n        name === EIcon_1.EIcon.Complain && react_1.default.createElement(ComplainIcon_1.ComplainIcon, null),\r\n        name === EIcon_1.EIcon.Hide && react_1.default.createElement(HideIcon_1.HideIcon, null),\r\n        name === EIcon_1.EIcon.Menu && react_1.default.createElement(Icons_1.MenuIcon, null),\r\n        name === EIcon_1.EIcon.Save && react_1.default.createElement(SaveIcon_1.SaveIcon, null),\r\n        name === EIcon_1.EIcon.Share && react_1.default.createElement(ShareIcon_1.ShareIcon, null)));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/Icons/CommentsIcon.tsx":
/*!************************************************!*\
  !*** ./src/shared/Icon/Icons/CommentsIcon.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction CommentsIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 \\r\\n      11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 \\r\\n      8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentsIcon = CommentsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icons/CommentsIcon.tsx?");

/***/ })

})