/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@500&family=Roboto:ital,wght@0,400;1,100&family=Inter:wght@300&family=VT323&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* border: 1px solid purple; */
}

:root {
    --button-text-color: rgb(0, 0, 0);
    --text-color: #ffffff;
    --background-color: #141414;
    --primary-color: #b83d14;
    --secondary-color: #0e0e0e;
    --accent-color: #ca4316;
    font-family: "Inter";
    font-size: large;
    font-weight: 600;
}

[data-theme="light"] {
    --button-text-color: white;
    --text-color: #000000;
    --background-color: #fdf4f1;
    --primary-color: #b83d14;
    --secondary-color: #ebebeb;
    --accent-color: #ca4316;
}

button {
    color: var(--text-color);
    font-family: "Inter";
    font-size: 13px;
    letter-spacing: 2px;
    padding: 10px;
    margin-left: 5px;
    margin-right: 5px;
    border: 3px solid var(--accent-color);
    border-radius: 34px;
    background: var(--background-color);
    justify-content: center;
    align-items: center;
}

button:hover {
    cursor: pointer;
    background: var(--accent-color);
    color: var(--button-text-color);
}

#content {
    color: var(--text-color);
    background-color: var(--background-color);
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 5fr;
    grid-template-rows: 1fr 14fr;
}

#createItemContainer,
#createFolderContainer,
#areYouSureContainer {
    color: var(--text-color);
    background-color: var(--background-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#createItemContainer::before,
#createFolderContainer::before,
#areYouSureContainer::before {
    content: "";
    position: absolute;
    top: -20px;
    right: -20px;
    bottom: -20px;
    left: -20px;
    z-index: -1;
    background-color: var(--background-color);
    border: 3px solid var(--accent-color);
    border-radius: 8px;
}

/* todo stuff */
#todoElements {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(10, 1fr);
    grid-row: 2;
    grid-column: 2 / span 2;
    background-color: var(--secondary-color);
    gap: 2px;
    overflow: scroll;
    padding: 10px;
}

.todoElement {
    display: grid;
    grid-template-columns: 8fr 2fr 1fr 1fr;
    justify-content: right;
    align-items: center;
    margin: 10px;
    border-left: 3px solid var(--accent-color);
    border-radius: 10px;
    background-color: var(--background-color);
    flex-grow: 0;
    gap: 10px;
}

.todoElementTitle {
    font-size: large;
    font-weight: 900;
    margin: 10px;
    margin-left: 20px;
}

/* folders */
#folders {
    display: flex;
    flex-direction: column;
    grid-row: 2;
    grid-column: 1;
    padding-top: 20px;
    gap: 5px;
    overflow: scroll;
}

.folderContainers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid transparent;
}

.folderContainers:hover {
    background-color: var(--secondary-color);
    border: 1px solid var(--accent-color);
}

.folderTitles {
    margin-left: 10px;
}

.removeFolderButton {
    margin-right: 10px;
}

#createFolderTextInput,
#titleInput,
#dueDateInput {
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: var(--background-color);
    color: var(--text-color);
    border: 2px solid var(--accent-color);
    font-size: large;
    outline: none;
}

#areYouSureButtonContainer {
    display: flex;
    margin: 10px;
    justify-content: center;
    align-items: center;
}

.radioContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 5px;
}

.radioContainer > input[type="radio"] {
    margin-left: 10px;
}

.radioContainer > label {
    justify-content: center;
    align-items: center;
}

.buttonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* new items and folders button */
#openNewItemDialogueButton,
#newFolderDialogueButton {
    font-size: larger;
    margin: 10px;
}

#topBarContainer {
    grid-column: 1 / span 3;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid var(--accent-color);
}

.logoText {
    grid-column: 1;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 50px;
    letter-spacing: 5px;
}

