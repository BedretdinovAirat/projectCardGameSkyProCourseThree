/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCards: () => (/* binding */ changeCards),
/* harmony export */   counterGame: () => (/* binding */ counterGame),
/* harmony export */   games: () => (/* binding */ games),
/* harmony export */   mainCard: () => (/* binding */ mainCard),
/* harmony export */   renderCards: () => (/* binding */ renderCards),
/* harmony export */   reverseCard: () => (/* binding */ reverseCard)
/* harmony export */ });
/* harmony import */ var _renderPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage.js */ "./components/renderPage.js");
/* harmony import */ var _renderEnd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderEnd.js */ "./components/renderEnd.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./style.css");




const imgReverseCard = "./img/reverseCard.svg";
const appElement = document.getElementById("app");
// console.log(appElement);
// общие переменные счётчик, карты
let counterGame = 0;
let mainCard;
let reverseCard;

const cards = [
  "./img/cards/aceHearts.svg",
  "./img/cards/kingHearts.svg",
  "./img/cards/queenHearts.svg",
  "./img/cards/jackHearts.svg",
  "./img/cards/tenHearts.svg",
  "./img/cards/nineHearts.svg",
  "./img/cards/eightHearts.svg",
  "./img/cards/sevenHearts.svg",
  "./img/cards/sixHearts.svg",
  "./img/cards/aceDiamonds.svg",
  "./img/cards/kingDiamonds.svg",
  "./img/cards/queenDiamonds.svg",
  "./img/cards/jackDiamonds.svg",
  "./img/cards/tenDiamonds.svg",
  "./img/cards/nineDiamonds.svg",
  "./img/cards/eightDiamonds.svg",
  "./img/cards/sevenDiamonds.svg",
  "./img/cards/sixDiamonds.svg",
  "./img/cards/aceClubs.svg",
  "./img/cards/kingClubs.svg",
  "./img/cards/queenClubs.svg",
  "./img/cards/jackClubs.svg",
  "./img/cards/tenClubs.svg",
  "./img/cards/nineClubs.svg",
  "./img/cards/eightClubs.svg",
  "./img/cards/sevenClubs.svg",
  "./img/cards/sixClubs.svg",
  "./img/cards/aceSpades.svg",
  "./img/cards/kingSpades.svg",
  "./img/cards/queenSpades.svg",
  "./img/cards/jackSpades.svg",
  "./img/cards/tenSpades.svg",
  "./img/cards/nineSpades.svg",
  "./img/cards/eightSpades.svg",
  "./img/cards/sevenSpades.svg",
  "./img/cards/sixSpades.svg",
];
// const oldCards = {
//   // hearts: {
//   //    "./img/cards/aceHearts.svg",
//   //    "./img/cards/kingHearts.svg",
//   //    "./img/cards/queenHearts.svg",
//   //   "./img/cards/jackHearts.svg",
//   //    "./img/cards/tenHearts.svg",
//   //    "./img/cards/nineHearts.svg",
//   //    "./img/cards/eightHearts.svg",
//   //    "./img/cards/sevenHearts.svg",
//   //    "./img/cards/sixHearts.svg",
//   // },
//   diamonds: {
//      "./img/cards/aceDiamonds.svg",
//      "./img/cards/kingDiamonds.svg",
//      "./img/cards/queenDiamonds.svg",
//      "./img/cards/jackDiamonds.svg",
//      "./img/cards/tenDiamonds.svg",
//      "./img/cards/nineDiamonds.svg",
//      "./img/cards/eightDiamonds.svg",
//      "./img/cards/sevenDiamonds.svg",
//     "./img/cards/sixDiamonds.svg",
//   },
//   clubs: {
//      "./img/cards/aceClubs.svg",
//      "./img/cards/kingClubs.svg",
//      "./img/cards/queenClubs.svg",
//      "./img/cards/jackClubs.svg",
//      "./img/cards/tenClubs.svg",
//      "./img/cards/nineClubs.svg",
//      "./img/cards/eightClubs.svg",
//     "./img/cards/sevenClubs.svg",
//      "./img/cards/sixClubs.svg",
//   },
//   spades: {
//      "./img/cards/aceSpades.svg",
//      "./img/cards/kingSpades.svg",
//      "./img/cards/queenSpades.svg",
//      "./img/cards/jackSpades.svg",
//     "./img/cards/tenSpades.svg",
//      "./img/cards/nineSpades.svg",
//      "./img/cards/eightSpades.svg",
//      "./img/cards/sevenSpades.svg",
//      "./img/cards/sixSpades.svg",
//   },
// };
// const annArr = [spades.ace, spades.king];
let games = {
  level: 0,
};

