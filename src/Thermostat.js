'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this._MIN_TEMP = 10;
    this.powerSavingMode = true;
    this._MAX_POWER_SAVE_TEMP = 25;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    if (this.powerSavingMode && this.temperature < this._MAX_POWER_SAVE_TEMP) {
      this.temperature++;
    }
  };

  down() {
    if (this.temperature > this._MIN_TEMP) {
      this.temperature--;
    };
  }

  isPowerSaving() {
    return this.powerSavingMode
  };

  turnOffPowersaving () {
    this.powerSavingMode = false;
  };

};
