const path = require("path");

module.exports = {
    entry: {
        options: "./src/options.js",
        popup: "./src/popup.js",
        table: "./src/table.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map"
}