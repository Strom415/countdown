var fs = require("fs");

var text = fs.readFileSync("./enable1.txt");
var textArray = (text + '').split("\n");
textArray = textArray.map(word => word.trim());
textArray = textArray.filter(word => word.length <= 9);

for (let i = 0; i < textArray.length; i++) {
  console.log(`${i} of ${textArray.length}`);
  fs.appendFileSync("words.txt", textArray[i] + '\n');
}

console.log(textArray.length);