(0,_renderPage_js__WEBPACK_IMPORTED_MODULE_0__.renderPage)();

// общая видимость:
// const buttonStart = document.getElementById("button__start");
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const renderCards = () => {
  const resultArray = shuffle(cards).slice(0, games.level);
  const shuffledArray = shuffle(resultArray.concat(resultArray));
  const cardsHTML = shuffledArray
    .map((card, index) => {
      return `
      <div class ="containter__cards">
      <img class="main__card" data-index="${index}" src='${card}' alt="" />
      <img class="reverse__card" src="${imgReverseCard}" alt="" />
      </div>    
          `;
    })
    .join("");
  // appElement.innerHTML = cardsHTML;
  const container = document.querySelector(".container");
  container.insertAdjacentHTML("afterbegin", cardsHTML);
  const reverseCards = document.querySelectorAll(".reverse__card");
  for (const reverseCard of reverseCards) {
    reverseCard.classList.add("hidden");
  }
};
const changeCards = () => {
  const reverseCards = document.querySelectorAll(".reverse__card");
  const mainCards = document.querySelectorAll(".main__card");
  for (const mainCard of mainCards) {
    mainCard.classList.add("hidden");
  }
  for (const reverseCard of reverseCards) {
    reverseCard.classList.remove("hidden");
  }
  goCards();
};

const goCards = () => {
  const containerCards = document.querySelectorAll(".containter__cards");
  let counterCards = 0;
  for (const containerCard of containerCards) {
    containerCard.addEventListener("click", () => {
      let childrenElement = containerCard.children;
      childrenElement[0].classList.remove("hidden");
      childrenElement[1].classList.add("hidden");
      counterCards++;
      if (counterCards % 2 !== 0) {
        mainCard = containerCard.children[0].src;
      }
      if (counterCards % 2 === 0) {
        reverseCard = containerCard.children[0].src;
        if (mainCard === reverseCard) {
          counterGame++;
          if (counterGame % games.level === 0) {
            alert("Поздравляю! Вы угадали!");
            (0,_renderEnd_js__WEBPACK_IMPORTED_MODULE_1__.endPage)();
          }
        }
        if (mainCard !== reverseCard) {
          alert("Попробуйте ещё раз!");
          (0,_renderEnd_js__WEBPACK_IMPORTED_MODULE_1__.endPage)();
        }
      }
    });
  }
};


/***/ }),

/***/ "./components/renderCounter.js":
/*!*************************************!*\
  !*** ./components/renderCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameTime: () => (/* binding */ gameTime),
/* harmony export */   renderCounter: () => (/* binding */ renderCounter),
/* harmony export */   time: () => (/* binding */ time)
/* harmony export */ });
/* harmony import */ var _renderPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage.js */ "./components/renderPage.js");


// import {renderCards, changeCards } from "./main.js";
let time = 0;
let gameTime;
const appElement = document.getElementById("app");
const renderCounter = () => {
  const newApp = `<div class="main__counter">
      <div class="header">
        <div class="block__time">
          <p class="time">min</p>
          <p class="time">sek</p>
        </div>
        <div class="counter">00.00</div>
      </div>
      <button class="restart-button">
      <p class="restart-button_text">Начать заново</p>
      </button>
      </div>
      <div class="container"></div>
    `;
  appElement.innerHTML = `${newApp}`;
  const counter = document.querySelector(".counter");
  console.log(counter);
  let timerId = setInterval(() => {
    let min = Math.floor(time / 60);
    min = min < 10 ? "0" + min : min;
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    counter.textContent = `${min}.${sec}`;
    gameTime = `${min}.${sec}`;
    time++;
  }, 1000);
  document.querySelector(".restart-button").addEventListener("click", () => {
    time = 0;
    clearInterval(timerId);
    (0,_renderPage_js__WEBPACK_IMPORTED_MODULE_0__.renderPage)();
  });
};


