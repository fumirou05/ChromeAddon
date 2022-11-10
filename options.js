document.getElementById("btn").addEventListener("click", async () => {
    let mlist = document.querySelectorAll("#mtable td input");
    let mvalue = new Array(mlist.length);
    for (let i = 0; i < mlist.length; i++) {
        mvalue[i] = mlist[i].value;
    }
    chrome.storage.sync.set({ matrix: mvalue });
    document.getElementById("msg").innerText = "マトリクスコードが設定されました";
});