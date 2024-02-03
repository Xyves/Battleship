export default class Ship {
  constructor(length, player, location, hits = 0, sunk = false) {
    this.name =
      length === 5
        ? "Carrier"
        : length === 4
          ? "Battleship"
          : length === 3
            ? "Cruiser"
            : length === 3
              ? "Submarine"
              : length === 2
                ? "Destroyer"
                : "Something went wrong";
    this.player = player;
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    if (this.length === this.hits) {
      return true;
    } else {
      return this.hits;
    }
  }
}
