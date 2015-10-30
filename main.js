$(document).ready(function(){

	console.log("Sanity Check: JS is working!");

	$('a').on('click', function (event) {
		$(this).css('font-style', 'oblique');
		$(this).css('color', 'red');
		event.preventDefault();
	});

	$('p').on('mouseover', function (event) {
		$(this).css('font-size', 24);
	});

	$('li').on('mouseover', function (event) {
		$(this).css('font-size', 24);
	});

	$('img').on('click', function (event) {
		$(this).fadeOut(6000);
	});

	function getRand(num1, num2) {
		return Math.round((num1 + (num2 - num1) * Math.random()));
	}

	var colorArray = ['lightpink',
										'lightsalmon', 
										'lightyellow', 
										'lightgreen', 
										'lightblue', 
										'lightcoral'];


	$(window).on('scroll', function (event) {
		color = colorArray[getRand(0, 5)];
		$('body').css('background-color', color);
		console.log("Background Check!!");
	});	
});