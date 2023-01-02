const fs = require("fs");
const path = require("path");

// console.log("START");
// fs.mkdirSync(path.resolve(__dirname, "dir"));
// console.log("END");

// fs.mkdirSync(path.resolve(__dirname, "dir1", "dir2", "dir3"), {
//   recursive: true,
// });

// console.log("START");

// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Directory is made");
// });

// console.log("END");

// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     throw err;
//   }
// });

// fs.writeFile(path.resolve(__dirname, "test.txt"), "55 qwerty 55", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File was written");
//   fs.appendFile(
//     path.resolve(__dirname, "test.txt"),
//     "\nWrite after ...",
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("File was updated");
//     }
//   );
// });
