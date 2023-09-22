export { appElement };
import { renderPage } from "./renderPage.js";
const appElement = document.getElementById("app");
const imgReverseCard = "./img/reverseCard.svg";
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
const games = {
  level: 3,
};

renderPage();

// общая видимость:
const buttonStart = document.getElementById("button__start");
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const renderCards = () => {
  const resultArray = shuffle(cards).slice(0, games.level);
  const shuffledArray = shuffle(resultArray.concat(resultArray));
  const cardsHTML = shuffledArray
    .map((card, index) => {
      return `
          <img data-index="${index}" src='${card}' alt="" />
          `;
    })
    .join("");
  appElement.innerHTML = `
  <div class="containter__cards">
  ${cardsHTML}
  </div>`;
  // console.log(cardsHTML);
  function logicGame() {
    setTimeout(() => {
      const cardsReverseHTML = shuffledArray
        .map(() => {
          return `
          <img id"reverse-card__image" src='${imgReverseCard}' alt="" />
          `;
        })
        .join("");
      appElement.innerHTML = `
  <div class="containter__cards">
  ${cardsReverseHTML}
  </div>`;
    }, 5000);
  }
  logicGame();

  // создать обработчик событий на каждую карточку

  function clickCard() {
    for (const cardReverseHTML of document.getElementById(
      "reverse-card__image",
    )) {
      cardReverseHTML.addEventListener("click", () => {
        console.log("работает!");
      });
    }
  }
  clickCard();
  // создать сеттаймоут, внутри
  const generateCardsArray = (cards) => {
    return cards.map((img, index) => {
      return {
        id: index,
        img: img,
      };
    });
  };

  const cardsArray = generateCardsArray(cards);
  console.log(cardsArray);
};

// const easyApp = `<div class="containter__cards">
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           <img src="./img/reverseCard.svg" alt="" />
//           </div>`;

//  Рендер фукнция вёрстки
buttonStart.addEventListener("click", () => {
  console.log(games.level);
  renderCards();
});

window.document.getElementById("easy__game").addEventListener("click", () => {
  games.level = 3;
});
window.document.getElementById("medium__game").addEventListener("click", () => {
  games.level = 6;
});
window.document.getElementById("hard__game").addEventListener("click", () => {
  games.level = 9;
});

// 1. Написать один рендер
// 2. Создать массив
// 3. условие генерации карточек по уровням
// 4.
// 5.
