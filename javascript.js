const button = document.querySelector("button");
const eraserButton = document.querySelector(".eraser");
const blackTonesButton = document.querySelector(".blackTonesButton");
const content = document.querySelector(".content");

let eraserToggle = false;
let blackTonesToggle = false;

function createGrid(squares) {
  const body = document.querySelector("body");
  const container = document.createElement("div");

  container.className = "container";

  body.appendChild(container);

  for (let i = 0; i < squares; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let i = 0; i < squares; i++) {
      const col = document.createElement("div");
      col.className = "col";
      row.appendChild(col);

      col.addEventListener("mouseover", drawColor);
    }
    container.appendChild(row);
  }
  content.appendChild(container);
}

function changeGrid() {
  const container = document.querySelector(".container");
  let squares = Number(
    prompt(
      "Please, enter the grid size you want to work on. (max: 100, min: 1)",
      64
    )
  );
  if (!(squares > 100 || squares <= 0)) {
    container.remove();
    createGrid(squares);
  } else {
    alert("You cannot input a grid size greater than 100 or less than 0.");
  }
}

function toggleColorButton() {
  if (blackTonesToggle) {
    blackTonesButton.style.backgroundColor = "#999999";
  } else {
    blackTonesButton.style.backgroundColor = "black";
  }
  if (eraserToggle) {
    eraserButton.style.backgroundColor = "#999999";
  } else {
    eraserButton.style.backgroundColor = "black";
  }
}

function blackTones() {
  const blackColors = [
    "#000000",
    "#0d0d0d",
    "#1a1a1a",
    "#262626",
    "#333333",
    "#404040",
    "#4d4d4d",
    "#595959",
    "#666666",
    "#737373",
    "#808080",
    "#8c8c8c",
    "#999999",
  ];
  return blackColors[Math.floor(Math.random() * blackColors.length)];
}

function drawColor() {
  this.style.backgroundColor = "black";

  if (eraserToggle) {
    this.style.backgroundColor = "white";
  }
  if (blackTonesToggle) {
    this.style.backgroundColor = blackTones();
  }
}

function main() {
  createGrid(16);

  button.addEventListener("click", changeGrid);

  blackTonesButton.addEventListener("click", function () {
    blackTonesToggle = !blackTonesToggle;
    eraserToggle = false;
    toggleColorButton();
    drawColor();
  });

  eraserButton.addEventListener("click", function () {
    eraserToggle = !eraserToggle;
    blackTonesToggle = false;
    toggleColorButton();
    drawColor();
  });
}

main();
