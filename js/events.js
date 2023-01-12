const dotenv = require("dotenv");
dotenv.config();

const Emitter = require("events");

const emitter = new Emitter();

const callback = (data, second, third) => {
  console.log(`You sent a message: ${data}`);
  console.log(`Second argument: ${second}`);
};

// emitter.on("message", (data, second, third) => {
//   console.log(`You sent a message: ${data}`);
//   console.log(`Second argument: ${second}`);
// });

emitter.once("message", callback);

emitter.emit("message");
emitter.emit("message");
emitter.emit("message");
emitter.emit("message");

// emitter.removeAllListeners();
// emitter.removeListener("message", callback);

// const MESSAGE = process.env.MESSAGE || "";

// if (MESSAGE) {
//   emitter.emit("message", MESSAGE, 123);
// } else {
//   emitter.emit("message", "You didn't pass a message");
// }

//Usecases
// http
// websockets
// long pulling
// clusters
