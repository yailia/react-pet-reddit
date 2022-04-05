webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar CardListTest_1 = __webpack_require__(/*! ./shared/CardsList/CardListTest */ \"./src/shared/CardsList/CardListTest.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar merge_1 = __webpack_require__(/*! ./utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar getRandomIndex_1 = __webpack_require__(/*! ./utils/react/getRandomIndex */ \"./src/utils/react/getRandomIndex.ts\");\r\nvar LIST = [\r\n    { title: 'string1' },\r\n    { title: 'string2' },\r\n    { title: 'string3' },\r\n].map(getRandomIndex_1.generateId);\r\nfunction AppComponent() {\r\n    function handleItemClick(id) {\r\n        console.log(id);\r\n    }\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null),\r\n            react_1.default.createElement(CardListTest_1.CardListTest, { list: LIST.map((0, merge_1.merge)({ onClick: handleItemClick })) })),\r\n        react_1.default.createElement(\"br\", null),\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { type: \"button\" }, \"Test\") })));\r\n}\r\nexports.App = (0, root_1.hot)(AppComponent);\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardListTest.tsx":
/*!***********************************************!*\
  !*** ./src/shared/CardsList/CardListTest.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardListTest = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction CardListTest(_a) {\r\n    var list = _a.list, onClick = _a.onClick;\r\n    return (react_1.default.createElement(\"ul\", null, list.map(function (item, idx) {\r\n        return (react_1.default.createElement(\"li\", { className: \"list\", onClick: function () { return item.onClick(item.id); }, key: item.id }, item.title));\r\n    })));\r\n}\r\nexports.CardListTest = CardListTest;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardListTest.tsx?");

/***/ })

})