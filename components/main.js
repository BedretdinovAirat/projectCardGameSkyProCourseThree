export {
  appElement,
  mainCard,
  reverseCard,
  counterGame,
  renderCards,
  changeCards,
  games,
};
import { renderPage } from "./renderPage.js";
import { endPage } from "./renderEnd.js";
import "../style.css";
const imgReverseCard = "./static/img/reverseCard.svg";
const appElement = document.getElementById("app");
// console.log(appElement);
// общие переменные счётчик, карты
let counterGame = 0;
let mainCard;
let reverseCard;

const cards = [
  "./static/img/cards/aceHearts.svg",
  "./static/img/cards/kingHearts.svg",
  "./static/img/cards/queenHearts.svg",
  "./static/img/cards/jackHearts.svg",
  "./static/img/cards/tenHearts.svg",
  "./static/img/cards/nineHearts.svg",
  "./static/img/cards/eightHearts.svg",
  "./static/img/cards/sevenHearts.svg",
  "./static/img/cards/sixHearts.svg",
  "./static/img/cards/aceDiamonds.svg",
  "./static/img/cards/kingDiamonds.svg",
  "./static/img/cards/queenDiamonds.svg",
  "./static/img/cards/jackDiamonds.svg",
  "./static/img/cards/tenDiamonds.svg",
  "./static/img/cards/nineDiamonds.svg",
  "./static/img/cards/eightDiamonds.svg",
  "./static/img/cards/sevenDiamonds.svg",
  "./static/img/cards/sixDiamonds.svg",
  "./static/img/cards/aceClubs.svg",
  "./static/img/cards/kingClubs.svg",
  "./static/img/cards/queenClubs.svg",
  "./static/img/cards/jackClubs.svg",
  "./static/img/cards/tenClubs.svg",
  "./static/img/cards/nineClubs.svg",
  "./static/img/cards/eightClubs.svg",
  "./static/img/cards/sevenClubs.svg",
  "./static/img/cards/sixClubs.svg",
  "./static/img/cards/aceSpades.svg",
  "./static/img/cards/kingSpades.svg",
  "./static/img/cards/queenSpades.svg",
  "./static/img/cards/jackSpades.svg",
  "./static/img/cards/tenSpades.svg",
  "./static/img/cards/nineSpades.svg",
  "./static/img/cards/eightSpades.svg",
  "./static/img/cards/sevenSpades.svg",
  "./static/img/cards/sixSpades.svg",
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

renderPage();

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
            endPage();
          }
        }
        if (mainCard !== reverseCard) {
          alert("Попробуйте ещё раз!");
          endPage();
        }
      }
    });
  }
};
