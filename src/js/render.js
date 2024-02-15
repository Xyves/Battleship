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
  const enemyBoard = document.querySelector("#gameBoard2");
  const divs = enemyBoard.querySelectorAll("div");
  function checkClickedDiv() {
    divs.forEach((div) => {
      div.addEventListener("click", () => {
        console.log(div.getAttribute("data-id"));
        return div.getAttribute("data-id");
      });
    });
  }
  checkClickedDiv();
}

function styleBoard(ship, boardId) {
  console.log("check");
  const board = document.querySelector(boardId);
  const cells = board.querySelectorAll(".cell");
  const shipCoordinates = ship.coordinates;
  shipCoordinates.forEach((index) => {
    if (index >= 0 && index < cells.length) {
      cells[index].style.backgroundColor = "blue";
    }
  });
}
export { styleBoard };
