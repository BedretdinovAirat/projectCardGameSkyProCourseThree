export {
  appElement,
  mainCard,
  reverseCard,
  counterGame,
  renderCards,
  changeCards,
  games,
};
import { renderPage } from "./renderPage";
import { endPage } from "./renderEnd";
import "../style.css";
const imgReverseCard = "./static/img/reverseCard.svg";
const appElement = document.getElementById("app") as HTMLElement;
// console.log(appElement);
// общие переменные счётчик, карты
let counterGame = 0;
let mainCard: string;
let reverseCard: string;

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
let games = {
  level: 0,
};

renderPage();

// общая видимость:
const shuffle = (array: Array<string>) => array.sort(() => Math.random() - 0.5);
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
  const container = document.querySelector(".container") as HTMLElement;
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
        mainCard = (containerCard.children[0] as HTMLImageElement).src;
      }
      if (counterCards % 2 === 0) {
        reverseCard = (containerCard.children[0] as HTMLImageElement).src;
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
