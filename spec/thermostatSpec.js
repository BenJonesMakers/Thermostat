'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  // Thermostat starts at 20 degrees
  it('starts the thermostat at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  // You can increase the temperature with an up function
  it('increases the temperature by 1', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  // You can decrease the temperature with a down function
  it('decreases the temperature by 1', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  // The minimum temperature is 10 degrees
  it('stops the temperature going below 10', function() {
    for (var i = 0; i < 11; i++) {
    thermostat.down();
  }
  expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  // Power saving mode is on by default but it can also be turned off
  it('is on power saving by default', function() {
    expect(thermostat.isPowerSaving()).toBeTruthy();
  });

});
