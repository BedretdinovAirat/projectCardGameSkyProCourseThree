/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./static/fonts/stratosskyengweb-regular.woff2 */ \"./static/fonts/stratosskyengweb-regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./static/fonts/stratosskyengweb-regular.woff */ \"./static/fonts/stratosskyengweb-regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: StratosSkyeng, sans-serif;\n  font-weight: 400;\n  src:\n    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff2\"),\n    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  font-family: StratosSkyeng, sans-serif;\n  background-color: #004980;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.main {\n  margin-top: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #004980;\n}\n\n.main__game {\n  gap: 40px;\n  width: 480px;\n  height: 459px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #c2f5ff;\n}\n\n.main__game_text {\n  width: 208px;\n  color: #004980;\n  text-align: center;\n  font-variant-numeric: lining-nums proportional-nums;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 48px; /* 120% */\n}\n\n.main__game_center {\n  display: flex;\n  justify-content: center;\n  gap: 26px;\n}\n\n.main__game_block {\n  width: 98px;\n  height: 98px;\n  border-radius: 12px;\n  background: #fff;\n}\n\n.main__game_image {\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.main__game_button {\n  display: flex;\n  justify-content: center;\n\n  /* text-align: center; */\n  align-items: center;\n  width: 246px;\n  height: 48px;\n  border-radius: 12px;\n  background: #7ac100;\n}\n\n.main__button_text {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  color: #fff;\n  text-align: center;\n  font-variant-numeric: lining-nums proportional-nums;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 32px;\n}\n\n/* Стили для game */\n.main__page {\n  background-color: #004980;\n}\n\n.cards {\n  padding-top: 35px;\n  display: grid;\n  place-items: center;\n  gap: 15px;\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.container__cards {\n  display: grid;\n  place-items: center;\n  column-gap: 15px;\n}\n\n.main__app {\n  justify-content: center;\n  align-items: center;\n  background-color: #004980;\n}\n\n/* карточки */\n.hidden {\n  display: none;\n}\n\n/* heeader */\n\n.main__counter {\n  margin-bottom: 35px;\n  display: flex;\n  place-content: space-between space-between;\n  flex-direction: row;\n  background-color: #004980;\n  align-items: center;\n}\n\n.header {\n  margin-top: 41px;\n  margin-left: 22px;\n  display: flex;\n  flex-direction: column;\n}\n\n.counter {\n  color: #fff;\n  font-size: 64px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 72px;\n}\n\n.block__time {\n  display: flex;\n  width: 155px;\n  gap: 57px;\n  justify-content: flex-end;\n}\n\n.time {\n  display: flex;\n  color: #fff;\n  font-variant-numeric: lining-nums proportional-nums;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 32px;\n}\n\n.restart-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 52px;\n  margin-right: 22px;\n  width: 246px;\n  height: 48px;\n  border-radius: 12px;\n  background: #7ac100;\n}\n\n.restart-button_text {\n  color: #fff;\n  text-align: center;\n  font-variant-numeric: lining-nums proportional-nums;\n  font-family: StratosSkyeng, sans-serif;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 32px;\n}\n\n.container {\n  margin-left: 700px;\n  width: 500px;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  display: flex;\n  justify-content: center;\n}\n\n/* renderEnd */\n.main__game_end {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  height: 459px;\n  margin-top: 158px;\n  margin-bottom: 158px;\n  margin-left: 710px;\n  background: #c2f5ff;\n}\n\n.result-game {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.title-game {\n  color: var(--blue-120, #004980);\n  font-variant-numeric: lining-nums proportional-nums;\n  font-family: StratosSkyeng, sans-serif;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 48px;\n}\n\n.end-text {\n  color: #000;\n  font-family: StratosSkyeng, sans-serif;\n  font-variant-numeric: lining-nums proportional-nums;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 32px;\n}\n\n.time-game {\n  color: #000;\n  font-family: StratosSkyeng, sans-serif;\n  font-size: 64px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 72px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./components/main.ts":
/*!****************************!*\
  !*** ./components/main.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appElement: () => (/* binding */ appElement),\n/* harmony export */   changeCards: () => (/* binding */ changeCards),\n/* harmony export */   counterGame: () => (/* binding */ counterGame),\n/* harmony export */   games: () => (/* binding */ games),\n/* harmony export */   mainCard: () => (/* binding */ mainCard),\n/* harmony export */   renderCards: () => (/* binding */ renderCards),\n/* harmony export */   reverseCard: () => (/* binding */ reverseCard)\n/* harmony export */ });\n/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ \"./components/renderPage.ts\");\n/* harmony import */ var _renderEnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderEnd */ \"./components/renderEnd.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ \"./style.css\");\n/* harmony import */ var _renderCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderCounter */ \"./components/renderCounter.ts\");\n\n\n\n\n\nconst imgReverseCard = \"./static/img/reverseCard.svg\";\nconst appElement = document.getElementById(\"app\");\n// console.log(appElement);\n// общие переменные счётчик, карты\nlet counterGame = 0;\nlet mainCard;\nlet reverseCard;\nconst cards = [\n    \"./static/img/cards/aceHearts.svg\",\n    \"./static/img/cards/kingHearts.svg\",\n    \"./static/img/cards/queenHearts.svg\",\n    \"./static/img/cards/jackHearts.svg\",\n    \"./static/img/cards/tenHearts.svg\",\n    \"./static/img/cards/nineHearts.svg\",\n    \"./static/img/cards/eightHearts.svg\",\n    \"./static/img/cards/sevenHearts.svg\",\n    \"./static/img/cards/sixHearts.svg\",\n    \"./static/img/cards/aceDiamonds.svg\",\n    \"./static/img/cards/kingDiamonds.svg\",\n    \"./static/img/cards/queenDiamonds.svg\",\n    \"./static/img/cards/jackDiamonds.svg\",\n    \"./static/img/cards/tenDiamonds.svg\",\n    \"./static/img/cards/nineDiamonds.svg\",\n    \"./static/img/cards/eightDiamonds.svg\",\n    \"./static/img/cards/sevenDiamonds.svg\",\n    \"./static/img/cards/sixDiamonds.svg\",\n    \"./static/img/cards/aceClubs.svg\",\n    \"./static/img/cards/kingClubs.svg\",\n    \"./static/img/cards/queenClubs.svg\",\n    \"./static/img/cards/jackClubs.svg\",\n    \"./static/img/cards/tenClubs.svg\",\n    \"./static/img/cards/nineClubs.svg\",\n    \"./static/img/cards/eightClubs.svg\",\n    \"./static/img/cards/sevenClubs.svg\",\n    \"./static/img/cards/sixClubs.svg\",\n    \"./static/img/cards/aceSpades.svg\",\n    \"./static/img/cards/kingSpades.svg\",\n    \"./static/img/cards/queenSpades.svg\",\n    \"./static/img/cards/jackSpades.svg\",\n    \"./static/img/cards/tenSpades.svg\",\n    \"./static/img/cards/nineSpades.svg\",\n    \"./static/img/cards/eightSpades.svg\",\n    \"./static/img/cards/sevenSpades.svg\",\n    \"./static/img/cards/sixSpades.svg\",\n];\nlet games = {\n    level: 0,\n};\n(0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.renderPage)();\n// общая видимость:\nconst shuffle = (array) => array.sort(() => Math.random() - 0.5);\nconst renderCards = () => {\n    const resultArray = shuffle(cards).slice(0, games.level);\n    const shuffledArray = shuffle(resultArray.concat(resultArray));\n    const cardsHTML = shuffledArray\n        .map((card, index) => {\n        return `\n      <div class =\"container__cards\">\n      <img class=\"main__card\" data-index=\"${index}\" src='${card}' alt=\"\" />\n      <img class=\"reverse__card\" src=\"${imgReverseCard}\" alt=\"\" />\n      </div>    \n          `;\n    })\n        .join(\"\");\n    // appElement.innerHTML = cardsHTML;\n    const container = document.querySelector(\".container\");\n    container.insertAdjacentHTML(\"afterbegin\", cardsHTML);\n    const reverseCards = document.querySelectorAll(\".reverse__card\");\n    for (const reverseCard of reverseCards) {\n        reverseCard.classList.add(\"hidden\");\n    }\n};\nconst changeCards = () => {\n    const reverseCards = document.querySelectorAll(\".reverse__card\");\n    const mainCards = document.querySelectorAll(\".main__card\");\n    for (const mainCard of mainCards) {\n        mainCard.classList.add(\"hidden\");\n    }\n    for (const reverseCard of reverseCards) {\n        reverseCard.classList.remove(\"hidden\");\n    }\n    goCards();\n};\nconst goCards = () => {\n    const containerCards = document.querySelectorAll(\".container__cards\");\n    let counterCards = 0;\n    for (const containerCard of containerCards) {\n        containerCard.addEventListener(\"click\", () => {\n            let childrenElement = containerCard.children;\n            childrenElement[0].classList.remove(\"hidden\");\n            childrenElement[1].classList.add(\"hidden\");\n            counterCards++;\n            if (counterCards % 2 !== 0) {\n                mainCard = containerCard.children[0].src;\n            }\n            if (counterCards % 2 === 0) {\n                reverseCard = containerCard.children[0].src;\n                if (mainCard === reverseCard) {\n                    counterGame++;\n                    if (counterGame % games.level === 0) {\n                        alert(\"Поздравляю! Вы угадали!\");\n                        clearInterval(_renderCounter__WEBPACK_IMPORTED_MODULE_3__.timerId);\n                        (0,_renderEnd__WEBPACK_IMPORTED_MODULE_1__.endPage)();\n                    }\n                }\n                if (mainCard !== reverseCard) {\n                    alert(\"Попробуйте ещё раз!\");\n                    clearInterval(_renderCounter__WEBPACK_IMPORTED_MODULE_3__.timerId);\n                    (0,_renderEnd__WEBPACK_IMPORTED_MODULE_1__.endPage)();\n                }\n            }\n        });\n    }\n};\n\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./components/main.ts?");

