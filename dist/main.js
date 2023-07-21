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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#content{\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n.main-title{\r\n\r\n    font-size: 30px;\r\n    text-align: center;\r\n    padding-bottom: 20px;\r\n\r\n}\r\n\r\n.add-project{\r\n\r\n    border-radius: 100%;\r\n    height: 30px;\r\n    width: 30px;\r\n    align-self: center;\r\n\r\n}\r\n\r\n.projects{\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: 20px;\r\n\r\n}\r\n\r\n#item-entry{\r\n\r\n    display:  flex;\r\n    flex-direction: column;\r\n    row-gap: 5px;\r\n    width: 50%;\r\n    padding-bottom: 5%;\r\n\r\n}\r\n\r\n.edit-button{\r\n\r\n    border-radius: 100%;\r\n    height: 3px;\r\n    width: 3px;\r\n\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/projects */ \"./src/pages/projects.js\");\n/* harmony import */ var _pages_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/items */ \"./src/pages/items.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\r\n\r\n\r\n\r\n(0,_pages_projects__WEBPACK_IMPORTED_MODULE_0__.addTitle)();\r\n(0,_pages_projects__WEBPACK_IMPORTED_MODULE_0__.createProjectsDiv)();\r\n(0,_pages_projects__WEBPACK_IMPORTED_MODULE_0__.addProjectButton)();\r\n\r\nconst projectButton = document.querySelector('.add-project');\r\n\r\nprojectButton.addEventListener(\"click\", () => {\r\n\r\n    (0,_pages_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)();\r\n \r\n});\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/pages/edit.js":
/*!***************************!*\
  !*** ./src/pages/edit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addEditButton: () => (/* binding */ addEditButton),\n/* harmony export */   editText: () => (/* binding */ editText)\n/* harmony export */ });\nconst addEditButton = (textDiv) => {\r\n\r\n    const editButton = document.createElement('button');\r\n    editButton.classList.add('edit-button');\r\n    \r\n    editButton.addEventListener('click', () => {\r\n\r\n       editText(textDiv);\r\n\r\n    });\r\n    \r\n    return editButton;\r\n\r\n};\r\n\r\n\r\nconst editText = (textDiv) => {\r\n\r\n    const editForm = document.createElement('form');\r\n    const editDiv = document.createElement('div');\r\n    const editInput = document.createElement('input');\r\n    editInput.setAttribute('type', 'text');\r\n    editInput.setAttribute('id', 'edit-input');\r\n    editDiv.appendChild(editInput);\r\n    editForm.appendChild(editDiv);\r\n\r\n    const editSubmit = document.createElement('input');\r\n    editSubmit.setAttribute('type', 'submit');\r\n    editSubmit.setAttribute('value', 'Edit');\r\n    editForm.appendChild(editSubmit);\r\n\r\n    editForm.addEventListener('submit', (event) => {\r\n\r\n        event.preventDefault();\r\n        textDiv.removeChild(editForm);\r\n        textDiv.textContent = editInput.value;\r\n        textDiv.appendChild(addEditButton(textDiv));\r\n        \r\n    });\r\n    \r\n\r\n    textDiv.appendChild(editForm);\r\n\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/pages/edit.js?");

/***/ }),

