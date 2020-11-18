'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this._MIN_TEMP = 10;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    this.temperature++;
  };

  down() {
    if (this.temperature > this._MIN_TEMP) {
      this.temperature--;
    };
  }

};
