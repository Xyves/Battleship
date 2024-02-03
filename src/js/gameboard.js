import { generateLocation } from "./logic";
import { calculateIndex } from "./logic";
export default class GameBoard {
  constructor() {
    this.Board = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.Board.push({ row: i, col: j });
      }
    }
  }
  receiveAttack(x = null, y = null) {
    if (x == null || y === null) {
      // throw console.error();
      console.log("w");
    } else {
      let index = calculateIndex(x, y);
      if (this.Board[index].length != 0) {
      }
    }
    // if x,y == location of ship run hit / check which Player was hit
    // else != keep track of missed attack
  }
  isGameOver() {
    // if all ships of player1 or 2 are sunk, lock the gameboard display winner
  }
  placeShips(ship, location = null) {
    if (location == null) {
      let x = generateLocation();
      let y = generateLocation();
      let shipLocation = calculateIndex(x, y);
      createShips();
      createShip(board);
      // div[shipLocation].style.backgroundColor = "red";
    } else {
      // player == Player1
    }
    // if(player==player1){LEFT BOARD ship.place(x,y)} else{RIGHT BOARD ship.place}
  }
}