/***/ "./src/pages/inputForm.js":
/*!********************************!*\
  !*** ./src/pages/inputForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeItem: () => (/* binding */ placeItem)\n/* harmony export */ });\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ \"./src/pages/items.js\");\n \r\n\r\nconst itemFactory = (title, description, dueDate, priority) => {\r\n\r\n    return {title, description, dueDate, priority};\r\n\r\n};\r\n\r\nconst placeItem = (project) => {\r\n\r\n    let formDiv = document.createElement('div');\r\n    project.appendChild(createForm(project));\r\n\r\n\r\n};\r\n\r\nconst createForm = (project) => {\r\n\r\n    let inputForm = document.createElement('form');\r\n    inputForm.setAttribute('id','item-entry');\r\n\r\n\r\n    let titleDiv = document.createElement('div');\r\n    titleDiv.classList.add('section-div');\r\n    let labelTitle = document.createElement('label');\r\n    let titleInput = document.createElement('input');\r\n    titleInput.setAttribute('id', 'title');\r\n    titleInput.setAttribute('type', 'text');\r\n    labelTitle.setAttribute('for', 'title');\r\n    labelTitle.textContent = \"Title: \";\r\n    titleDiv.appendChild(labelTitle);\r\n    titleDiv.appendChild(titleInput);\r\n    inputForm.appendChild(titleDiv);\r\n\r\n\r\n    let descDiv = document.createElement('div');\r\n    descDiv.classList.add('section-div');\r\n    let labelDesc = document.createElement('label');\r\n    let descInput = document.createElement('input');\r\n    descInput.setAttribute('id', 'desc');\r\n    descInput.setAttribute('type', 'text');\r\n    labelDesc.setAttribute('for', 'desc');\r\n    labelDesc.textContent = \"Description: \";\r\n    descDiv.appendChild(labelDesc);\r\n    descDiv.appendChild(descInput);\r\n    inputForm.appendChild(descDiv);\r\n\r\n\r\n    let dueDiv = document.createElement('div');\r\n    dueDiv.classList.add('section-div');\r\n    let labelDue = document.createElement('label');\r\n    let dueInput = document.createElement('input');\r\n    dueInput.setAttribute('id', 'due');\r\n    dueInput.setAttribute('type', 'text');\r\n    labelDue.setAttribute('for', 'due');\r\n    labelDue.textContent = \"Due Date: \";\r\n    dueDiv.appendChild(labelDue);\r\n    dueDiv.appendChild(dueInput);\r\n    inputForm.appendChild(dueDiv);\r\n\r\n\r\n    let posDiv = document.createElement('div');\r\n    posDiv.classList.add('section-div');\r\n    let labelPriority = document.createElement('label');\r\n    let priorityInput = document.createElement('input');\r\n    priorityInput.setAttribute('id', 'priority');\r\n    priorityInput.setAttribute('type', 'number');\r\n    priorityInput.min = 1;\r\n    priorityInput.step = 1;\r\n\r\n    labelPriority.setAttribute('for', 'priority');\r\n    labelPriority.textContent = \"Priority\";\r\n    posDiv.appendChild(labelPriority);\r\n    posDiv.appendChild(priorityInput);\r\n    inputForm.appendChild(posDiv);\r\n\r\n    let inputSubmit = document.createElement('input');\r\n    inputSubmit.setAttribute('type', 'submit');\r\n    inputSubmit.setAttribute('value', 'Submit');\r\n    \r\n    inputForm.addEventListener('submit', (event) => {\r\n     \r\n        event.preventDefault(); //Stop Form Submission\r\n        _items__WEBPACK_IMPORTED_MODULE_0__.itemList.push(itemFactory(titleInput, descInput, dueInput, priorityInput));\r\n        project.removeChild(inputForm);\r\n        (0,_items__WEBPACK_IMPORTED_MODULE_0__.clearItems)();\r\n        project.appendChild((0,_items__WEBPACK_IMPORTED_MODULE_0__.createItemsDiv)());\r\n\r\n    });\r\n\r\n    inputForm.appendChild(inputSubmit);\r\n\r\n    return inputForm;\r\n\r\n};\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/pages/inputForm.js?");

/***/ }),

