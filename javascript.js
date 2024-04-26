const container = document.querySelector(".container");

for(let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    for(let i = 0; i < 16; i++) {
        const col = document.createElement("div");
        col.className = "col";
        row.appendChild(col);
    }
}

