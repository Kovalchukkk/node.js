const {
  Worker,
  BroadcastChannel,
  isMainThread,
  workerData,
} = require("worker_threads");

const bc = new BroadcastChannel("channel1");

if (isMainThread) {
  console.log("I am a main!");
  const worker = new Worker("./js/worker.js", {
    workerData: 5,
  });

  bc.onmessage = (msg) => {
    console.log(`In parent: ${msg.data}`);
  };
} else {
  console.log(`I am a worker! ${workerData}`);
  bc.postMessage("Worker 1 ready!");
}
