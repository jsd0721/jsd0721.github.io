/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_addTodolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/addTodolist.js */ \"./src/addTodolist.js\");\n/* harmony import */ var _src_background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/background.js */ \"./src/background.js\");\n/* harmony import */ var _src_background_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_background_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/time.js */ \"./src/time.js\");\n/* harmony import */ var _src_time_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_time_js__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolistproject/./index.js?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\nCssSyntaxError\\n\\n(2:7) C:\\\\Users\\\\whtjd\\\\Desktop\\\\TodoListProject\\\\index.css Unknown word\\n\\n \\u001b[90m 1 | \\u001b[39m\\n\\u001b[1m\\u001b[31m>\\u001b[39m\\u001b[22m\\u001b[90m 2 | \\u001b[39m      import API from \\u001b[32m\\\"!./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m   | \\u001b[39m      \\u001b[1m\\u001b[31m^\\u001b[39m\\u001b[22m\\n \\u001b[90m 3 | \\u001b[39m      import domAPI from \\u001b[32m\\\"!./node_modules/style-loader/dist/runtime/styleDomAPI.js\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\n \\u001b[90m 4 | \\u001b[39m      import insertFn from \\u001b[32m\\\"!./node_modules/style-loader/dist/runtime/insertBySelector.js\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\n\");\n\n//# sourceURL=webpack://todolistproject/./index.css?");

/***/ }),

/***/ "./src/addTodolist.js":
/*!****************************!*\
  !*** ./src/addTodolist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_addTodolistModalClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/addTodolistModalClass.js */ \"./src/classes/addTodolistModalClass.js\");\n/* harmony import */ var _classes_DatabaseClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/DatabaseClass.js */ \"./src/classes/DatabaseClass.js\");\n\r\n\r\n\r\nconst DBObj = new _classes_DatabaseClass_js__WEBPACK_IMPORTED_MODULE_1__.DatabaseClass();\r\n\r\nconst clockAndButton = document.querySelector('.container');\r\nconst addButton = document.querySelector('.todolist-add-button');\r\nconst modalWindow = new _classes_addTodolistModalClass_js__WEBPACK_IMPORTED_MODULE_0__.ModalClass();\r\nconst todolist = document.querySelector('.todolist-items');\r\n\r\n//modalWindow안의 컴포넌트들\r\nconst addTodolistButton = modalWindow.getAddButton();\r\nconst todoListInput = modalWindow.getInput();\r\nconst closeButton = modalWindow.getCloseButton();\r\n\r\nfunction makeTodoListCard(obj){\r\n\r\n    const list = document.createElement('li');\r\n    const contentSpan = document.createElement('span');\r\n    const dateSpan = document.createElement('span');\r\n    const listDeleteButton = document.createElement('button');\r\n\r\n    list.classList.add('list-card');\r\n    contentSpan.setAttribute('id','content');\r\n    dateSpan.setAttribute('id','date');\r\n    listDeleteButton.setAttribute('id','list-delete-button');\r\n\r\n    const content = obj.content;\r\n    const date = obj.date;\r\n\r\n    function listDeleteEvent(e){\r\n        e.target.parentNode.remove();\r\n        DBObj.delete(content);\r\n        console.log(DBObj.inquire());\r\n    }\r\n\r\n    contentSpan.innerText=content;\r\n    dateSpan.innerText=date;\r\n\r\n    listDeleteButton.addEventListener('click',listDeleteEvent);\r\n\r\n    list.appendChild(contentSpan);\r\n    list.appendChild(dateSpan);\r\n    list.appendChild(listDeleteButton);\r\n\r\n    todolist.appendChild(list);\r\n}\r\n\r\nfunction modalOpenEvent(){\r\n    modalWindow.open();\r\n    clockAndButton.classList.add('hide');\r\n}\r\n\r\nfunction modalCloseEvent(){\r\n    modalWindow.close();\r\n    clockAndButton.classList.remove('hide');\r\n    todoListInput.value='';\r\n}\r\nfunction todolistAddEvent(){\r\n\r\n    todolist.innerHTML = '';\r\n    const today = new Date();\r\n\r\n    const content = todoListInput.value;\r\n    const date= `${today.getFullYear()%1000}/${today.getMonth()+1}/${today.getDate()}`;\r\n\r\n    DBObj.save(content,date);\r\n\r\n    const db = DBObj.inquire();\r\n\r\n    for(let i in db){\r\n        makeTodoListCard(db[i]);\r\n    }\r\n}\r\n\r\naddButton.addEventListener('click',modalOpenEvent);\r\ncloseButton.addEventListener('click',modalCloseEvent);\r\naddTodolistButton.addEventListener('click',todolistAddEvent);\r\n\n\n//# sourceURL=webpack://todolistproject/./src/addTodolist.js?");

