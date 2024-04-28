const button = document.querySelector("button");
const content = document.querySelector(".content");

createGrid(64);

button.addEventListener("click", changeGrid);

function createGrid(squares) {
  const body = document.querySelector("body");
  const container = document.createElement("div");

  container.className = "container";

  body.appendChild(container);

  for (let i = 0; i < squares; i++) {
    //Creates 64 rows
    const row = document.createElement("div");
    row.className = "row";

    for (let i = 0; i < squares; i++) {
      //creates 64 columns
      const col = document.createElement("div");
      col.className = "col";
      //append columns to rows
      row.appendChild(col);

      col.addEventListener("mouseenter", () => {
        col.style.backgroundColor = randomColor();
      });
    }
    //append rows to container
    container.appendChild(row);
  }
  content.appendChild(container);
}

function changeGrid() {
  const container = document.querySelector(".container");
  let squares = Number(
    prompt("Please, enter the grid size you want to work on. (max: 100, min: 1)", 64)
  );
  if(!(squares > 100 || squares <= 0)) {
    container.remove();
    createGrid(squares);
  } else {
    alert("You cannot input a grid size greater than 100 or less than 0.")
  }
}

function randomColor() {
  const coldColors = ["#000000", "#0d0d0d", "#1a1a1a", "#262626", "#333333", "#404040", "#4d4d4d", "#595959", "#666666", "#737373", "#808080", "#8c8c8c", "#999999"];
  return coldColors[Math.floor(Math.random() * coldColors.length)];
}

