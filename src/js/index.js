// import "./styles.scss";
import Ship from "./ship";
import Player from "./player";
import GameBoard from "./gameboard";
import { generateLocation } from "./logic";
import { calculateIndex } from "./logic";

function createShips() {
  const player1Carrier = new Ship(5, "player1");
  const player1Battleship = new Ship(4, "player1");
  const player1Cruiser = new Ship(3, "player1");
  const player1Submarine = new Ship(3, "player1");
  const player1Destroyer = new Ship(2, "player1");
  const player2Carrier = new Ship(5, "player2");
  const player2Battleship = new Ship(4, "player2");
  const player2Cruiser = new Ship(3, "player2");
  const player2Submarine = new Ship(3, "player2");
  const player2Destroyer = new Ship(2, "player2");

  let shipArray1 = [
    player1Carrier,
    player1Battleship,
    player1Cruiser,
    player1Submarine,
    player1Destroyer,
  ];
  let shipArray2 = [
    player2Carrier,
    player2Battleship,
    player2Cruiser,
    player2Submarine,
    player2Destroyer,
  ];
  let Player1 = new Player(shipArray1);
  let Player2 = new Player(shipArray2);
}
const mainBoard = new GameBoard();

function createShips(board) {
  for (let i = 1; i < 3; i++) {
    const playerShipVariable = `Player${i}`;
    board.placeShips(playerShipVariable.Carrier);
    board.placeShips(playerShipVariable.Battleship);
    board.placeShips(playerShipVariable.Cruiser);
    board.placeShips(playerShipVariable.Submarine);
    board.placeShips(playerShipVariable.Destroyer);
  }
}

createShipDom(mainBoard);
console.log(Player1);
