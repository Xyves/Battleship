import {
  generateLocation,
  checkDuplicates,
  exceedsBoardEdge,
} from "./logic.js";
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
      let isValidPlacement = false;
      while (!isValidPlacement) {
        let shipLength = ship.length;
        let shipLocation = generateLocation();
        if (
          exceedsBoardEdge(shipLocation, shipLength) ||
          checkDuplicates(this.board, shipLocation)
        ) {
          console.log("Board exceeded" + shipLocation);
        } else {
          isValidPlacement = true;
          ship.coordinates.push(shipLocation);
          for (let i = 1; i < shipLength; i++) {
            ship.coordinates.push(ship.coordinates[0] + i);
          }
          this.board.push(ship);
        }
      }
    } else {
      await getPlayerLocation();
      ship.location = this.location;
      this.board.push(ship);
      // player == Player1
    }
    // if(player==player1){LEFT BOARD ship.place(x,y)} else{RIGHT BOARD ship.place}
  }
}
