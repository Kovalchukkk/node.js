const path = require("path");

console.log("Join path", path.join(__dirname, "..", "first", "second"));
console.log(__filename);
console.log(
  "Absolute path",
  path.resolve(__dirname, "first", "second", "third")
);

const fullPath = path.resolve(__dirname, "first", "second", "third.js");
console.log("Parse of path", path.parse(fullPath));

console.log("Delimeter in OS", path.sep);
console.log("Check if path is absolute", path.isAbsolute("first/second"));
console.log("Filename", path.basename(fullPath));
console.log("File extension", path.extname(fullPath));

// -----------------------------------------------

const siteURL = "http://localhost:8080/users?id=5123";

const url = new URL(siteURL);

console.log(url);
