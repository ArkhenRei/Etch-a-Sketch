const button = document.querySelector("button");

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

      col.addEventListener("mousemove", () => {
        col.style.backgroundColor = "grey";
      });
      col.addEventListener("mouseout", () => {
        col.style.backgroundColor = "white";
      });
      col.addEventListener()
    }
    //append rows to container
    container.appendChild(row);
  }
}

function changeGrid() {
  const container = document.querySelector(".container");
  let squares = Number(
    prompt("Please, enter the grid size you want to work on. (max: 100)", 64)
  );
  if(!(squares >= 100 || squares <= 0)) {
    container.remove();
    createGrid(squares);
  } else {
    alert("You cannot input a grid size greater than 100 or less than 0.")
  }
}
