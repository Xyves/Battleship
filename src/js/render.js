export default function createDOM() {
  const gameboards = document.querySelectorAll(".gameboard");
  gameboards.forEach((gameboard) => {
    for (let i = 0; i < 100; i++) {
      const div = document.createElement("div");
      div.setAttribute("data-id", i);
      div.classList.add("cell");
      gameboard.appendChild(div);
    }
  });
  enemyBoard.addEventListener("click", handleDivClick);
}

const enemyBoard = document.querySelector("#gameBoard2");
async function handleDivClick(event) {
  const clickedDiv = event.target;
  const dataId = clickedDiv.getAttribute("data-id");
  console.log("Clicked div's data-id:", dataId);
  await move(dataId);
}

function styleBoard(ship, boardId) {
  console.log("check");
  const board = document.querySelector(boardId);
  const cells = board.querySelectorAll(".cell");
  const shipCoordinates = ship.coordinates;
  shipCoordinates.forEach((index) => {
    if (index >= 0 && index < cells.length) {
      cells[index].style.backgroundColor = "rgb(26, 84, 84)";
    }
  });
}
export { styleBoard, handleDivClick };
