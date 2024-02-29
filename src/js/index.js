import "../styles.scss";
import generateDOM from "./render.js";
import startGame from "./gameflow.js";
window.addEventListener("DOMContentLoaded", () => {
  generateDOM();
  startGame();
});
