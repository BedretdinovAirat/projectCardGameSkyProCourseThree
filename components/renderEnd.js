import { mainCard, reverseCard, counterGame, games } from "./main.js";
import { time } from "./renderCounter.js";
import { renderPage } from "./renderPage.js";
const appElement = document.getElementById("app");
const endPage = () => {
  const winHTML = `<div class="main__game_end">
    <div class="result-game">
      <img
        class="celebration"
        src="./static/img/mainImg/celebration.svg"
        alt="celebration"
      />
      <div class="title-game">Вы выиграли!</div>
      <div class="end_text">Затраченное время:</div>
      <div class="time-game">${time}</div>
      <button id="win-button" class="restart-button">Играть снова</button>
    </div>
  </div>`;
  const loseHTML = `<div class="main__game_end">
    <div class="result-game">
      <img
        class="celebration"
        src="./static/img/mainImg/dead.svg"
        alt="dead"
      />
      <div class="title-game">Вы проиграли!</div>
      <div class="end_text">Затраченное время:</div>
      <div class="time-game">${time}</div>
      <button id="lose-button" class="restart-button">Играть снова</button>
    </div>
  </div>`;
  if (counterGame % games.level === 0) {
    appElement.innerHTML = winHTML;
    const winButton = document.getElementById("win-button");
    winButton.addEventListener("click", () => {
      renderPage();
    });
  }
  if (mainCard !== reverseCard) {
    appElement.innerHTML = loseHTML;
    const loseButton = document.getElementById("lose-button");
    loseButton.addEventListener("click", () => {
      renderPage();
    });
  }
};
export { endPage };
