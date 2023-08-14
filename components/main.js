const main = document.querySelector(".main");

document.getElementById("easy__game").addEventListener("click", () => {
  alert("ты нажал на 1");
  main.innerHTML = "Ты выбрал легкую игру!";
});
document.getElementById("medium__game").addEventListener("click", () => {
  alert("ты нажал на 2");
  main.innerHTML = "Ты выбрал среднюю игру!";
});
document.getElementById("hard__game").addEventListener("click", () => {
  alert("ты нажал на 3");
  main.innerHTML = "Ты выбрал сложную игру!";
});
