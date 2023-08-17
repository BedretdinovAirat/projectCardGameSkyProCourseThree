const main = document.querySelector(".main");

const games = {
  lvl: "",
};
window.document.getElementById("easy__game").addEventListener("click", () => {
  alert("ты нажал на 1");
  main.innerHTML = "Ты выбрал легкую игру!";
  localStorage.setItem("games", JSON.stringify(games));
});
window.document.getElementById("medium__game").addEventListener("click", () => {
  alert("ты нажал на 2");
  main.innerHTML = "Ты выбрал среднюю игру!";
  localStorage.setItem("games", JSON.stringify(games));
});
window.document.getElementById("hard__game").addEventListener("click", () => {
  alert("ты нажал на 3");
  main.innerHTML = "Ты выбрал сложную игру!";
  localStorage.setItem("games", JSON.stringify(games));
});