#newFolderDialogueButton {
    grid-column: 4;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,iCAAiC;IACjC,qBAAqB;IACrB,2BAA2B;IAC3B,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,2BAA2B;IAC3B,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;IACxB,oBAAoB;IACpB,eAAe;IACf,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,qCAAqC;IACrC,mBAAmB;IACnB,mCAAmC;IACnC,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,+BAA+B;AACnC;;AAEA;IACI,wBAAwB;IACxB,yCAAyC;IACzC,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,4BAA4B;AAChC;;AAEA;;;IAGI,wBAAwB;IACxB,yCAAyC;IACzC,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;;;IAGI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,WAAW;IACX,WAAW;IACX,yCAAyC;IACzC,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA,eAAe;AACf;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,WAAW;IACX,uBAAuB;IACvB,wCAAwC;IACxC,QAAQ;IACR,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,0CAA0C;IAC1C,mBAAmB;IACnB,yCAAyC;IACzC,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;AACrB;;AAEA,YAAY;AACZ;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,cAAc;IACd,iBAAiB;IACjB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,wCAAwC;IACxC,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,yCAAyC;IACzC,wBAAwB;IACxB,qCAAqC;IACrC,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA,iCAAiC;AACjC;;IAEI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,qCAAqC;IACrC,4CAA4C;AAChD;;AAEA;IACI,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@500&family=Roboto:ital,wght@0,400;1,100&family=Inter:wght@300&family=VT323&display=swap\");\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    /* border: 1px solid purple; */\n}\n\n:root {\n    --button-text-color: rgb(0, 0, 0);\n    --text-color: #ffffff;\n    --background-color: #141414;\n    --primary-color: #b83d14;\n    --secondary-color: #0e0e0e;\n    --accent-color: #ca4316;\n    font-family: \"Inter\";\n    font-size: large;\n    font-weight: 600;\n}\n\n[data-theme=\"light\"] {\n    --button-text-color: white;\n    --text-color: #000000;\n    --background-color: #fdf4f1;\n    --primary-color: #b83d14;\n    --secondary-color: #ebebeb;\n    --accent-color: #ca4316;\n}\n\nbutton {\n    color: var(--text-color);\n    font-family: \"Inter\";\n    font-size: 13px;\n    letter-spacing: 2px;\n    padding: 10px;\n    margin-left: 5px;\n    margin-right: 5px;\n    border: 3px solid var(--accent-color);\n    border-radius: 34px;\n    background: var(--background-color);\n    justify-content: center;\n    align-items: center;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background: var(--accent-color);\n    color: var(--button-text-color);\n}\n\n#content {\n    color: var(--text-color);\n    background-color: var(--background-color);\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 1fr 5fr;\n    grid-template-rows: 1fr 14fr;\n}\n\n#createItemContainer,\n#createFolderContainer,\n#areYouSureContainer {\n    color: var(--text-color);\n    background-color: var(--background-color);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n#createItemContainer::before,\n#createFolderContainer::before,\n#areYouSureContainer::before {\n    content: \"\";\n    position: absolute;\n    top: -20px;\n    right: -20px;\n    bottom: -20px;\n    left: -20px;\n    z-index: -1;\n    background-color: var(--background-color);\n    border: 3px solid var(--accent-color);\n    border-radius: 8px;\n}\n\n/* todo stuff */\n#todoElements {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(10, 1fr);\n    grid-row: 2;\n    grid-column: 2 / span 2;\n    background-color: var(--secondary-color);\n    gap: 2px;\n    overflow: scroll;\n    padding: 10px;\n}\n\n.todoElement {\n    display: grid;\n    grid-template-columns: 8fr 2fr 1fr 1fr;\n    justify-content: right;\n    align-items: center;\n    margin: 10px;\n    border-left: 3px solid var(--accent-color);\n    border-radius: 10px;\n    background-color: var(--background-color);\n    flex-grow: 0;\n    gap: 10px;\n}\n\n.todoElementTitle {\n    font-size: large;\n    font-weight: 900;\n    margin: 10px;\n    margin-left: 20px;\n}\n\n/* folders */\n#folders {\n    display: flex;\n    flex-direction: column;\n    grid-row: 2;\n    grid-column: 1;\n    padding-top: 20px;\n    gap: 5px;\n    overflow: scroll;\n}\n\n.folderContainers {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid transparent;\n}\n\n.folderContainers:hover {\n    background-color: var(--secondary-color);\n    border: 1px solid var(--accent-color);\n}\n\n.folderTitles {\n    margin-left: 10px;\n}\n\n.removeFolderButton {\n    margin-right: 10px;\n}\n\n#createFolderTextInput,\n#titleInput,\n#dueDateInput {\n    margin: 10px;\n    padding: 10px;\n    border-radius: 8px;\n    background-color: var(--background-color);\n    color: var(--text-color);\n    border: 2px solid var(--accent-color);\n    font-size: large;\n    outline: none;\n}\n\n#areYouSureButtonContainer {\n    display: flex;\n    margin: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.radioContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin: 5px;\n}\n\n.radioContainer > input[type=\"radio\"] {\n    margin-left: 10px;\n}\n\n.radioContainer > label {\n    justify-content: center;\n    align-items: center;\n}\n\n.buttonContainer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* new items and folders button */\n#openNewItemDialogueButton,\n#newFolderDialogueButton {\n    font-size: larger;\n    margin: 10px;\n}\n\n#topBarContainer {\n    grid-column: 1 / span 3;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: 1px solid var(--accent-color);\n}\n\n.logoText {\n    grid-column: 1;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    font-size: 50px;\n    letter-spacing: 5px;\n}\n\n#newFolderDialogueButton {\n    grid-column: 4;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/display/display.js":
