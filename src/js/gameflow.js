// Czekaj na button click ->restart ->stwórz 2 plansze->stwórz 2 graczy ->Stwórz statki dla obu planszy(graczy)->Dom manipulation aby postawić statki -> Funkcja gameFlow (czekanie na ruch gracza), jeżeli gracz kliknie diva -> ruch losowy przeciwnika
// IF gracz klika diva ->loop wszystkie gameBoard array szukamy statku z taką lokalizacja ? musimy dodać hit do konkretnego statku, patrzymy funkcje isSink
import GameBoard from "./gameboard.js";
import Player from "./player.js";
import Ship from "./ship.js";
import { generateLocation } from "./logic.js";
import { styleBoard, handleDivClick } from "./render.js";
const startButton = document.querySelector("#startButton");
export default function startGame() {
  startButton.addEventListener("click", () => {
    // clearBoard();
    runGame();
    // createDOM();
  });
}
function runGame() {
  // Create players and boards
  const mainBoard = new GameBoard();
  const enemyBoard = new GameBoard();
  const Player1 = new Player(mainBoard);
  const Player2 = new Player(enemyBoard);
  placeAllShips(mainBoard, createShips(), "#gameBoard1");
  placeAllShips(enemyBoard, createShips(), "#gameBoard2");
  const enemyBoardDiv = document.querySelector("#gameBoard2");
  enemyBoardDiv.addEventListener("click", handleDivClick);
  takeTurns();
  async function takeTurns() {
    while (!mainBoard.isGameOver() && !enemyBoard.isGameOver()) {
      await move(null, Player1, enemyBoard);
      if (mainBoard.isGameOver() || enemyBoard.isGameOver()) break;
      await move(null, Player2, mainBoard);
    }
  }
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
  }
}
async function move(clickedDataId, player, board) {
  console.log("Hey");
  if (player == "Player1") {
    if (clickedDataId) {
      // Check if a valid div is clicked
      player.hit(clickedDataId, board);
    } else {
      console.log("Invalid click");
    }
  } else {
    const cords = generateLocation();
    player.hit(cords, board);
  }
  console.log("x");
}
