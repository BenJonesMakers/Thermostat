

$(document).ready(function() {

    var thermostat = new Thermostat();

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.getEnergyUsage());
      }

    updateTemperature();

    $('#thermostat-up').click(function() {
        thermostat.up();
        updateTemperature();
    })

    $('#thermostat-down').click(function() {
        thermostat.down();
        updateTemperature();
    })

    $('#thermostat-reset').click(function() {
        thermostat.resetTemperature();
        updateTemperature();
    })

    $('#thermostat-ps-off').click(function() {
        thermostat.turnOffPowersaving();
        $('#ps-mode').text(function() {
            if (thermostat.isPowerSaving()) {
                return 'On';
            } else {
                return 'Off';
            }
        });
    })
    
    $('#thermostat-ps-on').click(function() {
        thermostat.turnOnPowersaving();
        $('#ps-mode').text(function() {
            if (thermostat.isPowerSaving()) {
                return 'On';
            } else {
                return 'Off';
            }
        });
    })


  })

