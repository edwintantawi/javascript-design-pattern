class Engine {
  constructor() {
    this.status = 'inactive';
  }

  activate() {
    this.status = 'active';
  }
}

class Car {
  constructor(engine) {
    this.engine = engine;
  }

  start() {
    this.engine.activate();
    console.log(`Status mesin: ${this.engine.status}`);
  }
}

const engine = new Engine();
const car = new Car(engine);

car.start();
