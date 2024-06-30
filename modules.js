const fs = require("fs");
let text = fs.readFileSync("sample.txt", "utf-8");
text = text.replace("demo", "trial");
console.log(text);

const newTxt = "hello world this is a backend trial"

console.log("creating a new file......");
fs.writeFileSync("newfile.txt", newTxt);