/***/ }),

/***/ "./components/renderCounter.ts":
/*!*************************************!*\
  !*** ./components/renderCounter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameTime: () => (/* binding */ gameTime),\n/* harmony export */   renderCounter: () => (/* binding */ renderCounter),\n/* harmony export */   time: () => (/* binding */ time),\n/* harmony export */   timerId: () => (/* binding */ timerId)\n/* harmony export */ });\n/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ \"./components/renderPage.ts\");\n\n// import {renderCards, changeCards } from \"./main.js\";\nlet time = 0;\nlet gameTime;\nlet timerId;\nconst appElement = document.getElementById(\"app\");\nconst renderCounter = () => {\n    const newApp = `<div class=\"main__counter\">\r\n      <div class=\"header\">\r\n        <div class=\"block__time\">\r\n          <p class=\"time\">min</p>\r\n          <p class=\"time\">sek</p>\r\n        </div>\r\n        <div class=\"counter\">00.00</div>\r\n      </div>\r\n      <button class=\"restart-button\">\r\n      <p class=\"restart-button_text\">Начать заново</p>\r\n      </button>\r\n      </div>\r\n      <div class=\"container\"></div>\r\n    `;\n    appElement.innerHTML = `${newApp}`;\n    const counter = document.querySelector(\".counter\");\n    console.log(counter);\n    timerId = setInterval(() => {\n        let min = Math.floor(time / 60);\n        min = min < 10 ? \"0\" + min : min;\n        let sec = time % 60;\n        sec = sec < 10 ? \"0\" + sec : sec;\n        counter.textContent = `${min}.${sec}`;\n        gameTime = `${min}.${sec}`;\n        time++;\n    }, 1000);\n    const restartButton = document.querySelector(\".restart-button\");\n    restartButton.addEventListener(\"click\", () => {\n        // time = 0;\n        // clearInterval(timerId);\n        (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.renderPage)();\n    });\n};\n\n\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./components/renderCounter.ts?");

