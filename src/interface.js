

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
    });

    displayWeather('London');

    $('#btn-city').click(function() {
        var city = $('#select-city').val();
        console.log(city);
        displayWeather(city);
        $('#current-city-name').text(city);
    });

    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=9b9ec1150cd25ec93810f52e0cc019e7';
        var units = '&units=metric';
        $.get(url + token + units, function(data) {
          $('#current-outside-temperature').text(Math.floor(data.main.temp));
        });
        $('#current-city-name').text(city);
    };

  })