/*!****************************************!*\
  !*** ./src/modules/display/display.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ "./src/modules/helpers/createElement.js");
/* harmony import */ var _helpers_dispatchEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/dispatchEvent */ "./src/modules/helpers/dispatchEvent.js");



class DisplayTools {
    constructor(parent) {
        this.parent = parent;
    }
    folders(folderContainerList) {
        // created dom items for the folders sidebar
        const folderContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id: "folders" }, "");
        for (let folder of folderContainerList.folders) {
            const folderElement = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "folderContainers" }, "");
            const folderTitle = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", { class: "folderTitles" }, folder.getName());
            folderElement.addEventListener("click", () => {
                (0,_helpers_dispatchEvent__WEBPACK_IMPORTED_MODULE_1__["default"])("folderClicked", folder);
            });

            // remove button for each folder, except for main
            // X svg hardcoded because i was having problems importing
            // don't allow main to be deleted, was having errors when no folder existed
            const removeButtonContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id: "removeButtonContainer" }, "");
            if (folder.name !== "Main") {
                const removeButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "removeButtonSvg" }, "");
                const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svgElement.setAttribute("width", "40px");
                svgElement.setAttribute("height", "40px");
                svgElement.setAttribute("viewBox", "0 0 24 24");

                const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                pathElement.setAttribute("d", "M7 7.00006L17 17.0001M7 17.0001L17 7.00006");
                pathElement.setAttribute("stroke", "#b83d14");
                pathElement.setAttribute("stroke-width", "2.5");
                pathElement.setAttribute("stroke-linecap", "round");
                pathElement.setAttribute("stroke-linejoin", "round");

                svgElement.appendChild(pathElement);
                removeButton.appendChild(svgElement);

                removeButton.addEventListener("click", () => {
                    (0,_helpers_dispatchEvent__WEBPACK_IMPORTED_MODULE_1__["default"])("removeFolderButtonClicked", folder);
                });
                removeButtonContainer.append(removeButton);
            }
            folderElement.append(folderTitle, removeButtonContainer);
            folderContainer.append(folderElement);
        }
        this.parent.append(folderContainer);
    }
    items(folder) {
        console.log(folder.name);
        // creates dom items for the todo items within a folder
        const todoElements = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id: "todoElements" }, "");
        for (let todoElement of folder.items) {
            const todoElementContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "todoElement" }, "");
            const Title = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("p", { class: "todoElementTitle" }, todoElement.getTitle());
            const DueDate = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
                "p",
                { class: "todoElementDueDate" },
                todoElement.getDueDate()
            );
            const priority = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
                "p",
                { class: "todoElementPriority" },
                todoElement.getPriority()
            );

            // remove button for each item
            // X svg hardcoded because i was having problems importing
            const removeButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "removeButtonSvg" }, "");
            const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svgElement.setAttribute("width", "40px");
            svgElement.setAttribute("height", "40px");
            svgElement.setAttribute("viewBox", "0 0 24 24");

            const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
            pathElement.setAttribute("d", "M7 7.00006L17 17.0001M7 17.0001L17 7.00006");
            pathElement.setAttribute("stroke", "#b83d14");
            pathElement.setAttribute("stroke-width", "2.5");
            pathElement.setAttribute("stroke-linecap", "round");
            pathElement.setAttribute("stroke-linejoin", "round");

            svgElement.appendChild(pathElement);
            removeButton.appendChild(svgElement);

            removeButton.addEventListener("click", () => {
                folder.removeItem(todoElement);
                (0,_helpers_dispatchEvent__WEBPACK_IMPORTED_MODULE_1__["default"])("updateTodoItems");
            });

            todoElementContainer.append(Title, DueDate, priority, removeButton);
            todoElements.append(todoElementContainer);
        }
        this.parent.append(todoElements);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTools);


