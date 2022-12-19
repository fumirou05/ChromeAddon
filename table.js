window.onload = () => {
    const columns = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const rows = ["", "1", "2", "3", "4", "5", "6", "7"];
    const mTable = document.getElementById("mtable");

    let tmpRow;
    let tmpCell;
    for (let row of rows) {
        tmpRow = document.createElement("tr");
        for (let column of columns) {
            if (!column) {
                tmpCell = document.createElement("th");
                tmpCell.innerHTML = row;
            } else if (!row) {
                tmpCell = document.createElement("th")
                tmpCell.innerHTML = column;
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
        mTable.appendChild(tmpRow);
    }

    // 設定されている値を表示
    chrome.storage.sync.get(null, (result) => {
        console.log(result);
        let index;
        let strIndex;
        let dig1, dig2;
        if (result.matrix) {
            for (let row of rows) {
                for (let column of columns){
                    if (row && column) {
                        strIndex = column + row;
                        dig1 = column.charCodeAt(0) - 64;
                        dig2 = row.charCodeAt(0) - 48;
                        index = (dig2 - 1)*10 + dig1 - 1;
                        document.getElementById(strIndex).value = result.matrix[index];
                    }
                }
            }
        }
    })

}