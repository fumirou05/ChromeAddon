const path = require("path");

module.exports = {
    entry: "./src/options.js",
    output: {
        filename: "option.js",
        path: path.resolve(__dirname, "dist")
    }
}