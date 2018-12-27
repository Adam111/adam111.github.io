$(document).ready(function() {
	var unit = 'C';

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			$.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude, function(data) {
				$('#location').html(data.name + ', ' + data.sys.country);
				$("#temperature").html(Math.round(parseInt(data.main.temp, 10))).after(' °');
				$("#unit").html(unit);
				$('#description').html('<img src="' + data.weather[0].icon + '">' + data.weather[0].main);
			});
		});
	}

	$('#unit').click(function() {
		var temperature = $('#temperature').text();

		if (unit == 'C') {
			unit = 'F';
			$('#temperature').html(Math.round(parseInt(temperature, 10) * (9 / 5) + 32));
			$('#unit').html(unit);
		} else if (unit == 'F') {
			unit = 'C';
			$('#temperature').html(Math.round((parseInt(temperature, 10) - 32) * (5 / 9)));
			$('#unit').html(unit);
		}
	});
});