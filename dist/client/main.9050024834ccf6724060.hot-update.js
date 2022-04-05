webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ./shared/CardsList/GenericList */ \"./src/shared/CardsList/GenericList.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar merge_1 = __webpack_require__(/*! ./utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar getRandomIndex_1 = __webpack_require__(/*! ./utils/react/getRandomIndex */ \"./src/utils/react/getRandomIndex.ts\");\r\nvar LIST = [\r\n    { text: 'string1' },\r\n    { text: 'string2' },\r\n    { text: 'string3' },\r\n].map(getRandomIndex_1.generateId);\r\nfunction AppComponent() {\r\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\r\n    var handleItemClick = function (id) {\r\n        setList(list.filter(function (item) { return item.id !== id; }));\r\n    };\r\n    var handleAdd = function () {\r\n        setList(list.concat((0, getRandomIndex_1.generateId)({ title: (0, getRandomIndex_1.randomID)() })));\r\n    };\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null),\r\n            react_1.default.createElement(\"button\", { onClick: function () { return handleAdd(); } }, \"Add Element\"),\r\n            react_1.default.createElement(GenericList_1.GenericList, { list: list.map((0, merge_1.merge)({ onClick: handleItemClick })) })),\r\n        react_1.default.createElement(\"br\", null),\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { type: \"button\" }, \"Test\") })));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/GenericList.tsx":
/*!**********************************************!*\
  !*** ./src/shared/CardsList/GenericList.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction GenericList(_a) {\r\n    var list = _a.list;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, onClick = _a.onClick, className = _a.className, id = _a.id, href = _a.href;\r\n        react_1.default.createElement(As, { className: className, onClick: function () { return onClick(id); }, href: href, key: id }, text);\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/GenericList.tsx?");

/***/ })

})