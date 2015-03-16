$(document).ready(function() {
	var max = prompt('Pick a number.');

	function refract() {
		var count = 1;

		if (isNaN(max)) {
			alert('Please refresh and select a number.');
		}else if(max%1 != 0) {
			alert('Please refresh and select an integer.');
		}
		else {
			while (count < +max) {
				if ((count%3) == 0) {
					if ((count%5) == 0) {
						console.log('fizzbuzz');
						count++;
					}
					else {
						console.log('fizz');
						count++;
					}
				} else if ((count%5) == 0) {
					console.log('buzz');
					count++;
				} else {
					console.log(count);
					count++
				}
			}
		}
	}

	refract(max);

});