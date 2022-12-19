document.getElementById("btn").addEventListener("click", async () => {
    const mList = document.querySelectorAll("#mtable td input");
    const mValue = mList.forEach(e => e.value);
    chrome.storage.sync.set({ matrix: mValue });
    document.getElementById("msg").innerText = "マトリクスコードが設定されました";
});