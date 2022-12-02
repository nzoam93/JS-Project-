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

/***/ "./src/bonus.js":
/*!**********************!*\
  !*** ./src/bonus.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst possibleDrops = [\"smallCoins\", \"bigCoins\", \"shield\"]\nclass Bonus{\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bonus); \n\n\n//# sourceURL=webpack://js-project---bubble-trouble/./src/bonus.js?");

/***/ }),

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _collisionDetection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n\n\nclass Bubble{\n    constructor(ele){\n        this.ele = ele;\n    }\n    //this should happen within a SetInterval\n    move(xVel, yVel){\n        let rect = this.ele.getBoundingClientRect();\n        let xPos = rect.left;\n        let yPos = rect.top;\n        let newX = xPos + xVel;\n        let newY = yPos + yVel;\n        this.ele.style.left = newX + \"px\";\n        this.ele.style.top = newY + \"px\";\n        this.hitWall(xPos, xVel);\n        this.hitGround(yPos, yVel);\n        // console.log(yVel + \"in the move function\")\n\n        //collisionDetection\n        let collisionDetector = new _collisionDetection__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ele, true)\n        collisionDetector.bubbleCollision();\n    }\n\n    //have the velocity change x-dir if it hits the wall\n    hitWall(xPos, xVel){\n    }\n\n    //have the velocity change y-dir when it hits the ground or a specified y-height\n    hitGround(yPos, yVel){\n        // console.log(`${yPos} is yPos`)\n        let ground = document.getElementById(\"bottomPart\");\n        let rect = ground.getBoundingClientRect();\n        let groundY = rect.top;\n        // console.log(`${groundY} is groundY`)\n\n        if(yPos >= groundY ){\n            yVel = -yVel;\n            // console.log(yVel)\n            return yVel;\n        }\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bubble);\n\n\n//# sourceURL=webpack://js-project---bubble-trouble/./src/bubble.js?");

/***/ }),

/***/ "./src/character.js":
/*!**************************!*\
  !*** ./src/character.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nclass Character{\n    constructor(name, ele){\n        this.name = name;\n        this.ele = ele;\n    }\n\n    sayHi(){\n        console.log(`Hi from ${this.name}`)\n    }\n\n    move(e){\n        // console.log(e);\n\n        //this is if I want the char to move only a certain percentage of the screen\n        let bottomPart = document.getElementById(\"bottomPart\")\n        let bottomRect = bottomPart.getBoundingClientRect();\n        let screenWidth = bottomRect.right - bottomRect.left;\n        console.log(screenWidth + \"screenWidth\")\n\n        let vel = 10;\n        let rect = this.ele.getBoundingClientRect();\n        let xPos = rect.left;\n        if(e.keyCode ==\"37\"){\n            //to move a certain percentage\n            // this.ele.style.left = xPos - (screenWidth*0.01) + \"px\";\n            this.ele.style.left = xPos - vel +\"px\";\n        } else if(e.keyCode == \"39\"){\n            this.ele.style.left = xPos + vel +\"px\";\n        }\n\n\n        //wrap around\n        this.wrapAround(xPos);\n\n\n    }\n\n    wrapAround(xPos){\n        let ground = document.getElementById(\"bottomPart\");\n        let rect = ground.getBoundingClientRect();\n        let groundLeft = rect.left;\n        let groundRight = rect.right;\n        if (xPos < groundLeft){\n            this.ele.style.left = groundRight - 50 + \"px\";\n        }\n        else if (xPos > groundRight - 50){\n            this.ele.style.left = groundLeft + 5 + \"px\";\n        }\n    }\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Character);\n\n\n//# sourceURL=webpack://js-project---bubble-trouble/./src/character.js?");

/***/ }),

