const { Worker, BroadcastChannel } = require("worker_threads");

console.log("I am a main!");
const worker = new Worker("./js/worker.js", {
  workerData: 5,
});

const bc = new BroadcastChannel("channel1");

bc.onmessage = (msg) => {
  console.log(`In parent: ${msg.data}`);
};

// worker.on("message", (msg) => {
//   console.log(`Message from worker: ${msg}`);
// });

// worker.postMessage("Hello worker!");
