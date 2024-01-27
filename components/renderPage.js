export { renderPage };
import { renderCounter } from "./renderCounter.js";
import { renderCards, changeCards, games } from "./main.js";
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
    games.level = 3;
  });
  window.document
    .getElementById("medium__game")
    .addEventListener("click", () => {
      games.level = 6;
    });
  window.document.getElementById("hard__game").addEventListener("click", () => {
    games.level = 9;
  });
  buttonStart.addEventListener("click", () => {
    renderCounter();
    renderCards();
    setTimeout(() => {
      changeCards();
    }, 5000);
  });
};
