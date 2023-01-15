// Readable
// Writable
// Duplex - Readable + Writable
// Transform - almost like Duplex, but can change data while reading

const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, "data.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// One chunk by default 64x6 (4 times)
// const stream = fs.createReadStream(path.resolve(__dirname, "data.txt"));

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("end", () => {
//   console.log("Finished reading");
// });

// stream.on("open", () => {
//   console.log("Started reading");
// });

// stream.on("error", (err) => {
//   console.log(err);
// });

// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "data1.txt")
// );

// for (let i = 0; i < 21; i++) {
//   writableStream.write(i + "\n");
// }

// writableStream.end();
// writableStream.close();
// writableStream.destroy();

// const http = require("http");

// http.createServer((req, res) => {
//   // req - readable stream
//   // res - writable stream
//   const stream = fs.createReadStream(path.resolve(__dirname, "test.txt"));

//   stream.pipe(res);
// });
