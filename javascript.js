const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  //Creating 16 rows
  const row = document.createElement("div");
  row.className = "row";
  //append rows to container
  container.appendChild(row);

  for (let i = 0; i < 16; i++) {
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
}
