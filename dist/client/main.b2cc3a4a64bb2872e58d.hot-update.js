webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ./shared/CardsList/GenericList */ \"./src/shared/CardsList/GenericList.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar merge_1 = __webpack_require__(/*! ./utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar getRandomIndex_1 = __webpack_require__(/*! ./utils/react/getRandomIndex */ \"./src/utils/react/getRandomIndex.ts\");\r\nvar LIST = [\r\n    { text: 'string1' },\r\n    { text: 'string2' },\r\n    { text: 'string3' },\r\n].map(getRandomIndex_1.generateId);\r\nfunction AppComponent() {\r\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\r\n    var handleItemClick = function (id) {\r\n        setList(list.filter(function (item) { return item.id !== id; }));\r\n    };\r\n    var handleAdd = function () {\r\n        setList(list.concat((0, getRandomIndex_1.generateId)({ text: (0, getRandomIndex_1.randomID)() })));\r\n    };\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null),\r\n            react_1.default.createElement(\"button\", { onClick: function () { return handleAdd(); } }, \"Add Element\"),\r\n            react_1.default.createElement(GenericList_1.GenericList, { list: list.map((0, merge_1.merge)({ onClick: handleItemClick })) })),\r\n        react_1.default.createElement(\"br\", null),\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { isOpen: true, button: react_1.default.createElement(\"button\", { type: \"button\" }, \"Test\"), onClose: function () { return console.log('closed'); }, onOpen: function () { return console.log('opened'); } },\r\n            react_1.default.createElement(CardsList_1.CardsList, null))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar getRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/getRandomIndex */ \"./src/utils/react/getRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/CardsList/GenericList.tsx\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar list = [\r\n    {\r\n        text: 'Комментарии',\r\n        classList: 'menuItem',\r\n        href: '#comments'\r\n    },\r\n    {\r\n        text: 'Комментарии',\r\n        classList: 'menuItem',\r\n        href: '#comments'\r\n    },\r\n    {\r\n        text: 'Комментарии',\r\n        classList: 'menuItem',\r\n        href: '#comments'\r\n    }\r\n].map(getRandomIndex_1.generateId);\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton, onClick: function () { return ; } },\r\n            react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\" },\r\n                react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n                react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n                react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" }))),\r\n        react_1.default.createElement(GenericList_1.GenericList, { list: list })));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/GenericList.tsx":
/*!**********************************************!*\
  !*** ./src/shared/CardsList/GenericList.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar NOOP = function () { };\r\nfunction GenericList(_a) {\r\n    var list = _a.list;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? 'a' : _b, text = _a.text, _c = _a.onClick, onClick = _c === void 0 ? NOOP : _c, className = _a.className, id = _a.id, href = _a.href;\r\n        return (react_1.default.createElement(As, { className: className, onClick: function () { return onClick(id); }, href: href, key: id }, text));\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/GenericList.tsx?");

/***/ })

})