/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ (() => {

eval("const background=document.querySelector(\".background\");\r\nconst backgroundSelector = document.querySelector('#background-theme-selector');\r\n\r\n\r\n\r\nconst bgSource_cartoon=[\r\n    './image/background_cartoon/background_myapp (1).jpg',\r\n    './image/background_cartoon/background_myapp (2).jpg',\r\n    './image/background_cartoon/background_myapp (3).jpg',\r\n    './image/background_cartoon/background_myapp (4).jpg',\r\n    './image/background_cartoon/background_myapp (5).jpg',\r\n    './image/background_cartoon/background_myapp (6).jpg',\r\n    './image/background_cartoon/background_myapp (7).jpg',\r\n    './image/background_cartoon/background_myapp (8).jpg',\r\n    './image/background_cartoon/background_myapp (9).jpg',\r\n    './image/background_cartoon/background_myapp (10).jpg'\r\n    ];\r\nconst bgSource_nature=[\r\n    './image/background_nature/background_myapp (1).jpg',\r\n    './image/background_nature/background_myapp (2).jpg',\r\n    './image/background_nature/background_myapp (3).jpg',\r\n    './image/background_nature/background_myapp (4).jpg',\r\n    './image/background_nature/background_myapp (5).jpg',\r\n    './image/background_nature/background_myapp (6).jpg',\r\n    './image/background_nature/background_myapp (7).jpg',\r\n    './image/background_nature/background_myapp (8).jpg',\r\n    './image/background_nature/background_myapp (9).jpg',\r\n    './image/background_nature/background_myapp (10).jpg',\r\n    ];\r\n\r\nlet bgTheme = bgSource_cartoon;\r\n\r\nfunction backgroundSelectEvent(e){\r\n    const bgSrcValue = e.target.value;\r\n    if(bgSrcValue === 'bgSrc_cartoon'){\r\n        bgTheme = bgSource_cartoon;\r\n        console.log(bgTheme);\r\n    }else if(bgSrcValue==='bgSrc_nature'){\r\n        bgTheme = bgSource_nature;\r\n        console.log(bgTheme);\r\n    }\r\n    \r\n    background.src= bgTheme[Math.floor(Math.random()*10)];\r\n    console.log(bgSrcValue);\r\n}\r\n\r\nfunction setBackground(){\r\n    let bgNumber = Math.floor(Math.random()*10);\r\n    background.src = bgTheme[bgNumber];\r\n}\r\nbackground.src= bgTheme[Math.floor(Math.random()*10)];\r\nbackgroundSelector.addEventListener('change',backgroundSelectEvent);\r\nsetInterval(setBackground,5000);\n\n//# sourceURL=webpack://todolistproject/./src/background.js?");

/***/ }),

