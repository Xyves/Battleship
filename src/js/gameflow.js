// Czekaj na button click ->restart ->stwórz 2 plansze->stwórz 2 graczy ->Stwórz statki dla obu planszy(graczy)->Dom manipulation aby postawić statki -> Funkcja gameFlow (czekanie na ruch gracza), jeżeli gracz kliknie diva -> ruch losowy przeciwnika
// IF gracz klika diva ->loop wszystkie gameBoard array szukamy statku z taką lokalizacja ? musimy dodać hit do konkretnego statku, patrzymy funkcje isSink
import GameBoard from "./gameboard.js";
import Player from "./player.js";
import Ship from "./ship.js";
import { styleBoard } from "./render.js";
const startButton = document.querySelector("#startButton");
export default function startGame() {
  startButton.addEventListener("click", () => {
    // clearBoard();
    runGame();
    // createDOM();
  });
}
function runGame() {
  // CreatePlayers(); //*2*
  const Player1 = new Player();
  const Player2 = new Player();
  const mainBoard = new GameBoard();
  const enemyBoard = new GameBoard();
  // createShips();
  /*await*/ placeAllShips(mainBoard, createShips(), "#gameBoard1");
  /*await*/ placeAllShips(enemyBoard, createShips(), "#gameBoard2");
  // /* await*/ move();
  console.log(mainBoard);
}

function updateDOM() {}
function createShips() {
  const Carrier = new Ship(5, "Carrier");
  const Battleship = new Ship(4, "Battleship");
  const Cruiser = new Ship(3, "Cruiser");
  const Submarine = new Ship(3, "Submarine");
  const Destroyer = new Ship(2, "Destroyer");
  return [Carrier, Battleship, Cruiser, Submarine, Destroyer];
}
function placeAllShips(board, shipsArray, boardId) {
  for (let i = 0; i < shipsArray.length; i++) {
    const ship = shipsArray[i];
    board.placeShips(ship);
    if (boardId != "#gameBoard2") {
      styleBoard(ship, boardId);
    } else {
      styleBoard(ship, boardId);
    }
    // console.log(board);
  }
  // console.log(board);
}
