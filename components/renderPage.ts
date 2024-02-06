import { renderCounter, timerId } from "./renderCounter";
import { renderCards, changeCards, games } from "./main";
const appElement = document.getElementById("app") as HTMLElement;
const renderPage = () => {
  const appHTML = `<section class="main">
      <div class="main__game">
        <div class="main__game_top">
          <p class="main__game_text">Выбери сложность</p>
        </div>
        <form class="main__game_center">
          <div type="radio" id="easy__game" class="main__game_block">
            <img class="main__game_image" src="./static/img/1.png" alt="" />
          </div>
          <div type="radio" id="medium__game" class="main__game_block">
            <img class="main__game_image" src="./static/img/2.png" alt="" />
          </div>
          <div type="radio" id="hard__game" class="main__game_block">
            <img class="main__game_image" src="./static/img/3.png" alt="" />
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
  const buttonStart = document.getElementById("button__start") as HTMLElement;
  const easyGame = document.getElementById("easy__game") as HTMLElement;
  const meduimGame = document.getElementById("medium__game") as HTMLElement;
  const hardGame = document.getElementById("hard__game") as HTMLElement;
  easyGame.addEventListener("click", () => {
    games.level = 3;
  });
  meduimGame.addEventListener("click", () => {
    games.level = 6;
  });
  hardGame.addEventListener("click", () => {
    games.level = 9;
  });
  buttonStart.addEventListener("click", () => {
    renderCounter();
    renderCards();
    setTimeout(() => {
      changeCards();
    }, 5000);
  });
  clearInterval(timerId);
};
export { renderPage };