/***/ }),

/***/ "./components/renderEnd.ts":
/*!*********************************!*\
  !*** ./components/renderEnd.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endPage: () => (/* binding */ endPage)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./components/main.ts\");\n/* harmony import */ var _renderCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCounter */ \"./components/renderCounter.ts\");\n/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderPage */ \"./components/renderPage.ts\");\n\n\n\nconst appElement = document.getElementById(\"app\");\nconst endPage = () => {\n    const winHTML = `<div class=\"main__game_end\">\n    <div class=\"result-game\">\n      <img\n        class=\"celebration\"\n        src=\"./static/img/mainImg/celebration.svg\"\n        alt=\"celebration\"\n      />\n      <div class=\"title-game\">Вы выиграли!</div>\n      <div class=\"end_text\">Затраченное время:</div>\n      <div class=\"time-game\">${_renderCounter__WEBPACK_IMPORTED_MODULE_1__.gameTime}</div>\n      <button id=\"win-button\" class=\"restart-button\">Играть снова</button>\n    </div>\n  </div>`;\n    const loseHTML = `<div class=\"main__game_end\">\n    <div class=\"result-game\">\n      <img\n        class=\"celebration\"\n        src=\"./static/img/mainImg/dead.svg\"\n        alt=\"dead\"\n      />\n      <div class=\"title-game\">Вы проиграли!</div>\n      <div class=\"end_text\">Затраченное время:</div>\n      <div class=\"time-game\">${_renderCounter__WEBPACK_IMPORTED_MODULE_1__.gameTime}</div>\n      <button id=\"lose-button\" class=\"restart-button\">Играть снова</button>\n    </div>\n  </div>`;\n    if (_main__WEBPACK_IMPORTED_MODULE_0__.counterGame % _main__WEBPACK_IMPORTED_MODULE_0__.games.level === 0) {\n        appElement.innerHTML = winHTML;\n        const winButton = document.getElementById(\"win-button\");\n        winButton.addEventListener(\"click\", () => {\n            clearInterval(_renderCounter__WEBPACK_IMPORTED_MODULE_1__.timerId);\n            (0,_renderPage__WEBPACK_IMPORTED_MODULE_2__.renderPage)();\n        });\n    }\n    if (_main__WEBPACK_IMPORTED_MODULE_0__.mainCard !== _main__WEBPACK_IMPORTED_MODULE_0__.reverseCard) {\n        appElement.innerHTML = loseHTML;\n        const loseButton = document.getElementById(\"lose-button\");\n        loseButton.addEventListener(\"click\", () => {\n            clearInterval(_renderCounter__WEBPACK_IMPORTED_MODULE_1__.timerId);\n            (0,_renderPage__WEBPACK_IMPORTED_MODULE_2__.renderPage)();\n        });\n    }\n};\n\n\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./components/renderEnd.ts?");