/***/ }),

/***/ "./src/modules/helpers/LocalStorage.js":
/*!*********************************************!*\
  !*** ./src/modules/helpers/LocalStorage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retrieveItemsFromLocalStorage: () => (/* binding */ retrieveItemsFromLocalStorage),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _todoData_folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todoData/folder */ "./src/modules/todoData/folder.js");
/* harmony import */ var _todoData_folderContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todoData/folderContainer */ "./src/modules/todoData/folderContainer.js");
/* harmony import */ var _todoData_todoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todoData/todoItem */ "./src/modules/todoData/todoItem.js");




function updateLocalStorage(folders) {
    // creates a json from the data's root point then saves to local storage
    const foldersJSON = JSON.stringify(folders);
    console.log(foldersJSON);
    localStorage.setItem("foldersData", foldersJSON);
}

function retrieveItemsFromLocalStorage() {
    // creates folders and todo items from the json, then returns their root element
    const storedFoldersJSON = localStorage.getItem("foldersData");
    const storedFolders = JSON.parse(storedFoldersJSON);
    if (storedFolders) {
        const folderContainer = new _todoData_folderContainer__WEBPACK_IMPORTED_MODULE_1__["default"]();
        for (let folder of storedFolders.folders) {
            let folderName = folder.name;
            let currentFolder = new _todoData_folder__WEBPACK_IMPORTED_MODULE_0__["default"](folderName);
            folderContainer.addFolder(currentFolder);
            for (let item of folder.items) {
                let itemTitle = item.title;
                let itemDueDate = item.dueDate;
                let itemPriority = item.priority;
                let itemToAdd = new _todoData_todoItem__WEBPACK_IMPORTED_MODULE_2__["default"](itemTitle, itemDueDate, itemPriority);
                currentFolder.addItem(itemToAdd);
            }
        }
        return folderContainer;
    } else {
        return _defaultData();
    }
}

function _defaultData() {
    // for first load or if local storage cleared
    const folderContainer = new _todoData_folderContainer__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const folder = new _todoData_folder__WEBPACK_IMPORTED_MODULE_0__["default"]("Main");
    const todoItem = new _todoData_todoItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Default item", "2077-11-11", "H");
    folder.addItem(todoItem);
    folderContainer.addFolder(folder);
    return folderContainer;
}




/***/ }),

/***/ "./src/modules/helpers/createElement.js":
/*!**********************************************!*\
  !*** ./src/modules/helpers/createElement.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createElement(tag, attributes = {}, textContent = "") {
    const element = document.createElement(tag);
    for (const attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }
    element.textContent = textContent;
    return element;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);


/***/ }),

/***/ "./src/modules/helpers/dispatchEvent.js":
/*!**********************************************!*\
  !*** ./src/modules/helpers/dispatchEvent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dispatchEvent(eventName, eventData) {
    const event = new CustomEvent(eventName, { detail: eventData });
    document.dispatchEvent(event);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatchEvent);


/***/ }),

/***/ "./src/modules/todoData/folder.js":
/*!****************************************!*\
  !*** ./src/modules/todoData/folder.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Folder {
    constructor(name) {
        this.name = name;
        this.items = [];
    }
    changeName(newName) {
        for (let todoItem in this.items) {
            todoItem.folder = newName;
        }
        this.name = newName;
    }
    removeItem(itemToRemove) {
        this.items = this.items.filter((item) => item !== itemToRemove);
    }
    addItem(itemToAdd) {
        this.items.push(itemToAdd);
    }
    getName() {
        return this.name;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Folder);


/***/ }),

/***/ "./src/modules/todoData/folderContainer.js":
/*!*************************************************!*\
  !*** ./src/modules/todoData/folderContainer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class FolderContainer {
    constructor() {
        this.folders = [];
    }
    addFolder(folderToAdd) {
        this.folders.push(folderToAdd);
    }
    removeFolder(folderToRemove) {
        const index = this.folders.indexOf(folderToRemove);
        if (index !== -1) {
            this.folders.splice(index, 1);
        }
    }
    getFirstFolder() {
        return this.folders[0];
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderContainer);


/***/ }),

