const PORT = process.env.PORT || 5000;
const Application = require("./framework/application");
const userRouter = require("./src/user-router");
const jsonParser = require("./framework/parse-json");
const urlParser = require("./framework/parse-url");
const mongoose = require("mongoose");

const app = new Application();

app.use(jsonParser);
app.use(urlParser("http://localhost:5000"));

app.addRouter(userRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Mykola:root@cluster0.lusmezb.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();

// const server = http.createServer((req, res) => {
//   const isEmitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
//   if (!isEmitted) {
//     res.end();
//   }
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   if (req.url === "/users") {
//     return res.end(
//       JSON.stringify([
//         {
//           id: 1,
//           name: "John",
//         },
//       ])
//     );
//   }
//   if (req.url === "/posts") {
//     return res.end("POSTS");
//   }
// });

// server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
