class Logging {
  constructor() {
    // check if "INSTANCE" is an object then return the "INSTANCE"
    if (typeof Logging.INSTANCE === 'object') {
      return Logging.INSTANCE;
    }
    this.logs = [];
    // set "INSTANCE" to this (current object)
    Logging.INSTANCE = this;
  }

  addLog(log) {
    this.logs.push(log);
  }

  viewLogs() {
    console.log(this.logs);
  }
}

const loggingA = new Logging();
const loggingB = new Logging();

loggingA.addLog('log 1 from A');
loggingB.addLog('log 2 from B');
loggingA.addLog('log 3 from A');

loggingA.viewLogs();
loggingB.viewLogs();