/***/ "./src/modules/todoData/todoItem.js":
/*!******************************************!*\
  !*** ./src/modules/todoData/todoItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TodoItem {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    changeTitle(newTitle) {
        this.title = newTitle;
    }
    changeDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }
    changePriority(newPriority) {
        this.priority = newPriority;
    }
    getTitle() {
        return this.title;
    }
    getDueDate() {
        return this.dueDate;
    }
    getPriority() {
        return this.priority;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);


/***/ }),

/***/ "./src/modules/userInput/createFolder.js":
/*!***********************************************!*\
  !*** ./src/modules/userInput/createFolder.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ "./src/modules/helpers/createElement.js");


class CreateFolderDialogue {
    constructor(parent) {
        this.parent = parent;
    }
    createFolderDialogue() {
        // creates the popup window that shows when 'new folder' clicked
        const container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id: "createFolderContainer" }, "");
        const textInput = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
            "input",
            { type: "text", id: "createFolderTextInput", placeholder: "Folder Name" },
            ""
        );
        const submitButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", { id: "createFolderSubmitButton" }, "Submit");
        const closeButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", { id: "folderCloseButton" }, "Close");
        container.append(textInput, submitButton, closeButton);
        this.parent.append(container);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateFolderDialogue);


/***/ }),

/***/ "./src/modules/userInput/createTodo.js":
/*!*********************************************!*\
  !*** ./src/modules/userInput/createTodo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ "./src/modules/helpers/createElement.js");


class CreateTodo {
    constructor(parent) {
        this.parent = parent;
    }
    createItemDialogue() {
        const container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id: "createItemContainer" }, "");

        // title input field
        const titleInput = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("input", {
            id: "titleInput",
            type: "text",
            placeholder: "TODO: ",
        });

        // due date input field and tag
        const dueDateInputLabel = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
            "label",
            { class: "InputLabel", for: "dueDateInput" },
            "DueDate: "
        );
        const dueDateInput = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("input", { id: "dueDateInput", type: "date" }, "");

        // priority labels and radio buttons
        const priorityInputLabel = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("label", { class: "InputLabel" }, "Priority: ");
        const radioContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "radioContainer" }, "");
        const radioHigh = radioPair("High");
        const radioMid = radioPair("Med");
        const radioLow = radioPair("Low");
        radioContainer.append(priorityInputLabel, radioHigh, radioMid, radioLow);

        // submitButton and closeButton
        const buttonContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "buttonContainer" }, "");
        const submitButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", { id: "todoSubmitButton" }, "Submit");
        const closeButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", { id: "todoCloseButton" }, "Close");
        buttonContainer.append(submitButton, closeButton);

        container.append(
            titleInput,
            dueDateInputLabel,
            dueDateInput,
            radioContainer,
            buttonContainer
        );

        this.parent.append(container);
    }
}

function radioPair(tag) {
    // create a label / radio button pair and return it. just a helper
    const container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { class: "radioContainer" }, "");
    const label = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("label", { for: `${tag}Radio`, class: "radioLabel" }, `${tag}`);
    const radioButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
        "input",
        {
            type: "radio",
            name: "priority",
            id: `radio${tag}`,
        },
        ""
    );
    container.append(label, radioButton);
    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateTodo);


/***/ }),

/***/ "./src/modules/userInput/removeFolderCheck.js":
/*!****************************************************!*\
  !*** ./src/modules/userInput/removeFolderCheck.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/createElement */ "./src/modules/helpers/createElement.js");


class RemoveFolderDialogue {
    constructor(parent) {
        this.parent = parent;
    }
    openRemoveFolderDialogue() {
        const container = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id: "areYouSureContainer" }, "");
        const title = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("h3", { id: "areYouSureTitle" }, "Deleting Folder");
        const text = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
            "p",
            { id: "areYouSureText" },
            "Are you sure? This cannot be undone."
        );
        const buttonContainer = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("div", { id: "areYouSureButtonContainer" }, "");
        const confirmButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", { id: "areYouSureConfirmButton" }, "Yes");
        const cancelButton = (0,_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])("button", { id: "areYouSureCancelButton" }, "Cancel");
        buttonContainer.append(confirmButton, cancelButton);
        container.append(title, text, buttonContainer);
        this.parent.append(container);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveFolderDialogue);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_todoData_folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoData/folder */ "./src/modules/todoData/folder.js");
