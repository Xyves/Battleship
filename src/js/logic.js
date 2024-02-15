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
function exceedsHorizontalBoardEdge(array, length) {
  const boardEdge = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
  return array.some((value) => {
    return boardEdge.includes(value);
  });
}
function exceedsVerticalBoardEdge(array, length) {
  const boardEdge = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
  return array.some((value) => {
    return value > 99 || boardEdge.includes(value);
  });
}
function addToArray(array, increment, length) {
  const lastElement = array[array.length - 1];
  array.push(lastElement + increment);
}
export {
  generateLocation,
  checkDuplicates,
  exceedsHorizontalBoardEdge,
  exceedsVerticalBoardEdge,
  generateDirection,
  addToArray,
};
