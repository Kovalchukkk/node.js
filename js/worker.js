const { workerData, parentPort, BroadcastChannel } = require("worker_threads");

console.log(`I am a worker! ${workerData}`);

const bc = new BroadcastChannel("channel1");

bc.postMessage("Worker 1 ready!");

// parentPort.on("message", (msg) => {
//   console.log(`Message from parent: ${msg}`);
// });

// setTimeout(() => {
//   parentPort.postMessage("Hello parent, two seconds passed!");
// }, 2000);
