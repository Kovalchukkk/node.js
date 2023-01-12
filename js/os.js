const os = require("os");
const cluster = require("cluster");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

const cpus = os.cpus();

if (cluster.isMaster) {
  for (let i = 0; i < cpus.length - 2; i++) {
    cluster.fork();
    cluster.on("exit", (worker) => {
      console.log(`pid: ${worker.process.pid} killed`);
      cluster.fork();
    });
    // const CPUcore = cpus[i];
    // console.log("Start one more node.js process");
  }
} else {
  console.log(`pid: ${process.pid} start`);

  setInterval(() => {
    console.log(`pid: ${process.pid} is still working`);
  }, 5000);
}

// while (true) {}
