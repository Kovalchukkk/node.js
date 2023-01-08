const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

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

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

// writeFileAsync(path.resolve(__dirname, "test.txt"), "data12345\n")
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123\n"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456\n"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "789\n"))
//   .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// removeFileAsync(path.resolve(__dirname, "test.txt")).then(() =>
//   console.log("file was removed")
// );

const text = process.env.TEXT || "";
console.log(text);

writeFileAsync(path.resolve(__dirname, "text.txt"), text)
  .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
  .then((data) => data.split(" ").length)
  .then((count) =>
    writeFileAsync(
      path.resolve(__dirname, "count.txt"),
      `Words count: ${count}`
    )
  );
