window.onload = () => {
    const columns = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const rows = ["1", "2", "3", "4", "5", "6", "7"];

    let tmpElement; 
    const firstRow = document.createElement("tr");
    for (let item of columns) {
        tmpElement = document.createElement("th");
        tmpElement.innerHTML = item;
        firstRow.appendChild(tmpElement);
    }
    
    const table = document.getElementById("mtable");
    table.appendChild(firstRow);

    let tmpRow;
    let tmpCell;
    for (let row of rows) {
        tmpRow = document.createElement("tr");
        for (let column of columns) {
            if (!column) {
                tmpCell = document.createElement("th");
                tmpCell.innerHTML = row;
            } else {
                tmpCell = document.createElement("td");
                tmpInput = document.createElement("input");
                tmpInput.className = "minput";
                tmpInput.required = true;
                tmpInput.type = "text";
                tmpInput.maxLength = "1";
                tmpInput.pattern = "^[A-Za-z]{1}";
                tmpInput.id = column + row;
                tmpCell.appendChild(tmpInput);
            }
            tmpRow.appendChild(tmpCell);
        }
        table.appendChild(tmpRow);
    }
}