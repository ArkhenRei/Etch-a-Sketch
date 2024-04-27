const button = document.querySelector("button");

createGrid();

function createGrid() {
  const body = document.querySelector("body");
  const container = document.createElement("div");

  container.className = "container";

  body.appendChild(container);

  button.addEventListener("click", changeGrid);

  function changeGrid() {
    container.remove();
    createGrid();
  }

  let squares = Number(
    prompt("Please, enter the grid size you want to work on.", 64)
  );

  for (let i = 0; i < squares; i++) {
    //Creating 16 rows
    const row = document.createElement("div");
    row.className = "row";

    for (let i = 0; i < squares; i++) {
      //creating 16 columns
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
    }
    //append rows to container
    container.appendChild(row);
  }
}