/***/ "./src/classes/DatabaseClass.js":
/*!**************************************!*\
  !*** ./src/classes/DatabaseClass.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DatabaseClass\": () => (/* binding */ DatabaseClass)\n/* harmony export */ });\n\r\nclass DatabaseClass{\r\n    constructor(){\r\n        this.db = [];\r\n    }\r\n    save(content,date){\r\n        const obj = {\r\n            content : content,\r\n            date : date\r\n        }\r\n        this.db.push(obj);\r\n    }\r\n\r\n    inquire(){\r\n        return this.db;\r\n    }\r\n\r\n    delete(content){\r\n        for(let i in this.db){\r\n            if(this.db[i].content === content){\r\n                this.db.splice(i,1);\r\n            }\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://todolistproject/./src/classes/DatabaseClass.js?");

/***/ }),

/***/ "./src/classes/addTodolistModalClass.js":
/*!**********************************************!*\
  !*** ./src/classes/addTodolistModalClass.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalClass\": () => (/* binding */ ModalClass)\n/* harmony export */ });\nclass ModalClass{\r\n    constructor(){\r\n\r\n        this.app = document.querySelector(\".app\");\r\n\r\n         //모달창\r\n        this.todoListModalComponent = document.createElement(\"div\");\r\n        this.todoListModalComponent.classList.add('modal-window-for-todolist-add');\r\n\r\n        //타이틀\r\n        this.todoListTitleComponent = document.createElement(\"h1\");\r\n        this.todoListTitleComponent.classList.add('title');\r\n        this.todoListTitleComponent.innerHTML='Add Todolist';\r\n\r\n        //모달창 닫기 버튼\r\n        this.todoListModalCloseComponent = document.createElement('button');\r\n        this.todoListModalCloseComponent.classList.add('close-button');\r\n        this.todoListModalCloseComponent.setAttribute('id',\"close-modal\");\r\n        this.todoListModalCloseComponent.innerHTML='X';\r\n\r\n        //input컨테이너\r\n        this.inputContainerComponent = document.createElement('div');\r\n        this.inputContainerComponent.classList.add(\"input-container\");\r\n\r\n        //input창\r\n        this.inputComponent = document.createElement('input');\r\n        this.inputComponent.setAttribute('type',\"text\");\r\n        this.inputComponent.classList.add('todo-list-input');\r\n\r\n        //추가 버튼\r\n        this.addButtonComponent = document.createElement('button');\r\n        this.addButtonComponent.classList.add('todolist-add-button');\r\n        this.addButtonComponent.innerText=\"ADD\";  \r\n\r\n        this.inputContainerComponent.appendChild(this.inputComponent);\r\n        this.inputContainerComponent.appendChild(this.addButtonComponent);\r\n        this.todoListModalComponent.appendChild(this.todoListTitleComponent);\r\n        this.todoListModalComponent.appendChild(this.todoListModalCloseComponent);\r\n        this.todoListModalComponent.appendChild(this.inputContainerComponent);\r\n    }\r\n\r\n    open(){\r\n        this.app.appendChild(this.todoListModalComponent);\r\n    }\r\n\r\n    close(){\r\n        this.todoListModalComponent.remove();\r\n    }\r\n\r\n    getAddButton(){\r\n        return this.addButtonComponent;\r\n    }\r\n    getInput(){\r\n        return this.inputComponent;\r\n    }\r\n    getCloseButton(){\r\n        return this.todoListModalCloseComponent;\r\n    }\r\n}\n\n//# sourceURL=webpack://todolistproject/./src/classes/addTodolistModalClass.js?");

/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/***/ (() => {

eval("const app = ()=>{\r\n    const clockViewer=document.querySelector(\".clock\");\r\n\r\n    //날짜\r\n    const dateComponent = document.createElement('div');\r\n    dateComponent.classList.add(\"date\");\r\n    dateComponent.classList.add(\"clockStyle\");\r\n\r\n    //시간\r\n    const timeComponent = document.createElement('div');\r\n    timeComponent.classList.add(\"time\");\r\n    timeComponent.classList.add(\"clockStyle\");\r\n\r\n    //요일\r\n    const dayOfWeekComponent = document.createElement('div');\r\n    dayOfWeekComponent.classList.add(\"day-of-week\");\r\n    dayOfWeekComponent.classList.add(\"clockStyle\");\r\n\r\n    clockViewer.append(dateComponent);\r\n    clockViewer.append(dayOfWeekComponent);\r\n    clockViewer.append(timeComponent);\r\n\r\n    function displayNowTime(){\r\n        const today = new Date();\r\n        const nowDate = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`;\r\n        const nowTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;\r\n        let dayOfWeek;\r\n\r\n        switch(today.getDay()){\r\n            case 1:dayOfWeek = \"MON\";break;\r\n            case 2:dayOfWeek ='TUE';break;\r\n            case 3: dayOfWeek ='WED';break;\r\n            case 4: dayOfWeek ='THU';break;\r\n            case 5: dayOfWeek ='FRI';break;\r\n            case 6: dayOfWeek ='SAT';break;\r\n            case 7: dayOfWeek ='SUN';break;\r\n            default:alert(\"있지 않은 요일입니다...굳이 따지자면...무요일?\");break;\r\n        }\r\n\r\n        dayOfWeekComponent.innerHTML = dayOfWeek;\r\n        dateComponent.innerHTML = nowDate;\r\n        timeComponent.innerHTML = nowTime;\r\n    }\r\n\r\n    setInterval(displayNowTime,500);\r\n}\r\nwindow.onload=app;\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolistproject/./src/time.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;