/***/ }),

/***/ "./components/renderPage.ts":
/*!**********************************!*\
  !*** ./components/renderPage.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPage: () => (/* binding */ renderPage)\n/* harmony export */ });\n/* harmony import */ var _renderCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCounter */ \"./components/renderCounter.ts\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./components/main.ts\");\n\n\nconst appElement = document.getElementById(\"app\");\nconst renderPage = () => {\n    const appHTML = `<section class=\"main\">\n      <div class=\"main__game\">\n        <div class=\"main__game_top\">\n          <p class=\"main__game_text\">Выбери сложность</p>\n        </div>\n        <form class=\"main__game_center\">\n          <div type=\"radio\" id=\"easy__game\" class=\"main__game_block\">\n            <img class=\"main__game_image\" src=\"./static/img/1.png\" alt=\"\" />\n          </div>\n          <div type=\"radio\" id=\"medium__game\" class=\"main__game_block\">\n            <img class=\"main__game_image\" src=\"./static/img/2.png\" alt=\"\" />\n          </div>\n          <div type=\"radio\" id=\"hard__game\" class=\"main__game_block\">\n            <img class=\"main__game_image\" src=\"./static/img/3.png\" alt=\"\" />\n          </div>\n        </form>\n        <div class=\"main__game_bot\">\n          <button id=\"button__start\" class=\"main__game_button\">\n            <p class=\"main__button_text\">Старт</p>\n          </button>\n        </div>\n      </div>\n    </section>`;\n    appElement.innerHTML = appHTML;\n    const buttonStart = document.getElementById(\"button__start\");\n    const easyGame = document.getElementById(\"easy__game\");\n    const meduimGame = document.getElementById(\"medium__game\");\n    const hardGame = document.getElementById(\"hard__game\");\n    easyGame.addEventListener(\"click\", () => {\n        _main__WEBPACK_IMPORTED_MODULE_1__.games.level = 3;\n    });\n    meduimGame.addEventListener(\"click\", () => {\n        _main__WEBPACK_IMPORTED_MODULE_1__.games.level = 6;\n    });\n    hardGame.addEventListener(\"click\", () => {\n        _main__WEBPACK_IMPORTED_MODULE_1__.games.level = 9;\n    });\n    buttonStart.addEventListener(\"click\", () => {\n        (0,_renderCounter__WEBPACK_IMPORTED_MODULE_0__.renderCounter)();\n        (0,_main__WEBPACK_IMPORTED_MODULE_1__.renderCards)();\n        setTimeout(() => {\n            (0,_main__WEBPACK_IMPORTED_MODULE_1__.changeCards)();\n        }, 5000);\n    });\n    clearInterval(_renderCounter__WEBPACK_IMPORTED_MODULE_0__.timerId);\n};\n\n\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./components/renderPage.ts?");

/***/ }),

/***/ "./static/fonts/stratosskyengweb-regular.woff":
/*!****************************************************!*\
  !*** ./static/fonts/stratosskyengweb-regular.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d7d99bd522cf2d77ce4a.woff\";\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./static/fonts/stratosskyengweb-regular.woff?");

/***/ }),

/***/ "./static/fonts/stratosskyengweb-regular.woff2":
/*!*****************************************************!*\
  !*** ./static/fonts/stratosskyengweb-regular.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ce93393e831d32412096.woff2\";\n\n//# sourceURL=webpack://projectcardgameskyprocoursethree/./static/fonts/stratosskyengweb-regular.woff2?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./components/main.ts");
/******/ 	
/******/ })()
;