/***/ "./src/pages/items.js":
/*!****************************!*\
  !*** ./src/pages/items.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItemButton: () => (/* binding */ addItemButton),\n/* harmony export */   clearItems: () => (/* binding */ clearItems),\n/* harmony export */   createItemCard: () => (/* binding */ createItemCard),\n/* harmony export */   createItemsDiv: () => (/* binding */ createItemsDiv),\n/* harmony export */   itemList: () => (/* binding */ itemList)\n/* harmony export */ });\n/* harmony import */ var _inputForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputForm */ \"./src/pages/inputForm.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/pages/edit.js\");\n\r\n\r\n\r\nconst itemList = [];\r\n\r\nconst addItemButton = (project) => {\r\n\r\n    const itemButton = document.createElement('button');\r\n    itemButton.classList.add('add-item');\r\n    itemButton.textContent = \"+\";\r\n    itemButton.addEventListener(\"click\", () => {\r\n\r\n        (0,_inputForm__WEBPACK_IMPORTED_MODULE_0__.placeItem)(project);\r\n     \r\n    });\r\n\r\n    return itemButton;\r\n\r\n};\r\n\r\nconst clearItems = () => {\r\n\r\n    \r\n\r\n};\r\n\r\nconst createItemsDiv = () => {\r\n\r\n    const itemsDiv = document.createElement('div');\r\n    itemsDiv.classList.add('items-list');\r\n\r\n    for(let i = 0; i < itemList.length; i++){\r\n\r\n        itemsDiv.appendChild(createItemCard(i));\r\n\r\n    }\r\n\r\n    return itemsDiv;\r\n\r\n\r\n};\r\n\r\nconst createItemCard = (lastIndex) =>  {\r\n\r\n    //let lastIndex = itemList.length - 1;\r\n\r\n    const itemCard = document.createElement('div');\r\n    \r\n    const itemDiv0 = document.createElement('div');\r\n    const itemDiv1 = document.createElement('div');\r\n    const itemDiv2 = document.createElement('div');\r\n    const itemDiv3 = document.createElement('div');\r\n\r\n    itemDiv0.textContent = itemList[lastIndex].title.value;\r\n    itemDiv1.textContent = itemList[lastIndex].description.value;\r\n    itemDiv2.textContent = itemList[lastIndex].dueDate.value;\r\n    itemDiv3.textContent = itemList[lastIndex].priority.value;\r\n\r\n    itemDiv0.appendChild((0,_edit__WEBPACK_IMPORTED_MODULE_1__.addEditButton)(itemDiv0));\r\n    itemDiv1.appendChild((0,_edit__WEBPACK_IMPORTED_MODULE_1__.addEditButton)(itemDiv0));\r\n    itemDiv2.appendChild((0,_edit__WEBPACK_IMPORTED_MODULE_1__.addEditButton)(itemDiv0));\r\n    itemDiv3.appendChild((0,_edit__WEBPACK_IMPORTED_MODULE_1__.addEditButton)(itemDiv0));\r\n\r\n\r\n    itemCard.appendChild(itemDiv0);\r\n    itemCard.appendChild(itemDiv1);\r\n    itemCard.appendChild(itemDiv2);\r\n    itemCard.appendChild(itemDiv3);\r\n    \r\n\r\n    return itemCard;\r\n    \r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/pages/items.js?");

/***/ }),

/***/ "./src/pages/projects.js":
/*!*******************************!*\
  !*** ./src/pages/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectButton: () => (/* binding */ addProjectButton),\n/* harmony export */   addTitle: () => (/* binding */ addTitle),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createProjectsDiv: () => (/* binding */ createProjectsDiv)\n/* harmony export */ });\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items */ \"./src/pages/items.js\");\n/* harmony import */ var _inputForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputForm */ \"./src/pages/inputForm.js\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ \"./src/pages/edit.js\");\n\r\n\r\n\r\n\r\nconst content = document.getElementsByTagName(\"content\");\r\n\r\nconst addTitle = () => {\r\n\r\n    const content = document.getElementById('content');\r\n    const mainTitle = document.createElement('div');\r\n    mainTitle.classList.add('main-title');\r\n    mainTitle.textContent = 'To-Do List';\r\n    mainTitle.appendChild((0,_edit__WEBPACK_IMPORTED_MODULE_2__.addEditButton)(mainTitle));\r\n    content.appendChild(mainTitle);\r\n\r\n};\r\n\r\n\r\nconst addProjectButton = () =>{\r\n\r\n    const content = document.getElementById('content');\r\n    const projectButton = document.createElement('button');\r\n    projectButton.classList.add('add-project');\r\n    projectButton.textContent = \"+\";\r\n    content.appendChild(projectButton);\r\n\r\n};\r\n\r\nconst createProjectsDiv = () => {\r\n\r\n    const content = document.getElementById('content');\r\n    const projectDivs = document.createElement('div');\r\n    projectDivs.classList.add('projects');\r\n    content.appendChild(projectDivs);\r\n};\r\n\r\nconst createProject = () => {\r\n\r\n    const content = document.getElementById('content');\r\n    const projectDivs = document.querySelector('.projects');\r\n    const project = document.createElement('div');\r\n    project.classList.add('project');\r\n\r\n    const projectTitle = document.createElement('div');\r\n    projectTitle.textContent = \"Project\";\r\n    projectTitle.appendChild((0,_edit__WEBPACK_IMPORTED_MODULE_2__.addEditButton)(projectTitle));\r\n\r\n\r\n    project.appendChild(projectTitle);\r\n    project.appendChild((0,_items__WEBPACK_IMPORTED_MODULE_0__.addItemButton)(project));\r\n    projectDivs.appendChild(project);\r\n    content.appendChild(projectDivs);\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/pages/projects.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;