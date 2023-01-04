document.getElementById("btn").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: onRun,
    });
});

function onRun() {
    //設定ファイルの読み込み
    let matrix_values = chrome.storage.sync.get(null, (result) => {
        let matrix_values = result.matrix;
        let required_elements = document.querySelectorAll('th[bgcolor="#6699CC"]');
        let required_values = new Array;
        for (let i = 0; i < required_elements.length; i++) {
            if (required_elements[i].innerText != "") {
                required_values.push(required_elements[i].innerText);
            }
        }
        let inds = new Array;
        for (let j = 0; j < required_values.length; j++){
            let str_tmp = required_values[j]
            let dig1 = str_tmp.charCodeAt(1) - 64;
            let dig2 = Number(str_tmp[3]);
            let ind = (dig2-1)*10 + dig1 - 1;
            inds.push(ind);
        }
        let matrix1_input = document.querySelector('input[name="message3"]');
        let matrix2_input = document.querySelector('input[name="message4"]');
        let matrix3_input = document.querySelector('input[name="message5"]');
        matrix1_input.value = matrix_values[inds[0]];
        matrix2_input.value = matrix_values[inds[1]];
        matrix3_input.value = matrix_values[inds[2]];
    });
}

function mat2num(str) {
    let dig1 = str.charCodeAt(1) - 64;
    let dig2 = Number(str[3]);
    let ind = (dig2-1)*10 + dig1 - 1;
    return ind;
}
