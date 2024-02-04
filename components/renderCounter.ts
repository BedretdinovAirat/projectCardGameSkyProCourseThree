import { renderPage } from "./renderPage";
// import {renderCards, changeCards } from "./main.js";
let time = 0;
let gameTime: number | string;
const appElement = document.getElementById("app") as HTMLElement;
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
  const counter = document.querySelector(".counter") as HTMLElement;
  console.log(counter);
  let timerId = setInterval(() => {
    let min: number | string = Math.floor(time / 60);
    min = min < 10 ? "0" + min : min;
    let sec: number | string = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    counter.textContent = `${min}.${sec}`;
    gameTime = `${min}.${sec}`;
    time++;
  }, 1000);
  const restartButton = document.querySelector(
    ".restart-button",
  ) as HTMLElement;
  restartButton.addEventListener("click", () => {
    time = 0;
    clearInterval(timerId);
    renderPage();
  });
};
export { renderCounter, time, gameTime };
