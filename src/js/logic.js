function generateLocation() {
  return Math.floor(Math.random() * 10 + 1);
}
function calculateIndex(x, y) {
  const maxValue = 10;
  const combinationPerRow = 11;
  const totalCombination = 100;

  if (x < 0 || x > maxValue || y < 0 || y >= combinationPerRow) {
    throw new Error("invalid x and y");
  }
  let index = x * combinationPerRow + y;
  if (index >= totalCombination) {
    index -= totalCombination;
  }
  console.log(index);
  return index;
}
export { generateLocation, calculateIndex };
