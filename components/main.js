const main = document.querySelector(".main")
const outCards = document.getElementById(".app__cards")
const cards = {
  hearts: {
    ace: "./img/cards/aceHearts.svg",
    king: "./img/cards/kingHearts.svg",
    queen: "./img/cards/queenHearts.svg",
    jack: "./img/cards/jackHearts.svg",
    ten: "./img/cards/tenHearts.svg",
    nine: "./img/cards/nineHearts.svg",
    eight: "./img/cards/eightHearts.svg",
    seven: "./img/cards/sevenHearts.svg",
    six: "./img/cards/sixHearts.svg",
  },
  diamonds: {
    ace: "./img/cards/aceDiamonds.svg",
    king: "./img/cards/kingDiamonds.svg",
    queen: "./img/cards/queenDiamonds.svg",
    jack: "./img/cards/jackDiamonds.svg",
    ten: "./img/cards/tenDiamonds.svg",
    nine: "./img/cards/nineDiamonds.svg",
    eight: "./img/cards/eightDiamonds.svg",
    seven: "./img/cards/sevenDiamonds.svg",
    six: "./img/cards/sixDiamonds.svg",
  },
  clubs: {
    ace: "./img/cards/aceClubs.svg",
    king: "./img/cards/kingClubs.svg",
    queen: "./img/cards/queenClubs.svg",
    jack: "./img/cards/jackClubs.svg",
    ten: "./img/cards/tenHClubs.svg",
    nine: "./img/cards/nineClubs.svg",
    eight: "./img/cards/eightClubs.svg",
    seven: "./img/cards/sevenClubs.svg",
    six: "./img/cards/sixClubs.svg",
  },
  spades: {
    ace: "./img/cards/aceSpades.svg",
    king: "./img/cards/kingSpades.svg",
    queen: "./img/cards/queenSpades.svg",
    jack: "./img/cards/jackSpades.svg",
    ten: "./img/cards/tenSpades.svg",
    nine: "./img/cards/nineSpades.svg",
    eight: "./img/cards/eightSpades.svg",
    seven: "./img/cards/sevenSpades.svg",
    six: "./img/cards/sixSpades.svg",
  },
}
// const annArr = [spades.ace, spades.king];
const games = {
  level: "",
}
// массив 4 карты с разными свойствами
// рендер функция мапится массив в зависимости от свойств будет показана опредлеанная карта
// массив со всеми комбинациями карт
//
//
//
//
//
// const newCards = [{
//   rank: 'king',
//   masti: 'hearts',
//   isCardOpen: true,
// }];

const easyApp = `<div class="containter__cards">
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          </div>`
const middleApp = `<div class="containter__cards">
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          </div>`
const hardApp = `<div class="containter__cards">
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          </div>`

//  Рендер фукнция вёрстки
const renderCards = () => {
  const cardsHTML = `<div class="containter__cards">
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          <img src="./img/reverseCard.svg" alt="" />
          </div>
          `
  // outCards.innerHTML = cardsHTML;
  // main.innerHTML = cardsHTML;
  console.log(cardsHTML)
}
renderCards()
window.document.getElementById("easy__game").addEventListener("click", () => {
  alert("ты нажал на 1")
  // main.innerHTML = "Ты выбрал легкую игру!";
  // localStorage.setItem("games", JSON.stringify(games));
  games.level = 1
})
window.document.getElementById("medium__game").addEventListener("click", () => {
  alert("ты нажал на 2")
  // main.innerHTML = "Ты выбрал среднюю игру!";
  // localStorage.setItem("games", JSON.stringify(games));
  games.level = 2
})
window.document.getElementById("hard__game").addEventListener("click", () => {
  alert("ты нажал на 3")
  // main.innerHTML = "Ты выбрал сложную игру!";
  // localStorage.setItem("games", JSON.stringify(games));
  games.level = 3
})
window.document
  .getElementById("button__start")
  .addEventListener("click", () => {
    alert("yes")
    switch (games.level) {
      case 1:
        main.innerHTML = easyApp
        break
      case 2:
        main.innerHTML = middleApp
      case 3:
        main.innerHTML = hardApp
      default:
        break
    }
  })
