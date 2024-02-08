export default class Ship {
  constructor(length, name, coordinates, hits = 0, sunk = false) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
    this.coordinates = [];
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    if (this.length === this.hits) {
      return true;
    } else {
      return false;
    }
  }
}
