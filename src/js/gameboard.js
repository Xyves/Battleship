import { generateLocation } from "./logic.js";
// const boardDivs = document.querySelectorAll(".cell");
export default class GameBoard {
  constructor() {
    this.board = [];
    this.missedShot = [];
  }
  receiveAttack(localization = null) {
    if ((localization = null)) {
      // throw console.error();
      console.log("error");
    } else {
      let index = checkClickedDiv();
      let shipAttacked = this.board.filter((item) => {
        return item.coordinates === index;
      });
      if (shipAttacked) {
        // Hit
        shipAttacked.hit();
        let isSunk = shipAttacked.isSunk();
        if (isSunk) {
          let gameResult = isGameOver();
          if (gameResult === true) {
            // delete Event listener from divs, clear the whole board, display modal displaying the winner
            // Run command for ending the game
          } else {
            // continue the game
          }
        } else {
          return;
        }
      } else {
        // Miss
        this.missedShot.push(localization);
      }
      if (this.board[localization].length != 0) {
      }
    }
  }
  isGameOver() {
    return this.board.every((ship) => ship.isSunk);
  }
  async placeShips(ship, location = null) {
    if (location == null) {
      let shipLocation = generateLocation();
      let shipLength = ship.length;
      console.log(shipLocation + "LOC");

      if (exceedsBoardEdge(shipLocation, shipLength)) {
        this.placeShips(ship, location);
      } else {
        ship.coordinates.push(shipLocation);
        for (let i = 1; i < shipLength; i++) {
          ship.coordinates.push(shipLocation + 1);
          let shipLocation = shipLocation + 1;
        }
        this.board.push(ship);
        const enemyBoard = document.querySelector("#gameBoard1");
        const cells = enemyBoard.querySelectorAll(".cell");
        const shipCoordinates = ship.coordinates;
        shipCoordinates.forEach((index) => {
          if (index >= 0 && index < cells.length) {
            cells[index].style.backgroundColor = "blue";
            console.log("cells!:" + cells);
          }
        });
      }

      // cell[shipLocation].style.backgroundColor = "red";
    } else {
      await getPlayerLocation();
      ship.location = this.location;
      this.board.push(ship);
      // player == Player1
    }
    // if(player==player1){LEFT BOARD ship.place(x,y)} else{RIGHT BOARD ship.place}
  }
}
function exceedsBoardEdge(location, length) {
  const boardEdge = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99];

  return boardEdge.some(
    (edge) => edge <= location && location + length - 1 <= edge
  );
}
