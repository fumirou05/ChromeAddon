export default function insertMatCode() {
    chrome.storage.sync.get(null, (result) => {
        const matrix_values = result.matrix;
        const required_elements = document.querySelectorAll("th[bgcolor='#6699CC']");
        const required_values = [];
        required_elements.forEach(e => {
            if (e.innerText) {
                required_values.push(e.innerText);
            }
        })
        const inds = [];
        required_values.forEach(v => {
            const str_tmp = v;
            const dig1 = str_tmp.charCodeAt(1) - 64;
            const dig2 = Number(str_tmp[3]);
            const ind = (dig2-1)*10 + dig1 - 1;
            inds.push(ind);
        })
        let matrix1_input = document.querySelector('input[name="message3"]');
        let matrix2_input = document.querySelector('input[name="message4"]');
        let matrix3_input = document.querySelector('input[name="message5"]');
        matrix1_input.value = matrix_values[inds[0]];
        matrix2_input.value = matrix_values[inds[1]];
        matrix3_input.value = matrix_values[inds[2]];
        return true;
    })
}