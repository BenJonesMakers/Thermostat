'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this._MIN_TEMP = 10;
    this.powerSavingMode = true;
    this._MAX_POWER_SAVE_TEMP = 25;
    this._MAX_POWER_SAVE_OFF_TEMP = 32;
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    if (this.powerSavingMode && this.temperature < this._MAX_POWER_SAVE_TEMP) {
      this.temperature++;
    } else if (this.powerSavingMode === false && this.temperature < this._MAX_POWER_SAVE_OFF_TEMP) {
      this.temperature++;
    }
  };

  down() {
    if (this.temperature > this._MIN_TEMP) {
      this.temperature--;
    };
  }

  isPowerSaving() {
    return this.powerSavingMode;
  };

  turnOffPowersaving () {
    this.powerSavingMode = false;
  };

  resetTemperature() {
    this.temperature = 20;
  };

  getEnergyUsage() {
    if (this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  };

};
