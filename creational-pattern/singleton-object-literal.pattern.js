const Logging = {
  logs: [],
  addLog(log) {
    this.logs.push(log);
  },
  viewLogs() {
    console.log(this.logs);
  },
};

const loggingA = Logging;
const loggingB = Logging;

loggingA.addLog('log 1 from A');
loggingB.addLog('log 2 from B');
loggingA.addLog('log 3 from A');

loggingA.viewLogs();
loggingB.viewLogs();