/***/ }),

/***/ "./components/renderEnd.js":
/*!*********************************!*\
  !*** ./components/renderEnd.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   endPage: () => (/* binding */ endPage)
/* harmony export */ });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./components/main.js");
/* harmony import */ var _renderCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderCounter.js */ "./components/renderCounter.js");



const appElement = document.getElementById("app");
const endPage = () => {
  const winHTML = `<div class="main__game_end">
    <div class="result-game">
      <img
        class="celebration"
        src="/img/mainImg/celebration.png"
        alt="celebration"
      />
      <div class="title-game">Вы выиграли!</div>
      <div class="end_text">Затраченное время:</div>
      <div class="time-game">${_renderCounter_js__WEBPACK_IMPORTED_MODULE_1__.time}</div>
      <button class="restart-button">Играть снова</button>
    </div>
  </div>`;
  const loseHTML = `<div class="main__game_end">
    <div class="result-game">
      <img
        class="celebration"
        src="/img/mainImg/dead.png"
        alt="dead"
      />
      <div class="title-game">Вы проиграли!</div>
      <div class="end_text">Затраченное время:</div>
      <div class="time-game">${_renderCounter_js__WEBPACK_IMPORTED_MODULE_1__.time}</div>
      <button class="restart-button">Играть снова</button>
    </div>
  </div>`;
  if (_main_js__WEBPACK_IMPORTED_MODULE_0__.counterGame % _main_js__WEBPACK_IMPORTED_MODULE_0__.games.level === 0) {
    appElement.innerHTML = winHTML;
  }
  if (_main_js__WEBPACK_IMPORTED_MODULE_0__.mainCard !== _main_js__WEBPACK_IMPORTED_MODULE_0__.reverseCard) {
    appElement.innerHTML = loseHTML;
  }
};


/***/ }),

/***/ "./components/renderPage.js":
/*!**********************************!*\
  !*** ./components/renderPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPage: () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _renderCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCounter.js */ "./components/renderCounter.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./components/main.js");



const appElement = document.getElementById("app");
const renderPage = () => {
  const appHTML = `<section class="main">
      <div class="main__game">
        <div class="main__game_top">
          <p class="main__game_text">Выбери сложность</p>
        </div>
        <form class="main__game_center">
          <div type="radio" id="easy__game" class="main__game_block">
            <img class="main__game_image" src="./img/1.png" alt="" />
          </div>
          <div type="radio" id="medium__game" class="main__game_block">
            <img class="main__game_image" src="./img/2.png" alt="" />
          </div>
          <div type="radio" id="hard__game" class="main__game_block">
            <img class="main__game_image" src="./img/3.png" alt="" />
          </div>
        </form>
        <div class="main__game_bot">
          <button id="button__start" class="main__game_button">
            <p class="main__button_text">Старт</p>
          </button>
        </div>
      </div>
    </section>`;
  appElement.innerHTML = appHTML;
  const buttonStart = document.getElementById("button__start");
  window.document.getElementById("easy__game").addEventListener("click", () => {
    _main_js__WEBPACK_IMPORTED_MODULE_1__.games.level = 3;
  });
  window.document
    .getElementById("medium__game")
    .addEventListener("click", () => {
      _main_js__WEBPACK_IMPORTED_MODULE_1__.games.level = 6;
    });
  window.document.getElementById("hard__game").addEventListener("click", () => {
    _main_js__WEBPACK_IMPORTED_MODULE_1__.games.level = 9;
  });
  buttonStart.addEventListener("click", () => {
    (0,_renderCounter_js__WEBPACK_IMPORTED_MODULE_0__.renderCounter)();
    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.renderCards)();
    setTimeout(() => {
      (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.changeCards)();
    }, 5000);
  });
};


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./components/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map