function generateLocation() {
  return Math.floor(Math.random() * 100);
}
function generateDirection() {
  let direction = Math.floor(Math.random() * 2);
  if (direction === 0) {
    console.log("Vertical");
    return "vertical";
  } else {
    console.log("horizontal");
    return "horizontal";
  }
}
function checkDuplicates(board, generatedLocations) {
  for (let generatedLocation of generatedLocations) {
    for (let i = 0; i < board.length; i++) {
      const ship = board[i];
      if (ship.coordinates.includes(generatedLocation)) {
        return true;
      }
    }
  }
  return false;
}
function exceedsHorizontalBoardEdge(locations, length) {
  const boardEdge = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
  for (location of locations) {
    for (let i = location; i < location + length; i++) {
      if (boardEdge.includes(i)) {
        return true;
      }
    }
  }

  return false;
}
function exceedsVerticalBoardEdge(locations, length) {
  const boardEdge = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
  for (location of locations) {
    for (let i = location; i < location + length; i++) {
      if (boardEdge.includes(i)) {
        return true;
      }
    }
  }
  return false;
}

export {
  generateLocation,
  checkDuplicates,
  exceedsHorizontalBoardEdge,
  exceedsVerticalBoardEdge,
  generateDirection,
};