/* harmony import */ var _modules_todoData_todoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todoData/todoItem */ "./src/modules/todoData/todoItem.js");
/* harmony import */ var _modules_display_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display/display */ "./src/modules/display/display.js");
/* harmony import */ var _modules_userInput_createTodo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/userInput/createTodo */ "./src/modules/userInput/createTodo.js");
/* harmony import */ var _modules_userInput_createFolder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/userInput/createFolder */ "./src/modules/userInput/createFolder.js");
/* harmony import */ var _modules_helpers_LocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/helpers/LocalStorage */ "./src/modules/helpers/LocalStorage.js");
/* harmony import */ var _modules_userInput_removeFolderCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/userInput/removeFolderCheck */ "./src/modules/userInput/removeFolderCheck.js");










const domRoot = document.getElementById("content");
const display = new _modules_display_display__WEBPACK_IMPORTED_MODULE_3__["default"](domRoot);
const folders = (0,_modules_helpers_LocalStorage__WEBPACK_IMPORTED_MODULE_6__.retrieveItemsFromLocalStorage)();
let currentFolder = folders.getFirstFolder();

// open new item dialogue on new item button press
const createTodo = new _modules_userInput_createTodo__WEBPACK_IMPORTED_MODULE_4__["default"](domRoot);
const openNewItemDialogueButton = document.getElementById("openNewItemDialogueButton");
createTodo.createItemDialogue();
createItemContainer.style.display = "none";
openNewItemDialogueButton.addEventListener("click", () => {
    createItemContainer.style.display = "block";
    createFolderContainer.style.display = "none";
    areYouSureContainer.style.display = "none";
});

// open new folder dialogue on new folder button press
const createFolder = new _modules_userInput_createFolder__WEBPACK_IMPORTED_MODULE_5__["default"](domRoot);
const newFolderButton = document.getElementById("newFolderDialogueButton");
createFolder.createFolderDialogue();
createFolderContainer.style.display = "none";
newFolderButton.addEventListener("click", () => {
    createFolderContainer.style.display = "block";
    createItemContainer.style.display = "none";
    areYouSureContainer.style.display = "none";
});

// open are you sure folder dialogue box
const areYouSure = new _modules_userInput_removeFolderCheck__WEBPACK_IMPORTED_MODULE_7__["default"](domRoot);
areYouSure.openRemoveFolderDialogue();
const areYouSureContainer = document.getElementById("areYouSureContainer");
const areYouSureSubmitButton = document.getElementById("areYouSureConfirmButton");
const areYouSureCancelButton = document.getElementById("areYouSureCancelButton");
areYouSureContainer.style.display = "none";

// add folders and todo items to dom
display.folders(folders);
display.items(currentFolder);