/***/ "./src/collisionDetection.js":
/*!***********************************!*\
  !*** ./src/collisionDetection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CollisionDetection{\n    constructor(ele, isEnemy){\n        this.ele = ele;\n        this.isEnemy = isEnemy;\n    }\n\n    bubbleCollision(){\n        //note: bubble is ele. Need to define the character\n\n        //info about char\n        let char = document.getElementById(\"character\");\n        let charRect = char.getBoundingClientRect();\n        let charX = charRect.left;\n        let charY = charRect.top;\n        let charWidth = charRect.width;\n        let charHeight = charRect.height;\n\n        //info about object\n        let objectRect = this.ele.getBoundingClientRect();\n        let objectX = objectRect.left;\n        let objectY = objectRect.top;\n        let objectWidth = objectRect.width;\n        let objectHeight = objectRect.height;\n\n        if ((charX + charWidth > objectX && charX < objectX + objectWidth) &&\n        (charY + charHeight > objectY && charY < objectY + objectHeight)) {\n            if(this.isEnemy){\n                console.log(\"GAME OVER\");\n            }\n        }\n    }\n\n    saySup(){\n        console.log(this.ele)\n    }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollisionDetection);\n\n\n//# sourceURL=webpack://js-project---bubble-trouble/./src/collisionDetection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ \"./src/character.js\");\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\n/* harmony import */ var _bonus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bonus */ \"./src/bonus.js\");\n/* harmony import */ var _levels_level1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels/level1 */ \"./src/levels/level1.js\");\n/* harmony import */ var _levels_homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels/homepage */ \"./src/levels/homepage.js\");\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    //creating the character\n    const ele = document.getElementById(\"character\");\n    const char = new _character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Bob\", ele);\n    char.sayHi();\n\n    //we want to run this uninvoked function on keydown\n    //all callbacks invoked function style. Loses context\n    //therefore, I need to BIND it with char so it knows what \"this\" is\n    document.addEventListener(\"keydown\", char.move.bind(char));\n\n    //creating the bubble\n    const bubbleTestEle = document.getElementById(\"bubbleTest\");\n    const bubbleTest = new _bubble__WEBPACK_IMPORTED_MODULE_1__[\"default\"](bubbleTestEle);\n\n    //creating the homescreen\n    new _levels_homepage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n\n    //creating the playButton listener\n    let playButton = document.getElementById(\"playButton\");\n    let clickedAlready = false;\n    let bubbleMoving;\n    playButton.addEventListener(\"click\", ()=>{\n        //starting on level 1 when you first click the play button\n        new _levels_level1__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n        if(!clickedAlready){\n            bubbleMoving = setInterval(()=>bubbleTest.move(20,20),200);\n            clickedAlready = true;\n        }\n    })\n\n    //creating the pauseButton listener\n    let pauseButton = document.getElementById(\"pauseButton\");\n    pauseButton.addEventListener(\"click\", ()=>{\n        clearInterval(bubbleMoving)\n        clickedAlready = false;\n    })\n\n})\n\n\n\n//allows character to move\n//\n\n\n//# sourceURL=webpack://js-project---bubble-trouble/./src/index.js?");

/***/ }),

/***/ "./src/levels/homepage.js":
/*!********************************!*\
  !*** ./src/levels/homepage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Homepage{\n    constructor(){\n        this.setBackgroundImage();\n    }\n\n    setBackgroundImage(){\n        let topPart = document.getElementById(\"topPart\");\n        topPart.style.backgroundImage = \"url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')\";\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);\n\n//not working for some reason.\n//even if I take out the backgroundimage from the CSS sheet\n\n\n//# sourceURL=webpack://js-project---bubble-trouble/./src/levels/homepage.js?");

/***/ }),

/***/ "./src/levels/level1.js":
/*!******************************!*\
  !*** ./src/levels/level1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bubble */ \"./src/bubble.js\");\n\n\nclass Level1{\n    constructor(){\n        this.numBubbles = 2;\n        this.createBubble();\n        this.placeBubbles();\n    }\n\n    createBubble(){\n        let topPart = document.getElementById(\"topPart\");\n        for(let i = 0; i < this.numBubbles; i++){\n            let bubble = document.createElement(\"div\")\n            console.log(bubble)\n            bubble.setAttribute(\"id\", `bubble${i+1}`)\n            bubble.classList.add(\"smallBubble\");\n            topPart.appendChild(bubble);\n            let bubbleID = document.getElementById(`bubble${i+1}`)\n            console.log(bubbleID)\n            let newBubble = new _bubble__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bubbleID)\n            console.log(newBubble)\n\n        }\n    }\n\n    placeBubbles(){\n        let bubble1 = document.getElementById(\"bubble1\")\n        bubble1.style.left = \"150px\";\n        bubble1.style.top = \"150px\";\n\n        let bubble2 = document.getElementById(\"bubble2\")\n        bubble2.style.left = \"300px\";\n        bubble2.style.top = \"150px\";\n\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Level1);\n\n\n//# sourceURL=webpack://js-project---bubble-trouble/./src/levels/level1.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;