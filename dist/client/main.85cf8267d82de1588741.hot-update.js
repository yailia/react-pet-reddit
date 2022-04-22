webpackHotUpdate("main",{

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\r\n/*!\r\n  Copyright (c) 2018 Jed Watson.\r\n  Licensed under the MIT License (MIT), see\r\n  http://jedwatson.github.io/classnames\r\n*/\r\n/* global define */\r\n(function () {\r\n    'use strict';\r\n    var hasOwn = {}.hasOwnProperty;\r\n    function classNames() {\r\n        var classes = [];\r\n        for (var i = 0; i < arguments.length; i++) {\r\n            var arg = arguments[i];\r\n            if (!arg)\r\n                continue;\r\n            var argType = typeof arg;\r\n            if (argType === 'string' || argType === 'number') {\r\n                classes.push(arg);\r\n            }\r\n            else if (Array.isArray(arg)) {\r\n                if (arg.length) {\r\n                    var inner = classNames.apply(null, arg);\r\n                    if (inner) {\r\n                        classes.push(inner);\r\n                    }\r\n                }\r\n            }\r\n            else if (argType === 'object') {\r\n                if (arg.toString === Object.prototype.toString) {\r\n                    for (var key in arg) {\r\n                        if (hasOwn.call(arg, key) && arg[key]) {\r\n                            classes.push(key);\r\n                        }\r\n                    }\r\n                }\r\n                else {\r\n                    classes.push(arg.toString());\r\n                }\r\n            }\r\n        }\r\n        return classes.join(' ');\r\n    }\r\n    if ( true && module.exports) {\r\n        classNames.default = classNames;\r\n        module.exports = classNames;\r\n    }\r\n    else if (true) {\r\n        // register as 'classnames', consistent with npm package name\r\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\r\n            return classNames;\r\n        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n    }\r\n    else {}\r\n}());\r\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Icon/Icon.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Icon/Icon.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".Icon__w16--2quH3 {\\r\\n  width: 16px;\\r\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"w16\": \"Icon__w16--2quH3\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar EIcon_1 = __webpack_require__(/*! ../../../../enums/EIcon */ \"./src/enums/EIcon.tsx\");\r\nvar getRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/getRandomIndex */ \"./src/utils/react/getRandomIndex.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon/Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../GenericList */ \"./src/shared/CardsList/GenericList.tsx\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar list = [\r\n    {\r\n        text: 'Комментарии',\r\n        className: 'menuItem',\r\n        href: '#comments'\r\n    },\r\n    {\r\n        text: 'Комментарии',\r\n        className: 'menuItem',\r\n        href: '#comments'\r\n    },\r\n    {\r\n        text: 'Комментарии',\r\n        className: 'menuItem',\r\n        href: '#comments'\r\n    }\r\n].map(getRandomIndex_1.generateId);\r\nfunction Menu() {\r\n    var _a = react_1.default.useState(false), open = _a[0], isOpen = _a[1];\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton, onClick: function () { return isOpen(!open); } },\r\n                react_1.default.createElement(Icon_1.Icon, { name: EIcon_1.EIcon.Menu })) },\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list }),\r\n                react_1.default.createElement(\"button\", { onClick: function () { return isOpen(!open); }, className: menu_css_1.default.closeButton }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Icon/Icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Icon.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Icon/Icon.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Icon.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Icon/Icon.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Icon.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Icon/Icon.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.css?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar EIcon_1 = __webpack_require__(/*! ../../enums/EIcon */ \"./src/enums/EIcon.tsx\");\r\nvar Icon_css_1 = __importDefault(__webpack_require__(/*! ./Icon.css */ \"./src/shared/Icon/Icon.css\"));\r\nvar Icons_1 = __webpack_require__(/*! ./Icons */ \"./src/shared/Icon/Icons/index.ts\");\r\nvar CommentsIcon_1 = __webpack_require__(/*! ./Icons/CommentsIcon */ \"./src/shared/Icon/Icons/CommentsIcon.tsx\");\r\nvar ComplainIcon_1 = __webpack_require__(/*! ./Icons/ComplainIcon */ \"./src/shared/Icon/Icons/ComplainIcon.tsx\");\r\nvar HideIcon_1 = __webpack_require__(/*! ./Icons/HideIcon */ \"./src/shared/Icon/Icons/HideIcon.tsx\");\r\nvar SaveIcon_1 = __webpack_require__(/*! ./Icons/SaveIcon */ \"./src/shared/Icon/Icons/SaveIcon.tsx\");\r\nvar ShareIcon_1 = __webpack_require__(/*! ./Icons/ShareIcon */ \"./src/shared/Icon/Icons/ShareIcon.tsx\");\r\nfunction Icon(_a) {\r\n    var _b;\r\n    var name = _a.name, size = _a.size;\r\n    return (react_1.default.createElement(\"div\", { className: (0, classnames_1.default)((_b = {}, _b[Icon_css_1.default[\"w\" + size]] = size, _b)) }));\r\n    {\r\n        name === EIcon_1.EIcon.Comment && react_1.default.createElement(CommentsIcon_1.CommentsIcon, null);\r\n    }\r\n    {\r\n        name === EIcon_1.EIcon.Complain && react_1.default.createElement(ComplainIcon_1.ComplainIcon, null);\r\n    }\r\n    {\r\n        name === EIcon_1.EIcon.Hide && react_1.default.createElement(HideIcon_1.HideIcon, null);\r\n    }\r\n    {\r\n        name === EIcon_1.EIcon.Menu && react_1.default.createElement(Icons_1.MenuIcon, null);\r\n    }\r\n    {\r\n        name === EIcon_1.EIcon.Save && react_1.default.createElement(SaveIcon_1.SaveIcon, null);\r\n    }\r\n    {\r\n        name === EIcon_1.EIcon.Share && react_1.default.createElement(ShareIcon_1.ShareIcon, null);\r\n    }\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ })

})