// wait for dom to be populated before attempting to select any elements
document.addEventListener("DOMContentLoaded", () => {
    // todo inputs
    const createItemContainer = document.getElementById("createItemContainer");
    const titleInput = document.getElementById("titleInput");
    const dueDateInput = document.getElementById("dueDateInput");
    const priorityInputHigh = document.getElementById("radioHigh");
    const priorityInputMed = document.getElementById("radioMed");
    const priorityInputLow = document.getElementById("radioLow");
    const todoSubmitButton = document.getElementById("todoSubmitButton");
    const todoCloseButton = document.getElementById("todoCloseButton");
    let todoElementContainer = document.getElementById("todoElements");

    // folder inputs
    const folderTextInput = document.getElementById("createFolderTextInput");
    const folderSubmitButton = document.getElementById("createFolderSubmitButton");
    const folderCloseButton = document.getElementById("folderCloseButton");
    let folderElementContainer = document.getElementById("folders");

    // add todo item if fields filled and make sense
    todoSubmitButton.addEventListener("click", () => {
        if (titleInput.value && dueDateInput.value) {
            const dueDate = new Date(dueDateInput.value);
            const currentDate = new Date();
            let priority;

            // ensure due date makes sense
            if (dueDate < currentDate) {
                alert("Due Date cannot be in the past.");
            } else if (dueDate > currentDate) {
                // get priority value from radio buttons
                if (priorityInputHigh.checked) {
                    priority = "H";
                } else if (priorityInputMed.checked) {
                    priority = "M";
                } else if (priorityInputLow.checked) {
                    priority = "L";
                }

                // create and add new item to the selected folder
                let newItemTitle = titleInput.value;
                let newItemDueDate = dueDateInput.value;
                let newItem = new _modules_todoData_todoItem__WEBPACK_IMPORTED_MODULE_2__["default"](newItemTitle, newItemDueDate, priority);
                currentFolder.addItem(newItem);

                // display change
                todoElementContainer.remove();
                display.items(currentFolder);
                todoElementContainer = document.getElementById("todoElements");
                (0,_modules_helpers_LocalStorage__WEBPACK_IMPORTED_MODULE_6__.updateLocalStorage)(folders);

                // reset input fields
                titleInput.value = "";
                dueDateInput.value = null;
                priorityInputHigh.checked = false;
                priorityInputMed.checked = false;
                priorityInputLow.checked = false;
            }
        }
    });

    // add folder if name filled
    // then update folders on site
    folderSubmitButton.addEventListener("click", () => {
        const newFolderName = folderTextInput.value;
        if (newFolderName) {
            let itemToAdd = new _modules_todoData_folder__WEBPACK_IMPORTED_MODULE_1__["default"](newFolderName);
            folders.addFolder(itemToAdd);
        }
        // hacky, but solves a lot of errors
        currentFolder = folders.getFirstFolder();
        // ------------------------------------
        folderElementContainer.remove();
        display.folders(folders);
        folderElementContainer = document.getElementById("folders");
        folderTextInput.value = "";
        (0,_modules_helpers_LocalStorage__WEBPACK_IMPORTED_MODULE_6__.updateLocalStorage)(folders);
    });

    // hide item dialogue when close button pressed
    todoCloseButton.addEventListener("click", () => {
        createItemContainer.style.display = "none";
        // reset input fields
        titleInput.value = "";
        dueDateInput.value = null;
        priorityInputHigh.checked = false;
        priorityInputMed.checked = false;
        priorityInputLow.checked = false;
    });

    // hide folder dialogue when close button pressed
    folderCloseButton.addEventListener("click", () => {
        createFolderContainer.style.display = "none";
    });

    // update todo items when asked
    document.addEventListener("updateTodoItems", () => {
        todoElementContainer.remove();
        display.items(currentFolder);
        todoElementContainer = document.getElementById("todoElements");
        (0,_modules_helpers_LocalStorage__WEBPACK_IMPORTED_MODULE_6__.updateLocalStorage)(folders);
    });

    // change currentFolder when folder title clicked
    // then update todo items to fit the new folder
    document.addEventListener("folderClicked", (e) => {
        currentFolder = e.detail;
        todoElementContainer.remove();
        display.items(currentFolder);
        todoElementContainer = document.getElementById("todoElements");
    });

    // bring up 'are you sure' dialogue when remove folder button clicked
    document.addEventListener("removeFolderButtonClicked", (e) => {
        let folderToRemove = e.detail;
        areYouSureContainer.style.display = "block";
        createFolderContainer.style.display = "none";
        createItemContainer.style.display = "none";

        // de-select folderToRemove to avoid deleting folder accidentally
        // then close dialogue if user selects cancel
        areYouSureCancelButton.addEventListener("click", () => {
            folderToRemove = null;
            areYouSureContainer.style.display = "none";
        });

        // remove the folder and update display/local storage if the user selects yes
        areYouSureSubmitButton.addEventListener("click", () => {
            folders.removeFolder(folderToRemove);

            // re render folders on sidebar
            folderElementContainer.remove();
            display.folders(folders);
            folderElementContainer = document.getElementById("folders");

            // hide are you sure box
            areYouSureContainer.style.display = "none";

            // to ensure a folder is selected
            currentFolder = folders.getFirstFolder();

            // apply change to todoData.json
            (0,_modules_helpers_LocalStorage__WEBPACK_IMPORTED_MODULE_6__.updateLocalStorage)(folders);
        });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundleae475bf6f2d6f6ab68cd.js.map