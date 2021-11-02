class Handphone {
  constructor(processor, ram, speaker, screen) {
    this.processor = processor;
    this.ram = ram;
    this.speaker = speaker;
    this.screen = screen;
  }
}

class HandphoneBuilder {
  constructor(processor, ram) {
    this.processor = processor;
    this.ram = ram;

    this.speaker = 'Dolby Atmos';
    this.screen = 'IPS';
  }

  setSpeaker(speaker) {
    this.speaker = speaker;
    return this;
  }

  setScreen(screen) {
    this.screen = screen;
    return this;
  }

  build() {
    return new Handphone(this.processor, this.ram, this.speaker, this.screen);
  }
}

const myPhone = new HandphoneBuilder('Snapdragon 900', '8 GB')
  .setScreen('AMOLED')
  .setSpeaker('Nahimic')
  .build();

console.log(myPhone);
