import {
  mainCard,
  reverseCard,
  counterGame,
  appElement,
  renderCards,
  changeCards,
  games,
} from "./main.js";
import { time, gameTime } from "./renderCounter.js";
export { endPage };
const endPage = () => {
  const winHTML = `<div class="main__game_end">
    <div class="result-game">
      <img
        class="celebration"
        src="/img/mainImg/celebration.svg"
        alt="celebration"
      />
      <div class="title-game">Вы выиграли!</div>
      <div class="end_text">Затраченное время:</div>
      <div class="time-game">${time}</div>
      <button class="restart-button">Играть снова</button>
    </div>
  </div>`;
  const loseHTML = `<div class="main__game_end">
    <div class="result-game">
      <img
        class="celebration"
        src="/img/mainImg/dead.svg"
        alt="dead"
      />
      <div class="title-game">Вы проиграли!</div>
      <div class="end_text">Затраченное время:</div>
      <div class="time-game">${time}</div>
      <button class="restart-button">Играть снова</button>
    </div>
  </div>`;
  if (counterGame % games.level === 0) {
    appElement.innerHTML = winHTML;
  }
  if (mainCard !== reverseCard) {
    appElement.innerHTML = loseHTML;
  }
};
