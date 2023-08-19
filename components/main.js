const main = document.querySelector(".main");

const games = {
  level: "",
};
window.document.getElementById("easy__game").addEventListener("click", () => {
  alert("ты нажал на 1");
  // main.innerHTML = "Ты выбрал легкую игру!";
  // localStorage.setItem("games", JSON.stringify(games));
  games.level = 1;
});
window.document.getElementById("medium__game").addEventListener("click", () => {
  alert("ты нажал на 2");
  // main.innerHTML = "Ты выбрал среднюю игру!";
  // localStorage.setItem("games", JSON.stringify(games));
  games.level = 2;
});
window.document.getElementById("hard__game").addEventListener("click", () => {
  alert("ты нажал на 3");
  // main.innerHTML = "Ты выбрал сложную игру!";
  // localStorage.setItem("games", JSON.stringify(games));
  games.level = 3;
});
window.document
  .getElementById("button__start")
  .addEventListener("click", () => {
    alert("yes");
    switch (games.level) {
      case 1:
        main.innerHTML = "Ты выбрал легкую игру!";
        break;
      case 2:
        main.innerHTML = "Ты выбрал среднюю игру!";
      case 3:
        main.innerHTML = "Ты выбрал сложную игру!";
      default:
        break;
    }
  });
